import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, FlatList } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { SEARCH_TYPE_DATA } from '../../dummyData';
import SearchItem from './SearchItem';

class Search extends Component {
  static navigatorStyle = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  onPressItem = item => {
    Navigation.showLightBox({
      screen: 'app.SearchDetail',
      passProps: {
        data: item,
      },
      style: {
        backgroundBlur: 'none',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        tapBackgroundToDismiss: 'true',
      },
    });
  };

  render() {
    const { data } = this.props;
    return (
      <FlatList
        style={styles.list}
        data={data}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <SearchItem
            item={item}
            index={index}
            onPressItem={() => this.onPressItem(item, index)}
          />
        )}
      />
    );
  }
}

Search.propTypes = {
  data: PropTypes.array,
};

Search.defaultProps = {
  data: SEARCH_TYPE_DATA,
};

const styles = StyleSheet.create({});

export default Search;
