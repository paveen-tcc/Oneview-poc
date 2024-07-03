import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Favourites from '../screens/Favourites';

const Tab = createBottomTabNavigator();


const Tabs = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Favourites" component={Favourites} />
  </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({})