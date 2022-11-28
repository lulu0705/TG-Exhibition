import React from "react";
import { StyleSheet, Text, View, Image,ImageBackground,TouchableOpacity } from "react-native";

import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const Header = () => {

  return (
      <View style={styles.headerStyle}>
        <ImageBackground  style={styles.center} source={require('../image/frontheader.png')} >


          <View style={styles.headerStyle2}>
            <ImageBackground style={styles.center2} source={require('../image/togethergrowtext.png')}></ImageBackground>
              <ImageBackground style={styles.center3} source={require('../image/twinheart.png')}></ImageBackground>
          </View>

        
        </ImageBackground>
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: 240,
    // Android Only
    elevation: 4,
    backgroundColor:"#FFFAF2"
  },

  headerStyle2: {
    paddingTop:40,
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    position: 'absolute',
    // Android Only
  },

 center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth,
    // height: 121,
    height: 230,
  },


  center2: {
    marginTop:80,
    justifyContent: 'center',
    alignItems: 'center',
    width: 304,
    height: 50,
    
  },
  center3: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 24,
    
  },








  textStyle: {
    fontSize: 20,
    color: "#705A31",
    fontWeight: "bold",
    Top: 49,
    paddingTop:39,
  },

 

  leftButton: {
    position: 'absolute',
    paddingTop:39,
    Top: 48,
    left: 28,
  },

  rightButton: {
    position: 'absolute',
    paddingTop:39,
    Top: 48,
    right: 28,
  },

  iconStyle: {
    width: 36,
    height: 36,
  },

});

export default Header;