import React, {useContext} from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native';

// Custom Imports
import TextStyles from "../constants/TextStyles";
import Colors from "../constants/Colors";
import { getColor1, getColor2, getColor3, getColor4, getColor5 } from '../constants/Themes'
import { ThemeContext } from '../App';

export default CustomButton = props => {

  const [themeIsLight, setThemeIsLight] = useContext(ThemeContext);

  let ButtonComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <ButtonComponent title={props.title} onPress={props.onPress}>
      <View style={[styles.button, {backgroundColor: getColor3(themeIsLight)}]}>
        <Text style={[TextStyles.textButton, {color: getColor1(themeIsLight)}]}>{props.title}</Text>
      </View>
    </ButtonComponent>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    minWidth: 40,
    maxWidth: 300,
    shadowColor: '#204051',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },

});