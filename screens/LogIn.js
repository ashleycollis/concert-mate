import React from 'react';
import firebase from 'firebase';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ImageBackground,
} from 'react-native';
export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null };
  handleLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }));
  };
  render() {
    return (
      <ImageBackground
        source={require('../assets/images/signinicon.jpeg')}
        style={{ width: '100%', height: '100%' }}
        imageStyle={{ opacity: 0.5 }}
      >
        <View style={styles.container}>
          <Text style={styles.headingText}>Log In</Text>
          {this.state.errorMessage && (
            <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>
          )}
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Email"
            placeholderTextColor="#54086B"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <TextInput
            secureTextEntry
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Password"
            placeholderTextColor="#54086B"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <Button title="Login" onPress={this.handleLogin} />
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'black',
    borderWidth: 3,
    marginTop: 8,
  },
  headingText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});
