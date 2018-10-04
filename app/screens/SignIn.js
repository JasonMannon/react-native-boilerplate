import React from 'react';
import { connect } from 'react-redux'
import UserActions from '../reducers/user'
import { Text, View, TextInput, Button } from 'react-native';

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state ={
      email: '',
      password: ''
    }
  }

  handleChangeText = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  handleOnSubmit = () => {
    const { email, password } = this.state

    this.props.signInUserRequest(email, password)
  }

  _signInAsync = async () => {
    console.log("async")
    const { userData } = this.props

    await AsyncStorage.setItem('user', JSON.stringify(userData))

    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Main' })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    const { email, password } = this.state
    const { errorMessage, userLoggedIn } = this.props

    if (userLoggedIn) {
      console.log('here')
      this._signInAsync()
    }

    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={{alignItems: 'center'}}>
          <Text>Boilerplate Sign In</Text>
          <Text>{errorMessage}</Text>
        </View>
        <View style={{margin: 15}}>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            placeholder='Email'
            onChangeText={(email) => this.handleChangeText('email', email)}
            value={email}
          />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            textContentType='password'
            secureTextEntry={true}
            placeholder='Password'
            value={password}
            onChangeText={(password) => this.handleChangeText('password', password)}
          />
        </View>
        <View>
          <Button
            onPress={() => this.handleOnSubmit()}
            title="Sign In"
            color="#841584"
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text onPress={() => this.props.navigation.navigate('SignUp')}>New here? Sign up now!</Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const { errorMessage, userData, userLoggedIn} = state.user
  console.log(state.user)

  return{
    errorMessage,
    userData,
    userLoggedIn,
  }
}

const mapDispatchToProps = (dispatch) => ({
  signInUserRequest: (email, password) => dispatch(UserActions.signInUserRequest(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
