import { Navigation } from 'react-native-navigation'
import { HomeScreen } from './src/screen'

import { colors } from './src/constants'

Navigation.registerComponent(`Home`, () => HomeScreen)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      background: {
        color: colors.primary,
      },
      title: {
        color: colors.textOnPrimary,
        fontFamily: 'Ubuntu',
      },
    },
    statusBar: {
      backgroundColor: colors.secondary,
      style: 'light',
    },
  })
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
              id: '@Home',
            },
          },
        ],
      },
    },
  })
})
