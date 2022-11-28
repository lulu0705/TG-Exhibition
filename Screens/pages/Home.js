import React from "react";
import { StyleSheet, StatusBar, SafeAreaView,View } from "react-native";
import Header from "../components/Header";
import ContentMain from "../components/ContentMain";



function Home(){
    return(
      <View style={styles.container}>
        <Header title = "家" />
        <ContentMain />
  
      </View>  
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFAF2",
    },
  });
  
export default Home;