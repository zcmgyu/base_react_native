import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
// import codePush from 'react-native-code-push';
import { Colors } from './themes';
import { registerScreens } from './navigation/screens';
import { iconsMap, iconsLoaded } from './utils/AppIcons';

import configureStore from './redux/store';

/* eslint-disable import/no-mutable-exports */
export let store = null;

export const navigatorStyle = {
  navBarBackgroundColor: 'white',
  navBarButtonColor: Colors.greyLight,
  navBarTextFontFamily: 'Poppins-Medium',
  navBarTextFontSize: 18,
  navBarTextColor: '#4a4a4a',
  navBarNoBorder: true,
  navBarHidden: true,
  statusBarTextColorScheme: 'light',
};

export function push(navigator, config, navigatorButtons, navHidden) {
  navigator.push({
    ...config,
    backButtonTitle: '',
    navigatorButtons: {
      ...navigatorButtons,
      leftButtons: [
        {
          // icon: iconsMap['ic-back'],
          id: 'back',
          buttonColor: 'white',
        },
      ],
    },
    navigatorStyle: { ...navigatorStyle, navBarHidden: navHidden || false },
  });
}

export function showModal(navigator, config, navigatorButtons, navHidden) {
  navigator.showModal({
    ...config,
    navigatorButtons: {
      ...navigatorButtons,
      leftButtons: [
        {
          // icon: iconsMap['ic-delete'],
          id: 'close',
          buttonColor: 'white',
        },
      ],
    },
    navigatorStyle: { ...navigatorStyle, navBarHidden: navHidden || false },
  });
}

export const startUp = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'app.Splash',
      title: 'Splash', // title of the screen as appears in the nav bar (optional)
      navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
      navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
    },
    passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
    animationType: 'slide-down', // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
  });
};

export function startHomeContent() {
  const iconInsets = {
    top: 6,
    left: 0,
    bottom: -6,
    right: 0,
  };

  Navigation.startTabBasedApp({
    tabs: [
      {
        title: 'ニュース',
        screen: 'app.News',
        icon: iconsMap['ios-home'],
        // selectedIcon: require('../img/one_selected.png'),
        iconInsets,
        navigatorStyle: {},
        navigatorButtons: {},
      },
      {
        title: '検索',
        screen: 'app.Search',
        icon: iconsMap['ios-search'],
        iconInsets,
        navigatorStyle: {},
        navigatorButtons: {},
      },
      {
        title: '投稿',
        screen: 'app.CreateForm',
        icon: iconsMap['ios-create'],
        iconInsets,
        navigatorStyle,
        navigatorButtons: {},
      },
      {
        title: '設定',
        screen: 'app.Setting',
        icon: iconsMap['ios-more'],
        iconInsets,
        navigatorStyle,
        navigatorButtons: {},
      },
    ],
    tabsStyle: {
      tabBarSelectedButtonColor: Colors.primary,
    },
    appStyle: {
      orientation: 'portrait',
      screenBackgroundColor: 'white',
    },
    passProps: {},
    animationType: 'fade',
  });
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.loadInitial();
  }

  // componentDidMount() {
  //   if (!__DEV__) {
  //     codePush.sync({
  //       updateDialog: true,
  //       installMode: codePush.InstallMode.ON_NEXT_RESUME,
  //     });
  //   }
  // }

  loadInitial() {
    Promise.all([this.loadStore(), iconsLoaded])
      .then(() => {
        this.startApp();
      })
      .catch(err => console.log(err));
    // Promise.all([this.loadStore()])
    //   .then(() => {
    //     this.startApp();
    //   })
    //   .catch(err => console.log(err));
  }

  async loadStore() {
    return new Promise(resolve => {
      store = configureStore(() => resolve('Store loaded'));
      registerScreens(store, Provider);
    });
  }

  startApp() {
    startUp();
    // startLoginContent();
  }
}

export default App;
