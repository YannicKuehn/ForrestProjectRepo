import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableWithoutFeedback, Keyboard, ImageBackground } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import { Button } from 'react-native-elements';
import { Video } from 'expo-av';



// Custom Imports
import TextStyles from '../constants/TextStyles';
import CustomButton from '../components/CustomButton';
import CustomSearchBar from '../components/CustomSearchBar';
import CustomButtonWithIcons from '../components/CustomButtonWithIcons';
import CustomSlider from '../components/CustomSlider';



// ...

export default HomeScreen = props => {

  const fireVideo = require("../assets/FIRE.mp4");

  const imageBgSource = require("../assets/img/dummyBG.jpg");
  const [modalVisible, setModalVisible] = useState(true);


  let windowHeight = 620;
  const { height } = useDimensions().window;

  const modalHandler = () => { setModalVisible(false); }


  return (

    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={height > windowHeight ? styles.mainViewVerti : styles.mainViewHori}>

        {/* --- Modal --- */}
        <Modal statusBarTransluent={true} visible={modalVisible} animationType="slide" >
          <View style={styles.viewContainer}>
            <ImageBackground source={imageBgSource} style={styles.imageBg}>
              <View><Text style={[TextStyles.textHeadline1, styles.headlineBG]}> World amount </Text></View>
              <View><Text style={[TextStyles.textHeadline1, styles.headlineBG]}> of Forest </Text></View>
              <View style={{marginTop: 100}}><CustomButton title="enter site" onPress={modalHandler} /></View>
              
              {/* <Button title="enter site" onPress={modalHandler} /> */}
            </ImageBackground>
          </View>
        </Modal>

        {/* --- SearchBar --- */}
        <View style={height > windowHeight ? styles.searchBarVertical : styles.searchBarHorizontal}>
          <CustomButtonWithIcons name="md-menu" size={32} color="black" />
          <CustomSearchBar placeholder="Country" />
          <CustomButtonWithIcons name="md-search" size={32} color="black" />
        </View>

        <View style={styles.container}>
        <Video
          source={fireVideo}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: 300, height: 300 }}
        />

        </View>

        {/* --- Slider --- */}
        <View style={styles.sliderContainer}>
          <CustomSlider />
        </View>

      </View>
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
    // paddingTop: 30,
    flexDirection: "row",
    alignItems: "center",
  },

  searchBarHorizontal: {
    // paddingTop: 20,
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