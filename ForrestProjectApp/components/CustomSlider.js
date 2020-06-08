import React, { useState } from "react";
import { StyleSheet, View, Text } from 'react-native';
import { Slider } from 'react-native-elements';

// Custom Imports
import ColorRange from "../constants/ColorRange";

export default CustomSlider = (props) => {
  const [actColor, setColor] = useState(0);

  // const importColors = ColorRange.colorNames;
  const colorNames = [
    "darkred",
    "crimson",
    "orangered",
    "darkorange",
    "orange",
    "gold",
    "yellow",
    "greenyellow",
    "palegreen",
    "lightgreen",
    "yellowgreen",
    "forestgreen",
    "green",
  ];

  const newColor = value => { setColor(value) };

  return (
    <View>
      <View style={{ backgroundColor: colorNames[actColor], width: 50, height: 50, }} />

      <Slider
        value={actColor}
        onValueChange={newColor}
        minimumValue={0}
        maximumValue={colorNames.length - 1}
        step={1}
        thumbTintColor="grey"
      />
      <Text>{colorNames[actColor]}</Text>

    </View>
  );
};

const styles = StyleSheet.create(

);