import { Navigation } from 'react-native-navigation'
import AsyncStorage from '@react-native-community/async-storage'
import jwt_decode from 'jwt-decode'

import store from './src/store'
import registerScreen from './src/registerScreen'
import { HomeNavigation, AuthNavigation } from './src/navigation'
import { setCurrentUser } from './src/screen/Auth/redux/actions'

registerScreen()

Navigation.events().registerAppLaunchedListener(async () => {
  const token = await AsyncStorage.getItem('jwt')
  if (token) {
    const decoded = jwt_decode(token)
    // check expired token
    const currentTime = Date.now() / 1000
    if (decoded.exp < currentTime) {
      return AuthNavigation()
      //@TODO CREATE FUNCTION TO DESTROY TOKEN
    }
    await store.dispatch(setCurrentUser(decoded))
    return HomeNavigation()
  }
})
