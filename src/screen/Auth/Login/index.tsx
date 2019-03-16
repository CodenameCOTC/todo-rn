import React, { PureComponent } from 'react'
import { Login } from '../../../components'
import options from './index.options'

class LoginScreen extends PureComponent {
  static options() {
    return options
  }
  render() {
    return <Login />
  }
}

export default LoginScreen
