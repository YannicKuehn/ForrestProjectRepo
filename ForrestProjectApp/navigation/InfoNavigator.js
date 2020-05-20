import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Custom Imports
import HomeScreen from '../screens/HomeScreen';
import ChartScreen from '../screens/ChartScreen';
import InfoScreen from '../screens/InfoScreen';

const InfoStack = createStackNavigator();

export default InfoNavigator = () => {
  return (
    <InfoStack.Navigator>
      <InfoStack.Screen name="Info" component={InfoScreen} />
    </InfoStack.Navigator>
  )
};