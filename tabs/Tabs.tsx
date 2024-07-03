import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Favourites from '../screens/Favourites';
import homeImage from '../images/home.png';
import favouriteImage from '../images/favourite.png';
import activeHomeIcon from '../images/home-active.png';
import activeFavouriteIcon from '../images/favourite-active.png';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#005EEF',
        },
        headerTintColor:"white"
      }}>
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => {
            console.log(color);
            return (
              <Image
                style={{
                  height: 20,
                  width: 20,
                }}
                source={'#8E8E8F' == color ? homeImage : activeHomeIcon}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name='Favourites'
        component={Favourites}
        options={{
          title: 'Favourites',
          tabBarIcon: ({color}) => (
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={'#8E8E8F' == color ? favouriteImage : activeFavouriteIcon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
