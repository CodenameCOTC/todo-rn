import React, { Component } from 'react'
import { View } from 'react-native'

import Login from './components/Login'
import options from './App.options'

export default class App extends Component {
  static options() {
    return options
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Login />
      </View>
    )
  }
}
