import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs'

import FB from  './screens/FB'
import IG from  './screens/IG'

export default function App() {
  return (
    <AppNavigator/>
  );
}

const AppNavigator = createBottomTabNavigator({
  Facebook:{screen:FB},
  Instagram:{screen:IG}
})