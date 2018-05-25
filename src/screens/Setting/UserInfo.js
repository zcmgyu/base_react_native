import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import { Colors, Images, AppStyle } from '../../themes';

const { width } = Dimensions.get('window');
const styles = {
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    width,
    paddingHorizontal: 20,
    paddingTop: 38,
    paddingBottom: 13,
    flexDirection: 'row',
    borderBottomWidth: 10,
    borderBottomColor: Colors.divider,
  },
  txtTitle: AppStyle.TextStyle.txtTitle,
  txtSubTitle: AppStyle.TextStyle.txtItemSubTitle_italic,
  avatar: {
    height: 56,
    width: 56,
    borderRadius: 28,
  },
};

const UserInfo = props => {
  return (
    <TouchableHighlight underlayColor="transparent" onPress={props.onPress}>
      <View style={styles.content}>
        <View style={{ flex: 1 }}>
          <Text style={styles.txtTitle}>John Doeさん、こんにちは！</Text>
          <Text style={styles.txtSubTitle}>
            {'個人情報の編集'}
          </Text>
        </View>
        <Image
          source={props.avatar ? { uri: props.avatar } : Images.defaultUser}
          defaultSource={Images.defaultUser}
          style={styles.avatar}
        />
      </View>
    </TouchableHighlight>
  );
};

UserInfo.propTypes = {
  avatar: PropTypes.string,
  onPress: PropTypes.func,
};

export default UserInfo;
