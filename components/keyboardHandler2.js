import React from 'react';
import { View, Keyboard } from 'react-native'

class KeyboardHandler2 extends React.Component {
  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this));
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow(e) {
    let newSize = Dimensions.get('window').height - e.endCoordinates.height;
    this.setState({
      visibleHeight: newSize
    });
  }

  keyboardDidHide(e) {
    this.setState({
      visibleHeight: Dimensions.get('window').height;
    })
  }

  render() {
    return (
      <View style={ [Styles.container, { height: this.state.visibleHeight} ] }>
        
      </View>
    );
  }
}
