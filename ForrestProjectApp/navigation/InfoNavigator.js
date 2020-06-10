import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Custom Imports
import HomeScreen from '../screens/HomeScreen';
import ChartScreen from '../screens/ChartScreen';
import InfoScreen from '../screens/InfoScreen';

const InfoStack = createStackNavigator();

export default InfoNavigator = () => {
  return (
    <InfoStack.Navigator screenOptions = {{headerShown: false}}>
      {/* <InfoStack.Screen name="Home" component={HomeScreen} />
      <InfoStack.Screen name="Chart" component={ChartScreen} /> */}
      <InfoStack.Screen name="Info" component={InfoScreen} />
    </InfoStack.Navigator>
  )
};