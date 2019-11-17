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
import { TestComponent } from './../components/AppComponents';
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
            <IntroductionText />

            <Text style={styles.getStartedText}>
              Hello and Welcome to Concert Buddies! If you are new make an
              account!
            </Text>
            <Button
              title="Sign Up"
              onPress={() => this.props.navigation.navigate('SignUp')}
            />

            <TestComponent />
            <View
              style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
            ></View>

            <Text style={styles.getStartedText}>
              Change this text and your app will automatically reload.
            </Text>
          </View>

          <View style={styles.helpContainer}>
            {/* /*  <TouchableOpacity
              onPress={handleHelpPress.bind(this)}
              style={styles.helpLink}
            > */}
            <Text style={styles.helpLinkText}>Test</Text>
            <Button
              title="Sign out"
              onPress={() => firebase.auth().signOut()}
            />
            {/* </TouchableOpacity> */}
          </View>
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>wat</Text>

          <View
            style={[styles.codeHighlightContainer, styles.navigationFilename]}
          ></View>
        </View>
      </View>
    );
  }
}

function IntroductionText() {
  const learnMoreButton = (
    <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
      Learn more
    </Text>
  );
  return (
    <Text style={styles.developmentModeText}>
      SO you have a big concert coming up, but none of your friends are into the
      artist. Concert Mate is the app for you to meet someone to share that
      experience. {learnMoreButton}
    </Text>
  );
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
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
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
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
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
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
