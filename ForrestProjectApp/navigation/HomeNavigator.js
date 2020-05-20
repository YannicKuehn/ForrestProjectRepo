import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Custom Imports
import HomeScreen from '../screens/HomeScreen';
import ChartScreen from '../screens/ChartScreen';
import InfoScreen from '../screens/InfoScreen';

const HomeStack = createStackNavigator();

export default HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      {/* <HomeStack.Screen name="Chart" component={ChartScreen} />
      <HomeStack.Screen name="Info" component={InfoScreen} /> */}
    </HomeStack.Navigator>
  )
};