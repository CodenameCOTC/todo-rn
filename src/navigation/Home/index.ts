import {
  Navigation,
  LayoutStackChildren,
  LayoutStack,
} from 'react-native-navigation'
import { colors } from '../../constants'

export const HomeScreen: LayoutStackChildren = {
  component: {
    name: 'HomeScreen',
  },
}

export const defaultHomeLayoutStack: LayoutStack = { children: [HomeScreen] }

export const HomeNavigation = (layoutStack?: LayoutStack) => {
  Navigation.setDefaultOptions({
    statusBar: {
      backgroundColor: colors.secondary,
      style: 'light',
    },
    topBar: {
      background: { color: colors.primary },
      backButton: { color: 'white' },
      title: {
        alignment: 'center',
        color: colors.textOnPrimary,
        fontFamily: 'Ubuntu',
      },
    },
  })
  Navigation.setRoot({
    root: {
      stack: layoutStack ? layoutStack : defaultHomeLayoutStack,
    },
  })
}
