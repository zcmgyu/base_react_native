import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, TextInput, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const TextInputWithTitle = props => {
  return (
    <View style={[styles.inputField, { marginTop: props.marginTop }]}>
      <Text style={{ color: 'white', fontSize: 12 }}>{props.title}</Text>
      <TextInput
        {...props}
        style={styles.textInput}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

TextInputWithTitle.propTypes = {
  marginTop: PropTypes.number,
  title: PropTypes.string,
};

export default TextInputWithTitle;

const styles = StyleSheet.create({
  textInput: {
    width: width - 80,
    fontSize: 17,
    height: 34,
    borderWidth: 1,
    borderColor: 'white',
    paddingLeft: 10,
    color: 'white',
  },
  inputField: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
