import React from "react";
import { StyleSheet, StatusBar, SafeAreaView,View } from "react-native";
import Header from "../components/Header";
import HeaderBack from "../components/HeaderBack";
import Observeroom from "../components/Observeroom";

const Observepage = () => {
    return(
      <View style={styles.container}>
        <HeaderBack title="觀察室"/>
        <Observeroom />
      </View>  
    );
  }
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFAF2",
    },
  });
  
  export default Observepage;