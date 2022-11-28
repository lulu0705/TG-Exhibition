import React from "react";
import { StyleSheet, StatusBar, SafeAreaView,View } from "react-native";
import HeaderBack from "../components/HeaderBack";
import Setting from "../components/Setting";


function AboutMe(){
    return(
      <View style={styles.container}>
        <HeaderBack title="關於我"/>
        <Setting />
      </View>  
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFAF2",
    },
  });
  
export default AboutMe;