import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, ImageBackground, StatusBar, Platform } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import Modal from 'react-native-modal';
import { Switch } from 'react-native-switch';

// Custom Imports
import TextStyles from '../constants/TextStyles';
import CustomButton from '../components/CustomButton';
import Colors from '../constants/Colors';

export const getDeviceHeight = () => {
  let { height } = useDimensions().window;
  return height;
}

export const getDeviceWidth = () => {
  let { width } = useDimensions().window;
  return width;
}

export default HomeScreen = ({ navigation }) => {
  const imageBgSource = require("../assets/img/galaxy_01.jpg");
  const [mainModalVisible, setMainModalVisible] = useState(true);
  const [menuModalVisible, setMenuModalVisible] = useState(false);

  let { width, height } = useDimensions().window;
  const windowHeight = 620;

  StatusBar.setHidden(true);

  const mainModalHandler = () => {
    setMainModalVisible(false);
  };

  // const menuModalHandler = () => {
  //   menuModalVisible === false ? setMenuModalVisible(true) : setMenuModalVisible(false);
  // };

  return (

    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={height > windowHeight ? styles.mainViewVerti : styles.mainViewHori} forceInset={{ top: 'never' }}>

        {/* --- MainModal Enter Site --- */}

        <Modal statusBarTransluent={false} visible={mainModalVisible} animationType="slide" style={{ margin: 0 }}>
          <View style={styles.viewContainer}>
            <ImageBackground source={imageBgSource} style={styles.imageBg}>
              <Text style={[TextStyles.textHeadline1, styles.headlineBG]}> Nearest Objects </Text>
              <Text style={[TextStyles.textHeadline1, styles.headlineBG]}> to Earth </Text>

              <View style={{
                marginTop: windowHeight / 12, shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.29,
                shadowRadius: 4.65,
                elevation: 7,
              }}>
                <CustomButton title="Enter Site" onPress={mainModalHandler} />
              </View>

            </ImageBackground>
          </View>
        </Modal>

        {/* -- Content Page -- */}

        <View style={height > windowHeight ? styles.mainTextVerti : styles.mainTextHori}>
          <View style={styles.textContainer}>
            <Text style={[TextStyles.infoHeadline, styles.settingsHeadline]}>Settings</Text>

            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 4, alignItems: "flex-start" }}>
                <Text style={TextStyles.infoText}>Dark- / Lightmode</Text>
              </View>
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                <Switch
                  activeText={""}
                  inActiveText={""}
                  circleSize={25}
                  barHeight={15}
                  circleBorderWidth={0}
                  backgroundActive={Colors.lightDark1}
                  backgroundInactive={Colors.lightDark2}
                  circleActiveColor={Colors.lightDark3}
                  circleInActiveColor={Colors.lightDark1}
                />
              </View>
            </View>
          </View>
        </View>

      </View>
    </TouchableWithoutFeedback>

  )

};


const styles = StyleSheet.create({
  mainViewVerti: {
    flex: 1,
    backgroundColor: Colors.lightDark3,
    alignItems: "center",
    justifyContent: 'center',
  },

  mainViewHori: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.lightDark3,
    padding: 50,
    paddingTop: 20,
    alignItems: 'flex-start',
    justifyContent: "center",
  },

  textContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  mainTextVerti: {
    flex: 1,
    width: "80%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 25,
  },

  mainTextHori: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },

  headlineBG: {
    backgroundColor: Colors.lightDark1,
    fontSize: 30,
  },

  viewContainer: {
    flex: 1,
    justifyContent: "space-evenly",
  },

  menuModal: {
    flex: 1,
    width: "60%",
    alignItems: "baseline",
    justifyContent: "flex-start",
    padding: 20,
    backgroundColor: "white"
  },

  buttonEnterSite: {
    height: 40,
    position: "absolute",
    right: 0
  },

  settingsHeadline: {
    marginTop: 0,
    marginBottom: 20,
  },

});