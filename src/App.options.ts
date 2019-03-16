import { OptionsTopBar } from 'react-native-navigation'

interface IOptions {
  topBar: OptionsTopBar
}

const options: IOptions = {
  topBar: {
    title: {
      text: 'Todo App',
      alignment: 'center',
    },
  },
}

export default options
