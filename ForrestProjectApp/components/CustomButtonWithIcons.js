import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

// const defaultHandler = (props) => {
//   console.log("Klick the button");
// }

export default CustomButtonWithIcons = props => {
  return (
    <Button
      type="clear"
      icon={<Ionicons name={props.name} size={props.size} color={props.color} />}
      onPress={props.onPress}
      // containerStyle={{ justifyContent: 'space-evenly',}}
      containerStyle={{ paddingLeft: 5, paddingRight: 5 }}
    />
  );
}

const styles = StyleSheet.create({
  container: {

  },

});
