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
    hideOnScroll: true,
    drawBehind: true,
  },
}

export default options
