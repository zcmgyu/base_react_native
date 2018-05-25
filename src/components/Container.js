import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  Platform,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '../themes';

const { height } = Dimensions.get('window');

const Container = props => {
  if (props.awareInput) {
    return (
      <KeyboardAwareScrollView
        style={{ backgroundColor: 'white' }}
        keyboardShouldPersistTaps="always"
        contentContainerStyle={[
          { backgroundColor: 'white' },
          props.center && styles.center,
          props.style && props.style,
        ]}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1 }}>
            {props.children}
            {props.loading && (
              <View style={styles.fadeView}>
                <ActivityIndicator animating color={Colors.grey} size="large" />
              </View>
            )}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    );
  }
  if (props.haveTextInput) {
    return (
      <ScrollView
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="always"
        contentContainerStyle={[
          styles.container,
          props.center && styles.center,
          props.style && props.style,
        ]}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1 }}>
            {props.children}
            {props.loading && (
              <View style={styles.fadeView}>
                <ActivityIndicator animating color={Colors.grey} size="large" />
              </View>
            )}
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    );
  }
  if (props.scrollEnabled) {
    return (
      <View style={{ flex: 1 }}>
        {Platform.OS === 'ios' && <View style={{ height: 20 }} />}
        <ScrollView
          keyboardShouldPersistTaps="always"
          scrollEnabled
          keyboardDismissMode="on-drag"
          styles={[
            styles.container,
            props.center && styles.center,
            props.style && props.style,
          ]}
          contentContainerStyle={[
            props.contentStyle && props.contentStyle,
            {
              minHeight: height - (Platform.OS === 'ios' ? 64 : 56),
            },
          ]}
          refreshControl={props.refreshControl}
        >
          {props.children}
          {props.loading && (
            <View style={styles.fadeView}>
              <ActivityIndicator animating color={Colors.grey} size="large" />
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
  return (
    <View style={[{ flex: 1, backgroundColor: 'white' }, props.style]}>
      {props.children}
      {props.loading && (
        <View style={styles.fadeView}>
          <ActivityIndicator animating color={Colors.grey} size="large" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  fadeView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Container.propTypes = {
  awareInput: PropTypes.any,
  haveTextInput: PropTypes.bool,
  refreshControl: PropTypes.any,
  scrollEnabled: PropTypes.bool,
  center: PropTypes.object,
  style: PropTypes.object,
  contentStyle: PropTypes.object,
  loading: PropTypes.bool,
  children: PropTypes.element,
};

export default Container;
