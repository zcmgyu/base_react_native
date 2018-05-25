import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  ScrollView,
  ViewPagerAndroid,
  Platform,
} from 'react-native';

export default class ViewPager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      selectedIndex: this.props.selectedIndex,
      initialSelectedIndex: this.props.selectedIndex,
      scrollingTo: null,
      visible: true,
    };
    this.handleHorizontalScroll = this.handleHorizontalScroll.bind(this);
    this.adjustCardSize = this.adjustCardSize.bind(this);
    this.scrollView = React.createRef();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedIndex !== this.state.selectedIndex) {
      if (Platform.OS === 'ios') {
        this.scrollView.scrollTo({
          x: nextProps.selectedIndex * this.state.width,
          animated: false,
        });
        this.setState({ scrollingTo: nextProps.selectedIndex });
      } else {
        this.scrollView.setPage(nextProps.selectedIndex);
        this.setState({ selectedIndex: nextProps.selectedIndex });
      }
    }
  }

  adjustCardSize(e) {
    this.setState({
      width: e.nativeEvent.layout.width,
      height: e.nativeEvent.layout.height,
    });
  }

  /* eslint-disable no-unused-expressions */
  handleHorizontalScroll(e) {
    let selectedIndex = e.nativeEvent.position;
    if (selectedIndex === undefined) {
      selectedIndex = Math.round(
        e.nativeEvent.contentOffset.x / this.state.width,
      );
    }
    if (selectedIndex < 0 || selectedIndex >= this.props.count) {
      return;
    }
    if (
      this.state.scrollingTo !== null &&
      this.state.scrollingTo !== selectedIndex
    ) {
      return;
    }
    if (
      this.props.selectedIndex !== selectedIndex ||
      this.state.scrollingTo !== null
    ) {
      this.setState({ selectedIndex, scrollingTo: null });
      const { onSelectedIndexChange } = this.props;
      onSelectedIndexChange && onSelectedIndexChange(selectedIndex);
    }
  }

  renderContent() {
    const { width, height } = this.state;
    const style = Platform.OS === 'ios' && styles.card;
    return React.Children.map(this.props.children, (child, i) => (
      <View style={[style, { width, height }]} key={`r_${i}`}>
        {child}
      </View>
    ));
  }

  renderIOS() {
    return (
      <ScrollView
        ref={this.scrollView}
        contentOffset={{
          x: this.state.width * this.state.initialSelectedIndex,
          y: 0,
        }}
        style={[styles.scrollview, this.props.style]}
        horizontal
        pagingEnabled
        bounces={!!this.props.bounces}
        scrollsToTop={false}
        onScroll={this.handleHorizontalScroll}
        scrollEventThrottle={100}
        scrollEnabled={this.props.scrollEnabled}
        removeClippedSubviews
        automaticallyAdjustContentInsets={false}
        directionalLockEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onLayout={this.adjustCardSize}
      >
        {this.renderContent()}
      </ScrollView>
    );
  }

  renderAndroid() {
    return (
      <ViewPagerAndroid
        ref={this.scrollView}
        initialPage={this.state.initialSelectedIndex}
        onPageSelected={this.handleHorizontalScroll}
        scrollEnabled={this.props.scrollEnabled}
        style={[styles.container, { flex: this.state.visible ? 1 : 0 }]}
      >
        {this.renderContent()}
      </ViewPagerAndroid>
    );
  }

  render() {
    if (Platform.OS === 'ios') {
      return this.renderIOS();
    }
    return this.renderAndroid();
  }
}

ViewPager.propTypes = {
  scrollEnabled: PropTypes.bool,
  bounces: PropTypes.bool,
  selectedIndex: PropTypes.number,
  count: PropTypes.number,
  children: PropTypes.element,
  style: PropTypes.object,
  onSelectedIndexChange: PropTypes.func,
};

ViewPager.defaultProps = {
  scrollEnabled: true,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollview: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  card: {
    backgroundColor: 'transparent',
  },
});
