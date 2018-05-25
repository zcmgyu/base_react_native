import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Animated, Platform, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors, AppStyle } from '../themes';

export default class InputRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || props.defaultValue || '',
      placeholderTextColor: props.placeholderTextColor,
      bounceValue: new Animated.Value(0),
      placeholderTranslateY: new Animated.Value(
        props.value === '' || !props.value ? 5 : -20,
      ),
      placeholderTranslateX: new Animated.Value(
        props.value === '' || !props.value ? 0 : 0,
      ),
      scaleText: new Animated.Value(16),
    };
    this.containerInput = React.createRef();
    this.input = React.createRef();
  }

  // componentWillMount() {}

  // componentWillReceiveProps(newProps) {}

  componentDidMount() {
    if (this.props.defaultValue) {
      this.input.current._lastNativeText = this.props.defaultValue;
      this.transformOnFocus();
    }
  }

  /* eslint no-unused-expressions: [2, { allowShortCircuit: true }] */
  onFocus = () => {
    this.setState({ placeholderTextColor: this.props.textColor });
    this.transformOnFocus();
    this.props.onFocus && this.props.onFocus();
  };

  onBlur = () => {
    this.props.onBlur && this.props.onBlur();
    if (
      !this.input.current._lastNativeText ||
      this.input.current._lastNativeText === ''
    ) {
      this.setState({ placeholderTextColor: this.props.placeholderTextColor });
      this.transformOnFocus(false);
    }
  };

  getText() {
    return this.input._lastNativeText;
  }

  blur() {
    this.input.blur();
  }

  focus() {
    this.input.focus();
  }

  transformOnFocus(mode = true) {
    console.log('mode', mode);
    Animated.spring(this.state.bounceValue, {
      toValue: mode ? 1 : 0,
    }).start();
    console.log('this.props.value', this.props.value);
    if (this.props.value) return;
    console.log('AFTER');
    Animated.sequence([
      Animated.parallel([
        Animated.spring(this.state.placeholderTranslateY, {
          toValue: mode ? -20 : 5,
        }),
        Animated.spring(this.state.scaleText, { toValue: mode ? 12 : 16 }),
        Animated.spring(this.state.placeholderTranslateX, {
          toValue: mode ? 0 : 0,
        }),
      ]),
    ]).start();
    console.log(
      'this.state.placeholderTranslateY._value',
      this.state.placeholderTranslateY._value,
    );
    console.log(
      'this.state.placeholderTranslateX._value',
      this.state.placeholderTranslateX._value,
    );
    console.log(
      'this.state.scaleText._value',
      this.state.placeholderTranslateY._value,
    );
  }

  renderIcon() {
    return (
      <View
        style={
          this.props.multiline
            ? styles.containerLeftMultil
            : styles.containerLeft
        }
      >
        <Icon
          name={this.props.icon}
          size={21}
          onPress={() => {
            this.props.onPressIcon && this.props.onPressIcon();
          }}
          style={[styles.icon, { color: this.state.placeholderTextColor }]}
        />
      </View>
    );
  }

  renderTextInput() {
    return (
      <View
        style={[
          styles.containerRight,
          { paddingTop: this.props.animatedTitle ? 20 : 0 },
        ]}
      >
        {this.props.textInputBackgroundStyle && (
          <View
            style={[
              styles.textInputBackground,
              this.props.textInputBackgroundStyle,
            ]}
          />
        )}
        {this.props.animatedTitle && this.renderAnimatedTitle()}
        {this.renderInput()}
        {this.props.underLine &&
          Platform.OS !== 'android' &&
          this.renderUnderLine()}
      </View>
    );
  }

  renderAnimatedTitle() {
    return (
      <View>
        <Animated.Text
          style={[
            styles.placeholder,
            {
              color: this.state.placeholderTextColor,
              transform: [
                { translateY: this.state.placeholderTranslateY },
                { translateX: this.state.placeholderTranslateX },
              ],
              fontSize: this.state.scaleText,
            },
          ]}
        >
          {this.props.placeholder}
          {this.props.required && <Text style={[{ color: 'red' }]}> *</Text>}
        </Animated.Text>
      </View>
    );
  }

  renderInput() {
    return (
      <View>
        <TextInput
          onChangeText={text => {
            if (checkTypeNumber(this.props.keyboardType)) {
              if (text === '' || !text) return;
              if (checkPhoneType(this.props.keyboardType)) {
                !checkPhone(text) && this.setState({ value: this.state.value });
                return;
              }
              !checkNumber(text) && this.setState({ value: this.state.value });
            }
          }}
          spellCheck={false}
          autoCapitalize="none"
          autoCorrect={false}
          onSubmitEditing={this.props.onSubmitEditing}
          returnKeyType={this.props.returnKeyType || 'done'}
          keyboardType={this.props.keyboardType}
          blurOnSubmit={!this.props.multiline}
          underlineColorAndroid={
            this.props.textInputBackgroundStyle && !this.props.underLine
              ? this.props.textInputBackgroundStyle.backgroundColor
              : this.state.placeholderTextColor
          }
          multiline={this.props.multiline}
          editable={this.props.editable}
          secureTextEntry={this.props.secureTextEntry}
          ref={this.input}
          placeholder={this.props.animatedTitle ? '' : this.props.placeholder}
          placeholderTextColor={this.state.placeholderTextColor}
          selectTextOnFocus
          style={[
            styles.textInput,
            {
              color: this.props.textColor || Colors.blue,
              textAlign: this.props.textAlign === 'center' ? 'center' : null,
            },
            this.props.multiline ? { height: 100, margin: 10 } : {},
          ]}
          value={this.state.value}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          defaultValue={this.props.defaultValue}
          onChange={event => {
            this.setState({ value: event.nativeEvent.text });
            this.props.onChangeText &&
              this.props.onChangeText(event.nativeEvent.text);
          }}
        />
      </View>
    );
  }

  renderUnderLine() {
    return (
      <View>
        <View
          style={[
            styles.separatorRow,
            { top: 1, backgroundColor: this.state.placeholderTextColor },
          ]}
        />
        <Animated.View
          style={[
            styles.separatorRow,
            {
              height: 1.5,
              transform: [{ scaleX: this.state.bounceValue }],
              backgroundColor: this.state.placeholderTextColor,
            },
          ]}
        />
      </View>
    );
  }

  render() {
    return (
      <View ref={this.containerInput} style={[styles.item, this.props.style]}>
        <View
          style={[
            styles.containerInputRow,
            { backgroundColor: this.props.backgroundColor },
          ]}
        >
          {this.props.icon && this.renderIcon()}
          {this.renderTextInput()}
          {this.props.children}
        </View>
      </View>
    );
  }
}

const styles = {
  containerInputRow: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLeft: {
    width: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLeftMultil: {
    width: 38,
    paddingTop: 3,
    alignItems: 'center',
  },
  containerRight: {
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    color: Colors.divider,
    marginTop: 15,
  },
  textInput: {
    height: 40,
    paddingHorizontal: 0,
    paddingBottom: 5,
    textAlignVertical: 'top',
    backgroundColor: 'transparent',
    ...AppStyle.TextStyle.txtTitle,
  },
  separatorRow: {
    height: 0.5,
    backgroundColor: Colors.divider,
  },
  placeholder: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    ...AppStyle.TextStyle.txtTitle,
  },
  textInputBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 40,
    bottom: Platform.OS === 'android' ? 0 : 5,
  },
};
function checkPhone(num) {
  const re = /^[0-9#+*.,]+$/;
  return re.test(num);
}
function checkPhoneType(type) {
  return type === 'phone-pad';
}

function checkNumber(num) {
  const re = /^[-+]?[0-9]*\.?[0-9]?[0-9]?$/;
  const re1 = /^[-+]?[0-9]*,?[0-9]?[0-9]?$/;
  return re.test(num) || re1.test(num);
}

function checkTypeNumber(type) {
  return (
    type === 'numeric' ||
    type === 'phone-pad' ||
    type === 'number-pad' ||
    type === 'decimal-pad'
  );
}

InputRow.propTypes = {
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  placeholderTextColor: PropTypes.any,
  underLine: PropTypes.any,
  textColor: PropTypes.any,
  animatedTitle: PropTypes.any,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  multiline: PropTypes.bool,
  onPressIcon: PropTypes.func,
  icon: PropTypes.string,
  textInputBackgroundStyle: PropTypes.object,
  textAlign: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  keyboardType: PropTypes.string,
  onSubmitEditing: PropTypes.func,
  returnKeyType: PropTypes.string,
  editable: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  onChangeText: PropTypes.func,
  backgroundColor: PropTypes.any,
  children: PropTypes.element,
  style: PropTypes.number,
};
