import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'

import options from './index.options'

class Home extends PureComponent {
  static options() {
    return options
  }
  render() {
    return (
      <View>
        <Text>This will be Home Screen</Text>
      </View>
    )
  }
}

export default Home
