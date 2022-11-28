import React, { useState, useEffect } from "react";
import { 
    View, 
    Text, 
    Button,
    StyleSheet, 
    SafeAreaView, 
    Image, 
    ScrollView,
    Dimensions, 
    ImageBackground,
    StatusBar,
    TouchableOpacity,
    TextInput
} from 'react-native';

import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";
import { doc, setDoc, addDoc, collection, updateDoc, deleteDoc, getDoc, getDocs, query, where} from "firebase/firestore"; 
import { db } from '../Config'
import { RadioButton } from 'react-native-paper';
import SettingButton from './SettingButton';

const windowWidth = Dimensions.get('window').width;
const windoheight = Dimensions.get('window').height;

// let year = "";
// let month = "";
// let day = "";

const Setting = () => {
    const navigation = useNavigation();

    const [ nickname, setNickname ] = useState('')
    const [ gender, setGender ] = useState('')
    const [ birth, setBirth ] = useState('')
    const [ interest1, setInterest1 ] = useState('')
    const [ interest2, setInterest2 ] = useState('')
    const [ interest3, setInterest3 ] = useState('')
    const [ health1, setHealth1 ] = useState('')
    const [ health2, setHealth2 ] = useState('')
    const [ health3, setHealth3 ] = useState('')
    const [ seedname, setSeedname ] = useState('')

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
                    setGender(docData.data().gender);
                    setBirth(docData.data().birth);
                    setInterest1(docData.data().interest1);
                    setInterest2(docData.data().interest2);
                    setInterest3(docData.data().interest3);
                    setHealth1(docData.data().health1);
                    setHealth2(docData.data().health2);
                    setHealth3(docData.data().health3);
                    setSeedname(docData.data().seedname);

                    // year = birth.substring(0, 4);
                    // console.log(year);

                    // month = birth.substring(5, 7);
                    // console.log(month);

                    // day = birth.substring(9, 10);
                    // console.log(day);
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


    const handleSignOut = () => {
        auth
        .signOut()
        .then(() => {
            navigation.replace("Inter")
            // console.log(user.uid);
        })
        .catch(error => alert(error.message))
    }



    // const data = [
    //     { value: '男',
    //     },
    //     { value: '女',
    //     },
    //   ];


        return (
            
            // {/* <StatusBar style={styles.container_AreaView}/>
            
            // <View style={styles.headerStyle}>
            //     <ImageBackground  style={styles.center} source={require('../image/header.png')} >

            //     <TouchableOpacity style={styles.leftButton} onPress={() => navigation.navigate("Home")}>
            //     <Image style={styles.iconStyle} source={require('../image/pre.png')} />
            //     </TouchableOpacity>

            //     <Text style={styles.textStyle}>關於我</Text>

            //     </ImageBackground>
            // </View> */}

            <ScrollView>
                <View style={styles.container}>

                <View style={styles.userinfo}>
                    <Image
                        style={styles.userimage}
                        source={require('../image/userimage.png')}
                    />
                    <TextInput editable={false} value={nickname}  style={styles.username}></TextInput>

                    {/* <Text value={nickname} onChangeText={(nickname) => {setNickname(nickname)}} style={styles.username}>阿民</Text> */}
                    <Text style={styles.usertitle}>稱號</Text>
                </View>


                <View style={styles.user_data}>
                    
                    <View style={[styles.cardSectionStyle, styles.card_onecolumn]}>
                    <Text style={[styles.user_datatitle]}>性別</Text>

                    {/* <View style={{width:200}}>
                    
                    <TextInput editable={false} value={gender} style={[styles.sex_text_two]}></TextInput>
                    </View> */}
                    {/* <RadioButton.Group 
                        onValueChange={gender => setGender(gender)} 
                        value={gender} 
                    >*/}
                    {/* <Pressable
                        style={
                        item.value === userOption ? styles.selected : styles.unselected
                    }></Pressable> */}

                            <Image style={
                                gender === "男性" ? [styles.radio_style, styles.male_image] : [styles.radio_style, styles.female_image]} 
                                source={require('../image/male.png')} />
                            <Image style={
                                gender === "男性" ? [styles.radio_style, styles.female_image] : [styles.radio_style, styles.male_image]} 
                                source={require('../image/female.png')} />

                            {/* <Image style={
                                gender === "女" ? [styles.radio_style, styles.female_image] : [styles.radio_style, styles.male_image]} 
                                source={require('../image/male.png')} />
                            <Image style={
                                gender === "女" ? [styles.radio_style, styles.male_image] : [styles.radio_style, styles.female_image]} 
                                source={require('../image/female.png')} /> */}

                            {/* <Image style={
                                gender === "女" ? [styles.radio_style, styles.male_image] : [styles.radio_style, styles.female_image] } 
                                source={require('../image/female.png')} /> */}

                            <Text style={[styles.sex_text, styles.male_text]}>男</Text>
                            <Text style={[styles.sex_text, styles.female_text]}>女</Text>



                        {/* <View>
                        <View style={[styles.radio_style, styles.male_image]}>
                            <RadioButton value="男性" />
                            <Text style={[styles.sex_text, styles.male_text]}>男</Text>
                        </View>
                        <View style={[styles.radio_style, styles.female_image]}>
                            <RadioButton value="女性" />
                            <Text style={[styles.sex_text, styles.male_text]}>女</Text>
                        </View>
                        </View> */}
                    {/* </RadioButton.Group>  */}

                        {/* <Text style={[styles.user_datatitle]}>性別</Text>

                        <Image style={[styles.radio_style, styles.male_image]} source={require('../image/male.png')} />
                        <Text style={[styles.sex_text, styles.male_text]}>男</Text>

                        <Image style={[styles.radio_style, styles.female_image]} source={require('../image/female.png')}/>
                        <Text style={[styles.sex_text, styles.male_text]}>女</Text> */}
                        
                    </View>

                    <View style={[styles.cardSectionStyle, styles.card_threecolumn]}>
                        <Text style={[styles.user_datatitle]}>生日</Text>
                        <View style={styles.birth_year}>
                            {/* <Text style={[styles.birth_text, styles.year_text]}>2000</Text> */}
                            <TextInput editable={false} value={birth.substring(0, 4)} style={[styles.birth_text, styles.year_text]}></TextInput>

                            {/* <TextInput editable={false} value={year} onChangeText={year}  style={[styles.birth_text, styles.year_text]}></TextInput> */}
                            <View style={[styles.down_style, styles.birth_year_down]}>
                                <Image style={styles.birth_image} source={require('../image/Vector.png')} />
                            </View>
                        </View>
                        <Text style={styles.year_title}>年</Text>

                        <View style={styles.birth_month}>
                        <TextInput editable={false} value={birth.substring(5,7)} style={[styles.birth_text, styles.month_text]}></TextInput>

                            {/* <Text style={[styles.birth_text, styles.month_text]}>11</Text> */}
                                <View style={[styles.down_style, styles.birth_month_down]}>
                            <Image style={styles.birth_image} source={require('../image/Vector.png')} />
                            </View>
                        </View>
                        <Text style={styles.month_title}>月</Text>

                        <View style={styles.birth_day}>
                        <TextInput editable={false} value={birth.substring(8, 10)} style={[styles.birth_text, styles.day_text]}></TextInput>
                            {/* <Text style={[styles.birth_text, styles.day_text]}>11</Text> */}
                            <View style={[styles.down_style, styles.birth_day_down]}>
                                <Image style={styles.birth_image} source={require('../image/Vector.png')} />
                            </View>
                        </View>
                        <Text style={styles.day_title}>日</Text>
                    </View>


                    <View style={[styles.cardSectionStyle, styles.card_onecolumn]}>
                        <Text style={[styles.user_datatitle]}>仙人掌名稱</Text>
                        <TextInput editable={false} value={seedname}  style={[styles.plant_name]}></TextInput>

                        {/* <Text style={[styles.plant_name]}>喵仔</Text> */}
                        <View style={[styles.plant_hr]}></View>

                    </View>

                    


                    <View style={[styles.cardSectionStyle, styles.card_twocolumn]}>
                        <Text style={[styles.user_twocolumn_text, styles.hobbytitle]}>興趣</Text>
                        <View style={[styles.hr_style]}></View>
                        <TextInput editable={false} value={interest1} style={styles.hobby_text1}></TextInput>
                        <TextInput editable={false} value={interest2} style={styles.hobby_text2}></TextInput>
                        <TextInput editable={false} value={interest3} style={styles.hobby_text3}></TextInput>
                    </View>

                    <View style={[styles.cardSectionStyle, styles.card_twocolumn]}>
                        <Text style={[styles.user_twocolumn_text, styles.healthytitle]}>健康狀況</Text>
                        <View style={[styles.hr_style]}></View>
                        <TextInput editable={false} value={health1} style={styles.healthy_text1}></TextInput>
                        <TextInput editable={false} value={health2} style={styles.healthy_text2}></TextInput>
                        <TextInput editable={false} value={health3} style={styles.healthy_text3}></TextInput>
                    </View>

                    {/* <Button title="Get Started"
                        onPress={() => navigation.navigate("Home")}
                    /> */}

                    <TouchableOpacity 
                        // onPress={()=>navigation.push('Loginpage')}
                        onPress={handleSignOut}
                        style={styles.signout}>
                        <View>
                            <Text style={styles.signout_text}>登出</Text>
                        </View>
                    </TouchableOpacity>


                    {/* <View style={styles.signout}>
                        <Text style={styles.signout_text}>登出</Text>
                    </View> */}


                    <TouchableOpacity style={styles.modify}>
                        <Text style={styles.modify_text}>修改資料</Text>
                    </TouchableOpacity>


                    {/* <View style={styles.modify}>
                        <Text style={styles.modify_text}>修改資料</Text>
                    </View> */}
                    
                    
                </View>

                

                </View>
                </ScrollView>
                
  );
};

// define your styles
const styles = StyleSheet.create({
    container_AreaView: {
        flex: 1,
        height:151,
        backgroundColor: "#FFFAF2",
      },

    container: {
        flex: 1,
        height: windoheight + 150,
        backgroundColor: "#FFFAF2",
    },

    headerStyle: {
        height: 121,
        // Android Only
        elevation: 4,
      },
      textStyle: {
        fontSize: 20,
        color: "#705A31",
        fontWeight: "bold",
        Top: 49,
        // justifyContent: "center",
        // alignItems: "center",
      },
    
      center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth,
        height: 121,
      },
    
      leftButton: {
        // -(72/2)-131
        position: 'absolute',
        width:72,
        left: 28,
      },
    
      rightButton: {
        position: 'absolute',
        Top: 48,
        right: 28,
      },
    
      iconStyle: {
        width: 32,
        height: 32,
      },


      
    userinfo: {
        width:windowWidth,
        height:226,
        alignItems:'center',
    },

    userimage: {
        width:108,
        height:108,
        marginTop:32,
    },


    username: {
        width:100,
        height:27,
        color:'#705A31',
        fontWeight: "bold",
        fontSize: 20,
        marginTop:16,
        alignItems: 'center',
        textAlign:'center',
    },



    usertitle: {
        width:28,
        height:19,
        color:'#705A31',
        fontWeight: "bold",
        fontSize: 14,
        opacity: 0.5,
        marginTop:4,
    },

    user_data:{
        backgroundColor:'#F8ECC1',
        borderColor:'#F8ECC1',
        borderRadius:10,
        width:334,
        height: 676,
        marginTop:20,
        paddingTop:20,
        paddingHorizontal:20,
        alignItems:'center',
        alignSelf:'center',
    },

    cardSectionStyle: {
        backgroundColor: "#fff",
        borderColor: "#fff",
        borderBottomWidth: 1,
        borderWidth: 1,
        borderRadius: 15,
    },

    user_datatitle:{
        color:"#705A31",
        fontWeight: "bold",
        fontSize: 16,
        marginLeft:20,
        marginTop:20,
    },

    user_twocolumn_text: {
        color:"#705A31",
        fontWeight: "bold",
        fontSize: 16,
        marginTop:20,
    },

    hobbytitle: {
        marginLeft:131,
    },

    healthytitle: {
        marginLeft:115,
    },

    card_onecolumn: {
        width: 294,
        height: 62,
        marginBottom: 12,
        flexDirection: "row",
        justifyContent: "flex-start"
    },

    card_threecolumn: {
        width: 294,
        height: 128,
        marginBottom: 12,
        flexDirection: "row",
        justifyContent: "flex-start"
    },

    card_twocolumn: {
        width: 294,
        height: 104,
        marginBottom: 12,
        flexDirection: "row",
        justifyContent: "flex-start"
    },

    /* SEX */
    radioBox: {
        flex: 1, 
        flexDirection: 'row', 
        backgroundColor:"Black" ,  
        alignItems: 'center'
      },

    radio_style: {
        width: 16,
        height: 16,
        marginTop:  22,
        // flex: 1, 
        // flexDirection: 'row', 
        // backgroundColor:"Black" ,  
        // alignItems: 'center'
    },

    male_image: {
        marginLeft: 84,
        position: 'absolute',
    },

    female_image: {
        marginLeft: 164,
        position: 'absolute',
    },

    sex_text: {
        width:16,
        height:22,
        color:'#705A31',
        fontWeight: "bold",
        fontSize: 16,
        marginTop:20,
        position: 'absolute',
    },

    sex_text_two: {
        width:16,
        height:20,
        color:'#62935F',
        fontWeight: "bold",
        fontSize: 16,
        marginTop:20,
        marginLeft:90,
        position: 'absolute',
    },

    male_text: {
        marginLeft:112,
    },

    female_text: {
        marginLeft:188,
    },

    /* BIRTH */
    birth_year: {
        backgroundColor:'#CBE4C3',
        borderColor:'#CBE4C3',
        borderRadius:3,
        width: 165,
        height: 36,
        marginLeft: 32,
        marginTop:20,
    },

    birth_month: {
        backgroundColor:'#CBE4C3',
        borderColor:'#CBE4C3',
        borderRadius:3,
        width: 64,
        height: 36,
        marginLeft: 84,
        marginTop:72,
        position: 'absolute',
    },

    birth_day: {
        backgroundColor:'#CBE4C3',
        borderColor:'#CBE4C3',
        borderRadius:3,
        width: 64,
        height: 36,
        marginLeft: 185,
        marginTop:72,
        position: 'absolute',
    },

    birth_text: {
        color:'#705A31',
        fontWeight: "bold",
        fontSize: 16,
        marginTop:7,
        marginLeft:10,
    },

    year_text: {
        width:119,
        height:22,
    },

    month_text: {
        width:25,
        height:22,
    },

    day_text: {
        width:25,
        height:22,
    },

    down_style: {
        backgroundColor:'#62935F',
        borderColor:'#62935F',
        borderBottomRightRadius:3,
        borderTopRightRadius:3,
        width:24,
        height:36,
        paddingTop:17,
        paddingLeft:8,
        position: 'absolute',
    },

    birth_year_down: {
        marginLeft:141,
    },


    birth_month_down: {
        marginLeft:40,
    },

    birth_day_down: {
        marginLeft:40,
    },

    birth_image: {
        width:8,
        height:5,
    },

    year_title: {
        color:'#705A31',
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 27,
        marginLeft: 8,
    },


    month_title: {
        color:'#705A31',
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 79,
        marginLeft: 159,
        position: 'absolute',
    },

    day_title: {
        color:'#705A31',
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 79,
        marginLeft: 257,
        position: 'absolute',
    },


    /* PlantName */
    plant_name: {
        color:'#62935F',
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 0,
        marginLeft: 81,
    },

    plant_hr: {
        width:154,
        borderBottomColor:'#816B42',
        borderBottomWidth:1,
        marginTop: 50,
        marginLeft: 120,
        position: 'absolute',
    },

    hr_style: {
        width:256,
        borderBottomColor:'#816B42',
        borderBottomWidth:1,
        marginTop: 50,
        marginLeft: 14,
        position: 'absolute',
    },

    /* HOBBY */
    hobby_text1: {
        color:'#62935F',
        fontWeight: "bold",
        fontSize: 16,
        position: 'absolute',
        width:50,
        height:22,
        marginTop: 62,
        marginLeft: 40,
        textAlign:'center',
    },

    hobby_text2: {
        color:'#62935F',
        fontWeight: "bold",
        fontSize: 16,
        position: 'absolute',
        width:50,
        height:22,
        marginTop: 62,
        marginLeft: 125,
        textAlign:'center',
    },

    hobby_text3: {
        color:'#62935F',
        fontWeight: "bold",
        fontSize: 16,
        position: 'absolute',
        width:50,
        height:22,
        marginTop: 62,
        marginLeft: 210,
        textAlign:'center',
    },

    /* HEALTHY */
    healthy_text1: {
        color:'#62935F',
        fontWeight: "bold",
        fontSize: 16,
        position: 'absolute',
        width:50,
        height:22,
        marginTop: 62,
        marginLeft: 40,
    },

    healthy_text2: {
        color:'#62935F',
        fontWeight: "bold",
        fontSize: 16,
        position: 'absolute',
        width:50,
        height:22,
        marginTop: 62,
        marginLeft: 125,
    },

    healthy_text3: {
        color:'#62935F',
        fontWeight: "bold",
        fontSize: 16,
        position: 'absolute',
        width:50,
        height:22,
        marginTop: 62,
        marginLeft: 210,
    },

    /* Sign Out */
    signout: {
        backgroundColor: '#62935F',
        borderColor: '#62935F',
        borderRadius:15,
        width:146,
        height:48,
        marginTop:8,
    },

    signout_text: {
        color:'#FFFAF2',
        fontWeight: "bold",
        fontSize: 16,
        marginHorizontal:55.3,
        marginVertical:13,
    },

    modify: {
        backgroundColor: '#816B42',
        borderColor: '#816B42',
        borderRadius:15,
        width:146,
        height:48,
        marginTop:12,
    },

    modify_text:{
        alignSelf:'center',
        color:'#FFFAF2',
        fontWeight: "bold",
        fontSize: 16,
        marginVertical:13,
    },
    imageStyle: {
        width: null,
        borderRadius:15,
        overflow: 'hidden',          
    },

    More_Button: {
        flex:1,
        width:70,
        height:24,
        backgroundColor:'#F6CA2C',
        borderWidth:0.5,
        borderColor:'#F6CA2C',
        borderRadius:10,
        position: 'absolute',
        paddingHorizontal:12,
        paddingVertical:4,
    },
    More_textActive:{
        color:'#705A31',
        fontWeight: "bold",
        fontSize: 12,
    },




    card_newsevents: {
        width: 286,
        height: 145,
        marginBottom: 19,
    },

    image_newevents: {
        height: 145,
    },

    Button_newevents: {
        marginLeft:212,
        marginTop:117
    },


    card_newspost: {
        width: 278,
        height:217,
        marginBottom: 12,
        },

    image_newspost: {
        height: 217,      
        },

        Button_newspost: {
        marginLeft:201,
        marginTop:189
    },



    card_eventsRec: {
        width: 286,
        height: 80,
        marginBottom: 12,
        flexDirection: "row",
        justifyContent: "flex-start"
    },

    image_eventsRec: {
        height: 145,
    },

    Button_eventsRec: {
        marginLeft:212,
        marginTop:117
    },







    cardText: {
        color:'#705A31',
        fontWeight: "bold",
        fontSize: 20,
    },



    thumbnailContainerStyle: {
        flexDirection: "row",
        justifyContent: "flex-start",
        width:350,
        height: 48,
        marginBottom:11,
        marginTop:-2,
        },
        left_thumbnailStyle: {
        width:41.75,
        height: 18.55,
        marginStart:90,
        marginTop:15.25,
        },

        right_thumbnailStyle: {
        width:41.75,
        height: 18.55,
        marginStart:15,
        marginTop:15.25,
        },
        headerContentStyle: {
        flexDirection: "column",
        justifyContent: "space-around",
        marginLeft: 15.25,
        },

        columns: {
        justifyContent: "center",
        alignItems: "center",
        },

        Rec_signbg: {
        backgroundColor:"#FFEEB4",
        borderColor:"#FFEEB4",
        borderWidth:0.5,
        borderRadius:15,
        margin: 7,
        width: 66,
        height: 66
        },

        Rec_sign: {
        width:56,
        height:48.45,
        position: 'absolute',
        marginHorizontal: 5,
        marginVertical: 9,
        },

        Rec_header: {
        flexDirection: "column",
        justifyContent: "space-around",
        marginLeft: 6,
        marginTop: 7,
        height:66,
    },

    Rec_header_title: {
        color:'#705A31',
        fontWeight: "bold",
        fontSize: 20,
    },

    Rec_header_date: {
        color:'#705A31',
        fontWeight: "normal",
        fontSize: 14,
    }

});

//make this component available to the app
export default Setting;