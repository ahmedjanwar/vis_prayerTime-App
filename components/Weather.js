import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ImageBackground, Dimensions, StatusBar } from 'react-native';
import SearchBar from './SearchBar';
import { haze, rainy, snow, sunny } from '../assets/backgroundImages/index';
import logo from '../assets/VIS.png'
import {Image} from 'react-native' ; 
import Date from './Date';
import Data from './data.json';

export default function Weather({ weatherData, fetchWeatherData }) {

    const [backgroundImage, setBackgroundImage] = useState(null);

    const { weather,
            name,
            main: { temp , humidity },
            wind: { speed }
    } = weatherData ;
    const [{ main }] = weather;

    useEffect(() => {
        setBackgroundImage(getBackgroundImg(main));
    }, [weatherData])

    function getBackgroundImg(weather) {
        if(weather === 'Snow') return snow
        if(weather === 'Clear') return sunny
        if(weather === 'Rain') return rainy
        if(weather === 'Haze') return haze
        return haze;   
    }

    let textColor =  'green'

    const AFajr = Data[0]['Fajr (Azan)'];
    const PFajr = Data[0]['Fajr (Prayer)'];
    const Sunrise = Data[0]['Sunrise'];
    const ADuhur = Data[0]['Dhuhr (Azan)'];
    const PDuhur = Data[0]['Dhuhr (Prayer)'];
    const AAsr = Data[0]['Asr (Azan)'];
    const PAsr = Data[0]['Asr (Prayer)'];
    const Sunset = Data[0]['Sunset'];
    const AMaghrib = Data[0]['Maghrib (Azan)'];
    const PMaghrib = Data[0]['Maghrib (Prayer)'];
    const AIsha = Data[0]['Isha (Azan)'];
    const PIsha = Data[0]['Isha (Prayer)'];
    
    
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='darkgray' />
            <ImageBackground 
                source={backgroundImage}
                style={styles.backgroundImg}
                resizeMode='cover'
            >
                
                <Image 
                    source={require('../assets/VIS.png')} 
                    style={{width: 100, height: 120, alignSelf: 'center',marginTop: 40}}
                />
                <View>
                     <Text style={{ ...styles.headerText, color: textColor, fontWeight: 'bold', fontSize: 40, paddingBottom:5 }}> {name} Islamic Society</Text>
                </View>

                <View style={styles.info2}>
                    <Text style={{ ...styles.headerText, color: 'black',textAlign: 'right',}}>{temp} °C</Text>                                     
                </View>

                <View style={styles.cover}>

                                <View style={styles.extraInfo}>

                                <View style={styles.info}>
                                    <Text style={{ fontSize: 30, color: 'white' }}>Fajir:  </Text>
                                    <Text style={{ fontSize: 30, color: 'white' }}>  {AFajr}</Text>
                                    
                                </View>
                                
                            
                            </View>

                            <View style={styles.extraInfo}>

                                <View style={styles.info}>
                                    <Text style={{ fontSize: 30, color: 'white' }}>Sunrise:  </Text>
                                    <Text style={{ fontSize: 30, color: 'white' }}>  {Sunrise}</Text>
                                </View>

                            </View>
                            
                            <View style={styles.extraInfo}>

                                <View style={styles.info}>
                                    <Text style={{ fontSize: 30, color: 'white' }}>Duhur:  </Text>
                                    <Text style={{ fontSize: 30, color: 'white' }}>  {ADuhur}</Text>
                                </View>

                            </View>

                            <View style={styles.extraInfo}>

                                <View style={styles.info}>
                                    <Text style={{ fontSize: 30, color: 'white' }}>Asr:  </Text>
                                    <Text style={{ fontSize: 30, color: 'white' }}>  {AAsr}</Text>
                                </View>
                            
                            </View>

                            <View style={styles.extraInfo}>

                                <View style={styles.info}>
                                    <Text style={{ fontSize: 30, color: 'white' }}>Sunset:  </Text>
                                    <Text style={{ fontSize: 30, color: 'white' }}>  {Sunset}</Text>
                                </View>
                            
                            </View>

                            <View style={styles.extraInfo}>

                                <View style={styles.info}>
                                    <Text style={{ fontSize: 30, color: 'white' }}>Maghrib:  </Text>
                                    <Text style={{ fontSize: 30, color: 'white' }}>  {AMaghrib}</Text>
                                </View>
                            
                            </View>
                            <View style={styles.extraInfo}>

                                <View style={styles.info}>
                                    <Text style={{ fontSize: 30, color: 'white' }}>Isha:  </Text>
                                    <Text style={{ fontSize: 30, color: 'white' }}>  {AIsha}</Text>
                                </View>
                            
                            </View>
                </View>
                

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    backgroundImg: {
        flex: 1,
        width: Dimensions.get('screen').width
    },
    headerText: {
        fontSize: 45,
        marginTop: 0,
    },
    extraInfo: {
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'space-between',
        padding: 2
    },
    info: {
        width: Dimensions.get('screen').width/1.05,
        flexDirection: 'row',
        backgroundColor: 'green',
        padding: 10,
        marginLeft:5,
        borderRadius: 15,
        justifyContent: 'center'
    },
    info2: {
        width: Dimensions.get('screen').width/2,
        flexDirection: 'row',
        backgroundColor: 'rgba(195, 255, 104, 0.3)',
        marginBottom:15,
        paddingBottom: 0,
        borderRadius: 15,
        justifyContent: 'right'
    },
    cover: {
        width: Dimensions.get('screen').width/1.02,
        //flexDirection: 'row',
        marginLeft:5,
        backgroundColor: 'rgba(195, 255, 104, 0.3)',
        paddingBottom: 10,
        borderRadius: 15,
        justifyContent: 'right'
    }
});
  