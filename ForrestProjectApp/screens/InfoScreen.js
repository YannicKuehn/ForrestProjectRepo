import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

// Custom Imports
import TextStyles from '../constants/TextStyles';

export default InfoScreen = props => {

  const teamMembers = [
    {
      name: "Tobias Rawald",
      avatar: require("../assets/img/avatar_batman.png"),
    },
    {
      name: "Yannic Kühn",
      avatar: require("../assets/img/avatar_deadpool.png"),
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={[TextStyles.textHeadline1, { marginBottom: 20 }]}>InfoScreen</Text>
        <Text style={TextStyles.textDefault}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Text>
        <Card title="Team" titleStyle={TextStyles.textHeadline2} containerStyle={{ width: 210, margin: 0 }}>
          {
            teamMembers.map((u, i) => {
              return (
                <ListItem
                  key={i}
                  roundAvatar
                  leftAvatar={{ source: u.avatar }}
                  title={u.name}
                  titleStyle={TextStyles.textBold}
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
