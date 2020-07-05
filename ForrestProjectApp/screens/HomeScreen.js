import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, ImageBackground, StatusBar, Platform } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import { useDeviceOrientation } from '@react-native-community/hooks';
import { SafeAreaProvider, useSafeArea } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import Modal from 'react-native-modal';
import { Button } from 'react-native-elements';
import { Video } from 'expo-av';



// Custom Imports
import TextStyles from '../constants/TextStyles';
import CustomButton from '../components/CustomButton';
import CustomSearchBar from '../components/CustomSearchBar';
import CustomButtonWithIcons from '../components/CustomButtonWithIcons';
import CustomSlider from '../components/CustomSlider';

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

  const menuModalHandler = () => {
    menuModalVisible === false ? setMenuModalVisible(true) : setMenuModalVisible(false)
  };


  return (

    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={height > windowHeight ? styles.mainViewVerti : styles.mainViewHori} forceInset={{ top: 'never' }}>

        {/* <View style={height > windowHeight ? styles.mainViewVerti : styles.mainViewHori}> */}
        {/* {(Platform.OS === "android" && Platform.Version >= 21) ? */}
        {/* // <StatusBar barStyle="dark-content" hidden={true} translucent={false} backgroundColor="#204051" />
            // : null */}
        {/* } */}

        {/* --- MainModal --- */}
        <Modal statusBarTransluent={false} visible={mainModalVisible} animationType="slide" style={{ margin: 0 }}>
          <View style={styles.viewContainer}>
            <ImageBackground source={imageBgSource} style={styles.imageBg}>
              <View><Text style={[TextStyles.textHeadline1, styles.headlineBG]}> Nearest Object </Text></View>
              <View><Text style={[TextStyles.textHeadline1, styles.headlineBG]}> to Earth </Text></View>
              <View style={{ marginTop: 100 }}>
                <CustomButton title="Enter Site" onPress={mainModalHandler} />
              </View>
            </ImageBackground>
          </View>
        </Modal>








        

        {/* --- SearchBar --- */}
        {/* <View style={height > windowHeight ? styles.searchBarVertical : styles.searchBarHorizontal}>
          <CustomButtonWithIcons name={"md-menu"} size={32} color="dimgray" onPress={() => { StatusBar.setHidden(true) }} />
        </View> */}

        {/* --- MenuModal --- */}
        {/* <Modal
          isVisible={menuModalVisible}
          onSwipeMove={menuModalHandler}
          backdropOpacity={0.5}
          animationIn={"fadeInLeft"}
          animationOut={"fadeOutLeft"}
          onBackdropPress={menuModalHandler}
          onSwipeComplete={menuModalHandler}
          swipeDirection={"left"}
          style={{ marginLeft: 0, marginBottom: 0 }}
        >
          <View style={[styles.menuModal, { flex: 1, flexDirection: "column" }]}>

            <View style={styles.buttonCloseIcon}>
              <CustomButtonWithIcons name="md-close" size={24} color="dimgray" onPress={menuModalHandler} />
            </View>

            <View style={{ marginTop: 25, borderColor: "green", borderWidth: 1 }}>
              <Text>Some Text!</Text>
            </View>

          </View>
        </Modal> */}


        {/* <View style={height > windowHeight ? styles.mainTextVerti : styles.mainTextHori}> */}
        <Text>Settings</Text>
        <Text>WindowHeight: {height}, WindowWidth: {width} </Text>
        {/* </View> */}

        {/* --- Slider --- */}
        {/* <View style={styles.sliderContainer}>
          <CustomSlider />
        </View> */}
        {/* </View> */}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
};

//const rootElement = document.getElementById("root");
//ReactDOM.render(<HomeScreen />, rootElement);

const styles = StyleSheet.create({
  mainViewVerti: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // ...Platform.select({
    //   ios: {
    //     paddingTop: 20,
    //   }
    // }),
  },

  mainViewHori: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: "center"
  },

  mainTextVerti: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainTextHori: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },

  headlineBG: {
    fontSize: 30,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  viewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch"
  },

  menuModal: {
    flex: 1,
    width: "60%",
    alignItems: "baseline",
    justifyContent: "flex-start",
    padding: 20,
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "white"
  },

  buttonCloseIcon: {
    height: 40,
    borderColor: "blue",
    borderWidth: 1,
    position: "absolute",
    right: 0
  },

  searchBarVertical: {
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  searchBarHorizontal: {
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  sliderContainer: {
    width: "80%",
    marginBottom: 10,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

});