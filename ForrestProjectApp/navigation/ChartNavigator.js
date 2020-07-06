import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Custom Imports
import HomeScreen from '../screens/HomeScreen';
import ChartScreen from '../screens/ChartScreen';
import InfoScreen from '../screens/InfoScreen';

const ChartStack = createStackNavigator();

export default ChartNavigator = () => {
  return (
    <ChartStack.Navigator screenOptions={{ headerShown: false }}>
      {/* <ChartStack.Screen name="Home" component={HomeScreen} /> */}
      <ChartStack.Screen name="Chart" component={ChartScreen} />
      {/* <ChartStack.Screen name="Info" component={InfoScreen} /> */}
    </ChartStack.Navigator>
  )
}