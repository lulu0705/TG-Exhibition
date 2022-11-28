import React from "react";
import { StyleSheet, StatusBar, View,Image } from "react-native";
import Header from "../components/Header";
import TestList from "../components/TestList";


function Test(){
    return(
        <View style={styles.container}>
        
        <Header title = "家"/>
        <Image 
            source={require("../image/swiper_1.png")}
            resizeMode="cover"
            style={{ width:500, height:300, opacity: 0.5}}
        />
        <View style={styles.btn}>
        <TestList style={styles.Alist} />
        </View>
      </View>  
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFAF2",
      alignItems: "center",
    },

    btn: {
        marginStart: 200,
        marginTop: 200,
        marginLeft: 200,
        paddingStart: 200,
        paddingLeft: 200,
        paddingTop: 200,
    }
  });
  
export default Test;