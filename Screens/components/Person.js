// import React from "react";
// import { StyleSheet, StatusBar, View } from "react-native";
// import Header from "../components/Header";
// import Registercontent from "../components/Registercontent";

// import Header2 from "./Header2";

import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, TextInput, View, Image, SafeAreaView, ScrollView } from "react-native";
// import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

import { auth } from "../../firebase";

import { doc, setDoc, addDoc, collection, updateDoc, deleteDoc, getDoc, getDocs, query, where} from "firebase/firestore"; 
import { db } from '../Config'

const Person = () => {
    
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation()
    const route = useRoute();
    let personid = route.params.uid

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(user => {
    //       if (user) {
    //         navigation.replace("Home");
    //         console.log(user.uid);
    //         personid = user.uid;

    //         personid = route.params.uid
    //       }
    //     })
    
    //     return unsubscribe
    //   }, [])


      const [ nickname, setNickname ] = useState('')
      const [ gender, setGender ] = useState('')
      const [ birth, setBirth ] = useState('')
      const [ interest1, setInterest1 ] = useState('')
      const [ interest2, setInterest2 ] = useState('')
      const [ interest3, setInterest3 ] = useState('')
      const [ health1, setHealth1 ] = useState('')
      const [ health2, setHealth2 ] = useState('')
      const [ health3, setHealth3 ] = useState('')

      const citiesRef = collection(db, "users");


    function create () {
        //新增
        setDoc(doc(db, "users", personid), {
          // addDoc(collection(citiesRef, 'users',personid), {
            nickname: nickname,
            gender: gender,
            birth: birth,
            interest1: interest1,
            interest2: interest2,
            interest3: interest3,
            health1: health1,
            health2: health2,
            health3: health3,
        }).then(() => {
            console.log('data submitted');
            navigation.replace("Register03");
        }).catch((error) => {
            console.log(error);
        });;
    }


    return (
        <View style={styles.container}>
        {/* <Header2 title="個人資料"/> */}
        
        <ScrollView style={{ content: "center", marginTop: 45, }}>
  
        <View style={styles.container}>

        <Text style={styles.textstyle}>暱稱</Text>
          <View style={styles.sectionStyle}>
  
            <Image
              source={require('../image/nickname.png')}
              style={styles.imageStyle}
            />
            <TextInput
              style={{ flex: 1 }}
              placeholder="Nickname"  
              value={nickname} 
              onChangeText={(nickname) => {setNickname(nickname)}}
            //   underlineColorAndroid="transparent"
            />
          </View>

          <Text style={styles.textstyle}>性別</Text>
          <View style={styles.sectionStyle}>
  
            <Image
              source={require('../image/nickname.png')}
              style={styles.imageStyle}
            />
            <TextInput
              style={{ flex: 1 }}
              placeholder="Gender"  
              value={gender} 
              onChangeText={(gender) => {setGender(gender)}}
            //   underlineColorAndroid="transparent"
            />
          </View>



        <Text style={styles.textstyle}>生日</Text>
          <View style={styles.sectionStyle}>
  
            <Image
              source={require('../image/nickname.png')}
              style={styles.imageStyle}
            />
            <TextInput
              style={{ flex: 1 }}
              placeholder="Birth"  
              value={birth} 
              onChangeText={(birth) => {setBirth(birth)}}
            //   underlineColorAndroid="transparent"
            />
          </View>

          <Text style={styles.textstyle}>興趣</Text>
          <View style={styles.sectionStyle}>
  
            <Image
              source={require('../image/nickname.png')}
              style={styles.imageStyle}
            />
            <TextInput
              style={{ flex: 1 }}
              placeholder="Interest"  
              value={interest1} 
              onChangeText={(interest1) => {setInterest1(interest1)}}
            //   underlineColorAndroid="transparent"
            />
          </View>

          <View style={styles.sectionStyle}>
  
            <Image
              source={require('../image/nickname.png')}
              style={styles.imageStyle}
            />
            <TextInput
              style={{ flex: 1 }}
              placeholder="Interest"  
              value={interest2} 
              onChangeText={(interest2) => {setInterest2(interest2)}}
            //   underlineColorAndroid="transparent"
            />
          </View>


          <View style={styles.sectionStyle}>
  
            <Image
              source={require('../image/nickname.png')}
              style={styles.imageStyle}
            />
            <TextInput
              style={{ flex: 1 }}
              placeholder="Interest"  
              value={interest3} 
              onChangeText={(interest3) => {setInterest3(interest3)}}
            //   underlineColorAndroid="transparent"
            />
          </View>








  
          <Text style={styles.textstyle5}>健康狀態（EX：糖尿病）</Text>
          <View style={styles.sectionStyle}>
  
            <Image
              source={require('../image/nickname.png')}
              style={styles.imageStyle}
            />
            <TextInput
              style={{ flex: 1 }}
              placeholder="Health Status"  
              value={health1} 
              onChangeText={(health1) => {setHealth1(health1)}}
            //   underlineColorAndroid="transparent"
            />
          </View>


          <View style={styles.sectionStyle}>
  
            <Image
              source={require('../image/nickname.png')}
              style={styles.imageStyle}
            />
            <TextInput
              style={{ flex: 1 }}
              placeholder="Health Status"  
              value={health2} 
              onChangeText={(health2) => {setHealth2(health2)}}
            //   underlineColorAndroid="transparent"
            />
          </View>


          <View style={styles.sectionStyle}>
  
            <Image
              source={require('../image/nickname.png')}
              style={styles.imageStyle}
            />
            <TextInput
              style={{ flex: 1 }}
              placeholder="Health Status"  
              value={health3} 
              onChangeText={(health3) => {setHealth3(health3)}}
            //   underlineColorAndroid="transparent"
            />
          </View>




        </View>
        <View style={styles.sectionStyle2}>
  
        <TouchableOpacity
            onPress={create}
            style={[styles.button, styles.buttonOutline]}
        >
            <Image
              source={require('../image/signin_finish.png')}
              style={styles.imageStyle2}
            />
          </TouchableOpacity>
  
        </View>
        <View style={styles.sectionStyle3}>
          <Image
            source={require('../image/shortyellow.png')}
            style={styles.yellowlineleft}
          />
          <Text style={styles.textstyle4}> or </Text>
          <Image
            source={require('../image/shortyellow.png')}
            style={styles.yellowlineRight}
          />
        </View>
        <View style={styles.sectionStyle4}>
          <Image
            source={require('../image/Google.png')}
          />
          <Image
            source={require('../image/Facebook.png')}
          />
          <Image
            source={require('../image/Twitter.png')}
          />
        </View>



        <Image
          source={require('../image/Signin-Bottom-Bear.png')}
        />
      </ScrollView>
      </View>
    )
}
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    sectionStyle4: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      margin: 7,
    },
    sectionStyle3: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderRadius: 15,
      margin: 10,
    },
    sectionStyle2: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      margin: 10,
    },
    sectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#CDE49C',
      borderColor: '#000',
      height: 48,
      width: 278,
      borderRadius: 15,
      margin: 10,
    },
    imageStyle: {
      // padding: 10,
      margin: 12,
      height: 24,
      width: 24,
      resizeMode: 'stretch',
      alignItems: 'center',
    },
    imageStyle2: {
      padding: 10,
      margin: 5,
      height: 48,
      width: 132,
      resizeMode: 'stretch',
      alignItems: 'center',
    },
    yellowlineleft: {
  marginLeft:30,
    },
    yellowlineRight: {
      marginRight:30,
    },
    textstyle: {
      marginRight: 240,
    //   marginLeft: -120,
      marginTop: 10,
      fontSize: 16,
      color: "#62935F",
      fontWeight: "bold",
    },
    textstyle2: {
      marginRight: 240,
      marginTop: 10,
      fontSize: 16,
      color: "#62935F",
      fontWeight: "bold",
    },
    textstyle3: {
      marginLeft: 190,
      marginTop: 10,
      fontSize: 14,
      color: "#705A31",
    },
    textstyle4: {
      fontSize: 16,
      color: "#705A31",
    },
    textstyle5: {
      marginRight: 90,
      marginTop: 10,
      fontSize: 16,
      color: "#62935F",
      fontWeight: "bold",
    //   backgroundColor: "black"
      
    },
  });
  
  export default Person;