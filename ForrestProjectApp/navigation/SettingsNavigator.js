import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Custom Imports
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import InfoScreen from '../screens/InfoScreen';

const SettingsStack = createStackNavigator();

export default SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator screenOptions={{ headerShown: false }} >
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      {/* <HomeStack.Screen name="Chart" component={ChartScreen} />
      <HomeStack.Screen name="Info" component={InfoScreen} /> */}
    </SettingsStack.Navigator>
  )
};