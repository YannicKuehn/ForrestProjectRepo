import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Custom Imports
import HomeScreen from '../screens/HomeScreen';
import ChartScreen from '../screens/ChartScreen';
import InfoScreen from '../screens/InfoScreen';

const ChartStack = createStackNavigator();

export default ChartNavigator = () => {
  return (
    <ChartStack.Navigator>
      <ChartStack.Screen name="Info" component={InfoScreen} />
    </ChartStack.Navigator>
  )
}