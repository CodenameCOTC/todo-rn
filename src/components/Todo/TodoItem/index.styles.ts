import { StyleSheet } from 'react-native'
import { colors } from '../../../constants'

const baseText = StyleSheet.create({
  style: {
    color: colors.textOnPrimary,
    marginVertical: 5,
  },
})

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    alignSelf: 'center',
    width: '90%',
    backgroundColor: colors.primary,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.secondary,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  contentContainer: {
    width: '90%',
  },
  dateContainer: {
    flexDirection: 'row',
  },
  actionButtonsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    ...baseText.style,
    fontSize: 16,
  },
  description: {
    ...baseText.style,
    fontSize: 14,
  },
  date: {
    ...baseText.style,
    fontSize: 8,
    paddingHorizontal: 2,
  },
  icon: {
    height: 30,
    width: 30,
    backgroundColor: colors.secondary,
    borderRadius: 18,
  },
})

export default styles
