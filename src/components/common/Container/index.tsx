import React from 'react'
import { View, ViewProps, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { colors } from '../../../constants/'

const defaultStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const Container: React.SFC<ViewProps> = props => (
  <LinearGradient
    colors={[colors.secondary, '#fff', '#fff']}
    style={{ flex: 1 }}
  >
    <View {...props} style={[defaultStyle.container, props.style]}>
      {props.children}
    </View>
  </LinearGradient>
)

export default Container
