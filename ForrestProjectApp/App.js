import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';


import MainNavigator from './navigation/MainNavigator';
import FetchTestScreen from './screens/FetchTestScreen';
import HomeScreen from './screens/HomeScreen';



export default function App() {


  let [fontsLoaded] = useFonts({
    'OpenSansBold': require('./assets/fonts/open_sans/OpenSans-Bold.ttf'),
    'OpenSansReg': require('./assets/fonts/open_sans/OpenSans-Regular.ttf'),
  });


  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      // <AppearanceProvider>
        <MainNavigator />
      // </AppearanceProvider>
    )
  };

};
