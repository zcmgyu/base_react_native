// import { font, size } from '../Fonts';
import Fonts from '../Fonts';
import Colors from '../Colors';

const { font, size } = Fonts;

export default {
  txtTitle: {
    fontFamily: font.title,
    fontSize: size.large,
  },
  txtTitle_center: {
    fontFamily: font.title,
    fontSize: size.large,
    textAlign: 'center',
  },
  txtSubTitle: {},
  txtItemTitle: {
    fontFamily: font.title,
    fontSize: size.normal,
  },
  txtItemSubTitle: {
    fontFamily: font.title,
    fontSize: size.xsmall,
  },
  txtItemSubTitle_italic: {
    fontFamily: font.title,
    fontSize: size.xsmall,
    fontStyle: 'italic',
    color: Colors.greyLight,
  },
  txtDescription: {},
};
