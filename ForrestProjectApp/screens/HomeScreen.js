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
import Colors from '../constants/Colors';

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
    menuModalVisible === false ? setMenuModalVisible(true) : setMenuModalVisible(false);
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
            <Text style={TextStyles.infoText}>Settings</Text>
            <Text style={TextStyles.infoText}>WindowHeight: {height}, WindowWidth: {width} </Text>
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