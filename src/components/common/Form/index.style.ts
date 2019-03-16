import { StyleSheet } from 'react-native'
import { colors } from '../../../constants'

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '80%',
    alignSelf: 'center',
  },
  form: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.primary,
    color: colors.primary,
  },
  label: {
    paddingVertical: 2,
    paddingLeft: 5,
    color: colors.primary,
    fontSize: 14,
  },
})

export default styles
