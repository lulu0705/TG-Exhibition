import React from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import HeaderBack from "../components/HeaderBack";
import Messageboard from "../components/Messageboard";
const Messageboardpage = () => {
    return(
      <View style={styles.container}>
        <HeaderBack title="曉兔留言板"/>
        <Messageboard />
      </View>
       
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFAF2",
    },
  });
  
  export default Messageboardpage;