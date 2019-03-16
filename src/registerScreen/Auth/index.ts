import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'

import store from '../../store'
import LoginScreen from '../../screen/Auth/Login'

const registerScreen = () => {
  Navigation.registerComponentWithRedux(
    'LoginScreen',
    () => LoginScreen,
    Provider,
    store
  )
}

export default registerScreen
