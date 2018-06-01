import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Linking } from 'react-native';
import dismissKeyboard from 'react-native-dismiss-keyboard';
import InputRow from '../../components/InputRow';
import Button from '../../components/ButtonWithIcon';
import { Colors, Fonts, AppStyle } from '../../themes';
import { startHomeContent } from '../../Setup';

const { LayoutStyle } = AppStyle;

export default class Splash extends Component {
  static navigatorStyle = {
    navBarHidden: true, // make the nav bar hidden
    navBarTranslucent: true, // make the nav bar semi-translucent, works best with drawUnderNavBar:true
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={styles.container}
        testID="screen_key_2508"
        accessibilityLabel="screen_key_2508"
      >
        <InputRow
          ref={this.regularPrice}
          returnKeyType="next"
          underLine
          icon="md-disc"
          onPressIcon={this.openCameraScan}
          animatedTitle
          style={styles.inputText}
          onFocus={() => {}}
          textColor={Colors.primary}
          placeholderTextColor={Colors.grey}
          placeholder="入力してください。"
          onSubmitEditing={() => {}}
          testID="input_key_2508"
          accessibilityLabel="input_key_2508"
        />
        <Button
          onPress={() => {
            dismissKeyboard();
            startHomeContent();
          }}
          icon="ios-share-outline"
          text="次へ"
          iconStyle={{ color: Colors.primaryText, fontSize: 14 }}
          textStyle={styles.txtStyle}
          style={styles.btnStyle}
        />
        <Text
          style={{ color: 'blue', marginTop: 30 }}
          onPress={() => Linking.openURL('http://google.com')}
        >
          Link to Google
        </Text>
      </View>
    );
  }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  ...LayoutStyle,
  inputText: {
    height: 60,
    width: width - 70,
  },
  txtStyle: {
    paddingLeft: 30,
    ...Fonts.style.semi,
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: Colors.dark,
  },
  btnStyle: {
    height: 41,
    borderRadius: 20.5,
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: Colors.semiDarkGrey,
    backgroundColor: Colors.primaryText,
    marginTop: 20,
  },
});
