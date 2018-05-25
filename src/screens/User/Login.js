import React, { Component } from 'react';
import { View, StyleSheet, Platform, Keyboard, Alert, Dimensions } from 'react-native';
import { connect } from 'react-redux';
// import Icon from 'react-native-vector-icons/thebooks';
import Container from '../../components/Container';
import { Colors } from '../../themes';
import Tools from '../../utils/Tools';
import { showAlertError } from '../../utils/AlertView';
import { LargeText, LargeNote } from '../../components/Text';
import Touchable from '../../components/Touchable';
import TextInputWithUnderLine from '../../components/TextInputWithUnderline';
import TouchableOpacityWithRectangle from '../../components/TouchableOpacityWithRectangle';

const { width } = Dimensions.get('window');

import LoginActions from '../../redux/LoginRedux/actions';

class Login extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isCurrentScreen: null,
      firstRender: true,
    };

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  componentWillReceiveProps(newProps) {
    if (this.state.isCurrentScreen) {
      if (newProps.isLogined && !this.props.isLogined) {
        this.onDismiss();
      } else if (newProps.error !== null && !this.props.error) {
        showAlertError(newProps.error);
      }
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (!nextState.firstRender && this.state.firstRender) {
  //     return false;
  //   }
  //   if (!nextState.isCurrentScreen) {
  //     return false;
  //   }
  //   return true;
  // }

  onNavigatorEvent(event) {
    if (event.id === 'willAppear') {
      if (this.state.firstRender) {
        this.setState({ firstRender: false, isCurrentScreen: true });
      } else {
        this.setState({ isCurrentScreen: true });
      }
    }
    if (event.id === 'willDisappear') {
      this.setState({ isCurrentScreen: false });
    }
    if (event.id === 'back') {
      this.props.navigator.pop();
    }
  }

  onDismiss() {
    Keyboard.dismiss();
    this.setState({ email: '', password: '' });
    this.props.navigator.dismissModal({
      animated: true,
    });
  }

  onSubmitTextInput(textInput) {
    if (textInput === this.TEXTINPUT_EMAIL) {
      this.childComponentPassword.onFocus();
    }
    if (textInput === this.TEXTINPUT_PASSWORD) {
      Keyboard.dismiss();
      this.onLogin();
    }
  }

  onRegister = () => {
    Keyboard.dismiss();
    this.setState({ email: '', password: '' });
    this.props.navigator.push({
      screen: 'app.Register',
      passProps: { back: !!this.props.title },
    });
  };

  onLogin = () => {
    if (!Tools.validateField(this.state.email)) {
      return Alert.alert('My Accountant', 'Email can not be empty.', [
        { text: 'Ok', onPress: () => this.childComponentEmail.onFocus() },
      ]);
    }
    if (!Tools.validateEmail(this.state.email)) {
      return Alert.alert('My Accountant', 'Email not correct.', [
        { text: 'Ok', onPress: () => this.childComponentEmail.onFocus() },
      ]);
    }
    if (!Tools.validateField(this.state.password)) {
      return Alert.alert('My Accountant', 'Password can not be empty.', [
        { text: 'Ok', onPress: () => this.childComponentPassword.onFocus() },
      ]);
    }
    if (this.state.password.length < 6) {
      return Alert.alert('My Accountant', 'Password must have at least 6 characters.', [
        { text: 'Ok', onPress: () => this.childComponentPassword.onFocus() },
      ]);
    }
    const data = {
      grant_type: 'password',
      username: this.state.email,
      password: this.state.password,
    };
    Keyboard.dismiss();
    this.props.login(data);
  };

  onForgotPassword = () => {
    this.props.navigator.push({ screen: 'forgotPassword' });
  };

  TEXTINPUT_EMAIL = 'TEXTINPUT_EMAIL';
  TEXTINPUT_PASSWORD = 'TEXTINPUT_PASSWORD';
  childComponentEmail = null;
  childComponentPassword = null;

  renderCloseButton() {
    return (
      <Touchable
        onPress={() => this.onDismiss()}
        style={styles.backButton}
        touchableHighlight="transparent"
      >
        <View style={styles.backButtonView}>
          {/* <Icon
            name="ic-delete"
            color={Colors.greyLight}
            size={16}
            style={{ backgroundColor: 'transparent' }}
          /> */}
        </View>
      </Touchable>
    );
  }

  render() {
    return (
      <Container loading={this.props.loading} haveTextInput>
        {this.props.title ? (
          <LargeText
            style={{
              alignSelf: 'center',
              width: width - 40,
              marginTop: 20,
              marginBottom: 5,
              textAlign: 'center',
              color: Colors.grey,
            }}
          >
            {this.props.title}
          </LargeText>
        ) : (
          this.renderCloseButton()
        )}
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
          // icon="ic-mail-sign-in"
        />
        <TextInputWithUnderLine
          viewStyle={{ marginTop: 25 }}
          paddingHorizontalValue={40}
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="done"
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
          // icon="ic-password"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacityWithRectangle
            buttonName="Đăng nhập"
            backgroundColor={Colors.primary}
            onPress={this.onLogin}
          />
          <TouchableOpacityWithRectangle
            buttonName="Đăng kí"
            backgroundColor={Colors.light}
            onPress={this.onRegister}
            marginLeft={26}
          />
        </View>
        <Touchable onPress={this.onForgotPassword}>
          <View style={styles.forgotPasswordView}>
            <LargeNote style={{ color: Colors.grey }}>Quên mật khẩu?</LargeNote>
          </View>
        </Touchable>
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
  forgotPasswordView: {
    height: 44,
    alignSelf: 'center',
    marginTop: 5,
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
    login: data => dispatch(LoginActions.login(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
