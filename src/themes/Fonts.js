import Colors from './Colors';

const type = {
  // regular: 'SFProDisplay-Regular',
  // medium: 'SFProDisplay-Medium',
  // bold: 'SFProDisplay-Bold',
  // boldDisplay: 'SFProDisplay-Bold',
  // semiBold: 'SFProDisplay-Semibold',
  // itatic: 'SFProDisplay-Italic',
  // bolditalic: 'SFProDisplay-BoldItalic',
  regular: 'System',
  medium: 'System',
  bold: 'System',
  boldDisplay: 'System',
  semiBold: 'System',
  itatic: 'System',
  bolditalic: 'System',
};

const font = {
  text: 'Poppins-Medium',
  note: 'Poppins-Medium',
  title: 'Poppins-Regular',
  header: 'Poppins-Thin',
};

const size = {
  tiny: 8.5,
  semiSmall: 10,
  small: 11,
  xsmall: 13,
  normal: 15,
  large: 17,
  xlarge: 18,
  xxlarge: 20,
  title: 23,
  titleN: 24,
  titleL: 26,
  header: 40,
};

const style = {
  h1: {
    fontFamily: type.regular,
    fontSize: size.h1,
  },
  h2: {
    fontFamily: type.bold,
    fontSize: size.h2,
  },
  h3: {
    fontFamily: type.regular,
    fontSize: size.h3,
  },
  h4: {
    fontFamily: type.regular,
    fontSize: size.h4,
  },
  h5: {
    fontFamily: type.regular,
    fontSize: size.h5,
  },
  h6: {
    fontFamily: type.regular,
    fontSize: size.h6,
    fontWeight: '300',
  },
  regular: {
    fontFamily: type.regular,
    fontSize: size.regular,
  },
  small: {
    fontFamily: type.regular,
    fontSize: size.small,
  },
  tiny: {
    fontFamily: type.regular,
    fontSize: size.tiny,
  },
  thin: {
    fontFamily: type.regular,
    fontSize: size.medium,
  },
  bold: {
    fontFamily: type.bold,
    fontSize: size.regular,
    color: Colors.primaryText,
  },
  semiBold: {
    fontFamily: type.semiBold,
    fontSize: size.small,
    color: Colors.primaryText,
  },
  itatic: {
    fontFamily: type.itatic,
    fontSize: size.medium,
    color: Colors.primaryTextBlur,
  },
  medium: {
    fontFamily: type.medium,
    fontSize: size.medium,
    color: Colors.primaryText,
  },
  semi: {
    fontFamily: type.regular,
    fontSize: size.semi,
    color: Colors.primaryText,
  },
  bigBold: {
    fontFamily: type.bold,
    fontSize: size.h4,
    color: Colors.primaryText,
  },
  bigNormal: {
    fontFamily: type.regular,
    fontSize: 23,
    color: Colors.lightGray,
    fontWeight: 'normal',
  },
};

export default {
  type,
  size,
  font,
  style,
};
