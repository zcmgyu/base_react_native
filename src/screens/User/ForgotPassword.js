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

class ForgotPassword extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isCurrentScreen: true,
    };

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  componentWillReceiveProps(newProps) {
    if (this.state.isCurrentScreen) {
      if (newProps.messageForgotPassword.length !== 0) {
        Alert.alert('The Books', `${newProps.messageForgotPassword}`);
        this.setState({ email: '' });
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
  }

  onBack() {
    Keyboard.dismiss();
    this.setState({
      email: '',
    });
    this.props.navigator.pop({
      animated: true,
    });
  }

  onSubmitTextInput(textInput) {
    if (textInput === this.TEXTINPUT_EMAIL) {
      this.onForgotPassword();
    }
  }

  onForgotPassword = () => {
    if (!Tools.validateEmail(this.state.email)) {
      return Alert.alert('The Books', 'Tài khoản email không đúng', [
        { text: 'Ok', onPress: () => this.childComponentEmail.onFocus() },
      ]);
    }

    const data = {
      Email: this.state.email,
    };

    this.props.forgotPassword(data);
  };

  TEXTINPUT_EMAIL = 'TEXTINPUT_EMAIL';
  childComponentEmail = null;

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
          viewStyle={{ marginTop: 15, paddingHorizontal: 40 }}
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
        <View style={styles.buttonContainer}>
          <TouchableOpacityWithRectangle
            buttonName="Gửi"
            backgroundColor={Colors.light}
            onPress={this.onForgotPassword}
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
    loading: state.login.loading,
    error: state.login.error,
    messageForgotPassword: state.login.messageForgotPassword,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    forgotPassword: data => dispatch(LoginActions.forgotPassword(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
