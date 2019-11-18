import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Profile from './Profile';
import Chat from './Chat';
import Feed from './Feed';
import HomeScreen from './HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import Concerts from './Concerts';
import AddItem from './AddItem';
const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={[{ color: tintColor }]} size={20} name={'ios-home'} />
        </View>
      ),
    },
  },
  Chats: {
    screen: Chat,
    navigationOptions: {
      tabBarLabel: 'Chats',
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon
            style={[{ color: tintColor }]}
            size={20}
            name={'ios-chatboxes'}
          />
        </View>
      ),
    },
  },
  Feed: {
    screen: Feed,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={[{ color: tintColor }]} size={20} name={'logo-rss'} />
        </View>
      ),
    },
  },
  Explore: {
    screen: Concerts,
    navigationOptions: {
      tabBarLabel: 'Explore',
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={[{ color: tintColor }]} size={20} name={'ios-compass'} />
        </View>
      ),
    },
  },
  AddConcert: {
    screen: AddItem,
    navigationOptions: {
      tabBarLabel: 'Add Concert',
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={[{ color: tintColor }]} size={20} name={'ios-add'} />
        </View>
      ),
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={[{ color: tintColor }]} size={20} name={'ios-person'} />
        </View>
      ),
    },
  },
});

export default createAppContainer(TabNavigator);
