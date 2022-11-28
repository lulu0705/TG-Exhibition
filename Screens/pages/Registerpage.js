import React from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import Registercontent from "../components/Registercontent";
import HeaderBack from "../components/HeaderBack";

const Register = () => {
    return(
      
      <View style={styles.container}>
        <HeaderBack title="註冊"/>
        <Registercontent />
      </View>
       
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFAF2",
    },
  });
  
  export default Register;