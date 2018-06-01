import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { navigatorHiddenTab } from '../../navigation/navigatonStyle';

class NewsDetail extends Component {
  static navigatorStyle = navigatorHiddenTab;

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, thumbnail, date } = this.props.item;
    return (
      <View style={styles.container}>
        <Image source={{ uri: thumbnail }} style={styles.image} resizeMode="contain" />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    height: Dimensions.get('window').width - 140,
  },
  date: {
    fontStyle: 'italic',
    textAlign: 'right',
  },
});

function mapStateToProps(state) {
  return {
    news: state.news.current,
  };
}

export default connect(mapStateToProps)(NewsDetail);
