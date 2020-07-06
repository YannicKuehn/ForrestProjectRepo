import React from 'react';
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

export default CustomButtonWithIcons = props => {
  return (
    <Button
      type="clear"
      icon={<Ionicons name={props.name} size={props.size} color={props.color} />}
      onPress={props.onPress}
      // containerStyle={{ justifyContent: 'space-evenly',}}
      disabled={props.disabled}
      containerStyle={props.conStyle}
      // iconContainerStyle={props.conStyle}
      // containerStyle={{ 
      //   paddingLeft: 5, 
      //   paddingRight: 5,
      //   backgroundColor: "#E4E3E3", 
      //   borderRadius: 25,
      // }}
    />
  );
};
