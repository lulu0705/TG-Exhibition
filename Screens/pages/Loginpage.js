import React from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import Logincontent from "../components/Logincontent";
import HeaderBack from "../components/HeaderBack";

const Loginpage = ({ navigation }) => {
    return(
      
      <View style={styles.container}>
      <HeaderBack title="登入"/>
     
      <Logincontent />
      </View>
       
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFAF2",
    },
  });
  
  export default Loginpage;