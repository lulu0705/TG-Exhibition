import React from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import Registercontent03 from "../components/RegistercontentStep3";
import HeaderBack from "../components/HeaderBack";

const Register03 = () => {
    return(
      
      <View style={styles.container}>
        <HeaderBack title="註冊"/>
        <Registercontent03 />
      </View>
       
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFAF2",
    },
  });
  
  export default Register03;