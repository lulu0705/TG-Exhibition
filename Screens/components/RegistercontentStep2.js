import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, TextInput, View, Image, SafeAreaView, ScrollView } from "react-native";
// import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

import { auth } from "../../firebase";

import { doc, setDoc, addDoc, collection, updateDoc, deleteDoc, getDoc, getDocs, query, where} from "firebase/firestore"; 
import { db } from '../Config'
import { RadioButton } from 'react-native-paper';

const Registercontent02 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = React.useState('first');
  const navigation = useNavigation();


  // firebase Start
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
            navigation.navigate("Register03", {
              uid: personid,
          });
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
              source={require('../image/register_2.png')}
              style={{ width: "100%", height:70, marginTop: 10}}
              resizeMode="center"
            />
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
          <RadioButton.Group 
            onValueChange={gender => setGender(gender)} 
            value={gender} 
          >
            <View style={{ flex: 1, flexDirection: 'row', marginTop:8}}>
              <View style={styles.radioBox}>
                <RadioButton value="男性" uncheckedColor="#CDE49C" color="#F6CA2C"/>
                <Text style={styles.radioText}>男性</Text>
              </View>
              <View style={styles.radioBox}>
                <RadioButton value="女性" uncheckedColor="#CDE49C" color="#F6CA2C"/>
                <Text style={styles.radioText}>女性</Text>
              </View>
            </View>
          </RadioButton.Group>
          <Text style={styles.textstyle}>生日</Text>
          <View style={styles.sectionStyle}>
            <Text style={styles.innerTextStyle}>  </Text>
            <TextInput
              style={{ flex: 1 }}
              placeholder="Birth"  
              value={birth} 
              onChangeText={(birth) => {setBirth(birth)}}
            //   underlineColorAndroid="transparent"
            />
          </View>
          <Text style={styles.textstyle}>興趣</Text>
          {/* <Text style={styles.noticeTextstyle}>*至少填寫一個，至多三個，沒有則填無。</Text> */}
          <View style={styles.sectionStyle}>
            <Text style={styles.innerTextStyle}> 1 </Text>
            <TextInput
              style={{ flex: 1 }}
              placeholder="Interest"  
              value={interest1} 
              onChangeText={(interest1) => {setInterest1(interest1)}}
            //   underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.sectionStyle}>
            <Text style={styles.innerTextStyle}> 2 </Text>
            <TextInput
              style={{ flex: 1 }}
              placeholder="Interest"  
              value={interest2} 
              onChangeText={(interest2) => {setInterest2(interest2)}}
            //   underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.sectionStyle}>
            <Text style={styles.innerTextStyle}> 3 </Text>
            <TextInput
              style={{ flex: 1 }}
              placeholder="Interest"  
              value={interest3} 
              onChangeText={(interest3) => {setInterest3(interest3)}}
            //   underlineColorAndroid="transparent"
            />
          </View>
          <Text style={styles.textstyle}>健康狀態（Ex：糖尿病）</Text>
          {/* <Text style={styles.noticeTextstyle}>*至少填寫一個，至多三個，沒有則填無。</Text> */}
          <View style={styles.sectionStyle}>
            <Text style={styles.innerTextStyle}> 1 </Text>
            <TextInput
              style={{ flex: 1 }}
              placeholder="Health Status"  
              value={health1} 
              onChangeText={(health1) => {setHealth1(health1)}}
            //   underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.sectionStyle}>
            <Text style={styles.innerTextStyle}> 2 </Text>
            <TextInput
              style={{ flex: 1 }}
              placeholder="Health Status"  
              value={health2} 
              onChangeText={(health2) => {setHealth2(health2)}}
            //   underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.sectionStyle}>
            <Text style={styles.innerTextStyle}> 3 </Text>
            <TextInput
              style={{ flex: 1 }}
              placeholder="Health Status"  
              value={health3} 
              onChangeText={(health3) => {setHealth3(health3)}}
            //   underlineColorAndroid="transparent"
            />
          </View>
          
        
        <View style={styles.sectionStyle2}>

        <TouchableOpacity
            onPress={create}
            style={[styles.button, styles.buttonOutline]}
        >
          {/* <TouchableOpacity onPress={() => navigation.push('Register03')}> */}
            <View style={styles.nextBtn}>
              <Text style={styles.nextBtnText}> 下一步 </Text>
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
    borderRadius: 15 ,
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
    marginTop:15,
  },
  innerTextStyle: {
    fontSize: 16,
    color: "#62935F",
    fontWeight: "bold",
    marginLeft:12,
    marginRight:12,
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
  radioBox: {
    flex: 1, 
    flexDirection: 'row', 
    backgroundColor:"Black" ,  
    alignItems: 'center'
  },
  radioText: {
    fontSize: 16,
    color: "#62935F",
    fontWeight: "bold",
  }
});
export default Registercontent02;