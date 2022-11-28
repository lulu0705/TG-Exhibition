import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { auth } from "../firebase";
import { doc, setDoc, addDoc, collection, updateDoc, deleteDoc, getDoc, getDocs, query, where} from "firebase/firestore"; 
import { db } from './Config'

const HomeScreen = () => {
    const navigation = useNavigation()

    // const handleSignOut = () => {
    //     auth
    //     .signOut()
    //     .then(() => {
    //         navigation.replace("Three")
    //     })
    //     .catch(error => alert(error.message))
    // }

    const citiesRef = collection(db, "users");


    function create () {
        getDoc(doc(db, "users", "test_book")).then((docData) => {
            if(docData.exists()) {

            console.log(docData.data().mapp.loc);
            // setName(docData.data().username);
            // setEmail(docData.data().email);

            } else {
            console.log('No such a data!!');
            }
        }).catch((error) => {
            console.log(error);
        });;
    }



    return (
        <View style={styles.container}>
            <Text>Email： { auth.currentUser?.email}</Text>
            <TouchableOpacity
                // onPress={handleSignOut}
                onPress={create}
                style={styles.button}
            >
            <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop:40,
      },
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
      },
})


export default HomeScreen