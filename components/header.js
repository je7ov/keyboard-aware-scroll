import React from 'react';
import { Constants } from 'expo';
import { View, Text, StyleSheet } from 'react-native';

class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 60 + Constants.statusBarHeight,
    width: '100%',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ADD8E3',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 4
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold'
  }
});

export default Header;
