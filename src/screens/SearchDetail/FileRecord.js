import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { Colors } from '../../themes';
import InputRow from '../../components/InputRow';

const { width } = Dimensions.get('window');

class FileRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.regularPrice = React.createRef();
  }

  onSelectedInput() {}

  openCameraScan = () => {
    Navigation.showModal({
      screen: 'app.ScanNumber',
      navigatorStyle: {
        navBarHidden: true,
      },
    });
  };

  render() {
    // const { data } = this.props;
    return (
      <View style={styles.container}>
        <InputRow
          ref={this.regularPrice}
          returnKeyType="next"
          underLine
          icon="md-camera"
          onPressIcon={this.openCameraScan}
          animatedTitle
          style={styles.inputText}
          onFocus={() => {}}
          textColor={Colors.primary}
          placeholderTextColor={Colors.grey}
          placeholder="Nhập mã hồ sơ"
          onSubmitEditing={() => {}}
        />
        <ScrollView style={styles.container} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputText: {
    height: 60,
    width: width - 70,
  },
});

// function mapStateToProps(state) {
//   return {};
// }

// const mapDispatchToProps = dispatch => {
//   return {};
// };

// export default connect(mapStateToProps, mapDispatchToProps)(FileRecord);
export default FileRecord;
