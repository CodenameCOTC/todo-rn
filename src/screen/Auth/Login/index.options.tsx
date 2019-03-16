import { OptionsTopBar } from 'react-native-navigation'

interface IOptions {
  topBar: OptionsTopBar
}

const options: IOptions = {
  topBar: {
    title: {
      text: 'Login',
    },
  },
}

export default options
