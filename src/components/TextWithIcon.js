import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import Icomoon from 'react-native-vector-icons/icomoon';
import { Fonts, Metrics, Colors, Scale } from '../themes';

class TextWithIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const iconStyle = {
    //   tiny: { size: Metrics.icons.tiny, style: styles.iconTiny },
    //   small: { size: Metrics.icons.small, style: styles.icon },
    // };
    return (
      <View
        style={[
          styles.row,
          this.props.style,
          this.props.center ? {} : { justifyContent: 'flex-start' },
        ]}
      >
        {/* {this.props.icomoon &&
          this.props.type !== 'right' && (
            <Icomoon
              name={this.props.icomoon}
              size={this.props.iconSize || 17}
              style={[styles.icon, this.props.iconStyle]}
            />
          )} */}
        {this.props.icon &&
          this.props.type !== 'right' && (
            <Icon
              name={this.props.icon}
              size={this.props.iconSize || 17}
              style={[styles.icon, this.props.iconStyle]}
            />
          )}
        {this.props.title && (
          <Text
            numberOfLines={this.props.multiline ? 999 : 1}
            style={[
              this.props.type != 'right'
                ? styles.titleLeftType
                : styles.titleRightType,
              this.props.center ? {} : styles.flex,
              this.props.textStyle,
            ]}
          >
            {this.props.title}
          </Text>
        )}
        {this.props.icomoon &&
          this.props.type === 'right' && (
            <Icomoon
              name={this.props.icomoon}
              size={this.props.iconSize || 17}
              style={[
                styles.icon,
                this.props.iconStyle,
                { alignItems: 'flex-end' },
              ]}
            />
          )}
        {this.props.icon &&
          this.props.type === 'right' && (
            <Icon
              name={this.props.icon}
              size={this.props.iconSize || 17}
              style={[
                styles.icon,
                this.props.iconStyle,
                { alignItems: 'flex-end' },
              ]}
            />
          )}
        {this.props.children}
      </View>
    );
  }
}

const styles = {
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleLeftType: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: Fonts.size.medium,
    color: Colors.primaryText,
    textAlign: 'center',
    marginLeft: 5,
  },
  titleRightType: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: Fonts.size.medium,
    color: Colors.primaryText,
    textAlign: 'center',
    marginRight: 5,
  },
  flex: {
    flex: 1,
    textAlign: 'left',
  },
  icon: {
    color: Colors.accent,
    textAlign: 'center',
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  iconTiny: {
    color: Colors.secondaryText,
    width: 20 * Scale,
    textAlign: 'left',
    justifyContent: 'center',
  },
};

export default TextWithIcon;
