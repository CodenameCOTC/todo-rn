import {
  Navigation,
  LayoutStack,
  LayoutStackChildren,
} from 'react-native-navigation'
import { colors } from '../../constants'

const LoginScreen: LayoutStackChildren = {
  component: {
    name: 'LoginScreen',
  },
}

export const defaultAuthLayoutStack: LayoutStack = {
  children: [LoginScreen],
}

export const AuthNavigation = (layoutStack?: LayoutStack) => {
  Navigation.setDefaultOptions({
    statusBar: {
      backgroundColor: colors.secondary,
      style: 'light',
    },
    topBar: {
      background: { color: colors.primary },
      backButton: { color: 'white' },
      title: { alignment: 'center' },
    },
  })
  Navigation.setRoot({
    root: {
      stack: layoutStack ? layoutStack : defaultAuthLayoutStack,
    },
  })
}
