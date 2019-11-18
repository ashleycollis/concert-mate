import React from 'react';
import firebase from 'firebase';
import {
  StyleSheet,
  SafeAreaView,
  TouchableHighlight,
  Text,
  View,
  Button,
  TextInput,
} from 'react-native';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
    };
  }
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
            height: 1000,
            justifyContent: 'center',
          }}
        >
          <SafeAreaView>
            <Text style={styles.fontEdit}>Profile</Text>
            <Text>Welcome {currentUser && currentUser.email}!</Text>
            <Button
              title="Sign out"
              onPress={() => firebase.auth().signOut()}
            />
          </SafeAreaView>
          <View style={styles.main}>
            <Text style={styles.title}>Update Profile</Text>
            <TextInput
              style={styles.itemInput}
              onChange={this.handleArtistChange}
              placeholder="Name"
            />
            <TextInput
              style={styles.itemInput}
              onChange={this.handleVenueChange}
              placeholder="Email"
            />
            <TextInput
              style={styles.itemInput}
              onChange={this.handleDateChange}
              placeholder="Biography"
            />
            <TextInput
              style={styles.itemInput}
              onChange={this.handleDateChange}
              placeholder="Image"
            />
            <TouchableHighlight
              style={styles.button}
              underlayColor="white"
              onPress={this.handleSubmit}
            >
              <Text style={styles.buttonText}>Update</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white',
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center',
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  fontEdit: {
    fontSize: 20,
    alignSelf: 'center',
  },
});
