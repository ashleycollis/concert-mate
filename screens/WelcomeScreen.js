import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import SignUp from "./SignUp";
import {View} from "react-native";
import LogIn from "./LogIn";
import {createSwitchNavigator} from "react-navigation";
import Loading from "./Loading";
import Profile from "./Profile";
import Main from "./Main";
import Icon from 'react-native-vector-icons/Ionicons';
import React from "react";

const WelcomeTabNavigator = createMaterialBottomTabNavigator({
        LogIn: {
            screen: LogIn,
            navigationOptions: {
                tabBarLabel: 'LogIn',
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={20} name={'ios-log-in'}/>
                    </View>
                ),
            },
        },
        SignUp: {
            screen: SignUp,
            navigationOptions: {
                tabBarLabel: 'SignUp',
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={20} name={'ios-create'}/>
                    </View>
                ),
            },
        }
    },
    {
        initialRouteName: 'LogIn',
        activeColor: '#f0edf6',
        inactiveColor: '#226557',
        barStyle: { backgroundColor: '#3BAD87' },
    },
)

export default createSwitchNavigator(
    {
        WelcomeTabNavigator,
        Loading,
        Main
    },
    {
        initialRouteName: 'Loading',
    }
);