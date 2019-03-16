import React, { PureComponent, ComponentLifecycle } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Form, MainButton } from '../common'

interface ILoginState {
  username: string
  password: string
}

interface ILoginProps {}

class Login extends PureComponent<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
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
    console.log(this.state)
  }

  render() {
    const { username, password } = this.state
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
        />
        <MainButton title="Login" onPress={this.handleOnSubmit} />
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

export default Login
