import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class CreateForm extends Component {
  static navigatorStyle = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <View style={styles.container} />;
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


// export default connect(mapStateToProps, mapDispatchToProps)(CreateForm);
export default CreateForm;
