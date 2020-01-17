import React from 'react';
// @ts-ignore
import Ionicons from 'react-native-vector-icons/AntDesign';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from "react-navigation";
import HomeScreen from './HomePage/HomePage';
import UserPage from './User/UserPage';


const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarLabel: '主页',
          tabBarIcon: ({tintColor, focused}) => (
            <Ionicons
              name="home"
              size={22}
              color={focused ? '#FFCC42' : '#484848'}
            />
          ),
        }
      }
    },
    User: {
      screen: UserPage,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
            name="user"
            size={22}
            color={focused ? '#FFCC42' : '#484848'}
          />
        ),
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#FFCC42',
      inactiveTintColor: '#484848',
      labelStyle: {fontSize: 10},
    }
  }
);

export default createAppContainer(AppNavigator);
