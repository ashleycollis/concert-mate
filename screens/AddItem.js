import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import { Keyboard } from 'react-native';
import { db } from '../constants/ApiKeys';

let addConcert = concert => {
  db.ref('/concerts').push({
    artist: concert.artist,
    venue: concert.venue,
    date: concert.date,
  });
};

export default class AddItem extends Component {
  state = {
    concert: {
      artist: '',
      venue: '',
      date: '',
    },
  };

  handleArtistChange = e => {
    let concert = this.state.concert;
    concert.artist = e.nativeEvent.text;
    this.setState({
      concert: concert,
    });
  };

  handleVenueChange = e => {
    let concert = this.state.concert;
    concert.venue = e.nativeEvent.text;
    this.setState({
      concert: concert,
    });
  };

  handleDateChange = e => {
    let concert = this.state.concert;
    concert.date = e.nativeEvent.text;
    this.setState({
      concert: concert,
    });
  };

  handleSubmit = () => {
    addConcert(this.state.concert);
    Alert.alert('Item saved successfully');
  };

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Add Concert</Text>
        <TextInput
          style={styles.itemInput}
          onChange={this.handleArtistChange}
          placeholder="Artist"
        />
        <TextInput
          style={styles.itemInput}
          onChange={this.handleVenueChange}
          placeholder="Venue"
        />
        <TextInput
          style={styles.itemInput}
          onChange={this.handleDateChange}
          placeholder="Date"
        />
        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={this.handleSubmit}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
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
    backgroundColor: '#6565fc',
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
});
