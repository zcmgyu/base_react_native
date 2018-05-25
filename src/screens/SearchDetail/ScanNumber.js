import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { View, StyleSheet, Dimensions } from 'react-native';
import RNTesseractOcr from 'react-native-tesseract-ocr';
import ImagePicker from 'react-native-image-picker';
import ButtonClose from './ButtonClose';

const { width, height } = Dimensions.get('window');

class ScanNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const options = {
      title: 'Select Avatar',
      customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // const source = { uri: response.uri };
        this.getCodeFromImage(response.uri);
        // this.setState({
        //   avatarSource: source,
        // });
      }
    });
  }

  onClose = () => {
    Navigation.dismissModal();
  };

  getCodeFromImage(imgPath) {
    /**
     * @param {string} imgPath - The path of the image.
     * @param {string} lang - The language you want to process.
     * @param {object} tessOptions - Tesseract options.
     */
    const tessOptions = {};

    RNTesseractOcr.recognize(imgPath, 'LANG_ENGLISH', tessOptions)
      .then(result => {
        // this.setState({ ocrResult: result });
        console.log('OCR Result: ', result);
      })
      .catch(err => {
        console.log('OCR Error: ', err);
      })
      .done();
  }

  render() {
    return (
      <View style={styles.container}>
        <ButtonClose onClose={this.onClose} />
      </View>
    );
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

export default ScanNumber;
