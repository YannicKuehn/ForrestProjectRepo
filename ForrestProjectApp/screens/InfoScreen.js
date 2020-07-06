import React, { useContext } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
import SafeAreaView from 'react-native-safe-area-view';

// Custom Imports
import TextStyles from '../constants/TextStyles';
import { getDeviceWidth } from './SettingsScreen';
import Colors from '../constants/Colors';
import { getColor1, getColor2, getColor3, getColor4, getColor5 } from '../constants/Themes'
import { ThemeContext } from '../App';

export default InfoScreen = () => {

  const [themeIsLight, setThemeIsLight] = useContext(ThemeContext);


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

  // let orientation = useDeviceOrientation();
  let { width, height } = useDimensions().window;
  let devWidth = getDeviceWidth();

  const windowHeight = 620;

  // let paddingLandscape = 0;
  // orientation.landscape && width > 800 ? paddingLandscape = 25 : paddingLandscape = 0;

  return (
    <SafeAreaView style={[devWidth > 800 ? styles.mainViewHori : styles.mainViewVerti, { backgroundColor: getColor3(themeIsLight) }]}>
      <View style={styles.textContainer}>
        <Text style={[TextStyles.infoHeadline, { marginTop: 0, marginBottom: 20 }]}>InfoScreen</Text>

        <View style={height > windowHeight ? styles.contentViewVerti : styles.contentViewHori}>

          <View style={height > windowHeight ? styles.textViewVerti : styles.textViewHori}>
            <Text style={[TextStyles.infoText]}>This small app was created during the course Mobile Systems at the HAW. The focus in this course was primarily on programming an app cross-platform and on the individual differences in operating systems such as iOS and Android but also on different display sizes. The team members are displayed below.</Text>
          </View>

          <View style={height > windowHeight ? styles.cardViewVerti : styles.cardViewHori}>
            <Card title="Team"
              dividerStyle={{ borderWidth: 1, borderColor: getColor2(themeIsLight) }}
              titleStyle={[TextStyles.infoTextBold, { color: getColor1(themeIsLight) }]}
              containerStyle={[styles.cardContainerStyle, { backgroundColor: getColor4(themeIsLight) }, { borderColor: getColor4(themeIsLight) }]} >
              {
                teamMembers.map((u, i) => {
                  return (
                    <ListItem
                      key={i}
                      roundAvatar
                      leftAvatar={{ source: u.avatar }}
                      title={u.name}
                      titleStyle={[TextStyles.infoNameBold, { color: getColor1(themeIsLight) }]}
                      containerStyle={{ backgroundColor: getColor3(themeIsLight) }} />
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
    //backgroundColor: Colors.lightDark3,
    alignItems: "center",
    justifyContent: "center",
  },

  mainViewHori: {
    flex: 1,
    flexDirection: "row",
    //backgroundColor: Colors.lightDark3,
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
    // justifyContent: 'center',
    // alignItems: 'flex-start',
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
  },

  textViewHori: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: "green",
  },

  cardViewVerti: {
    flex: 2,
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
    backgroundColor: Colors.dark4,
    borderColor: Colors.dark4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },

  textContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 25,
  },

});
