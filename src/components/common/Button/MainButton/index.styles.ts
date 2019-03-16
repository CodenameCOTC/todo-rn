import { StyleSheet } from 'react-native'
import { colors } from '../../../../constants'

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 5,
    padding: 10,
    alignSelf: 'center',
    width: '80%',
    backgroundColor: colors.secondary,
  },
  textButton: {
    alignSelf: 'center',
    color: colors.textOnSecondary,
    textAlign: 'center',
    fontSize: 16,
    marginRight: 10,
  },
  loadingIndicator: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
})

export default styles
