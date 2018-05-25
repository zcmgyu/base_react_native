import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Platform,
} from 'react-native';
import RCTKeyboardToolbarTextInput from 'react-native-textinput-utils';
import Icon from 'react-native-vector-icons/Ionicons';
import Touchable from './Touchable';
import { Colors } from '../themes';
import { font } from '../themes/Fonts';

class TextInputWithUnderLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
    };
    this.textInputRef = React.createRef();
    this.width = Dimensions.get('window');
  }

  onFocus() {
    this.textInputRef.focus();
  }

  renderTextInput(type, width) {
    if (type !== 'normal' && Platform.OS === 'ios') {
      return (
        <RCTKeyboardToolbarTextInput
          {...this.props}
          ref={this.textInputRef}
          style={[styles.textInput, { width }]}
          keyboardType="numeric"
          rightButtonText={type}
          underlineColorAndroid="transparent"
          placeholderTextColor={Colors.greyLight}
          secureTextEntry={
            this.props.secureTextEntry && !this.state.showPassword
          }
        />
      );
    }
    return (
      <TextInput
        {...this.props}
        ref={ref => {
          this.textInputRef = ref;
        }}
        style={[styles.textInput, { width }]}
        underlineColorAndroid="transparent"
        placeholderTextColor={Colors.greyLight}
        secureTextEntry={this.props.secureTextEntry && !this.state.showPassword}
      />
    );
  }

  render() {
    let widthOfTextInput = this.width;
    if (this.props.paddingHorizontalValue) {
      widthOfTextInput -= this.props.paddingHorizontalValue * 2;
    }
    if (this.props.icon) {
      const iconWidth = this.props.size ? this.props.size : 18;
      widthOfTextInput -= iconWidth + 10;
    }
    if (this.props.secureTextEntry) {
      widthOfTextInput -= 30;
    }
    return (
      <View
        style={[
          styles.container,
          { paddingHorizontal: this.props.paddingHorizontalValue },
          this.props.viewStyle,
        ]}
      >
        <View style={styles.row}>
          <View style={{ justifyContent: 'center' }}>
            {this.props.icon && (
              <Icon
                style={styles.icon}
                name={this.props.icon}
                size={this.props.size ? this.props.size : 16}
                color={
                  this.props.iconColor ? this.props.iconColor : Colors.greyLight
                }
              />
            )}
          </View>
          {this.renderTextInput(
            this.props.numberTextInput ? this.props.numberTextInput : 'normal',
            widthOfTextInput,
          )}
          {this.props.secureTextEntry && (
            <Touchable
              onPress={() =>
                this.setState({ showPassword: !this.state.showPassword })
              }
            >
              <View
                style={{
                  width: 40,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* <Icon
                  name={this.state.showPassword ? 'ic-hide-password' : 'ic-show-password'}
                  size={20}
                /> */}
              </View>
            </Touchable>
          )}
        </View>
        <View
          style={[
            styles.separator,
            {
              backgroundColor: this.props.color
                ? this.props.color
                : Colors.divider,
            },
          ]}
        />
      </View>
    );
  }
}

TextInputWithUnderLine.propTypes = {
  secureTextEntry: PropTypes.bool,
  viewStyle: PropTypes.object,
  color: PropTypes.string,
  paddingHorizontalValue: PropTypes.number,
  icon: PropTypes.string,
  size: PropTypes.number,
  iconColor: PropTypes.string,
  numberTextInput: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    height: 35,
  },
  textInput: {
    width: this.width - 80,
    fontSize: 17,
    fontFamily: font.note,
    color: Colors.greyLight,
  },
  separator: {
    height: 0.5,
    backgroundColor: Colors.divider,
    marginTop: Platform.OS === 'ios' ? 2 : 0,
  },
  icon: {
    marginRight: 10,
  },
});

export default TextInputWithUnderLine;
