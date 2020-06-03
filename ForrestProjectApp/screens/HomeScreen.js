import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableWithoutFeedback, Keyboard, ImageBackground } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import { Button } from 'react-native-elements';

// Custom Imports
import TextStyles from '../constants/TextStyles';
// ...

export default HomeScreen = props => {

  const imageBgSource = require("../assets/img/dummyBG.jpg");
  const [modalVisible, setModalVisible] = useState(true);

  let windowHeight = 620;
  const { height } = useDimensions().window;

  const modalHandler = () => { setModalVisible(false); }

  return (

    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={height > windowHeight ? styles.mainViewVerti : styles.mainViewHori }>
        
        <Modal statusBarTransluent={true} visible={modalVisible} animationType="slide" >
          <View style={{flex: 1, justifyContent: "center", alignItems: "stretch"}}>
            <ImageBackground source={imageBgSource} style={styles.imageBg}>
              <Text style={[TextStyles.headlineH1, styles.headlineBG]}> World amount of Forest </Text>
              <Button title="enter site" onPress={modalHandler} />
            </ImageBackground>
          </View>
        </Modal>

        <View style={styles.container}>
          <Text>HomeScreen</Text>
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
    backgroundColor: 'white'
  },

  appName: {
    fontFamily: "OpenSansBold",
    fontSize: 20,
    padding: 20,
    color: "white",
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});