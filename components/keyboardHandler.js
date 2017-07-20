import React from 'react';
import ReactNative, { ScrollView, View, DeviceEventEmitter, Keyboard } from 'react-native';
import PropTypes from 'prop-types';

class KeyboardHandler extends React.Component {

  constructor(props) {
    super(props);
    this.state = { keyboardSpace: 0 };
    this.focused = null;
    this._didShowListener = null;
    this._willHideListener = null;
  }

  onKeyboardDidShow(frames) {
    if (!frames.endCoordinates) {
      return;
    }
    this.setState({ keyboardSpace: frames.endCoordinates.height });
    let scrollResponder = this.refs.scrollView.getScrollResponder();
    console.log(scrollResponder);
    scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
      this.focused,
      this.props.offset,
      true
    );
  }

  onKeyboardWillHide() {
    this.setState({ keyboardSpace: 0 });
  }

  componentWillMount() {
    this._didShowListener = Keyboard.addListener('keyboardDidShow', this.onKeyboardDidShow.bind(this));
    this._willHideListener = Keyboard.addListener('keyboardWillHide', this.onKeyboardWillHide.bind(this));

    this.scrollviewProps = {
      automaticallyAdjustContentInsets: true,
      keyboardShouldPersistTaps: 'always',
      scrollEventThrottle: 200
    };

    Object.keys(this.props).filter((n) => {
      return n != 'children';
    })
      .forEach((e) => {
        this.scrollviewProps[e] = this.props[e];
      });
  }

  componentWillUnmount() {
    this._didShowListener.remove();
    this._willHideListener.remove();
  }

  render() {
    return (
      <ScrollView ref='scrollView' {...this.scrollviewProps}>
        {this.props.children}
        <View style={{ height: this.state.keyboardSpace }} />
      </ScrollView>
    );
  }

  inputFocused(_this, refName) {
    this.focused = ReactNative.findNodeHandle(_this.refs[refName]);
  }

  static
}

KeyboardHandler.propTypes = {
  offset: PropTypes.number
};

KeyboardHandler.defaultProps = {
  offset: 0
}

export default KeyboardHandler;
