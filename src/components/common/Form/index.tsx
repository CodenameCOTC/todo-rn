import React from 'react'
import { View, TextInput, StyleProp, TextInputProps } from 'react-native'
import Text from '../Text'
import styles from './index.style'

type containerStyle = {
  marginTop?: number | string
  marginLeft?: number | string
  marginRight?: number | string
  marginBottom?: number | string
  marginHorizontal?: number | string
  marginVertical?: number | string
  width?: number | string
  borderRadius?: number
  borderWidth?: number
  borderColor?: string
}

interface IFormProps {
  name: string
  label: string
  value: string
  placeholder?: string
  error?: string
  onChangeText(name: string, value: string): void
  containerStyle?: StyleProp<containerStyle>
  textInputProps?: TextInputProps
}

const Form: React.SFC<IFormProps> = ({
  name,
  label,
  value,
  placeholder,
  containerStyle,
  onChangeText,
  textInputProps,
  error,
}) => (
  <View style={[styles.container, containerStyle]}>
    <Text style={error ? styles.labelError : styles.label}>{label}</Text>
    <TextInput
      style={error ? styles.formError : styles.form}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={'grey'}
      onChangeText={value => onChangeText(name, value)}
      {...textInputProps}
    />
    {error && <Text style={styles.textError}>{error}</Text>}
  </View>
)

export default Form
