import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';

class SignIn extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {


  return{

  }
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

const styles = StyleSheet.create({
  inputs:{
    padding: 2,
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 5
  },
  labels: {
    padding: 2,
    marginLeft: 6
  }
});
