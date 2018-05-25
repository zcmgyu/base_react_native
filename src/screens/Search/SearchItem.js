import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import moment from 'moment';
import {AppStyle, Colors} from '../../themes';
import Icon from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window');
const SearchItem = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPressItem}>
      <View style={styles.content}>
        <Icon name={props.item.icon} style={styles.icon} />
        <Text numberOfLines={2} style={styles.txtTitle}>{props.item.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginLeft: 15
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (width-45)/2,
    height: (width-45)/2,
    borderWidth: 1,
    borderColor: Colors.primary
  },
  icon: {
    fontSize: (width-45)/2/2,
    color: Colors.primary
  },
  txtTitle: AppStyle.TextStyle.txtItemTitle,
  txtDate: AppStyle.TextStyle.txtItemSubTitle_italic,
});

export default SearchItem;