import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default InfoScreen = props => {
  return (
    <View style={styles.container}>
      <Text>InfoScreen</Text>
    </View>
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
