import React from 'react'
import { Text, Image, Button } from 'react-native'
import { Icon } from 'react-native-elements'
import { NavigationActions, createSwitchNavigator, createStackNavigator, TabBarBottom } from 'react-navigation';
import SignIn from '../screens/SignIn'
import AuthLoading from '../screens/AuthLoading'

const UnAuthenticatedTabs = createSwitchNavigator({
  SignIn: { screen: SignIn }
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
