import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native';

// Custom Imports
import TextStyles from "../constants/TextStyles";

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
    backgroundColor: 'darkslategrey',
    padding: 15,
    minWidth: 40,
    maxWidth: 300,
    shadowColor: 'darkslategrey',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },

});