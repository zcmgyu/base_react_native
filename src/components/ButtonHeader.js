import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Image } from 'react-native';
import Touchable from './Touchable';
import { Images } from '../themes/';

const ButtonHeader = props => {
  return (
    <Touchable onPress={props.onPress} touchableHighlight="transparent">
      <View style={styles.backButtonView}>
        <Image source={Images[props.imageName]} />
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  backButtonView: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

ButtonHeader.propTypes = {
  onPress: PropTypes.func.isRequired,
  imageName: PropTypes.string.isRequired,
};

export default ButtonHeader;
