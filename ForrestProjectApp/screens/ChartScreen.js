import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import Modal from 'react-native-modal';

// Custom Imports
import TextStyles from '../constants/TextStyles';
import CustomButtonWithIcons from '../components/CustomButtonWithIcons';
import { useSafeArea } from 'react-native-safe-area-view';
import Colors from '../constants/Colors';

export default ChartScreen = ({ navigation }) => {

  const imageBgSource = require("../assets/img/galaxy_01.jpg");
  const [mainModalVisible, setMainModalVisible] = useState(true);
  const [menuModalVisible, setMenuModalVisible] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  let windowHeight = 620;
  const { height } = useDimensions().window;

  const mainModalHandler = () => { setMainModalVisible(false); };

  const menuModalHandler = () => {
    if (!buttonDisabled) {
      pressHandler();
    }
    setButtonDisabled(true);
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
      <View style={height > windowHeight ? styles.mainViewVerti : styles.mainViewHori}>
        {/* <StatusBar barStyle="light-content" hidden={hiddenStatusBar} translucent={false} enum="dark-content" backgroundColor="#204051" /> */}

        <ImageBackground source={imageBgSource} style={styles.imageBg}>

          <View style={{ flex: 4 }}></View>
          <View style={styles.viewBottom}>

            {/* --- Modal Info --- */}
            <Modal
              isVisible={menuModalVisible}
              onSwipeMove={menuModalHandler}
              backdropOpacity={0}
              animationIn={"fadeInUp"}
              animationOut={"fadeOutDown"}
              onBackdropPress={menuModalHandler}
              onSwipeComplete={menuModalHandler}
              swipeDirection={"down"}
              style={{ justifyContent: "flex-end", alignItems: "center", margin: 0 }}
            // style={{ marginTop: 600}}
            // style={{ position: "absolute", bottom: 0}}
            >
              <View style={height > windowHeight ? styles.modalContentVerti : styles.modalContentHori}>
                {/* <View style={styles.buttonAstroid}></View>
                <View style={styles.buttonAstroid}></View> */}
                {/* <View style={styles.buttonAstroid}>
                  <CustomButtonWithIcons name="md-globe" size={32} color="ghostwhite" onPress={menuModalHandler} />
                </View> */}

                {/* -- Daten -- */}
                <View style={styles.astridTextView}>
                  <Text style={[TextStyles.astroidInfo]}> Name: {meteoridData_name} </Text>
                  <Text style={[TextStyles.astroidInfo]}> Avarage estimated diameter: {meteoridData_estimatedDiameter_meter_average} m </Text>
                  <Text style={[TextStyles.astroidInfo]}> relative velocity: {meteoridData_relativeVelocity} km/h  </Text>
                  <Text style={[TextStyles.astroidInfo]}> Potentielle Gefahr: {meteoridData_isPotentiallyHazardousAsteroid ? "Gefährlich!" : "Nicht gefährlich"} </Text>
                </View>

                <View style={{ flexDirection: "row", marginTop: 20 }}>
                  <View style={{ flex: 1 }}><CustomButtonWithIcons name="ios-arrow-back" size={22} color="#E4E3E3" /></View>
                  <View style={{ flex: 1 }}><CustomButtonWithIcons name="ios-arrow-forward" size={22} color="#E4E3E3" onPress={pressHandler} /></View>
                </View>

                <View style={styles.buttonModalCloseIcon}>
                  <CustomButtonWithIcons
                    name="md-close"
                    size={24}
                    color="ghostwhite"
                    onPress={menuModalHandler}
                    conStyle={{
                      paddingLeft: 5,
                      paddingRight: 5,
                    }} />
                </View>

              </View>
            </Modal>

            <View style={styles.buttons}>
              <View style={styles.buttonAstroid}>

                {/* OpenModal */}
                <CustomButtonWithIcons
                  name="md-globe"
                  size={32}
                  color={Colors.lightDark1}
                  onPress={menuModalHandler}
                  conStyle={{
                    paddingLeft: 5,
                    paddingRight: 5,
                    borderRadius: 25,
                    backgroundColor: Colors.lightDark4,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 3,
                    },
                    shadowOpacity: 0.29,
                    shadowRadius: 4.65,
                    elevation: 7,
                  }}
                />
              </View>
            </View>
          </View>

        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

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
    width: "100%",
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  viewBottom: {
    flex: 1,
    // borderWidth: 1, 
    // borderColor: "yellow",
    width: "100%",
  },

  buttons: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    // borderWidth: 1,
    // borderColor: "yellow",
    marginBottom: 20,
  },

  buttonAstroid: {
    flex: 1,
    alignItems: "flex-end",
  },

  modalContentVerti: {
    width: "80%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    // borderWidth: 1,
    // borderColor: "red",
    paddingTop: 25,
    marginBottom: 100,
  },

  modalContentHori: {
    width: "80%",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    // borderWidth: 1,
    // borderColor: "red",
    paddingTop: 25,
    marginBottom: 100,
  },

  buttonModalCloseIcon: {
    height: 40,
    position: "absolute",
    right: 0,
    top: 0
  },


});
