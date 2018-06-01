import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class CreateForm extends Component {
  static navigatorStyle = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Create something</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  title: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16,
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
