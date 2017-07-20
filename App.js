import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AnimatedInput from './components/animatedInput';
import Header from './components/header';
import KeyboardHandler from './components/keyboardHandler';
import KeyboardSpacer from 'react-native-keyboard-spacer';

export default class App extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    passConfirm: ''
  }

  renderIOS() {
    return (
      <KeyboardAwareScrollView extraScrollHeight={12}>
        {this.renderForm()}
      </KeyboardAwareScrollView>
    );
  }

  renderAndroid() {
    return (
      <View>
        <ScrollView>
          {this.renderForm()}
        </ScrollView>
        <KeyboardSpacer />
      </View>
    );
  }

  renderForm() {
    return (
      <View>
        <AnimatedInput
        label="First Name"
        value={this.state.firstname}
        onChangeText={firstname => this.setState({ firstname })}
        />
        <AnimatedInput
        label="Last Name"
        value={this.state.lastname}
        onChangeText={lastname => this.setState({ lastname })}
        />
        <AnimatedInput
        label="Username"
        value={this.state.username}
        onChangeText={username => this.setState({ username })}
        />
        <AnimatedInput
        label="Email"
        value={this.state.email}
        onChangeText={email => this.setState({ email })}
        keyboardType="email-address"
        />
        <AnimatedInput
        label="Password"
        value={this.state.password}
        onChangeText={password => this.setState({ password })}
        secure
        />
        <AnimatedInput
        label="Confirm"
        value={this.state.passConfirm}
        onChangeText={passConfirm => this.setState({ passConfirm })}
        secure
        />
        <AnimatedInput
        label="Email"
        value={this.state.email}
        onChangeText={email => this.setState({ email })}
        keyboardType="email-address"
        />
        <AnimatedInput
        label="Password"
        value={this.state.password}
        onChangeText={password => this.setState({ password })}
        secure
        />
        <AnimatedInput
        label="Confirm"
        value={this.state.passConfirm}
        onChangeText={passConfirm => this.setState({ passConfirm })}
        secure
        />
        <AnimatedInput
        label="First Name"
        value={this.state.firstname}
        onChangeText={firstname => this.setState({ firstname })}
        />
        <AnimatedInput
        label="Last Name"
        value={this.state.lastname}
        onChangeText={lastname => this.setState({ lastname })}
        />
      </View>
    );
  }

  render() {
    const content = Platform.select({
      ios: this.renderIOS(),
      android: this.renderAndroid()
    });

    return (
      <View style={styles.container}>
        <Header title='Keyboard Aware' />

          <ScrollView>
            {content}
          </ScrollView>
        <KeyboardSpacer/>
      </View>
    );
  }
}

/*
<KeyboardHandler>
    <AnimatedInput
      label="First Name"
      value={this.state.firstname}
      onChangeText={firstname => this.setState({ firstname })}
    />
    <AnimatedInput
      label="Last Name"
      value={this.state.lastname}
      onChangeText={lastname => this.setState({ lastname })}
    />
    <AnimatedInput
      label="Username"
      value={this.state.username}
      onChangeText={username => this.setState({ username })}
    />
    <AnimatedInput
      label="Email"
      value={this.state.email}
      onChangeText={email => this.setState({ email })}
      keyboardType="email-address"
    />
    <AnimatedInput
      label="Password"
      value={this.state.password}
      onChangeText={password => this.setState({ password })}
      secure
    />
    <AnimatedInput
      label="Confirm"
      value={this.state.passConfirm}
      onChangeText={passConfirm => this.setState({ passConfirm })}
      secure
    />
    <AnimatedInput
      label="Email"
      value={this.state.email}
      onChangeText={email => this.setState({ email })}
      keyboardType="email-address"
    />
    <AnimatedInput
      label="Password"
      value={this.state.password}
      onChangeText={password => this.setState({ password })}
      secure
    />
    <AnimatedInput
      label="Confirm"
      value={this.state.passConfirm}
      onChangeText={passConfirm => this.setState({ passConfirm })}
      secure
    />
</KeyboardHandler>
*/

/*
<KeyboardAwareScrollView
  extraScrollHeight={12}
>
  <View style={styles.form}>
    <AnimatedInput
      label="First Name"
      value={this.state.firstname}
      onChangeText={firstname => this.setState({ firstname })}
    />
    <AnimatedInput
      label="Last Name"
      value={this.state.lastname}
      onChangeText={lastname => this.setState({ lastname })}
    />
    <AnimatedInput
      label="Username"
      value={this.state.username}
      onChangeText={username => this.setState({ username })}
    />
    <AnimatedInput
      label="Email"
      value={this.state.email}
      onChangeText={email => this.setState({ email })}
      keyboardType="email-address"
    />
    <AnimatedInput
      label="Password"
      value={this.state.password}
      onChangeText={password => this.setState({ password })}
      secure
    />
    <AnimatedInput
      label="Confirm"
      value={this.state.passConfirm}
      onChangeText={passConfirm => this.setState({ passConfirm })}
      secure
    />
    <AnimatedInput
      label="Email"
      value={this.state.email}
      onChangeText={email => this.setState({ email })}
      keyboardType="email-address"
    />
    <AnimatedInput
      label="Password"
      value={this.state.password}
      onChangeText={password => this.setState({ password })}
      secure
    />
    <AnimatedInput
      label="Confirm"
      value={this.state.passConfirm}
      onChangeText={passConfirm => this.setState({ passConfirm })}
      secure
    />
  </View>
</KeyboardAwareScrollView>
*/

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  keyboardScroll: {

  },

  form: {
    width
  }
});
