import React from 'react'
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  ActivityIndicator,
  Platform,
} from 'react-native'
import Text from '../../Text'

import styles from './index.styles'

interface IMainButton {
  title: string
  onPress(): void
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  isLoading?: boolean
  disabled?: boolean
}

const MainButton: React.SFC<IMainButton> = ({
  title,
  onPress,
  marginTop,
  marginRight,
  marginLeft,
  marginBottom,
  isLoading,
  disabled,
}) => {
  return Platform.select({
    android: (
      <TouchableNativeFeedback
        style={[
          styles.button,
          { marginTop, marginRight, marginLeft, marginBottom },
        ]}
        onPress={onPress}
        disabled={isLoading || disabled}
      >
        <Text style={styles.textButton}>{title}</Text>
        {isLoading && <ActivityIndicator size="small" color="white" />}
      </TouchableNativeFeedback>
    ),
    ios: (
      <TouchableOpacity
        disabled={isLoading || disabled}
        activeOpacity={0.8}
        style={[
          styles.button,
          { marginTop, marginRight, marginLeft, marginBottom },
        ]}
        onPress={onPress}
      >
        <Text style={styles.textButton}>{title}</Text>
        {isLoading && (
          <ActivityIndicator
            size="small"
            color="white"
            style={styles.loadingIndicator}
          />
        )}
      </TouchableOpacity>
    ),
  })
}

export default MainButton
