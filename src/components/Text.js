import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  PixelRatio,
  Dimensions,
  Text as RNText,
} from 'react-native';
import { font, size } from '../themes/Fonts';

const pixelRatio = PixelRatio.get();
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const normalize = deviceSize => {
  if (pixelRatio === 2) {
    // iphone 5s and older Androids
    if (deviceWidth < 360) {
      return deviceSize * 1.1;
    }
    // iphone 5
    if (deviceHeight < 667) {
      return deviceSize * 1.1;
      // iphone 6-6s
    } else if (deviceHeight >= 667 && deviceHeight <= 735) {
      return deviceSize * 1.15;
    }
    // older phablets
    return deviceSize * 1.25;
  }
  if (pixelRatio === 3) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (deviceWidth <= 360) {
      return deviceSize * 1.1;
    }
    // Catch other weird android width sizings
    if (deviceHeight < 667) {
      return deviceSize * 1.15;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    }
    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return deviceSize * 1.2;
    }
    // catch larger devices
    // ie iphone 6s plus / 7 plus / mi note 等等
    return deviceSize * 1.27;
  }
  if (pixelRatio === 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (deviceWidth <= 360) {
      return deviceSize * 1.1;
      // Catch other smaller android height sizings
    }
    if (deviceHeight < 667) {
      return deviceSize * 1.2;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    }
    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return deviceSize * 1.25;
    }
    // catch larger phablet devices
    return deviceSize * 1.4;
  }
  // if older device ie pixelRatio !== 2 || 3 || 3.5
  return deviceSize;
};

const Note = props => {
  return (
    <RNText
      {...props}
      style={[styles.note, props.color && { color: props.color }, props.style]}
      allowFontScaling={false}
    >
      {props.children}
    </RNText>
  );
};

// Note.propTypes = {
//   color: PropTypes.object,
//   style: PropTypes.object,
//   children: PropTypes.element,
// };

const SubNote = props => {
  return (
    <RNText
      {...props}
      style={[
        styles.subNote,
        props.color && { color: props.color },
        props.style,
      ]}
      allowFontScaling={false}
    >
      {props.children}
    </RNText>
  );
};

SubNote.propTypes = {
  color: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.element,
};

const LargeNote = props => {
  return (
    <RNText
      {...props}
      style={[
        styles.largeNote,
        props.color && { color: props.color },
        props.style,
      ]}
      allowFontScaling={false}
    >
      {props.children}
    </RNText>
  );
};

LargeNote.propTypes = {
  color: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.element,
};

const XLargeNote = props => {
  return (
    <RNText
      {...props}
      style={[
        styles.xLargeNote,
        props.color && { color: props.color },
        props.style,
      ]}
      allowFontScaling={false}
    >
      {props.children}
    </RNText>
  );
};

XLargeNote.propTypes = {
  color: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.element,
};

const XXLargeNote = props => {
  return (
    <RNText
      {...props}
      style={[
        styles.xxLargeNote,
        props.color && { color: props.color },
        props.style,
      ]}
      allowFontScaling={false}
    >
      {props.children}
    </RNText>
  );
};

XXLargeNote.propTypes = {
  color: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.element,
};

const Text = props => {
  return (
    <RNText
      {...props}
      style={[styles.text, props.color && { color: props.color }, props.style]}
      allowFontScaling={false}
    >
      {props.children}
    </RNText>
  );
};

Text.propTypes = {
  color: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.element,
};

const SubText = props => {
  return (
    <RNText
      {...props}
      style={[
        styles.subText,
        props.color && { color: props.color },
        props.style,
      ]}
      allowFontScaling={false}
    >
      {props.children}
    </RNText>
  );
};

SubText.propTypes = {
  color: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.element,
};

const LargeText = props => {
  return (
    <RNText
      {...props}
      style={[
        styles.largeText,
        props.color && { color: props.color },
        props.style,
      ]}
      allowFontScaling={false}
    >
      {props.children}
    </RNText>
  );
};

LargeText.propTypes = {
  color: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.element,
};

const XLargeText = props => {
  return (
    <RNText
      {...props}
      style={[
        styles.xLargeText,
        props.color && { color: props.color },
        props.style,
      ]}
      allowFontScaling={false}
    >
      {props.children}
    </RNText>
  );
};

XLargeText.propTypes = {
  color: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.element,
};

const XXLargeText = props => {
  return (
    <RNText
      {...props}
      style={[
        styles.xxLargeText,
        props.color && { color: props.color },
        props.style,
      ]}
      allowFontScaling={false}
    >
      {props.children}
    </RNText>
  );
};

XXLargeText.propTypes = {
  color: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.element,
};

const BoldText = props => {
  return (
    <RNText
      {...props}
      style={[
        styles.boldText,
        props.color && { color: props.color },
        props.style,
      ]}
      allowFontScaling={false}
    >
      {props.children}
    </RNText>
  );
};

BoldText.propTypes = {
  color: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.element,
};

const SubTitle = props => {
  return (
    <RNText
      {...props}
      style={[
        styles.subTitle,
        props.color && { color: props.color },
        props.style,
      ]}
      allowFontScaling={false}
    >
      {props.children}
    </RNText>
  );
};

SubTitle.propTypes = {
  color: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.element,
};

const Title = props => {
  return (
    <RNText
      {...props}
      style={[styles.title, props.color && { color: props.color }, props.style]}
      allowFontScaling={false}
    >
      {props.children}
    </RNText>
  );
};

Title.propTypes = {
  color: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.element,
};

const styles = StyleSheet.create({
  subNote: {
    fontSize: size.small,
    fontFamily: font.note,
    color: 'black',
  },
  note: {
    fontSize: size.normal,
    fontFamily: font.note,
    color: 'black',
  },
  largeNote: {
    fontSize: size.large,
    fontFamily: font.note,
    color: 'black',
  },
  xLargeNote: {
    fontSize: size.xlarge,
    fontFamily: font.note,
    color: 'black',
  },
  xxLargeNote: {
    fontSize: size.xxlarge,
    fontFamily: font.note,
    color: 'black',
  },
  subText: {
    fontSize: size.small,
    fontFamily: font.text,
    color: 'black',
  },
  text: {
    fontSize: size.small,
    fontFamily: font.text,
    color: 'black',
  },
  largeText: {
    fontSize: size.xxlarge,
    fontFamily: font.title,
    color: 'black',
  },
  xLargeText: {
    fontSize: size.xlarge,
    fontFamily: font.text,
    color: 'black',
  },
  xxLargeText: {
    fontSize: size.xxlarge,
    fontFamily: font.text,
    color: 'black',
  },
  subTitle: {
    fontSize: size.xxlarge,
    fontFamily: font.title,
    color: 'black',
  },
  title: {
    fontSize: size.titleL,
    fontFamily: font.title,
    color: 'black',
  },
  boldText: {
    fontSize: size.normal,
    fontFamily: font.header,
    color: 'black',
  },
  // Header: {
  //   fontSize: normalize(size.titleL),
  //   fontFamily: font.header,
  //   color: 'black',
  // },
});

export {
  normalize,
  SubNote,
  Note,
  LargeNote,
  XLargeNote,
  XXLargeNote,
  SubText,
  Text,
  LargeText,
  XLargeText,
  XXLargeText,
  SubTitle,
  Title,
  BoldText,
};
