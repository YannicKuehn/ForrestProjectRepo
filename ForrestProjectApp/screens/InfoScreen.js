import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

// Custom Imports
import TextStyles from '../constants/TextStyles';

export default InfoScreen = props => {

  const users = [
    {
      name: "Tobias Rawald",
      age: 25
    },
    {
      name: "Yannic Kühn",
      age: 25
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={TextStyles.headlineH1} >InfoScreen</Text>
        <Text style={TextStyles.defaultText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Text>
        <Card title="Team" containerStyle={{width: 200, margin: 0}}>
          {
            users.map((u,i) => {
              return (
                <ListItem style={TextStyles.defaultText}
                  key={i}
                  roundAvatar
                  title={u.name + ", " + u.age}
                />
              )
            })
          }
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: 'center',
  },

  textContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 25,
  },

});
