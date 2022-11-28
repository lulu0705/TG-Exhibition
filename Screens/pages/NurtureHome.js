import React from "react";
import { StyleSheet, StatusBar, SafeAreaView,View } from "react-native";
import HeaderBack from "../components/HeaderBack";
import Nurture from "../components/Nurture";

const NurtureHome = () => {
  return(
    <View style={styles.container}>
      <HeaderBack title="仙人掌培育室"/>
      <Nurture />
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAF2",
  },
});

export default NurtureHome;