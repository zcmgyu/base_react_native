import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { font, size } from '../themes/Fonts';

const { height, width } = Dimensions.get('window');
const ratioHeight = height / 667;
const ratioWidth = width / 335;

const TouchableOpacityWithRectangle = props => {
  if (props.custom) {
    return (
      <View style={{ marginLeft: props.marginLeft }}>
        <TouchableOpacity
          {...props}
          style={[
            styles.button,
            {
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: props.backgroundColor,
            },
          ]}
        >
          <Text style={[styles.textButton, { color: props.backgroundColor }]}>
            {props.buttonName}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{ marginLeft: props.marginLeft }}>
      <TouchableOpacity
        {...props}
        style={[styles.button, { backgroundColor: props.backgroundColor }]}
      >
        <Text style={styles.textButton}>{props.buttonName}</Text>
      </TouchableOpacity>
    </View>
  );
};

TouchableOpacityWithRectangle.propTypes = {
  custom: PropTypes.bool,
  marginLeft: PropTypes.number,
  backgroundColor: PropTypes.string,
  buttonName: PropTypes.string,
};

export default TouchableOpacityWithRectangle;

const styles = StyleSheet.create({
  button: {
    width: 122 * ratioWidth,
    height: 40 * ratioHeight,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: size.large,
    color: '#fff',
    fontFamily: font.header,
  },
});
