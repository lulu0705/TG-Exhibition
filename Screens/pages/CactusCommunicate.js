import React from "react";
import { StyleSheet, StatusBar, SafeAreaView, View } from "react-native";
import Header from "../components/Header";
import HeaderBack from "../components/HeaderBack";
import Communicatecontent from "../components/Communicatecontent";
function CactusCommunicate(){
    return(
    <View style={styles.container}>
      <HeaderBack title="仙人掌交流"/>
      <Communicatecontent />
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFAF2",
    },
  });
export default CactusCommunicate;