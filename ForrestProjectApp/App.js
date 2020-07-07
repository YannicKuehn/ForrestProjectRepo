import React, { createContext, useState} from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { AppearanceProvider } from 'react-native-appearance';

// Custom Imports
import MainNavigator from './navigation/MainNavigator';

export const ThemeContext = createContext({});

export default function App() {
  const [themeIsLight, setThemeIsLight] = useState(false);

  let [fontsLoaded] = useFonts({
    'OpenSansBold': require('./assets/fonts/open_sans/OpenSans-Bold.ttf'),
    'OpenSansReg': require('./assets/fonts/open_sans/OpenSans-Regular.ttf'),
  });


  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <AppearanceProvider>
        <ThemeContext.Provider value={[themeIsLight, setThemeIsLight]}>
          <MainNavigator/>
        </ThemeContext.Provider>
      </AppearanceProvider>
    )};

};
