import { Alert } from 'react-native';

export function showAlertError(error) {
  if (error) {
    if (error.message === null || error.message === '') {
      Alert.alert('', 'Có lỗi xảy ra. Hãy thử lại sau!');
    } else {
      Alert.alert('', `${error.message}`);
    }
  }
}
