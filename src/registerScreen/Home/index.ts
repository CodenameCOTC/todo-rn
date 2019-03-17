import HomeScreen from '../../screen/Home'
import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import store from '../../store'

const registerScreen = () => {
  Navigation.registerComponentWithRedux(
    'HomeScreen',
    () => HomeScreen,
    Provider,
    store
  )
}

export default registerScreen
