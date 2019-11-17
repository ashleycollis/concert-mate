import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import firebase from 'firebase';
export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/concertstock.jpeg')}
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.welcomeContainer}>
            <Text style={styles.featuresText}>Meet your festie bestie!</Text>
            <IntroductionText />
            <View
              style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
            ></View>
            <Text style={styles.featuresText}>Discover New Shows!</Text>
            <Text style={styles.featuresText}>
              Share Your Favorite Memories!
            </Text>
            <Text style={styles.featuresText}>
              Join A Community of Other Music Lovers!
            </Text>
            <Text style={styles.featuresText}>
              Chat with Others About Music!
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

function IntroductionText() {
  return (
    <Text style={styles.developmentModeText}>
      Concert Mates is the app for music lovers to meet new people with similar
      music interests.
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 500,
    height: 400,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  featuresText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
