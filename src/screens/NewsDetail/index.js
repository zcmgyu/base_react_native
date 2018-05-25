import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { navigatorHiddenTab } from '../../navigation/navigatonStyle';

class NewsDetail extends Component {
  static navigatorStyle = navigatorHiddenTab;

  constructor(props) {
    super(props);
    this.state = {};
  }

  // onPressItem(item, index) {
  //   alert('waiting..');
  // }

  render() {
    // const { data } = this.props;
    return <View />;
  }
}

function mapStateToProps(state) {
  return {
    news: state.news.current,
  };
}

export default connect(mapStateToProps)(NewsDetail);
