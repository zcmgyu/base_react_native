import React, { Component } from 'react';
import {
  Text,
  View,
  Animated,
  TouchableHighlight,
  LayoutAnimation,
} from 'react-native';
import TextWithIcon from './TextWithIcon';

export default class ButtonWithIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(a, b) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
  }

  onPressButton = () => {
    this.props.onPress && this.props.onPress(this.props.data);
  };

  render() {
    const property = {
      icomoon: this.props.icomoon ? this.props.icomoon : null,
      icon: this.props.icon ? this.props.icon : null,
      center: this.props.center === false ? this.props.center : true,
      iconStyle: [styles.icon, this.props.iconStyle],
      textStyle: [styles.text, this.props.textStyle],
      title: this.props.text,
      iconSize: this.props.iconSize,
      type: this.props.iconType,
      multiline: this.props.multiline,
    };
    return (
      <TouchableHighlight
        style={[
          styles.container,
          this.props.style,
          {
            backgroundColor:
              (this.props.style && this.props.style.backgroundColor) ||
              'transparent',
          },
        ]}
        underlayColor={getUnderlayColor(
          this.props.style && this.props.style.backgroundColor,
        )}
        onPress={this.onPressButton}
      >
        <Animated.View collapsible={false} style={{ flex: 1 }}>
          <TextWithIcon {...property}>{this.props.children}</TextWithIcon>
        </Animated.View>
      </TouchableHighlight>
    );
  }
}

function getUnderlayColor(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (!result) return 'transparent';
  result = {
    r: (parseInt(result[1], 16) * 6 / 7).toFixed(0),
    g: (parseInt(result[2], 16) * 6 / 7).toFixed(0),
    b: (parseInt(result[3], 16) * 6 / 7).toFixed(0),
  };
  return rgbToHex(result);
}

function componentToHex(c) {
  var hex = Number(c).toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

function rgbToHex(result) {
  return (
    '#' +
    componentToHex(result.r) +
    componentToHex(result.g) +
    componentToHex(result.b)
  );
}

const styles = {
  container: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  icon: {
    color: '#CCCCCC',
  },
};
