import { Dimensions } from 'react-native';

import Colors from './Colors';
import Fonts from './Fonts';
import Images from './Images';
import AppStyle from './AppStyle';
import Metrics from './Metrics';

const { width } = Dimensions.get('window');
const Scale = width / 320;

export { Colors, Fonts, Images, AppStyle, Scale, Metrics };
