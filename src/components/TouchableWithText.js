import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
import Touchable from '../components/Touchable';
import { Colors } from '../themes';

const TouchableWithText = props => {
  return (
    <View style={[styles.buttonContainer, { width: props.width }]}>
      <View
        style={[
          styles.outsideButton,
          {
            backgroundColor: props.backgroundColor
              ? props.backgroundColor
              : 'black',
          },
        ]}
      />
      <View style={styles.insideButton}>
        <Touchable style={styles.touchable} onPress={props.onPress}>
          <Text style={styles.text}>{props.buttonText}</Text>
        </Touchable>
      </View>
    </View>
  );
};

TouchableWithText.propTypes = {
  onPress: PropTypes.func,
  width: PropTypes.number,
  buttonText: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default TouchableWithText;

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'center',
    marginTop: 20,
    height: 38,
    backgroundColor: Colors.transparent,
  },
  outsideButton: {
    height: 38,
    borderRadius: 20,
  },
  insideButton: {
    backgroundColor: Colors.red,
    position: 'absolute',
    top: 4,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.default,
  },
  touchable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
