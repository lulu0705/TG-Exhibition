import React from "react";
import { StyleSheet, Text, View, Image,ImageBackground,TouchableOpacity } from "react-native";

import {Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

const HeaderBack = (props) => {
  const { title } = props;
  const navigation = useNavigation(); 

  return (
    <View style={styles.headerStyle}>
        <ImageBackground  style={styles.center} source={require('../image/header.png')} >

        <TouchableOpacity style={styles.leftButton} onPress={() => navigation.goBack()}>
          <Image style={styles.iconStyle} source={require('../image/pre.png')} />
        </TouchableOpacity>

        <Text style={styles.textStyle}>{props.title}</Text>

        </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    justifyContent: "center",
    alignItems: "center",
    // Android Only
    elevation: 4,
    // flex: 1,
    height:136,
    // backgroundColor: "#FFFAF2",
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth,
    height: 136,
  },
  leftButton: {
    // -(72/2)-131
    position: 'absolute',
    paddingTop:39,
    Top: 48,
    left: 28,
  },

  rightButton: {
    position: 'absolute',
    Top: 48,
    right: 28,
  },

  iconStyle: {
    width: 32,
    height: 32,
  },
  textStyle: {
    fontSize: 20,
    color: "#705A31",
    fontWeight: "bold",
    Top: 49,
    paddingTop:39,
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export default HeaderBack;