import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

class Bus extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { data } = this.props;
    return <View animation={this.state.animation} style={styles.container} />;
  }
}

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

// function mapStateToProps(state) {
//   return {};
// }

// const mapDispatchToProps = dispatch => {
//   return {};
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Bus);
export default Bus;
