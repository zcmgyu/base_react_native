import { PixelRatio } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const navIconSize =
  __DEV__ === false ? PixelRatio.getPixelSizeForLayoutSize(40) : 40; // eslint-disable-line
const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = {
  'ios-home': [25, '#000'],
  'ios-search': [25, '#000'],
  'ios-create': [25, '#000'],
  'ios-more': [25, '#000']
};

const iconsMap = {};
const iconsLoaded = new Promise((resolve, reject) => {
  new Promise.all(Object.keys(icons).map(iconName =>
    // IconName--suffix--other-suffix is just the mapping name in iconsMap
    Icon.getImageSource(
      iconName.replace(replaceSuffixPattern, ''),
      icons[iconName][0],
      icons[iconName][1],
    )))
    .then((sources) => {
      Object.keys(icons).forEach((iconName, idx) => (iconsMap[iconName] = sources[idx]));

      // Call resolve (and we are done)
      resolve(true);
    })
    .catch(err => console.log(err));
});

export { iconsMap, iconsLoaded };
