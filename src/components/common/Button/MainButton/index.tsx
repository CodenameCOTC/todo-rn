import React from 'react'
import {
  TouchableOpacity,
  TouchableNativeFeedback,
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
}

const MainButton: React.SFC<IMainButton> = ({
  title,
  onPress,
  marginTop,
  marginRight,
  marginLeft,
  marginBottom,
}) => {
  return Platform.select({
    android: (
      <TouchableNativeFeedback
        style={[
          styles.button,
          { marginTop, marginRight, marginLeft, marginBottom },
        ]}
        onPress={onPress}
      >
        <Text style={styles.textButton}>{title}</Text>
      </TouchableNativeFeedback>
    ),
    ios: (
      <TouchableOpacity
        style={[
          styles.button,
          { marginTop, marginRight, marginLeft, marginBottom },
        ]}
        onPress={onPress}
      >
        <Text style={styles.textButton}>{title}</Text>
      </TouchableOpacity>
    ),
  })
}

export default MainButton
