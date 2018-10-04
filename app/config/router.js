import React from 'react'
import { Text, Image, Button } from 'react-native'
import { NavigationActions, createSwitchNavigator, createStackNavigator, TabBarBottom } from 'react-navigation';
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import AuthLoading from '../screens/AuthLoading'

const UnAuthenticatedTabs = createSwitchNavigator({
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp }
})

const AuthenticatedTabs = createStackNavigator({

  SignIn: { screen: SignIn,
    navigationOptions: ({ navigation }) => ({
      title: 'Customer Feed',
    })
   }
  }
)

export const Tabs = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    Auth: UnAuthenticatedTabs,
    App: AuthenticatedTabs
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
