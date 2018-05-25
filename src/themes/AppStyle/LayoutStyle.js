import DeviceInfo from 'react-native-device-info';

export default {
  container: {
    marginTop: DeviceInfo.getModel() === 'iPhone X' ? 50 : 20,
    paddingHorizontal: 20,
    flex: 1,
  },
};
