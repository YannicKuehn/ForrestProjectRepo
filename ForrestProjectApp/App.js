import React from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

// Custom Imports
import MainNavigator from './navigation/MainNavigator';

export default function App() {

  let [fontsLoaded] = useFonts({
    'OpenSansBold': require('./assets/fonts/open_sans/OpenSans-Bold.ttf'),
    'OpenSansReg': require('./assets/fonts/open_sans/OpenSans-Regular.ttf'),
  });


  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return <MainNavigator />
  };

};
