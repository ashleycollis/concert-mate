import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import config from '../constants/ApiKeys';
import firebase from 'firebase';

export default class Loading extends React.Component {
  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
      firebase
        .database()
        .ref('/refName')
        .set('value!');
    }

    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Main' : 'LogIn');
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
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
