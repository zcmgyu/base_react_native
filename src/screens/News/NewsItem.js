import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { AppStyle } from '../../themes';

const { width } = Dimensions.get('window');

const NewItem = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPressItem}>
      <View style={styles.content}>
        <Image source={{ uri: props.item.thumbnail }} style={styles.vLeft} />
        <View style={styles.vRight}>
          <Text numberOfLines={2} style={styles.txtTitle}>
            {props.item.title}
          </Text>
          <Text style={styles.txtDate}>{props.item.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

NewItem.propTypes = {
  item: PropTypes.object,
  title: PropTypes.string,
  onPressItem: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    flex: 1,
    width,
  },
  vLeft: {
    width: 60,
    height: 60,
  },
  vRight: {
    flex: 1,
    paddingLeft: 15,
  },
  txtTitle: AppStyle.TextStyle.txtItemTitle,
  txtDate: AppStyle.TextStyle.txtItemSubTitle_italic,
});

export default NewItem;
