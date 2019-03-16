import { StyleSheet } from 'react-native'
import { colors } from '../../../constants'

const baseForm = {
  padding: 10,
  borderWidth: 1,
  borderRadius: 5,
}

const baseLabel = {
  paddingVertical: 2,
  paddingLeft: 5,
  color: colors.primary,
  fontSize: 14,
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '80%',
    alignSelf: 'center',
  },

  form: {
    ...baseForm,
    borderColor: colors.primary,
    color: colors.primary,
  },
  label: {
    ...baseLabel,
    color: colors.primary,
  },
  formError: {
    ...baseForm,
    borderColor: 'red',
    color: 'red',
  },
  labelError: {
    ...baseLabel,
    borderColor: 'red',
    color: 'red',
  },
  textError: {
    padding: 3,
    fontSize: 12,
    color: 'red',
  },
})

export default styles
