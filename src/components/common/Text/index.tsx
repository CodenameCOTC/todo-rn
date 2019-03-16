import React from 'react'
import { Text, TextProps, StyleSheet } from 'react-native'

const defaultStyle = StyleSheet.create({
  text: {
    fontFamily: 'Ubuntu',
  },
})

const DefaultText: React.SFC<TextProps> = props => (
  <Text {...props} style={[defaultStyle.text, props.style]}>
    {props.children}
  </Text>
)

export default DefaultText
