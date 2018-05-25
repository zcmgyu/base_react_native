import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Touchable from '../components/Touchable';

const TouchableRoundWithIcon = props => {
  return (
    <Touchable onPress={props.onClick}>
      <View style={styles.buttonView}>
        <Icon name={props.iconName} color="#fff" size={25} />
      </View>
    </Touchable>
  );
};

TouchableRoundWithIcon.propTypes = {
  onClick: PropTypes.func,
  iconName: PropTypes.string,
};

const styles = StyleSheet.create({
  buttonView: {
    width: 50,
    height: 50,
    backgroundColor: '#1d9dd8',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TouchableRoundWithIcon;
