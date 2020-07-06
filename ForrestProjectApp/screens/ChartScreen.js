import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import Modal from 'react-native-modal';

// Custom Imports
import TextStyles from '../constants/TextStyles';
import CustomButtonWithIcons from '../components/CustomButtonWithIcons';
import Colors from '../constants/Colors';

export default ChartScreen = () => {

  // const [mainModalVisible, setMainModalVisible] = useState(true);
  const [menuModalVisible, setMenuModalVisible] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  let windowHeight = 620;
  const { height } = useDimensions().window;

  // const mainModalHandler = () => { setMainModalVisible(false); };

  const menuModalHandler = () => {
    if (!buttonDisabled) {
      firstFetch();
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
      return json
    } catch (error) {
      console.error(error);
    }
  }

  //needs to be run before an Arrow key can be used to define ArrayLength
  const firstFetch = () => {
    let date = getCurrentDate();
    console.log("first fetch");
    getMeteorData(date).then(data => {
      setMaxMeteorids(data.element_count);
      setMeteoridData_estimatedDiameter_meter_average(((data.near_earth_objects[date][0].estimated_diameter.meters.estimated_diameter_min + data.near_earth_objects[date][0].estimated_diameter.meters.estimated_diameter_max) / 2).toFixed(2));
      setMeteoridData_isPotentiallyHazardousAsteroid(data.near_earth_objects[date][0].is_potentially_hazardous_asteroid);
      setMeteoridData_relativeVelocity(parseFloat(data.near_earth_objects[date][0].close_approach_data[0].relative_velocity.kilometers_per_hour).toFixed(2));
      setMeteoridData_name(data.near_earth_objects[date][0].name);
    });
  }

  const pressHandler = () => {
    console.log("max: " + maxMeteroids);
    console.log("before" + meteorid_counter);
    let date = getCurrentDate();
    if (meteorid_counter < (maxMeteroids - 1)) {
      console.log(meteorid_counter);
      getMeteorData(date).then(data => {
        setMaxMeteorids(data.element_count);
        setMeteoridData_estimatedDiameter_meter_average(((data.near_earth_objects[date][meteorid_counter + 1].estimated_diameter.meters.estimated_diameter_min + data.near_earth_objects[date][0].estimated_diameter.meters.estimated_diameter_max) / 2).toFixed(2));
        setMeteoridData_isPotentiallyHazardousAsteroid(data.near_earth_objects[date][meteorid_counter + 1].is_potentially_hazardous_asteroid);
        setMeteoridData_relativeVelocity(parseFloat(data.near_earth_objects[date][meteorid_counter + 1].close_approach_data[0].relative_velocity.kilometers_per_hour).toFixed(2));
        setMeteoridData_name(data.near_earth_objects[date][meteorid_counter + 1].name);
      });
      setMeteorid_counter(meteorid_counter + 1);
    } else {
      console.log(meteorid_counter);
      getMeteorData(date).then(data => {
        setMaxMeteorids(data.element_count);
        setMeteoridData_estimatedDiameter_meter_average(((data.near_earth_objects[date][0].estimated_diameter.meters.estimated_diameter_min + data.near_earth_objects[date][0].estimated_diameter.meters.estimated_diameter_max) / 2).toFixed(2));
        setMeteoridData_isPotentiallyHazardousAsteroid(data.near_earth_objects[date][0].is_potentially_hazardous_asteroid);
        setMeteoridData_relativeVelocity(parseFloat(data.near_earth_objects[date][0].close_approach_data[0].relative_velocity.kilometers_per_hour).toFixed(2));
        setMeteoridData_name(data.near_earth_objects[date][0].name);
      });
      setMeteorid_counter(0);
    }
  }

  const pressHandlerBack = () => {
    console.log("max: " + maxMeteroids);
    console.log("before: " + meteorid_counter);
    let date = getCurrentDate();
    if (meteorid_counter > 0) {
      console.log("run with: " + meteorid_counter);
      getMeteorData(date).then(data => {
        setMaxMeteorids(data.element_count);
        setMeteoridData_estimatedDiameter_meter_average(((data.near_earth_objects[date][meteorid_counter - 1].estimated_diameter.meters.estimated_diameter_min + data.near_earth_objects[date][0].estimated_diameter.meters.estimated_diameter_max) / 2).toFixed(2));
        setMeteoridData_isPotentiallyHazardousAsteroid(data.near_earth_objects[date][meteorid_counter - 1].is_potentially_hazardous_asteroid);
        setMeteoridData_relativeVelocity(parseFloat(data.near_earth_objects[date][meteorid_counter - 1].close_approach_data[0].relative_velocity.kilometers_per_hour).toFixed(2));
        setMeteoridData_name(data.near_earth_objects[date][meteorid_counter - 1].name);
      });
      setMeteorid_counter(meteorid_counter - 1);
    } else {
      console.log("run with: " + meteorid_counter);
      getMeteorData(date).then(data => {
        setMaxMeteorids(data.element_count);
        setMeteoridData_estimatedDiameter_meter_average(((data.near_earth_objects[date][maxMeteroids - 1].estimated_diameter.meters.estimated_diameter_min + data.near_earth_objects[date][0].estimated_diameter.meters.estimated_diameter_max) / 2).toFixed(2));
        setMeteoridData_isPotentiallyHazardousAsteroid(data.near_earth_objects[date][maxMeteroids - 1].is_potentially_hazardous_asteroid);
        setMeteoridData_relativeVelocity(parseFloat(data.near_earth_objects[date][maxMeteroids - 1].close_approach_data[0].relative_velocity.kilometers_per_hour).toFixed(2));
        setMeteoridData_name(data.near_earth_objects[date][maxMeteroids - 1].name);
      });
      setMeteorid_counter(maxMeteroids - 1);
    }
  }


  // -- BackgroundImage --
  const imageSlides = {
    0: {
      uri: require("../assets/img/galaxy_00.jpg"),
      credits: "@spacex"
    },
    1: {
      uri: require("../assets/img/galaxy_01.jpg"),
      credits: "@n8rayfield",
    },
    2: {
      uri: require("../assets/img/galaxy_02.jpg"),
      credits: "@mischievous_penguins",
    },
    3: {
      uri: require("../assets/img/galaxy_03.jpg"),
      credits: "@shotbycerqueira",
    },
    4: {
      uri: require("../assets/img/galaxy_04.jpg"),
      credits: "@alex_andrews",
    },
    5: {
      uri: require("../assets/img/galaxy_05.jpg"),
      credits: "@andyjh07",
    },
    6: {
      uri: require("../assets/img/galaxy_06.jpg"),
      credits: "@re_stacks",
    }
  }

  const number = parseInt(Math.floor(Math.random() * 6));

  const imageBgName = imageSlides[number].credits;
  const imageBgSource = imageSlides[number].uri;

  // console.log("RandNum: " + number);
  // console.log("RandUri: " + imageSlides[number] + " RandUri: " + imageSlides[number].uri + " CreditsTo: " + imageSlides[number].credits);

  return (
    <View style={height > windowHeight ? styles.mainViewVerti : styles.mainViewHori}>

      <ImageBackground source={imageBgSource} style={styles.imageBg}>

        <View style={styles.credits}>
          <Text style={{ color: Colors.dark1 }}>{imageBgName}</Text>
        </View>

        <View style={height > windowHeight ? styles.viewBottomVerti : styles.viewBottomHori}>

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
            style={height > windowHeight ? styles.modalStyleVerti : styles.modalStyleHori}
          >
            <View style={height > windowHeight ? styles.modalContentVerti : styles.modalContentHori}>

              {/* -- Daten -- */}
              <View style={height > windowHeight ? styles.astroidTextViewVerti : styles.astroidTextViewHori}>
                <Text style={[TextStyles.infoTextBold, { marginBottom: 15 }]}> Nearest Objects ({meteorid_counter + 1}) </Text>
                <Text style={[TextStyles.astroidInfo]}> Name: {meteoridData_name} </Text>
                <Text style={[TextStyles.astroidInfo]}> Avg. est. diameter: {meteoridData_estimatedDiameter_meter_average} m </Text>
                <Text style={[TextStyles.astroidInfo]}> relative velocity: {meteoridData_relativeVelocity} km/h  </Text>
                <Text style={[TextStyles.astroidInfo]}> potentially harzardous Astroid: {meteoridData_isPotentiallyHazardousAsteroid ? "Gefährlich!" : "Nicht gefährlich"} </Text>

                <View style={{ flexDirection: "row", marginTop: 10, justifyContent: 'center', alignItems: "center" }}>
                  <View style={styles.arrowLeftRight}><CustomButtonWithIcons name="ios-arrow-back" size={22} color={Colors.dark1} onPress={pressHandlerBack} /></View>
                  <View style={styles.arrowLeftRight}><CustomButtonWithIcons name="ios-arrow-forward" size={22} color={Colors.dark1} onPress={pressHandler} /></View>
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

            </View>
          </Modal>

          {/* <View style={styles.buttons}> */}
          <View style={height > windowHeight ? styles.buttonAstroidVerti : styles.buttonAstroidHori}>

            {/* OpenModal */}
            <CustomButtonWithIcons
              name="md-globe"
              size={32}
              color={Colors.dark1}
              onPress={menuModalHandler}
              conStyle={{
                paddingLeft: 5,
                paddingRight: 5,
                borderRadius: 25,
                backgroundColor: Colors.dark4,
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

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  mainViewVerti: {
    flex: 1,
    alignItems: "center",
  },

  mainViewHori: {
    flex: 1,
    alignItems: 'center',
  },

  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  modalContentVerti: {
    width: "75%",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 80,
  },

  modalContentHori: {
    width: "50%",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 40,
  },

  viewBottomVerti: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: "flex-end",
    width: "100%",
  },

  viewBottomHori: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'flex-end',
    alignItems: "flex-end",
    width: "100%",
  },

  arrowLeftRight: {
    flex: 1,
  },

  modalStyleVerti: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    margin: 0,
  },

  modalStyleHori: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    margin: 0,
  },

  astroidTextViewVerti: {
    backgroundColor: Colors.dark4RGBa,
    color: 'transparent',
    borderRadius: 7,
    padding: 10,
  },

  astroidTextViewHori: {
    backgroundColor: Colors.dark4RGBa,
    color: 'transparent',
    borderRadius: 7,
    padding: 10,
    marginRight: -25,
    marginBottom: 50,
  },

  buttonAstroid: {
    flex: 1,
    alignItems: "flex-end",
    margin: 10,
    paddingRight: 15,
    paddingBottom: 15,
  },

  buttonAstroidVerti: {
    padding: 10,
    marginBottom: 10,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },

  buttonAstroidHori: {
    flex: 1,
    alignItems: "flex-end",
    marginBottom: 10,
    marginRight: 10,
    paddingRight: 15,
    paddingBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },

  buttonModalCloseIcon: {
    height: 40,
    position: "absolute",
    right: -2,
    top: -3,
  },

  credits: { 
    flex: 1, 
    alignItems: "flex-start", 
    width: "100%", 
    padding: 10, 
    opacity: 0.4 
  }


});
