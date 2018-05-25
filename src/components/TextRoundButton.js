import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
import Touchable from '../components/Touchable';

const TextRoundButton = props => {
  return (
    <Touchable onPress={props.onPress}>
      <View
        style={[
          styles.buttonContainer,
          {
            marginHorizontal: props.marginHorizontal,
            backgroundColor: props.backgroundColor,
          },
        ]}
      >
        <Text style={{ color: 'white' }}>{props.buttonText}</Text>
      </View>
    </Touchable>
  );
};

TextRoundButton.propTypes = {
  onPress: PropTypes.func,
  marginHorizontal: PropTypes.number,
  backgroundColor: PropTypes.number,
  buttonText: PropTypes.string,
};

export default TextRoundButton;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 53,
    height: 29,
    borderWidth: 1,
    borderRadius: 14,
  },
});
