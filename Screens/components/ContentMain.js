import React,{useRef,useState,useEffect} from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Button,
  Modal,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';

import {Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';

const windowWidth = Dimensions.get('window').width;
const windoheight = Dimensions.get('window').height;
import * as Progress from 'react-native-progress';
import common from '../json/common.json'
import water from '../json/water2.json'
import play from '../json/play2.json'
import heart from '../json/heart2.json'

//彈跳視窗
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


const ContentMain = () => {
  const [visible, setVisible] = React.useState(false);
  const progress = useRef(new Animated.Value(0)).current;
  const progress2 = useRef(new Animated.Value(0)).current;
  const progress3 = useRef(new Animated.Value(0)).current;
  const progress4 = useRef(new Animated.Value(0)).current;
  const [activated,setActivated] = useState (false);
  const [opacity,setOpacity] = useState (false);
  //const [animation,setAnimation] = useState(new Animated.Value(0))
  const WaterAnimation = () =>{
    const toValue = activated ? 0:1
    setActivated(!activated)
    Animated.timing( progress, {
      toValue,
      duration: 3000,
      useNativeDriver: true,
    }).start();

  };
  // const animatedStyle ={
  //   opacityaa:{
  //     opacity:0.5,
  //   }
  // }
  const HeartAnimation = () =>{
    const toValue = activated ? 0:1
    setActivated(!activated)
    Animated.timing(progress2, {
      toValue,
      duration: 5000,
      useNativeDriver: true,
      loop:true,
    }).start();
  };
  const PlayAnimation = () =>{
    const toValue = activated ? 0:1
    setActivated(!activated)
    Animated.timing(progress3, {
      toValue,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };
  const CommonAnimation = () =>{
    Animated.timing(progress3, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
      loop:true,
    }).start();
  };

    
  const[imageClicked,setImageClicked]=useState(false);
  // const image=
  // {
  //   pic:{
  //     '0':require('../image/conversation1.png'),
  //     '1':require('../image/conversation.png'),
  //     // talk:false,
  //     // talk2:false,
  //   }
  // }

  const onClickHandler = (order) => {
    setImageClicked((prevState) => ({
      ...prevState,
      [order]: !prevState[order]
    }));

}

  return (
    // <ScrollView>
    <View style={styles.cardContainerStyle}>
    
    <View style={[styles.thumbnailContainerStyle ]}>
    <View style={styles.iconContentStyle}>
        <Image  style={styles.iconStyle0} source={require('../image/Heart.png')} />
        <Image  style={styles.iconStyle1} source={require('../image/Level.png')} />
    </View>
      <View style={styles.headerContentStyle}>
      <Progress.Bar style={styles.BarStyle0} progress={0.4} width={88} height={11} color={'#FF9090'} />
      <Progress.Bar style={styles.BarStyle1} progress={0.6} width={88} height={11} color={'#E1BF68'} />
      </View>
    </View>


{/* <View style={styles.infoStyle}>
<TouchableOpacity style={styles.infoButton} onPress={()=>{alert("you clicked me")}}>
          <Image style={styles.infoImage} source={require('../image/Info.png')} />
</TouchableOpacity>
</View> */}

    <View >
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
        {/* <View style={{alignItems: 'center'}}> */}
          <Text style={{marginLeft: 24, fontSize: 20, marginTop: 21.29, marginBottom: 15, color:'#705A31', fontWeight: "bold", position: 'absolute',}}>
            養育指南
          </Text>
        <View style={{alignItems: 'center'}}>

          <Image
            source={require('../image/互動區介紹.png')}
            style={{height: 181, width: 294, marginBottom: 19, marginTop: 15}}
          />
          <Image
            source={require('../image/等級介紹.png')}
            style={{height: 236, width: 294, marginBottom: 24}}
          />
        </View>

        
      </ModalPoup>

      <View style={styles.infoStyle}>
        <TouchableOpacity style={styles.infoButton} onPress={() => setVisible(true)}>
                  <Image style={styles.infoImage} source={require('../image/Info.png')} />
        </TouchableOpacity>
      </View>
    </View>

    {/* <View style={styles.Interact_OnStyle}>
        <TouchableOpacity style={styles.Interact_OnButton} onPress={()=>{alert("you clicked me")}}>
                  <Image style={styles.Interact_OnImage} source={require('../image/Interact_On.png')} />
        </TouchableOpacity>
    </View> */}

{/* onPress={()=>{alert("you clicked me")}} */}
    <View style={styles.WaterStyle}>
        <TouchableOpacity style={styles.WaterButton} onPress={WaterAnimation} >
            <Image style={styles.WaterImage} source={require('../image/Water.png')} />
        </TouchableOpacity>
    </View>

    <View style={styles.LoveStyle}>
        <TouchableOpacity style={styles.LoveButton} onPress={HeartAnimation} >
                  <Image  style={styles.LoveImage} source={require('../image/Love.png')} />
        </TouchableOpacity>
    </View>

    <View style={styles.PlayStyle}>
        <TouchableOpacity style={styles.PlayButton} onPress={PlayAnimation} >
                  <Image style={styles.PlayImage} source={require('../image/Play.png')} />
        </TouchableOpacity>
    </View>


    <View style={styles.cardSectionStyle}>
    <ImageBackground  style={styles.windowImage} source={require('../image/window.png')} >
      </ImageBackground>
    </View>

    <View style={styles.cardStageStyle}>
    <ImageBackground  style={styles.stageImage} source={require('../image/stageone.png')} >
      </ImageBackground>
    </View>
    
    

    
    <View style={styles.cardConversation} >
      {/* <Image source={image.pic[imageClicked]}/> */}
      {imageClicked.talk && <Image style={styles.ConversationImage} source={require('../image/conversation1.png')}/> }

    </View>
    <View style={styles.cardplantStyle}>
    
    {/* <Image style={styles.plantImage} source={require('../image/plant.png')} /> */}
   
       <LottieView
        options={CommonAnimation}
        style={[styles.plantImage]} 
        progress={progress4} 
        source={common}
       />
    
   
    
    
    <LottieView
        style={styles.plantImage} 
        source={require('../json/common.json')} 
        autoPlay
        loop={true} 
        // duration={5000}
      />
         <LottieView
        options={WaterAnimation}
        style={[styles.plantImage]} 
        progress={progress} 
        source={water}
       />
       <LottieView 
        options={PlayAnimation}
        style={styles.plantImage} 
        progress={progress3} 
        source={play}
       />
        <LottieView
        options={HeartAnimation}
        style={[styles.plantImage ]} 
        progress={progress2} 
        source={heart}
       />
        {/* <LottieView
        // options={CommonAnimation}
        style={[styles.plantImage]} 
        progress={progress4} 
        autoPlay
        source={common}
       /> */}
       <View style={styles.WaterStyle}>       
        <TouchableOpacity style={styles.WaterButton} onPress={() => onClickHandler('talk')}>
            <Image style={styles.plant2Image} source={require('../image/plant.png')} />
        </TouchableOpacity>
    </View>
   
    </View>
  </View>
  // </ScrollView>
  );
};


const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 0,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 12,
    paddingTop:36,
  },

  iconContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 27,
    paddingTop: 28,
  },

  iconStyle0: {
    width: 24,
    height: 24,
  },

  iconStyle1: {
    width: 24,
    height: 24,
    marginTop:6,
  },

  BarStyle0: {
    borderWidth: 1,
    marginTop:-7,
    borderColor: "#D8CCBB",
    backgroundColor:"#FFFFFF",
  },

  BarStyle1: {
    borderWidth: 1,
    marginTop:4,
    borderColor: "#D8CCBB",
    backgroundColor:"#FFFFFF",
  },


  infoStyle:{
    width:36,
    height:36,
    marginTop: -80 + 28,
    marginLeft: 350,
    position: 'absolute',
  },


  infoImage: {
    width:36,
    height:36,
  },



  cardContainerStyle: {
    height:800,
    width: windowWidth,
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
    // width:windowWidth+50,
    width:450,
    height:170,  
    marginTop:87.71,
    marginLeft:-5,

  },

  cardConversation: {
    width:248,
    height:71,  
    marginTop:189,
    marginLeft:34,
    position: 'absolute',
    zIndex: 2,
  },

  ConversationImage: {
    width: 248,
    height:71,
  },

  cardplantStyle: {
    width: 212,
    height: 239,
    justifyContent: 'center',
    alignItems: 'center', 
    marginTop: 259,
    position: 'absolute',
    marginLeft: 99,
  },
  plant2Image: {
    opacity:0,
    marginTop:-110,
    marginLeft:-85,
    width: 200,
    position: 'absolute',
    zIndex: 1,
  },
  plantImage: {
    marginTop:-15,
    padding:0,
    width: 580,
    position: 'absolute',

  },
 

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



  WaterStyle: {
    width:32,
    height:32,
    marginTop: 130,
    marginLeft: 352,
    position: 'absolute',
  },
  LoveStyle: {
    width:32,
    height:32,
    marginTop: 178,
    marginLeft: 352,
    position: 'absolute',
    zIndex: 1,
  },
  PlayStyle: {
    width:32,
    height:32,
    marginTop: 226,
    marginLeft: 352,
    position: 'absolute',
    zIndex: 1,
  },
//  PlayStyle: {
//     width:32,
//     height:32,
//     marginTop: 274,
//     marginLeft: 352,
//     position: 'absolute',
//   }
});

export default ContentMain;
