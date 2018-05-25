import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Navigation } from 'react-native-navigation';
import { navigatorHiddenTab } from '../../navigation/navigatonStyle';
import ButtonClose from './ButtonClose';
import FileRecord from './FileRecord';

const { width, height } = Dimensions.get('window');

class SearchDetail extends Component {
  static navigatorStyle = navigatorHiddenTab;

  constructor(props) {
    super(props);
    this.state = {
      animation: 'zoomIn',
    };
  }

  onClose = () => {
    this.setState({ animation: 'zoomOut' });
    Navigation.dismissLightBox();
  };

  render() {
    return (
      <Animatable.View
        animation={this.state.animation}
        style={styles.container}
      >
        <Text style={styles.txtHeader}>{this.props.data.name}</Text>
        <View style={styles.content}>
          <FileRecord />
        </View>
        <ButtonClose onClose={this.onClose} />
      </Animatable.View>
    );
  }
}

SearchDetail.propTypes = {
  data: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: height - 60,
    width: width - 30,
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchDetail;
