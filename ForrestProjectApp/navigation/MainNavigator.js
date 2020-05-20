import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

// Custom Imports
import HomeNavigator from './HomeNavigator';
import ChartNavigator from './ChartNavigator';
import InfoNavigator from './InfoNavigator';

const Tab = createBottomTabNavigator();

export default MainNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {

              iconName = focused ? "world" : "world-o";
              return <Fontisto name={iconName} size={size} color={color} />;

            } else if (route.name === "Chart") {

              iconName = focused ? "linechart" : "linechart";
              return <AntDesign name={iconName} size={size} color={color} />;

            } else if (route.name === "Info") {

              iconName = focused ? "infocirlce" : "infocirlceo";
              return <AntDesign name={iconName} size={size} color={color} />;

            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'darkcyan',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeNavigator} />
        <Tab.Screen name="Chart" component={ChartNavigator} />
        <Tab.Screen name="Info" component={InfoNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};