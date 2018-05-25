import { Navigation } from 'react-native-navigation';

import News from '../screens/News';
import Search from '../screens/Search';
import CreateForm from '../screens/CreateForm';
import Setting from '../screens/Setting';

// Detail
import NewsDetail from '../screens/NewsDetail';
import SearchDetail from '../screens/SearchDetail';
import ScanNumber from '../screens/SearchDetail/ScanNumber';
import Splash from '../screens/Splash';

export function registerScreens(store, Provider) {
  Navigation.registerComponent('app.News', () => News, store, Provider);
  Navigation.registerComponent('app.Search', () => Search, store, Provider);
  Navigation.registerComponent('app.CreateForm', () => CreateForm, store, Provider);
  Navigation.registerComponent('app.Setting', () => Setting, store, Provider);
  Navigation.registerComponent('app.NewsDetail', () => NewsDetail, store, Provider);
  Navigation.registerComponent(
    'app.SearchDetail',
    () => SearchDetail,
    store,
    Provider,
  );
  Navigation.registerComponent('app.ScanNumber', () => ScanNumber, store, Provider);
  Navigation.registerComponent('app.Splash', () => Splash, store, Provider);
}
