import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Platform } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useDeviceOrientation } from '@react-native-community/hooks';

// Custom Imports
import SettingsNavigator from './SettingsNavigator';
import HomeNavigator from './HomeNavigator';
import InfoNavigator from './InfoNavigator';
import { getDeviceHeight } from '../screens/SettingsScreen';
import Colors from '../constants/Colors';
import { getColor1, getColor2, getColor3, getColor4, getColor5 } from '../constants/Themes'
import { ThemeContext } from '../App';

const Tab = createMaterialTopTabNavigator();

export default MainNavigator = () => {

  const [themeIsLight, setThemeIsLight] = useContext(ThemeContext);

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
            backgroundColor: getColor4(themeIsLight),
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 7,
          },
          indicatorStyle: { backgroundColor: getColor2(themeIsLight) },
          labelStyle: { color: getColor1(themeIsLight), fontFamily: 'OpenSansBold' }
        }}
      >
        <Tab.Screen name="Settings" component={SettingsNavigator} />
        <Tab.Screen name="Home" component={HomeNavigator} />
        <Tab.Screen name="Info" component={InfoNavigator} />
      </Tab.Navigator>
    </NavigationContainer>

  );
};