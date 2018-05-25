import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../themes';

const ButtonClose = props => {
  return (
    <TouchableOpacity style={styles.content} onPress={props.onClose}>
      <View>
        <Icon name="md-close" style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
};

ButtonClose.propTypes = {
  onClose: PropTypes.func,
};

const styles = StyleSheet.create({
  content: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 21,
    backgroundColor: Colors.black,
    position: 'absolute',
    bottom: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 0.25,
    elevation: 4,
  },
  icon: {
    fontSize: 20,
    color: 'white',
  },
});

export default ButtonClose;
