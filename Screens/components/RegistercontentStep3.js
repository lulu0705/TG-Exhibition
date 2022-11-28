import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, View, StyleSheet, TouchableOpacity, Text, ScrollView } from "react-native";
import RadioButton from './RadioButton';


import { auth } from "../../firebase";

import { doc, setDoc, addDoc, collection, updateDoc, deleteDoc, getDoc, getDocs, query, where} from "firebase/firestore"; 
import { db } from '../Config'
// import { RadioButton } from 'react-native-paper';

const Registercontent03 = () => {
  const navigation = useNavigation();

  const [option, setOption] = useState(null);
  const data = [
    { value: '刺刺',
      imgURL: require('../image/seed_01.png'),
      intro: '刺刺為海膽仙人掌的種子，需要培育過‘’金鑽等級‘’的培育家才能使用。',
    },
    { value: '燈泡',
      imgURL: require('../image/seed_02.png'),
      intro: '燈泡為未知品種仙人掌的種子，快培養它來一探究竟它的真面貌吧！',
    },
    { value: '被子',
      imgURL: require('../image/seed_03.png'),
      intro: '被子為鯊人掌的種子，任何等級都能輕鬆培育及駕馭的種子！',
    },
  ];


  const route = useRoute();
  let personid = route.params.uid

  function create () {
    // setDoc(doc(db, "collection 的名稱", "document 的名稱"), 資料, { merge: true });
    //新增
    setDoc(doc(db, "users", personid), {
      // addDoc(collection(citiesRef, 'users',personid), {
        seedname: option,
    }, { merge: true }).then(() => {
        console.log('data submitted');
        navigation.replace("Tabs");
    }).catch((error) => {
        console.log(error);
    });;
}

// firebase end


  return (
    <ScrollView style={{ content: "center",  }}>
      <View style={styles.container}>
        <View style={{ width: 278, }}>
            <Image
                source={require('../image/register_3.png')}
                style={{ width: "100%", height:70, marginTop: 10}}
                resizeMode="center"
            />
          

          <Text style={styles.paragraph}>選擇您喜歡的種子來進行培養! </Text>
          <RadioButton data={data} onSelect={(value) => setOption(value)} />
          <Text style={styles.textstyle}> 您選擇的是: {option}</Text> 

          <View style={styles.sectionStyle2}>
          <TouchableOpacity onPress={create} >
            {/* <TouchableOpacity onPress={() => navigation.push('Tabs')}> */}
              <View style={styles.nextBtn}>
                <Text style={styles.nextBtnText}> 確認選擇 </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Image
          source={require('../image/Signin-Bottom-Bear.png')}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  paragraph: {
    marginTop: 20,
    color: "#62935F",
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom:10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionStyle2: { 
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 10,
  },
  sectionStyle: { //inter box
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CDE49C',
    borderColor: '#000',
    height: 48,
    borderRadius: 15,
    marginTop: 10,
  },
  imageStyle: {
    // padding: 10,
    margin: 12,
    height: 24,
    width: 24,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  textstyle: {
    fontSize: 16,
    color: "#62935F",
    fontWeight: "bold",
  },
  nextBtnText: {
    paddingRight:40,
    paddingLeft:40,
    paddingBottom:15,
    paddingTop:15,
    backgroundColor:"#62935F",

    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    borderRadius:20,
    marginTop:20,
  },
});
export default Registercontent03;