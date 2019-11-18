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
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import firebase from 'firebase';
export default class HomeScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/images/concertscreen.jpg')}
        style={{ width: '100%', height: '100%' }}
        imageStyle={{ opacity: 0.5 }}
      >
        <View style={styles.container}>
          <ScrollView>
            <SafeAreaView>
              <IntroductionText />
            </SafeAreaView>
            <Text style={styles.featuresText}>Meet your festie bestie!</Text>

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
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

function IntroductionText() {
  return (
    <Text>
      Concert Mates is the app for music lovers to meet new people with similar
      music interests.
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  featuresText: {
    lineHeight: 20,
    fontFamily: 'Helvetica',
    fontSize: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 60,
    margin: 5,
    borderColor: '#2a4944',
    borderWidth: 5,
  },
});
