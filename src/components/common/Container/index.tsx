import React from 'react'
import { View, ViewProps, StyleSheet } from 'react-native'

const defaultStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})

const Container: React.SFC<ViewProps> = props => (
  <View {...props} style={[defaultStyle.container, props.style]}>
    {props.children}
  </View>
)

export default Container
