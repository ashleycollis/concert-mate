import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import config from '../constants/ApiKeys';
import firebase from 'firebase';

export default class Loading extends React.Component {
  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }

    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Profile' : 'SignUp');
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Loadinggggg</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});