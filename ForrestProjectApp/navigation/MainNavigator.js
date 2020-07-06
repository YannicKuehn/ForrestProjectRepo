import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Platform } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useDeviceOrientation } from '@react-native-community/hooks';

// Custom Imports
import HomeNavigator from './HomeNavigator';
import ChartNavigator from './ChartNavigator';
import InfoNavigator from './InfoNavigator';
import { getDeviceHeight } from '../screens/HomeScreen';
import Colors from '../constants/Colors';

const Tab = createMaterialTopTabNavigator();

export default MainNavigator = () => {

  let devHeight = getDeviceHeight();
  const orientation = useDeviceOrientation();

  let paddingIPhone11 = 15;
  if (Platform.OS === "ios" && Platform.Version >= 11 && orientation.portrait && devHeight > 800) {
    paddingIPhone11 = 45;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        scrollEnabled
        tabBarOptions={{
          tabStyle: {
            ...Platform.select({
              ios: {
                paddingTop: paddingIPhone11
              }
            })
          },
          style: {
            backgroundColor: Colors.lightDark4,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 7,
          },
          indicatorStyle: { backgroundColor: Colors.lightDark2 },
          labelStyle: { color: Colors.lightDark1, fontFamily: 'OpenSansBold', }
          // style: { backgroundColor: "#3B6978" },
          // indicatorStyle: { backgroundColor: "#84A9AC" },
          // labelStyle: { color: "#E4E3E3" }
        }}
      >
        <Tab.Screen name="Settings" component={HomeNavigator} />
        <Tab.Screen name="Home" component={ChartNavigator} />
        <Tab.Screen name="Info" component={InfoNavigator} />
      </Tab.Navigator>
    </NavigationContainer>

  );
};