import { StyleSheet } from 'react-native'
import { colors } from '../../../../constants'

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    borderRadius: 5,
    padding: 10,
    alignSelf: 'center',
    width: '80%',
    backgroundColor: colors.secondary,
  },
  textButton: {
    color: colors.textOnSecondary,
    textAlign: 'center',
    fontSize: 16,
  },
})

export default styles
