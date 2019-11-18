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
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Profile</Text>
          <Text>Welcome {currentUser && currentUser.email}!</Text>
        </View>
        <View>
          <Button title="Sign out" onPress={() => firebase.auth().signOut()} />
        </View>
      </View>
    );
  }
}
