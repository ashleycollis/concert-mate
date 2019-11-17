import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ImageBackground,
} from 'react-native';
import firebase from 'firebase';
export default class SignUp extends React.Component {
  state = { email: '', password: '', errorMessage: null };
  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Home'))
      .catch(error => this.setState({ errorMessage: error.message }));
  };
  render() {
    return (
      <ImageBackground
        source={require('../assets/images/signupicon.jpg')}
        style={{ width: '100%', height: '100%' }}
        imageStyle={{ opacity: 0.5 }}
      >
        <View style={styles.container}>
          <Text style={styles.headingText}> Create Account</Text>
          {this.state.errorMessage && (
            <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>
          )}
          <TextInput
            placeholder="Email"
            placeholderTextColor="#54086B"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <TextInput
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#54086B"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <Button title="Sign Up" onPress={this.handleSignUp}>
            <Text>Sign Up</Text>
          </Button>
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
