import React, { useState } from "react";
import { KeyboardAvoidingView, Keyboard, Image, View, StyleSheet, ScrollView, TextInput, Text, TouchableOpacity, Modal, Pressable, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {Dimensions} from 'react-native';
import Lottie from 'lottie-react-native';
import Task from './Task';
const windowWidth = Dimensions.get('window').width;


const Communicatecontent = () => {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddTask = () => {
    // console.log(task);
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <ScrollView style={styles.bgcolor}>
      <Text style={styles.textstyle2}>
        查看更多仙人掌
      </Text>
      <View style={styles.circlecontainer}>
        <Image source={require('../image/circlerabbit.png')} style={styles.circle} />
        <Image source={require('../image/circlepoor.png')} style={styles.circle} />
        <Image source={require('../image/circleking.png')} style={styles.circle} />
        <Image source={require('../image/circlebear.png')} style={styles.circle} />

      </View>


      <Modal animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
        <View><View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>X</Text>
              </Pressable>
              <Text style={styles.modalText}>柾兔泰泰</Text>
              <Image source={require('../image/yellowline.png')} style={styles.yellowlinestyle} />
              <Text style={styles.modalText2}>參與過的活動</Text>



              <View style={styles.messagebg2}>
                <Image source={require('../image/purin.png')} style={styles.user2} />
                <View style={styles.messagetext}>
                    <Text style={styles.messagetitle2}>十月花博農民市集</Text>
                    <Text style={styles.messagecontent2}>參與日期：10月15日(週六)</Text>
                </View>
                {/* <Text style={styles.activityplace}>活動地點</Text> */}
              </View>


            
            <View style={styles.messagebg2}>
                <Image source={require('../image/purin.png')} style={styles.user2} />
                <View style={styles.messagetext}>
                    <Text style={styles.messagetitle2}>三興分館借書樂有趣</Text>
                    <Text style={styles.messagecontent2}>參與日期：06月29日(週三)</Text>
                </View>
                {/* <Text style={styles.activityplace}>活動地點</Text> */}
            </View>
            <View style={styles.messagebg2}>
                <Image source={require('../image/purin.png')} style={styles.user2} />
                <View style={styles.messagetext}>
                    <Text style={styles.messagetitle2}>閱讀享時光感謝祭</Text>
                    <Text style={styles.messagecontent2}>參與日期：02月07日(週一)</Text>
                </View>
                {/* <Text style={styles.activityplace}>活動地點</Text> */}
            </View>
            <Text style={styles.modalText3}>養成心得</Text>
              <View style={styles.rabbitbackground}>
                <Text style={styles.rabbitText}>參加了好多活動才終於把曉兔養大，能成為仙中之王真是感動嗚嗚。</Text>
              </View>
              
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>

              </TouchableOpacity>

            </View>
          </View>
        </View>
        
      </Modal>



       {/* <TouchableOpacity
        onPress={() => setModalVisible(true)}
      >
        <Image source={require('../image/nightcactus.png')} style={styles.nightcactus} />
      </TouchableOpacity> */}
     
     <TouchableOpacity
        onPress={() => setModalVisible(true)}
      >
    <View style={styles.cardSectionStyle}>
      <ImageBackground  style={styles.windowImage} source={require('../image/window.png')} >
      </ImageBackground>
    </View>

    <View style={styles.cardStageStyle}>
      <ImageBackground  style={styles.stageImage} source={require('../image/stageone.png')} >
      </ImageBackground>
    </View>
    
    <View style={styles.cardplantStyle}>
      <Lottie 
          style={styles.plantImage} 
          source={require('../json/common.json')} 
          autoPlay
          loop={true} 
        />
      </View>
    </TouchableOpacity>

{/* Added this scroll view to enable scrolling when list gets longer than the page */}

<ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      {/* Today's Tasks */}
      <View style={styles.boardbg}>
        <Text style={styles.messageboardtitle}>留言板</Text>
         {/* one */}
         <View style={styles.messagebg}>
            <Image source={require('../image/user3.png')} style={styles.user} />
            <View style={styles.messagetext}>
                <Text style={styles.title}>金仔</Text>
                <Text style={styles.content2}>你好會培育仙人掌!</Text>
          </View>
        </View>

        <View style={styles.msg}>
            <Image source={require('../image/arrow.png')} style={styles.arrowstyle} />
            <Text style={styles.messagecontent}>回覆(6)</Text>
            <Image source={require('../image/heart2.png')} style={styles.heart2style} />
            <Text style={styles.messagecontent}>喜歡(5)</Text>
            <Text style={styles.messagecontent2}>2022.09.09</Text>
        </View>


        {/* two */}
        <View style={styles.messagebg}>
            <Image source={require('../image/user2.png')} style={styles.user} />
            <View style={styles.messagetext}>
                <Text style={styles.title}>小麻糬</Text>
                <Text style={styles.content2}>好可愛!是貓咪!!</Text>
          </View>
        </View>

        <View style={styles.msg}>
            <Image source={require('../image/arrow.png')} style={styles.arrowstyle} />
            <Text style={styles.messagecontent}>回覆(2)</Text>
            <Image source={require('../image/heart2.png')} style={styles.heart2style} />
            <Text style={styles.messagecontent}>喜歡(3)</Text>
            <Text style={styles.messagecontent2}>2022.09.09</Text>
        </View>

        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
      
      </ScrollView>

      <View style={styles.messageboardcontainer}>

          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeTaskWrapper}
          >
            <TextInput style={styles.createmessage} placeholder={'write a comment'} value={task} onChangeText={text => setTask(text)} ></TextInput>
            <TouchableOpacity onPress={() => handleAddTask()} style={{marginRight:50}}>
              <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
         

          {/* <View style={styles.messagebg}>
          
            <Image source={require('../image/user1.png')} style={styles.user} />
            <View style={styles.messagetext}>
              <Text style={styles.messagetitle}>小伊</Text>
              <Text style={styles.messagecontent}>好可愛的仙人掌!!!</Text>
            </View>
          </View>
          <View style={styles.messagebg}>
            <Image source={require('../image/user2.png')} style={styles.user} />
            <View style={styles.messagetext}>
              <Text style={styles.messagetitle}>阿酷</Text>
              <Text style={styles.messagecontent}>好有互動感~~</Text>
            </View>
          </View>
          <View style={styles.messagebg}>
            <Image source={require('../image/user3.png')} style={styles.user} />
            <View style={styles.messagetext}>
              <Text style={styles.messagetitle}>榮榮</Text>
              <Text style={styles.messagecontent}>好可愛的仙人掌!!!</Text>
            </View>
          </View> */}
          {/* <View style={styles.yellowline} >
            <Image source={require('../image/yellowline.png')} />
          </View> */}
          {/* <View style={styles.createcontainer}>
            <TextInput placeholder=" 新增留言..." style={styles.createmessage}></TextInput>
            <Image source={require('../image/createbutton.png')} style={styles.createbutton} />
          </View> */}
        
      </View>
    </ScrollView>
  );

};

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
  messagetitle: {
      color: "#705A31",
      paddingLeft: 23,
      fontSize: 12,
      fontWeight: "bold",
  },
  
  
  title: {
    color: "#705A31",
    fontSize: 12,
    fontWeight: "bold",
    // backgroundColor:'pink',
    marginLeft:24,
    marginTop:16,
    width:180,
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

  content2: {
    color: "#705A31",
    fontSize: 16,
    // backgroundColor:'gray',
    marginLeft:24,
    marginTop:3,
    width:180,
  },

  messagecontent3: {
      color: "#62935F",
      fontSize: 13,

  },


  cardSectionStyle: {
    width: 193,
    height:221.29,
    justifyContent: 'center',
    alignItems: 'center',    
    marginLeft: 109,
    marginTop:53,
  },
  windowImage: {
    width: 193,
    height:221.29,
    justifyContent: 'center',
    alignItems: 'center',
  },

  stageImage: {
    width: 450,
    height:180,
  },

  cardStageStyle: {
    width:450,
    height:170,  
    marginTop:87.71,
    marginLeft:-5,
  },
  cardplantStyle: {
    width: 212,
    height: 239,
    justifyContent: 'center',
    alignItems: 'center', 
    marginTop: 129,
    position: 'absolute',
    marginLeft: 99,
    
  },

  plantImage: {
    marginTop:15,
    padding:0,
    width: 580,
    position: 'absolute',
    
  },




  container: {
    flex: 1,
    backgroundColor: '#FFFAF2',
    alignItems: 'left',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 130
  },
  textstyle: {
    fontSize: 20,
  },

  iconstyle1: {
    width: 77,
    height: 77,
  },
  bgcolor: {
    backgroundColor: '#FFFAF2',
  },
  textstyle2: {
    color: "#705A31",
    fontSize: "16px",
    fontWeight: "bold",
    paddingLeft: 19,
    paddingTop: 10,
  },
  circle: {
    width: 80,
    height: 80,
  },
  circlecontainer: {
    flex: 1,
    alignItems: 'left',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  messageboardcontainer: {
    flex: 1,
    marginBottom:50,
  },
  nightcactus: {
    width: windowWidth,
    height: 471,
    marginTop: 20,
    paddingTop: 50,
    alignContent:'center',
    alignSelf:'center',
    // backgroundColor:'pink'
  },
 
  boardbg: {
    marginLeft: 0,
    marginTop: 28,
    backgroundColor: "#F8ECC1",
    width: 334,
    height: 506,
    borderRadius: 17,
    alignContent:'center',
    alignSelf:'center',
  },
  messagebg: {
    width: 289,
    height: 73,
    backgroundColor: "#FFFAF2",
    borderRadius: 13,
    marginLeft: 20,
    marginTop:16,

    flexDirection: 'row',

  },
  messagebg2: {
    width: 286,
    height: 80,
    backgroundColor: "#F8ECC1",
    borderRadius: 13,
    flexDirection: 'row',
    marginTop:12,

  },
  messagetext: {

  },
  messageboardtitle: {
    color: "#705A31",
    fontSize: 20,
    paddingTop: 28,
    paddingLeft: 125,
    marginBottom:4,
    fontWeight: "bold",
  },
  messagetitle: {
    color: "#705A31",
    paddingLeft: 23,
    paddingTop: 13,
    fontSize: 12,
    fontWeight: "bold",
  },
  messagetitle2: {
    color: "#705A31",
    paddingLeft: 13,
    paddingTop: 14,
    fontSize: 20,
    fontWeight: "bold",
  },

  user: {
    width: 58,
    height: 58,
    marginLeft: 18,
    marginTop: 8,

  },
  user2: {
    width: 66,
    height: 66,
    marginTop: 7,
    marginBottom:7,
    marginLeft:7,

  },
  usertext: {
    marginLeft: 99,
    marginTop: 13,
  },
  yellowline: {
    width:320,
    marginTop: 23,
    marginLeft: 5,
    alignItems: 'center',
  },
  createmessage: {
    width: 254,
    height: 48,
    backgroundColor: "#F5F5F5",
    borderRadius: 13,
    marginLeft: 50,
    marginTop: 19,
    paddingLeft:18,
  },
  createcontainer: {
    flexDirection: "row",
  },
  createbutton: {
    width: 26,
    height: 26,
    marginLeft: 9,
    marginTop: 30,
  },//Modal
  modalView: {
    margin: 10,
    backgroundColor: "#FFFAF2",
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
    marginBottom: 15,
    textAlign: "center",
    fontSize:20,
    color:"#62935F",
    fontWeight: "bold",
  },
  modalText2: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 16,
    color:"#705A31",
    fontWeight:"bold",
  },
  modalText3: {
    marginTop:10,
    textAlign: "center",
    fontSize: 16,
    color:"#705A31",
    fontWeight:"bold",
  },
  rabbitText: {
    width:222,
    height:66,
    color: "#705A31",
    // backgroundColor:'pink',
    // marginStart:32,
  },
  rabbitbackground: {
    width: 286,
    height: 100,
    alignItems:'center',
    justifyContent: "center",
    backgroundColor: "#F8ECC1",
    borderRadius: 7,
    marginTop:12,
  },
  seedbackground: {
    width: 286,
    height: 100,
    marginTop: 8,
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 7,
  },
  
  yellowlinestyle: {
    width: 286,
    height: 1,
    marginTop: 10,
    marginBottom: 16,
  },
  messageboardbutton: {
    marginLeft: 10,
    width: 135,
    height: 48,
    marginTop: 20,

  },
  seedbutton: {
    width: 146,
    height: 48,
    marginTop: 20,

  },
  modalleft: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  activityplace: {
    color: "#705A31",
    fontSize: 13,
    paddingTop: 40,
  },











  //留言
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    marginTop:20,
    width: 26,
    height: 26,
    backgroundColor: '#62935F',
    borderRadius: 60,
    alignItems: 'center',
  },
  addText: {
    color:"#FFFAF2",
    fontSize:15,
    paddingTop:2,
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    // marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  

  


});

export default Communicatecontent;