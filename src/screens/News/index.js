import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { Colors } from '../../themes';
import { NEWS_DATA } from '../../dummyData';
import { shuffle } from '../../utils/arrayUtils';
import NewsItem from './NewsItem';
import actions from '../../redux/NewsRedux/actions';

class News extends Component {
  static navigatorStyle = { navBarHideOnScroll: true };

  constructor(props) {
    super(props);
    this.state = {};
  }

  onPressItem = item => {
    this.props.setCurrentNews(item);
    this.props.navigator.push({
      screen: 'app.NewsDetail', // unique ID registered with Navigation.registerScreen
      title: 'Detail', // navigation bar title of the pushed screen (optional)
      subtitle: undefined, // navigation bar subtitle of the pushed screen (optional)
      passProps: { item }, // Object that will be passed as props to the pushed screen (optional)
      animated: true, // does the push have transition animation or does it happen immediately (optional)
      animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
    });
  };

  render() {
    const { data } = this.props;
    console.log('data', data);
    return (
      <FlatList
        style={styles.list}
        data={data}
        ItemSeparatorComponent={() => <View style={styles.vSeparator} />}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item, index }) => <NewsItem item={item} index={index} onPressItem={() => this.onPressItem(item)} />}
      />
    );
  }
}

News.propTypes = {
  navigator: PropTypes.any,
  setCurrentNews: PropTypes.func,
  data: PropTypes.array,
};

News.defaultProps = {
  data: shuffle(NEWS_DATA),
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  vSeparator: {
    marginLeft: 90,
    height: 0.5,
    backgroundColor: Colors.greyLight,
  },
});

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentNews: data => dispatch(actions.setCurrentNews(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
