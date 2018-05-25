import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors, Fonts, AppStyle} from '../../themes/index';
const styles= {
  container: {
    paddingVertical: 20,
    marginHorizontal: 20,
    backgroundColor: Colors.default,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtTitle: {
    ...AppStyle.TextStyle.txtTitle,
    flex: 1
  },
  icon: {
    color: Colors.darkGrey,
    fontSize: 25,
  }
};



const SettingView = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.container, props.noBottomBorder && {borderBottomWidth: 0, borderBottomColor: Colors.default}]}>
        <Text style={[styles.txtTitle,props.color && {color: props.color}]}>{props.title}</Text>
        {!props.unShowArrow && <Icon name='ios-arrow-forward-outline' style={styles.icon} />}
      </View>
    </TouchableOpacity>
  );
}


export default SettingView;
