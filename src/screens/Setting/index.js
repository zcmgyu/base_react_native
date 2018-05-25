import React, { Component } from 'react';
import { ScrollView, StyleSheet, Platform, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import { Colors, Images } from '../../themes';
import UserInfo from './UserInfo';
import SettingItem from './SettingItem';
import { startUp } from '../../Setup';

class Setting extends Component {
  static navigatorStyle = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  editProfile = () => {};

  doSomething = () => {};

  logout = () => {
    startUp();
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <UserInfo onPress={this.editProfile} />
        <SettingItem onPress={this.doSomething} title="設定" />
        <SettingItem onPress={this.doSomething} title="お知らせ" />
        <SettingItem onPress={this.doSomething} title="よくある質問" />
        <SettingItem
          noBottomBorder
          onPress={this.doSomething}
          title="お問い合わせ"
        />
        <SettingItem
          noBottomBorder
          unShowArrow
          onPress={this.logout}
          title="ログアウト"
          color={Colors.red}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// function mapStateToProps(state) {
//   return {};
// }

// const mapDispatchToProps = dispatch => {
//   return {};
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Setting);
export default Setting;
