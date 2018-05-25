import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Text } from '../../components/Text';
import { Colors } from '../../themes';
import TouchableOpacityWithRectangle from '../../components/TouchableOpacityWithRectangle';
import Container from '../../components/Container';
import Login from './Login';

import LoginActions from '../../redux/LoginRedux/actions';

class UserProfile extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  logout = () => {
    this.props.logout();
  };

  login = () => {
    this.props.navigator.showModal({ screen: 'login' });
  };

  renderLogined() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Chúc mừng bạn đã login success</Text>
        <TouchableOpacityWithRectangle
          buttonName="Log out"
          onPress={this.logout}
          backgroundColor={Colors.green}
        />
      </View>
    );
  }

  renderNotLogined() {
    return <Login title="Bạn chưa đăng nhập" navigator={this.props.navigator} />;
  }

  render() {
    return (
      <Container>{this.props.isLogined ? this.renderLogined() : this.renderNotLogined()}</Container>
    );
  }
}

const styles = StyleSheet.create({});

function mapStateToProps(state) {
  return {
    isLogined: state.user.isLogined,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: data => dispatch(LoginActions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
