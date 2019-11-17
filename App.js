// /*import {Container, Item, Form, Input, Button, label} from 'native-base';
// import { AppLoading } from 'expo';
// import { Asset } from 'expo-asset';
// import * as Font from 'expo-font';
// import React, { useState } from 'react';
// import { Platform, StatusBar, StyleSheet, View } from 'react-native';
// import ApiKeys from './constants/ApiKeys';
// import * as firebase from 'firebase';
// import { Ionicons } from '@expo/vector-icons';

// import AppNavigator from './navigation/AppNavigator';

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoadingComplete: false,
//       setLoadingComplete: false,
//     };
//     if (!firebase.apps.length) {
//       firebase.initializeApp(ApiKeys.FirebaseConig);
//     }
//   }
//   render() {
//     if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
//       return (
//         <AppLoading
//           startAsync={loadResourcesAsync}
//           onError={handleLoadingError}
//           onFinish={() =>
//             this.setState({ isLoadingComplete: true, setLoadingComplete: true })
//           }
//         />
//       );
//     } else {
//       return (
//         <View style={styles.container}>
//           {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
//           <AppNavigator />
//         </View>
//       );
//     }
//   }
// }
// async function loadResourcesAsync() {
//   await Promise.all([
//     Asset.loadAsync([
//       require('./assets/images/robot-dev.png'),
//       require('./assets/images/robot-prod.png'),
//     ]),
//     Font.loadAsync({
//       // This is the font that we are using for our tab bar
//       ...Ionicons.font,
//       // We include SpaceMono because we use it in HomeScreen.js. Feel free to
//       // remove this if you are not using it in your app
//       'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
//     }),
//   ]);
// }

// function handleLoadingError(error) {
//   // In this case, you might want to report the error to your error reporting
//   // service, for example Sentry
//   console.warn(error);
// }

// function handleFinishLoading(setLoadingComplete) {
//   setLoadingComplete(true);
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });
// */

// import React from 'react';
// import { StyleSheet, Platform, Image, Text, View } from 'react-native';
// import {
//   createSwitchNavigator,
//   createAppContainer,
//   createMaterialBottomTabNavigator,
// } from 'react-navigation';
// // import the different screens
// import LogIn from './screens/LogIn';
// import SignUp from './screens/SignUp';
// import Loading from './screens/Loading';
// import Home from './screens/HomeScreen';
// import Profile from './screens/Profile';
// //import Main from './Main';

// export default createAppContainer(
//   createSwitchNavigator(
//     {
//       Home,
//       SignUp,
//       LogIn,
//       Loading,
//       Profile,
//     },
//     {
//       initialRouteName: 'Loading',
//     }
//   )
// );

// createAppContainer(
//   createMaterialBottomTabNavigator(
//     {
//       Home: { screen: HomeScreen },
//     },
//     {
//       initialRouteName: 'Home',
//       activeColor: '#f0edf6',
//       inactiveColor: '#3e2465',
//       barStyle: { backgroundColor: '#694fad' },
//     }
//   )
// );
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}
class ImageScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Image Screen</Text>
      </View>
    );
  }
}
class CartScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Cart Screen</Text>
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
const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
          </View>
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={'ios-person'}
            />
          </View>
        ),
        activeColor: '#f60c0d',
        inactiveColor: '#f65a22',
        barStyle: { backgroundColor: '#f69b31' },
      },
    },
    Image: {
      screen: ImageScreen,
      navigationOptions: {
        tabBarLabel: 'History',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={'ios-images'}
            />
          </View>
        ),
        activeColor: '#615af6',
        inactiveColor: '#46f6d7',
        barStyle: { backgroundColor: '#67baf6' },
      },
    },
    Cart: {
      screen: CartScreen,
      navigationOptions: {
        tabBarLabel: 'Cart',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-cart'} />
          </View>
        ),
      },
    },
    Cart2: {
      screen: CartScreen,
      navigationOptions: {
        tabBarLabel: 'Cart2',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={'ios-person'}
            />
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#226557',
    barStyle: { backgroundColor: '#3BAD87' },
  }
);

export default createAppContainer(TabNavigator);
