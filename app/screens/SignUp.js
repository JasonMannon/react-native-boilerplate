import React from 'react';
import { connect } from 'react-redux'
import UserActions from '../reducers/user'
import { Text, View, TextInput, Button, AsyncStorage } from 'react-native';

class SignUp extends React.Component {
  constructor(props) {
    super(props)

    this.state ={
      email: '',
      nickname: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleChangeText = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  handleOnSubmit = () => {
    const { email, nickname, password, passwordConfirmation } = this.state

    this.props.createUserRequest(email, nickname, password, passwordConfirmation)
  }

  _signInAsync = async () => {
    const { userData } = this.props

    await AsyncStorage.setItem('user', JSON.stringify(userData))

    this.props.navigation.navigate('Main')
  }

  render() {
    const { email, nickname, password, passwordConfirmation } = this.state
    const { errorMessage, userLoggedIn } = this.props

    if (userLoggedIn) {
      this._signInAsync()
    }

    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={{alignItems: 'center'}}>
          <Text>Boilerplate Sign Up</Text>
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
            placeholder='Nickname'
            onChangeText={(nickname) => this.handleChangeText('nickname', nickname)}
            value={nickname}
          />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            textContentType='password'
            secureTextEntry={true}
            placeholder='Password'
            value={password}
            onChangeText={(password) => this.handleChangeText('password', password)}
          />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            textContentType='password'
            secureTextEntry={true}
            placeholder='Password Confirmation'
            value={passwordConfirmation}
            onChangeText={(passwordConfirmation) => this.handleChangeText('passwordConfirmation', passwordConfirmation)}
          />
        </View>
        <View>
          <Button
            onPress={() => this.handleOnSubmit()}
            title="Sign Up"
            color="#841584"
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text onPress={() => this.props.navigation.navigate('SignIn')}>Already have an account? Sign In!</Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const { errorMessage, userData, userLoggedIn} = state.user

  return{
    errorMessage,
    userData,
    userLoggedIn,
  }
}

const mapDispatchToProps = (dispatch) => ({
  createUserRequest: (email, nickname, password, passwordConfirmation) => dispatch(UserActions.createUserRequest(email, nickname, password, passwordConfirmation))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
