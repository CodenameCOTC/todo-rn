import React, { PureComponent } from 'react'
import { StyleSheet } from 'react-native'
import { Dispatch, bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Container, Form, MainButton } from '../common'
import { requestLogin } from '../../screen/Auth/redux/actions'
import { AuthState, ILoginData } from '../../screen/Auth/redux/types'
import { ApplicationState, ConnectedReduxProps } from '../../store'

interface ILoginState {
  username: string
  password: string
}

interface IMapStateToProps {
  auth: AuthState
  requestLogin(data: ILoginData): any
}

interface ILoginProps {}

type Props = IMapStateToProps & ILoginProps & ConnectedReduxProps

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ requestLogin }, dispatch)

const mapStateToProps = (state: ApplicationState) => ({
  auth: state.auth,
})

class Login extends PureComponent<Props, ILoginState> {
  constructor(props: Props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  handleOnChange = (name: keyof ILoginState, value: string): void => {
    this.setState({ [name]: value } as Pick<ILoginState, keyof ILoginState>)
  }

  handleOnSubmit = () => {
    const { username, password } = this.state
    this.props.requestLogin({ username, password })
  }

  render() {
    const { username, password } = this.state
    const { isLoading, error } = this.props.auth

    return (
      <Container style={styles.container}>
        <Form
          name="username"
          label="Username"
          value={username}
          onChangeText={this.handleOnChange}
          placeholder="johndoe"
          textInputProps={{
            returnKeyType: 'next',
          }}
          error={error.username}
        />
        <Form
          name="password"
          label="Password"
          value={password}
          onChangeText={this.handleOnChange}
          placeholder="******"
          textInputProps={{
            secureTextEntry: true,
            returnKeyType: 'done',
          }}
          error={error.password}
        />
        <MainButton
          title="Login"
          onPress={this.handleOnSubmit}
          isLoading={isLoading}
        />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 1,
    width: '80%',
    alignSelf: 'center',
    padding: 5,
    marginVertical: 10,
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
