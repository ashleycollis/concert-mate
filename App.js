import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer, createSwitchNavigator,createNavigationContainer} from 'react-navigation';

import WelcomeScreenNavigator from './screens/WelcomeScreen'

export default createAppContainer(WelcomeScreenNavigator);
