import React, { useState } from 'react';
import { StyleSheet, Text, View,  TouchableWithoutFeedback, Keyboard, ImageBackground, StatusBar, Platform } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import { Button } from 'react-native-elements';
import { useDeviceOrientation } from '@react-native-community/hooks';
import { SafeAreaProvider, useSafeArea } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import Modal from 'react-native-modal';

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
// ...

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

  const api_key = 'eV83pCVzmAdK2PH28K6hX1zPYsshUbCmHRtMPasB';
  const [meteoridData_estimatedDiameter_meter_average, setMeteoridData_estimatedDiameter_meter_average] = useState();
  const [meteoridData_isPotentiallyHazardousAsteroid, setMeteoridData_isPotentiallyHazardousAsteroid] = useState();
  const [meteoridData_relativeVelocity, setMeteoridData_relativeVelocity] = useState();
  const [meteoridData_name, setMeteoridData_name] = useState();

  const [meteorid_counter, setMeteorid_counter] = useState(0);
  const [maxMeteroids, setMaxMeteorids] = useState(0);

  const getCurrentDate = () => {
    let date = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    return (year + "-" + ((month + 1) < 10 ? "0" + (month + 1) : (month + 1)) + "-" + (date < 10 ? "0" + date : date));
  }

  const getMeteorData = async (date) => {
    try {
      let response = await fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=' + date + '&end_date=' + date + '&api_key=' + api_key);
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  }

  const pressHandler = () => {
    let date = getCurrentDate();
    console.log(date);
    if (meteorid_counter == 0 || meteorid_counter < maxMeteroids) {
      getMeteorData(date).then(data => {
        setMaxMeteorids(data.element_count);
        setMeteoridData_estimatedDiameter_meter_average(((data.near_earth_objects[date][meteorid_counter].estimated_diameter.meters.estimated_diameter_min + data.near_earth_objects[date][0].estimated_diameter.meters.estimated_diameter_max) / 2).toFixed(2));
        setMeteoridData_isPotentiallyHazardousAsteroid(data.near_earth_objects[date][meteorid_counter].is_potentially_hazardous_asteroid);
        setMeteoridData_relativeVelocity(parseFloat(data.near_earth_objects[date][meteorid_counter].close_approach_data[0].relative_velocity.kilometers_per_hour).toFixed(2));
        setMeteoridData_name(data.near_earth_objects[date][meteorid_counter].name);
      });
      setMeteorid_counter(meteorid_counter + 1);
    } else {
      setMeteorid_counter(0);
    }
  }



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
              <View><Text style={[TextStyles.textHeadline1, styles.headlineBG]}> Name: {meteoridData_name} </Text></View>
              <View><Text style={[TextStyles.textHeadline1, styles.headlineBG]}> Avarage estimated diameter: {meteoridData_estimatedDiameter_meter_average} m </Text></View>
              <View><Text style={[TextStyles.textHeadline1, styles.headlineBG]}> relative velocity: {meteoridData_relativeVelocity} km/h  </Text></View>
              <View><Text style={[TextStyles.textHeadline1, styles.headlineBG]}> {meteoridData_isPotentiallyHazardousAsteroid ? "gefährlich!" : "nicht gefährlich"} </Text></View>
              <View style={{ marginTop: 100 }}><CustomButton title="Next Asteroid" onPress={pressHandler} /></View>
              {/* <Button title="enter site" onPress={modalHandler} /> */}
              <View><Text style={[TextStyles.textHeadline1, styles.headlineBG]}> Nearest Object </Text></View>
              <View><Text style={[TextStyles.textHeadline1, styles.headlineBG]}> to Earth </Text></View>
              <View style={{ marginTop: 100 }}>
                <CustomButton title="Enter Site" onPress={mainModalHandler} />
              </View>
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


        </View>

        {/* --- Slider --- */}
        <View style={styles.sliderContainer}>
          <CustomSlider />
        </View>

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