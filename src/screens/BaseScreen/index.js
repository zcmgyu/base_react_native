import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import Container from '../../components/Container';
import { showAlertError } from '../../utils/AlertView';
import { Text } from '../../components/Text';

class Cart extends Component {
  static navigatorStyle = {
    // navBarHidden: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      isCurrentScreen: null,
      firstRender: true,
    };

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  componentWillReceiveProps(newProps) {
    if (this.state.isCurrentScreen) {
      if (newProps.error !== null && !this.props.error) {
        showAlertError(newProps.error);
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!nextState.firstRender && this.state.firstRender) {
      return false;
    }
    if (!nextState.isCurrentScreen) {
      return false;
    }
    return true;
  }

  onNavigatorEvent = event => {
    if (event.id === 'willAppear') {
      if (this.state.firstRender) {
        this.setState({ firstRender: false, isCurrentScreen: true });
      } else {
        this.setState({ isCurrentScreen: true });
      }
    }
    if (event.id === 'willDisappear') {
      this.setState({ isCurrentScreen: false });
    }
  };

  render() {
    return (
      <Container>
        <Text>Giỏ hàng</Text>
      </Container>
    );
  }
}

Cart.propTypes = {
  navigator: PropTypes.any,
  error: PropTypes.any,
};

// function mapStateToProps(state) {
//   return {};
// }

// const mapDispatchToProps = dispatch => {
//   return {};
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Cart);
export default Cart;
