import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native';

// Custom Imports
import TextStyles from "../constants/TextStyles";
import Colors from "../constants/Colors";

export default CustomButton = props => {

  let ButtonComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <ButtonComponent title={props.title} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={TextStyles.textButton}>{props.title}</Text>
      </View>
    </ ButtonComponent>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.dark3,
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