import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, connect } from 'react-redux'
import configureStore from './app/store/configureStore'
import { createStore } from 'redux'
import { Navigator } from './app/config/router';

const store = configureStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
