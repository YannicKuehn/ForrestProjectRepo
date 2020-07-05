import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Platform } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useDimensions } from '@react-native-community/hooks';
import { useDeviceOrientation } from '@react-native-community/hooks';

// Custom Imports
import HomeNavigator from './HomeNavigator';
import ChartNavigator from './ChartNavigator';
import InfoNavigator from './InfoNavigator';
import { getDeviceHeight } from '../screens/HomeScreen';

const Tab = createMaterialTopTabNavigator();

export default MainNavigator = () => {
  
  // let { windowHeight } = useDimensions().window;

  let devHeight = getDeviceHeight();
  // console.log(devHeight);
  
  const orientation = useDeviceOrientation();
  // console.log('is orientation landscape: ', orientation.landscape);

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
          style: { backgroundColor: "#3B6978" },
          indicatorStyle: { backgroundColor: "#84A9AC" },
          labelStyle: { color: "#E4E3E3" }
        }}
      >
        <Tab.Screen name="Settings" component={HomeNavigator} />
        <Tab.Screen name="Home" component={ChartNavigator} />
        <Tab.Screen name="Info" component={InfoNavigator} />
      </Tab.Navigator>
    </NavigationContainer>

  );
};