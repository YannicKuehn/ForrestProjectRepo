import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import { AppLoading } from 'expo';

import MainNavigator from '../navigation/MainNavigator';


// Custom Imports
import TextStyles from '../constants/TextStyles';
import CustomButton from '../components/CustomButton';
import CustomSearchBar from '../components/CustomSearchBar';
import CustomButtonWithIcons from '../components/CustomButtonWithIcons';
import CustomSlider from '../components/CustomSlider';



export default function FetchTestScreen() {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState("");
    const [urlValid, setUrlValid] = useState(false);
    const api_key = "eV83pCVzmAdK2PH28K6hX1zPYsshUbCmHRtMPasB";
    const [latestDate, setLatestDate] = useState("2020-06-14");
    const dateFormat = 'YYYY-MM-DD';

    function getNextDate(date, days) {
        let result = new Date(date);
        result.setDate(result.getDate() - days);
        setLatestDate(result);
    } 

    const getDateString = date => {

    }

    const getImageUrlAsync = async ()  => {
        setIsLoading(true);
        console.log("https://api.nasa.gov/planetary/apod?date=" + latestDate + "&hd=True&api_key=" + api_key);
        try {
            let response = await fetch(
            "https://api.nasa.gov/planetary/apod?date=" + latestDate + "&hd=True&api_key=" + api_key
            );
            let json = await response.json();
            if (json.media_type === "image") {
            setData({uri: json.url});
            setUrlValid(true);
            } else {
            setLatestDate("2020-06-26");
            console.log("nextDate");
            }
            return json;
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);
        console.log(data);
    }

/*     const getImageAsync = async ()  => {
       if(urlValid){
            try {
                let response = await fetch(
                data
                );
                let json = await response.;
                return json;
            } catch (error) {
                console.error(error);
            }
       }
    } */

    

    //{(isLoading || !urlValid) ? getImageUrlAsync() : console.log("loading")};

    //if(urlValid && isLoading){
    console.log("testLogStart");
    console.log(data);
    console.log(urlValid);
    console.log(isLoading);
    console.log("testLogEnd");
    //}
    if (urlValid){
        
    }

    //<Button title="NextDate" onPress={getNextDate(latestDate, 1)}/>
    return (
        <View>
            <ImageBackground source={data} style={styles.imageBg}>
                <View><Text style={[TextStyles.textHeadline1, styles.headlineBG]}> World amount </Text></View>
                <View><Text style={[TextStyles.textHeadline1, styles.headlineBG]}> of Forest </Text></View>
                <View style={{marginTop: 100}}><CustomButton title="LoadUrl" onPress={getImageUrlAsync} /></View>
                <View style={{marginTop: 100}}><CustomButton title="enter site" onPress={getImageUrlAsync} /></View>
                
              {/* <Button title="enter site" onPress={modalHandler} /> */}
            </ImageBackground>
        </View>
    )
        
    
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