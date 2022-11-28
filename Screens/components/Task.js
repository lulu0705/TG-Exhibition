import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";
import { doc, setDoc, addDoc, collection, updateDoc, deleteDoc, getDoc, getDocs, query, where} from "firebase/firestore"; 
import { db } from '../Config'

const Task = (props) => {
  const [ nickname, setNickname ] = useState('')

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
    if (user) {
        // navigation.replace("Person");
        // navigation('Person', { uid: user.uid })
        
        console.log(user.uid);
        // navigation.navigate("Register02", {
        //     uid: user.uid,
        // });

        getDoc(doc(db, "users", user.uid)).then((docData) => {
            if(docData.exists()) {
                // console.log(docData.data());
                setNickname(docData.data().nickname);
            } else {
                console.log('No such a data!!');
            }


            }).catch((error) => {
                console.log(error);
            });;
        }
        })
        
    return unsubscribe
  }, [])

  return (
    <>
    <View style={styles.boardbg}>
      <View style={styles.itemLeft}>
      <Image source={require('../image/user2.png')} style={styles.user} />
        {/* <View style={styles.square}></View> */}
        <View>
        {/* <Text style={styles.messagetitle}>{'金仔'}</Text> */}
        <TextInput editable={false} value={nickname}  style={styles.messagetitle}></TextInput>
        <Text style={styles.itemText}>{props.text}</Text>
        </View>
        
      </View>
      
      {/* <View style={styles.circular}></View> */}
    </View>
    <View style={styles.msg}>
        <Image source={require('../image/arrow.png')} style={styles.arrowstyle} />
        <Text style={styles.messagecontent}>回覆(6)</Text>
        <Image source={require('../image/heart2.png')} style={styles.heart2style} />
        <Text style={styles.messagecontent}>喜歡(5)</Text>
        <Text style={styles.messagecontent2}>2022.09.09</Text>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  msgcontainer: {
    flex: 1,
    alignItems: "center",
    marginBottom:50,
  },
  msg: {
      flexDirection: 'row',
      marginRight: 0,
      // backgroundColor:'pink'
  },
  msg2: {
      flexDirection: 'row',
  },

  item: {
    backgroundColor: '#FFFAF2',
    padding: 6,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
    marginLeft:10,
    marginRight:10,
  },
  itemLeft:{
    width: 289,
    height: 73,
    backgroundColor: "#FFFAF2",
    borderRadius: 13,
    marginLeft: 20,
    marginTop:16,

    flexDirection: 'row',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    // width:200,
    fontSize:14,
    // paddingLeft: 8,
    color: "#705A31",
    fontSize: 16,
    // backgroundColor:'gray',
    marginLeft:24,
    marginTop:3,
    width:180,
    
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
  user: {
    width: 58,
    height: 58,
    marginLeft: 18,
    marginTop: 8,
  },
  messagetitle: {
    color: "#705A31",
    fontSize: 12,
    fontWeight: "bold",
    // backgroundColor:'pink',
    marginLeft:24,
    marginTop:16,
    width:180,
    // paddingLeft: 8,
    // paddingBottom: 5,
  },
  messagecontent: {
    color: "#705A31",
    fontSize: 13,
    paddingLeft: 10,
    paddingTop: 8,
  },
  msg: {
    flexDirection: 'row',
  },
  arrowstyle: {
    marginTop: 8,
    marginLeft: 39,
  },
  heart2style: {
      marginTop: 10,
      marginLeft: 12,
  },
  messagetext: {

  },
  messagecontent: {
    color: "#705A31",
    fontSize: 13,
    paddingLeft: 10,
    paddingTop: 8,
},
messagecontent2: {
  color: "#62935F",
  fontSize: 13,
  paddingLeft: 22,
  paddingTop: 8,

},
messagecontent3: {
  color: "#62935F",
  fontSize: 13,
  paddingLeft: 10,
  paddingTop: 12,
},
});

export default Task;