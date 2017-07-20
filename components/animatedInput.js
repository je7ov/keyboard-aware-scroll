import React from 'react';
import { Animated, View, TextInput, StyleSheet, Platform } from 'react-native';

class AnimatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.moveUp = this.moveUp.bind(this);
    this.moveDown = this.moveDown.bind(this);
  }

  state = {
    positionAnim: new Animated.Value(9),
    fontSizeAnim: new Animated.Value(20),
    colorAnim: new Animated.Value(0),
    input: ''
  }

  moveUp() {
    const duration = 250;
    Animated.parallel([
      Animated.timing(
        this.state.positionAnim,
        {
          toValue: (Platform.OS === 'ios') ? 34 : 40,
          duration
        }
      ),
      Animated.timing(
        this.state.fontSizeAnim,
        {
          toValue: 16,
          duration
        }
      ),
      Animated.timing(
        this.state.colorAnim,
        {
          toValue: 100,
          duration
        }
      )
    ]).start();
  }

  moveDown() {
    if (this.state.input === '') {
      const duration = 250;
      Animated.parallel([
        Animated.timing(
          this.state.positionAnim,
          {
            toValue: 9,
            duration
          }
        ),
        Animated.timing(
          this.state.fontSizeAnim,
          {
            toValue: 20,
            duration
          }
        ),
        Animated.timing(
          this.state.colorAnim,
          {
            toValue: 0,
            duration
          }
        )
      ]).start();
    }
  }

  render() {
    const { label, placeholder, value, onChangeText, secure, keyboardType } = this.props;
    const { positionAnim, fontSizeAnim, colorAnim } = this.state;
    const color = colorAnim.interpolate({
      inputRange: [0, 100],
      outputRange: ['rgba(120, 120, 120, 1)', 'rgba(175, 175, 175, 1)']
    });

    const textStyles = {
      position: 'absolute',
      left: 10,
      fontSize: fontSizeAnim,
      color,
      bottom: positionAnim
    };

    return (
      <View style={styles.container}>
        <Animated.Text
          style={textStyles}
        >{label}</Animated.Text>

        <TextInput
          secureTextEntry={secure}
          placeholder={placeholder}
          value={value}
          onChangeText={(input) => { this.setState({ input }); onChangeText(input); }}
          onFocus={this.moveUp}
          onEndEditing={this.moveDown}
          style={styles.input}
          keyboardType={keyboardType}
        />
      </View>
    );
  }
}

// <Text style={styles.label}>{label}</Text>

const styles = StyleSheet.create({
  input: {
    color: '#000',
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: (Platform.OS === 'ios') ? 0 : 10,
    fontSize: 20,
    lineHeight: 23,
    flex: 1
  },

  label: {
    position: 'absolute',
    left: 10,
    fontSize: 20
  },

  container: {
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 22,
    flexDirection: 'row',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        borderBottomWidth: 1,
        borderBottomColor: '#888'
      }
    })
  }
});

export default AnimatedInput;
