import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

const defaultHandler = (props) => {
  console.log("Klick the button");
}

export default CustomButtonWithIcons = props => {
  return (
    <Button
      type="clear"
      icon={ <Ionicons name={props.name} size={props.size} color={props.color} /> }
      onPress={defaultHandler}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
