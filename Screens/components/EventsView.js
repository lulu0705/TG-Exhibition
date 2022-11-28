import React, { useState, useEffect } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    Image, 
    ScrollView,
    Dimensions, 
    ImageBackground,
    Animated,
    Modal,
    Pressable,
    TextInput,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SegmentedControlTab from 'react-native-segmented-control-tab';

import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";
import { doc, setDoc, addDoc, collection, updateDoc, deleteDoc, getDoc, getDocs, query, where} from "firebase/firestore"; 
import { db } from '../Config'


const windowWidth = Dimensions.get('window').width;
const windoheight = Dimensions.get('window').height;

const ModalPoup = ({visible, children}) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
      toggleModal();
    }, [visible]);
    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 200);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    };
    return (
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackGround}>
          <Animated.View
            style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  };

const EventsView = ({ data }) => {
    const [userOption, setUserOption] = useState(null);
    const [visible, setVisible] = React.useState(false);
    // const selectHandler = (value) => {
    //   onSelect(value);
    //   setUserOption(value);
    // };

    // const [ read0, setData0 ] = useState('')
    // const [ read1, setData1 ] = useState('')
    // const [ read2, setData2 ] = useState('')
    // const [ read3, setData3 ] = useState('')
    // const [ read4, setData4 ] = useState('')
    // // const [ link, setLink ] = useState('')
    // // const [ loc, setLoc ] = useState('')
    // // const [ time, setTime ] = useState('')
    // // const [ title, setTitle ] = useState('')
    // const data = [5]

    // useEffect(() => {      
    //     getDoc(doc(db, "hobby", "read")).then((docData) => {
    //         if(docData.exists()) {
    //             // for(let i = 0 ; i < 5 ; i++ ) {
    //             //     num = 'read' + (i)
    //                 setData0(docData.data().read0);
    //                 setData1(docData.data().read1);
    //                 setData2(docData.data().read2);
    //                 setData3(docData.data().read3);
    //                 setData4(docData.data().read4);

                    
    //                 // console.log(docData.data().read0);
    //                 // console.log(docData.data().read1);
    //                 // console.log(docData.data().read2);
    //                 // console.log(docData.data().read3);
    //                 // console.log(docData.data().read4);

    //                 // setName(docData.data().username);
    //                 // setEmail(docData.data().email);
    //             // }
    //         } else {
    //             console.log('No such a data!!');
    //         }
    //     }).catch((error) => {
    //         console.log(error);
    //     });;
        
    //     data[0] = read0
    //     data[1] = read1
    //     data[2] = read2
    //     data[3] = read3
    //     data[4] = read4
    //     console.log(data)
    // }, [])

    useEffect(() => {      
        console.log("view"+ data[0].Title)
    },[])

    return (
    <View>
        {data.map((item) => {
        return (
            <>
            <TouchableOpacity 
            activeOpacity={.7}
            style={[styles.cardSectionStyle, styles.card_events]}
            onPress={() => setVisible(true)}
            key={item.Title}>

            <View style={styles.events_header}>
                <Text style={styles.events_header_title}>{item.Title}</Text>
            </View>
            <View style={[styles.hr_style]}></View>
            <View style={styles.events_dateloc}>
            

            {/* <Text style={styles.events_header_date}>活動時間：{item.Time}</Text> */}
            <Text style={styles.events_header_date}>活動時間：{item.Time ? item.Time : '點擊查看更多活動內容'}</Text>

            
            {/* <Text style={styles.events_header_loc}>活動地點：{item.Loc}</Text> */}
            <Text style={styles.events_header_loc}>活動地點：{item.Loc ? item.Loc : '點擊查看更多活動內容'}</Text>

            </View>
            </TouchableOpacity>

            <ModalPoup visible={visible}>
            <View style={{alignItems: 'center'}}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => setVisible(false)}>
                <Image
                    source={require('../image/x.png')}
                    style={{height: 30, width: 30, marginTop: 21.29, marginLeft: 260}}
                />
                </TouchableOpacity>
            </View>
            </View>
            <Text style={styles.content_header}>
                活動資訊
            </Text>
            <View >
            <Text style={styles.content_title}>{item.Title}</Text>
            <Text style={styles.content_main}>{item.Content}</Text>

            </View>
            </ModalPoup>
            </>
        );
      })}
            {/* <TouchableOpacity 
            activeOpacity={.7}
            style={[styles.cardSectionStyle, styles.card_events]}
            onPress={()=>{alert("you clicked me")}}>

            <View style={styles.events_header}>
                <Text style={styles.events_header_title}>總館每月一書講座─唐珮玲《我是你的觀護人：凝視犯罪深淵》</Text>
            </View>
            <View style={[styles.hr_style]}></View>
            <View style={styles.events_dateloc}>
            <TextInput editable={false} value={data[0]}  style={styles.username}></TextInput>

                <Text style={styles.events_header_date}>活動時間：12月11日（週日）下午2:00-4:30</Text>
                <Text style={styles.events_header_loc}>活動地點：李科永紀念圖書館B2會議廳</Text>
            </View>
        </TouchableOpacity> */}

    </View>
    )
  }
  
  const styles = StyleSheet.create({
    modalBackGround: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContainer: {
        width: '80%',
        backgroundColor: '#FFFAF2',
        borderRadius: 30,
        elevation: 20,
      },

      content_header: {
        marginLeft: 24, 
        fontSize: 22, 
        marginTop: 21.29, 
        marginBottom: 15, 
        color:'#705A31', 
        fontWeight: "bold", 
        position: 'absolute',
        backgroundColor:'#F8ECC1'
      },
      content_title: {
        color:'#705A31',
        fontWeight: "bold",
        fontSize: 20,
        marginStart:24,
        marginRight:24, 
        marginTop: 15, 
        marginBottom:20,
        textAlign:'justify',
      },

      content_main: {  
        marginStart:24,
        marginRight:24,
        marginBottom: 20, 
        textAlign:'justify',
        lineHeight: 22,
      },

    container: {
        flex: 1,
        height: windoheight + 150,
    },
    wrapA: {
        width: windowWidth,
        height: windoheight*0.25,
        padding:25,
        // paddingVertical:25,
        // backgroundColor:'gray',
    },
    wrapB: {
        width: windowWidth,
        height: 700,
    },
    wrapC: {
        width: windowWidth-40,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginRight:40,
    },
    wrapDot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    dotActive: {
        margin:3,
        color:'black'
    },
    dot:{
        margin:3,
        color:'white'
    },

    btn_container: {
        flex: 1,
        flexDirection:'row',
    },
    btn_styles: {
        flex: 1,
        flexDirection:'row',
        justifyContent: "center",
        alignItems: "center",
        position: 'absolute',
        width:windowWidth,
        height:48,
    },
    button:{
        flex:1,
        width:100,
        height:48,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#CDE49C',
        borderWidth:0.5,
        borderColor:'#CDE49C',
        borderRadius:9,
    },
    text:{
        color:'#705A31',
        fontWeight: "bold",
        fontSize: 16,
    },
    buttonActive:{
        width:100,
        flex:1,
        height:48,
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'#F6CA2C',
        borderWidth:0.5,
        // borderColor:'#F6CA2C',
        borderRadius:9,
    },
    textActive:{
        color:'#705A31',
        fontWeight: "bold",
        fontSize: 16,
    },
    buttonActiveLR:{
        borderTopLeftRadius:9,
        borderBottomLeftRadius:9,
        marginRight:24,
        marginLeft:24
    },

    event_container:{
        position: 'absolute',
        marginTop:300,
        marginEnd:25,
        marginStart:28,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#CDE49C',
        borderRadius:25,
        borderWidth:0.5,
        borderColor:'#CDE49C',
        width:355,
        paddingTop:24,
    },


        cardSectionStyle: {
          backgroundColor: "#fff",
          borderColor: "#fff",
          borderBottomWidth: 1,
          borderWidth: 1,
          borderRadius: 15,

        },
        imageStyle: {
          width: null,
          borderRadius:15,
          overflow: 'hidden',
          opacity:0.8,          
        },

        More_Button: {
            flex:1,
            width:70,
            // width:370,
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
            borderColor:'#CDE49C'
          },

        image_newspost: {
            height: 217,      
          },
  
          Button_newspost: {
            marginLeft:201,
            marginTop:189,

            position: 'absolute',

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
        },




        card_events: {
            width: 320,
            // height: 145,
            height: 155,
            marginBottom: 12,
            flexDirection: "row",
            justifyContent: "flex-start"
        },

        hr_style: {
            width:300,
            borderBottomColor:'#CDE49C',
            borderBottomWidth:3,
            borderRadius:5,
            marginTop: 70,
            marginLeft: 10,
            position: 'absolute',
        },

        events_signbg: {
            backgroundColor:"#FFEEB4",
            borderColor:"#FFEEB4",
            borderWidth:0.5,
            borderRadius:15,
            margin: 7,
            width: 66,
            height: 66
          },

        events_sign: {
            width:56,
            height:48.45,
            position: 'absolute',
            marginHorizontal: 5,
            marginVertical: 9,
          },

        events_header: {
            flexDirection: "column",
            justifyContent: "space-around",
            marginLeft: 10,
            marginTop: 7,
            width:300,
            // height:66,
            height:56,
            // backgroundColor:'blue'
        },

        events_header_title: {
            color:'#705A31',
            fontWeight: "bold",
            fontSize: 18,
        },

        events_header_date: {
            color:'#705A31',
            fontWeight: "bold",
            fontSize: 14,
            marginBottom:10,
        },

        events_header_loc: {
            color:'#705A31',
            fontWeight: "bold",
            fontSize: 14,
            marginBottom:10,
        },
        events_dateloc: {
            width: 300,
            height:50,
            marginStart:10,
            position: 'absolute',
            marginTop:85,
            // backgroundColor:'pink'
        },

        Button_events :{
            marginLeft:20,
            marginTop:50
        },



        centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20
          },
        modalView2: {
            margin: 10,
            backgroundColor: "#F8ECC1",
            borderRadius: 20,
            padding: 35,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
          },
        button: {
            borderRadius: 10,
            padding: 10,
            elevation: 2,
            marginLeft: 250,
          },
          buttonOpen: {
            backgroundColor: "#F194FF",
          },
          buttonClose: {
            backgroundColor: "#62935F",
          },
        textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
          },
        modalText: {
            color:"#705A31",
            marginBottom: 15,
            textAlign: "center",
            fontWeight:"bold",
        },
        

});
  export default EventsView;