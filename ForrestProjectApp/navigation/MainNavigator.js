import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Custom Imports
import HomeNavigator from './HomeNavigator';
import ChartNavigator from './ChartNavigator';
import InfoNavigator from './InfoNavigator';

const Tab = createBottomTabNavigator();

export default MainNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeNavigator} />
        <Tab.Screen name="Chart" component={ChartNavigator} />
        <Tab.Screen name="Info" component={InfoNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};