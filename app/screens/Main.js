import React from 'react';
import { connect } from 'react-redux'
import { Text, View } from 'react-native';

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state ={
    }
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={{alignItems: 'center'}}>
          <Text>Boilerplate Main View</Text>
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
