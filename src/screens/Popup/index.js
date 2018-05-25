import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../themes';
import { LargeNote } from '../../components/Text';
import TouchableOpacityWithRectangle from '../../components/TouchableOpacityWithRectangle';

const { width } = Dimensions.get('window');

export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: 'white',
          width: width - 40,
          paddingVertical: 15,
        }}
      >
        <LargeNote style={styles.text}>{this.props.text}</LargeNote>
        <View style={styles.buttonContainer}>
          <TouchableOpacityWithRectangle
            buttonName={this.props.firstTitle}
            backgroundColor={Colors.secondary}
            onPress={this.props.onPressFirst}
          />
          {this.props.secondTitle &&
            this.props.onPressSecond && (
              <TouchableOpacityWithRectangle
                buttonName={this.props.secondTitle}
                backgroundColor={Colors.primary}
                onPress={this.props.onPressSecond}
                marginLeft={26}
                custom
              />
            )}
        </View>
      </View>
    );
  }
}

Popup.propTypes = {
  text: PropTypes.string,
  firstTitle: PropTypes.string,
  onPressFirst: PropTypes.func,
  onPressSecond: PropTypes.func,
  secondTitle: PropTypes.string,
};

export function showPopup(
  navigator,
  text,
  firstTitle,
  onPressFirst,
  secondTitle,
  onPressSecond,
) {
  navigator.showLightBox({
    screen: 'app.Popup', // unique ID registered with Navigation.registerScreen
    passProps: {
      text,
      firstTitle,
      onPressFirst,
      secondTitle,
      onPressSecond,
    }, // simple serializable object that will pass as props to the lightbox (optional)
    style: {
      backgroundColor: 'rgba(0,0,0,0.5)', // tint color for the background, you can specify alpha here (optional)
      tapBackgroundToDismiss: true, // dismisses LightBox on background taps (optional)
    },
  });
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    width: width - 120,
    textAlign: 'center',
    alignSelf: 'center',
    color: Colors.grey,
    marginBottom: 20,
  },
});

// example
// import { showPopup } from '../Popup';
// showPopup(
//   this.props.navigator,
//   'abc',
//   2,
//   'ok',
//   this.onPressFirst,
//   'cancel',
//   this.onPressSecond,
// );
//
// onPressFirst = () => {
//   console.log('first');
// };
//
// onPressSecond = () => {
//   console.log('titleSecond');
// };
