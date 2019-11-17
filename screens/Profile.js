import React from 'react';
import firebase from 'firebase';
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native';

export default class Profile extends React.Component {
  state = { currentUser: null };
  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
  }
  render() {
    const { currentUser } = this.state;
    return (
      <View style={styles.container}>
        <Text>Welcome {currentUser && currentUser.email}!</Text>
        <Button title="Sign out" onPress={() => firebase.auth().signOut()} />
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
