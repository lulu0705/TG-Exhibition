import React from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import Registercontent02 from "../components/RegistercontentStep2";
import HeaderBack from "../components/HeaderBack";

const Register02 = () => {
    return(
      
      <View style={styles.container}>
        <HeaderBack title="註冊"/>
        <Registercontent02 />
      </View>
       
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFAF2",
    },
  });
  
  export default Register02;