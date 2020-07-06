import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
import SafeAreaView from 'react-native-safe-area-view';

// Custom Imports
import TextStyles from '../constants/TextStyles';
import { getDeviceWidth } from './HomeScreen';
import Colors from '../constants/Colors';

export default InfoScreen = ({ navigation }) => {

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

  let orientation = useDeviceOrientation();
  let { width, height } = useDimensions().window;
  let devWidth = getDeviceWidth();

  const windowHeight = 620;

  let paddingLandscape = 0;
  orientation.landscape && width > 800 ? paddingLandscape = 25 : paddingLandscape = 0;

  return (
    <SafeAreaView style={devWidth > 800 ? styles.mainViewHori : styles.mainViewVerti}>
      <View style={styles.textContainer}>
        <Text style={[TextStyles.infoHeadline, { marginTop: 0, marginBottom: 20 }]}>InfoScreen</Text>

        <View style={height > windowHeight ? styles.contentViewVerti : styles.contentViewHori}>

          <View style={height > windowHeight ? styles.textViewVerti : styles.textViewHori}>
            <Text style={TextStyles.infoText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Text>
          </View>

          <View style={height > windowHeight ? styles.cardViewVerti : styles.cardViewHori}>
            <Card title="Team" titleStyle={TextStyles.infoTextBold} containerStyle={styles.cardContainerStyle}>
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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  mainViewVerti: {
    flex: 1,
    backgroundColor: Colors.lightDark3,
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "red",
  },

  mainViewHori: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.lightDark3,
    ...Platform.select({
      ios: {
        padding: 50,
        paddingTop: 20,
      }
    }),
    alignItems: 'center',
    justifyContent: "center",
  },

  contentViewVerti: {
    flex: 1,
    alignItems: 'flex-start',
    // borderWidth: 1,
    // borderColor: "red"
  },

  contentViewHori: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "green",
  },

  textViewVerti: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: "green",
  },

  textViewHori: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: "green",
  },

  cardViewVerti: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: "blue"
  },

  cardViewHori: {
    flex: 1,
    alignItems: 'center',
    // borderColor: "blue",
    // borderWidth: 1,
  },

  cardContainerStyle: {
    width: 210,
    margin: 0,
    backgroundColor: Colors.lightDark4,
    borderColor: Colors.lightDark4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },

  container: {
    flex: 1,
    backgroundColor: '#3B6978',
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
