import React from "react";
import { StyleSheet, StatusBar, SafeAreaView, View} from "react-native";
import Header from "../components/Header";
import NewsEvents from "../components/NewsEvents";
// import EventPy from "../components/EventPy";

function Events(){
    const printButtonLabel = (item) => {
      console.log(item);
    }

    return(
        <View style={styles.container}>
        <Header title = "最新活動 & 新聞"/>
        <NewsEvents 
          buttons={['最新活動','活動紀錄','新聞']}
          doSomethingAfterClick={printButtonLabel}
        />
      </View>  
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFAF2",
    },
  });
  
export default Events;