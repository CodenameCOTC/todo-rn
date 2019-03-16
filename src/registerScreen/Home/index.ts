import HomeScreen from '../../screen/Home'
import { Navigation } from 'react-native-navigation'

const registerScreen = () => {
  Navigation.registerComponent('HomeScreen', () => HomeScreen)
}

export default registerScreen
