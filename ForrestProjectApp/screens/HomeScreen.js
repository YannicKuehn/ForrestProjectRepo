import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableWithoutFeedback, Keyboard, ImageBackground } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import { Button } from 'react-native-elements';

// Custom Imports
import TextStyles from '../constants/TextStyles';
import CustomButton from '../components/CustomButton';
import CustomSearchBar from '../components/CustomSearchBar';
import CustomButtonWithIcons from '../components/CustomButtonWithIcons';
import CustomSlider from '../components/CustomSlider';
// ...

export default HomeScreen = props => {

  const imageBgSource = require("../assets/img/dummyBG.jpg");
  const [mainModalVisible, setMainModalVisible] = useState(true);
  const [menuModalVisible, setMenuModalVisible] = useState(false);

  let windowHeight = 620;
  const { height } = useDimensions().window;

  const mainModalHandler = () => { setMainModalVisible(false); }
  const menuModalHandler = () => { setMenuModalVisible(true); }


  return (

    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={height > windowHeight ? styles.mainViewVerti : styles.mainViewHori}>

        {/* --- MainModal --- */}
        <Modal statusBarTransluent={true} visible={mainModalVisible} animationType="slide">
          <View style={styles.viewContainer}>
            <ImageBackground source={imageBgSource} style={styles.imageBg}>
              <View><Text style={[TextStyles.textHeadline1, styles.headlineBG]}> World amount </Text></View>
              <View><Text style={[TextStyles.textHeadline1, styles.headlineBG]}> of Forest </Text></View>
              <View style={{ marginTop: 100 }}><CustomButton title="enter site" onPress={mainModalHandler} /></View>

              {/* <Button title="enter site" onPress={modalHandler} /> */}
            </ImageBackground>
          </View>
        </Modal>

        {/* --- SearchBar --- */}
        <View style={height > windowHeight ? styles.searchBarVertical : styles.searchBarHorizontal}>
          <CustomButtonWithIcons name="md-menu" size={32} color="dimgray" onPress={menuModalHandler} />
          <CustomSearchBar placeholder="Country" />
          <CustomButtonWithIcons name="md-search" size={32} color="dimgray" onPress={() => { console.log("Pressed Search Icon") }} />
        </View>

        {/* --- MenuModal --- */}
        <Modal statusBarTransluent={true} visible={menuModalVisible} animationType="slide" presentationStyle="fullScreen">
          <View style={{ flex: 1, width: 200, justifyContent: 'center', borderWidth: 1, borderColor: "blue" }}>
            <Text>Some Text!</Text>
            <CustomButtonWithIcons name="md-close" size={32} color="dimgray" onPress={() => { setMenuModalVisible(false); }} />
          </View>
        </Modal>

        <View style={styles.container}>
          <Text>HomeScreen</Text>
        </View>

        {/* --- Slider --- */}
        <View style={styles.sliderContainer}>
          <CustomSlider />
        </View>

      </View>
    </TouchableWithoutFeedback>

  )

};

const styles = StyleSheet.create({
  mainViewVerti: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  mainViewHori: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
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

});