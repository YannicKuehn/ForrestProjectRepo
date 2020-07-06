import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Custom Imports
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import InfoScreen from '../screens/InfoScreen';

const HomeStack = createStackNavigator();

export default HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      {/* <ChartStack.Screen name="Home" component={HomeScreen} /> */}
      <HomeStack.Screen name="Home" component={HomeScreen} />
      {/* <ChartStack.Screen name="Info" component={InfoScreen} /> */}
    </HomeStack.Navigator>
  )
}