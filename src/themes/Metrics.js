import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const scale = width / 320;
// Used via Metrics.baseMargin
const Metrics = {
  icons: {
    tiny: 15 * scale,
    semiSmall: 20 * scale,
    small: 25 * scale,
    medium: 30 * scale,
    large: 45 * scale,
    xl: 100 * scale,
  },
  images: {
    small: 20 * scale,
    medium: 40 * scale,
    large: 60 * scale,
    logo: 300 * scale,
  },
};

export default Metrics;
