import React, { Component } from 'react';
import { View, StyleSheet, Platform, Keyboard, Alert } from 'react-native';
import { connect } from 'react-redux';
// import Icon from 'react-native-vector-icons/thebooks';
import Container from '../../components/Container';
import { Colors } from '../../themes';
import Tools from '../../utils/Tools';
import { showAlertError } from '../../utils/AlertView';

import Touchable from '../../components/Touchable';
import TextInputWithUnderLine from '../../components/TextInputWithUnderline';
import TouchableOpacityWithRectangle from '../../components/TouchableOpacityWithRectangle';

import LoginActions from '../../redux/LoginRedux/actions';

class Register extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      dateOfBirth: Date.now(),
      isCurrentScreen: false,
    };

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  componentWillReceiveProps(newProps) {
    if (this.state.isCurrentScreen) {
      if (newProps.isLogined && !this.props.isLogined) {
        if (this.props.back) {
          this.props.navigator.pop();
        } else {
          this.onDismiss();
        }
      } else if (newProps.error !== null && !this.props.error) {
        showAlertError(newProps.error);
      }
    }
  }

  onNavigatorEvent(event) {
    console.log(event);
    if (event.id === 'willAppear') {
      this.setState({ isCurrentScreen: true });
    }
    if (event.id === 'willDisappear') {
      this.setState({ isCurrentScreen: false });
    }
    if (event.id == 'back') {
      this.props.navigator.pop();
    }
  }

  onBack() {
    Keyboard.dismiss();
    this.setState({
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
      phone: '',
    });
    this.props.navigator.pop({
      animated: true,
    });
  }

  onDismiss() {
    Keyboard.dismiss();
    this.setState({
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
      phone: '',
    });
    this.props.navigator.dismissModal({
      animated: true,
    });
  }

  onSubmitTextInput(textInput) {
    if (textInput === this.TEXTINPUT_LAST_NAME) {
      this.childComponentFirstName.onFocus();
    }
    if (textInput === this.TEXTINPUT_FIRST_NAME) {
      this.childComponentPhone.onFocus();
    }
    if (textInput === this.TEXTINPUT_PHONENUMBER) {
      this.childComponentEmail.onFocus();
    }
    if (textInput === this.TEXTINPUT_EMAIL) {
      this.childComponentPassword.onFocus();
    }
    if (textInput === this.TEXTINPUT_PASSWORD) {
      this.childComponentConfirm.onFocus();
    }
    if (textInput === this.TEXTINPUT_CONFIRM) {
      Keyboard.dismiss();
      this.onRegister();
    }
  }

  onRegister = () => {
    if (!Tools.validateField(this.state.lastName)) {
      return Alert.alert('The Books', 'Chưa nhập họ tên', [
        { text: 'Ok', onPress: () => this.childComponentLastName.onFocus() },
      ]);
    }
    if (!Tools.validateField(this.state.firstName)) {
      return Alert.alert('The Books', 'Chưa nhập tên', [
        { text: 'Ok', onPress: () => this.childComponentFirstName.onFocus() },
      ]);
    }
    if (!Tools.validateField(this.state.phone)) {
      return Alert.alert('The Books', 'Chưa nhập số điện thoại', [
        { text: 'Ok', onPress: () => this.childComponentPhone.onFocus() },
      ]);
    }
    if (this.state.phone.length < 9 || this.state.phone.length > 12) {
      return Alert.alert('My Accountant', 'Số điện thoại không đúng', [
        { text: 'Ok', onPress: () => this.childComponentPhone.onFocus() },
      ]);
    }
    if (!Tools.validateEmail(this.state.email)) {
      return Alert.alert('The Books', 'Tài khoản email không đúng', [
        { text: 'Ok', onPress: () => this.childComponentEmail.onFocus() },
      ]);
    }
    if (this.state.password.length < 6) {
      return Alert.alert('The Books', 'Mật khẩu phải ít nhất 6 kí tự', [
        { text: 'Ok', onPress: () => this.childComponentPassword.onFocus() },
      ]);
    }
    if (!Tools.validateField(this.state.confirmPassword)) {
      return Alert.alert('The Books', 'Chưa nhập xác nhận mật khẩu', [
        { text: 'Ok', onPress: () => this.childComponentConfirm.onFocus() },
      ]);
    }
    if (!(this.state.confirmPassword === this.state.password)) {
      return Alert.alert('The Books', 'Mật khẩu không trùng.', [
        { text: 'Ok', onPress: () => this.childComponentPassword.onFocus() },
      ]);
    }

    const userData = {
      FirstName: this.state.firstName,
      LastName: this.state.lastName,
      PhoneNumber: this.state.phone,
      Password: this.state.password,
      DateOfBirth: '11-22-1993',
      Email: this.state.email,
    };

    this.props.register(userData);
  };

  TEXTINPUT_LAST_NAME = 'TEXTINPUT_LAST_NAME';
  TEXTINPUT_FIRST_NAME = 'TEXTINPUT_FIRST_NAME';
  TEXTINPUT_PHONENUMBER = 'TEXTINPUT_PHONENUMBER';
  TEXTINPUT_EMAIL = 'TEXTINPUT_EMAIL';
  TEXTINPUT_PASSWORD = 'TEXTINPUT_PASSWORD';
  TEXTINPUT_CONFIRM = 'TEXTINPUT_CONFIRM';

  childComponentFirstName = null;
  childComponentLastName = null;
  childComponentPhone = null;
  childComponentEmail = null;
  childComponentPassword = null;
  childComponentConfirm = null;

  renderBackButton() {
    return (
      <Touchable
        onPress={() => this.onBack()}
        style={styles.backButton}
        touchableHighlight="transparent"
      >
        <View style={styles.backButtonView}>
          {/* <Icon
            name="ic-back"
            color={Colors.greyLight}
            size={20}
            style={{ backgroundColor: 'transparent' }}
          /> */}
        </View>
      </Touchable>
    );
  }

  render() {
    return (
      <Container loading={this.props.loading} haveTextInput>
        {this.renderBackButton()}
        <TextInputWithUnderLine
          viewStyle={{ marginTop: 15 }}
          paddingHorizontalValue={40}
          placeholder="Họ"
          autoFocus
          autoCapitalize="words"
          autoCorrect={false}
          returnKeyType="next"
          color={Colors.light}
          value={this.state.lastName}
          onChangeText={(text) => {
            this.setState({ lastName: text });
          }}
          onSubmitEditing={() => this.onSubmitTextInput(this.TEXTINPUT_LAST_NAME)}
          ref={(instance) => {
            this.childComponentLastName = instance;
          }}
        />
        <TextInputWithUnderLine
          viewStyle={{ marginTop: 15 }}
          paddingHorizontalValue={40}
          placeholder="Tên"
          autoCapitalize="words"
          autoCorrect={false}
          returnKeyType="next"
          color={Colors.light}
          value={this.state.firstName}
          onChangeText={(text) => {
            this.setState({ firstName: text });
          }}
          onSubmitEditing={() => this.onSubmitTextInput(this.TEXTINPUT_FIRST_NAME)}
          ref={(instance) => {
            this.childComponentFirstName = instance;
          }}
        />
        <TextInputWithUnderLine
          viewStyle={{ marginTop: 15 }}
          paddingHorizontalValue={40}
          autoCapitalize="none"
          autoCorrect={false}
          color={Colors.light}
          value={this.state.phone}
          placeholder="Phone number"
          keyboardType="numeric"
          returnKeyType="next"
          onChangeText={(text) => {
            this.setState({ phone: text });
          }}
          ref={(instance) => {
            this.childComponentPhone = instance;
          }}
          numberTextInput="Next"
          onSubmitEditing={() => this.onSubmitTextInput(this.TEXTINPUT_PHONENUMBER)}
          onDone={() => this.onSubmitTextInput(this.TEXTINPUT_PHONENUMBER)}
        />
        <TextInputWithUnderLine
          viewStyle={{ marginTop: 15 }}
          paddingHorizontalValue={40}
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          returnKeyType="next"
          color={Colors.light}
          value={this.state.email}
          onChangeText={(text) => {
            this.setState({ email: text });
          }}
          onSubmitEditing={() => this.onSubmitTextInput(this.TEXTINPUT_EMAIL)}
          ref={(instance) => {
            this.childComponentEmail = instance;
          }}
        />
        <TextInputWithUnderLine
          viewStyle={{ marginTop: 15 }}
          paddingHorizontalValue={40}
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          color={Colors.light}
          value={this.state.password}
          secureTextEntry
          onChangeText={(text) => {
            this.setState({ password: text });
          }}
          onSubmitEditing={() => this.onSubmitTextInput(this.TEXTINPUT_PASSWORD)}
          ref={(instance) => {
            this.childComponentPassword = instance;
          }}
        />
        <TextInputWithUnderLine
          viewStyle={{ marginTop: 15 }}
          paddingHorizontalValue={40}
          placeholder="Confirm Password"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="done"
          color={Colors.light}
          value={this.state.confirmPassword}
          secureTextEntry
          onChangeText={(text) => {
            this.setState({ confirmPassword: text });
          }}
          onSubmitEditing={() => this.onSubmitTextInput(this.TEXTINPUT_CONFIRM)}
          ref={(instance) => {
            this.childComponentConfirm = instance;
          }}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacityWithRectangle
            buttonName="Đăng kí"
            backgroundColor={Colors.light}
            onPress={this.onRegister}
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  backButtonView: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    marginLeft: Platform.OS === 'ios' ? 5 : 0,
    height: 50,
    width: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 43,
    justifyContent: 'center',
  },
});

function mapStateToProps(state) {
  return {
    isLogined: state.user.isLogined,
    loading: state.login.loading,
    error: state.login.error,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    register: data => dispatch(LoginActions.register(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
