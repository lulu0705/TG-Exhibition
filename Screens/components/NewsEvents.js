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
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import albumData from "../json/albums";

import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";
import { doc, setDoc, addDoc, collection, updateDoc, deleteDoc, getDoc, getDocs, query, where} from "firebase/firestore"; 
import { db } from '../Config'
import EventsView from './EventsView';

const images = [
    require('../image/swiper_1.png'),
    require('../image/swiper_2.png'),
    require('../image/swiper_3.png')
];

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



const ModalNEWS = ({visible, children}) => {
    const [showModal2, setShowModal2] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
      toggleModal();
    }, [visible]);
    const toggleModal = () => {
      if (visible) {
        setShowModal2(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal2(false), 200);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    };
    return (
      <Modal transparent visible={showModal2}>
        <View style={styles.modalBackGround}>
          <Animated.View
            style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  };




const NewsEvents = () => {
    const [visible, setVisible] = React.useState(false);
    const [modalVisible2, setModalVisible2] = React.useState(false);


    const [ read0, setData0 ] = useState('')
    const [ read1, setData1 ] = useState('')
    const [ read2, setData2 ] = useState('')
    const [ read3, setData3 ] = useState('')
    const [ read4, setData4 ] = useState('')
    // const [ link, setLink ] = useState('')
    // const [ loc, setLoc ] = useState('')
    // const [ time, setTime ] = useState('')
    // const [ title, setTitle ] = useState('')
    let data = [5]




    useEffect(() => {      
      getDoc(doc(db, "hobby", "read")).then((docData) => {
        
          if(docData.exists()) {
              // for(let i = 0 ; i < 5 ; i++ ) {
              //     num = 'read' + (i)
                data[0] = (docData.data().read0);
                data[1] = (docData.data().read1);
                data[2] = (docData.data().read2);
                data[3] = (docData.data().read3);
                data[4] = (docData.data().read4);
                console.log(data);
                  // setData1(docData.data().read1);
                  // setData2(docData.data().read2);
                  // setData3(docData.data().read3);
                  // setData4(docData.data().read4);

                  
                  // console.log(docData.data().read0);
                  // console.log(docData.data().read1);
                  // console.log(docData.data().read2);
                  // console.log(docData.data().read3);
                  // console.log(docData.data().read4);

                  // setName(docData.data().username);
                  // setEmail(docData.data().email);
              // }
          } else {
              console.log('No such a data!!');
          }
      }).catch((error) => {
          console.log(error);
      });;
      
      // data[0] = read0
      // data[1] = read1
      // data[2] = read2
      // data[3] = read3
      // data[4] = read4
      
  }, [])


    function create () {    
    getDoc(doc(db, "hobby", "read")).then((docData) => {
      
        if(docData.exists()) {
            // for(let i = 0 ; i < 5 ; i++ ) {
            //     num = 'read' + (i)
              data[0] = (docData.data().read0);
              data[1] = (docData.data().read1);
              data[2] = (docData.data().read2);
              data[3] = (docData.data().read3);
              data[4] = (docData.data().read4);
              // console.log(data);
                // setData1(docData.data().read1);
                // setData2(docData.data().read2);
                // setData3(docData.data().read3);
                // setData4(docData.data().read4);

                
                // console.log(docData.data().read0);
                // console.log(docData.data().read1);
                // console.log(docData.data().read2);
                // console.log(docData.data().read3);
                // console.log(docData.data().read4);

                // setName(docData.data().username);
                // setEmail(docData.data().email);
            // }
        } else {
            console.log('No such a data!!');
        }
    }).catch((error) => {
        console.log(error);
    });;
  }

    // console.log(data)
    // { buttons, doSomethingAfterClick }
    const [imgActive, setimgActive] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);
    
    const [clickedId, setClickedId] = useState(0);
    const handleClick = (item,id) => {
        setClickedId(id)
        doSomethingAfterClick(item)
    }

    
    onchange = (nativeEvent) => {
        if(nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if(slide != imgActive) {
                setimgActive(slide);
            }
        }
    }


    const SegmentedContent = () => {
        if(selectedIndex == 0){
            return (
                // <View style={styles.event_container}>
                //     <ScrollView>
                //         <View style={[styles.cardSectionStyle, styles.card_newsevents]}>
                //         <ImageBackground
                //             style={[styles.imageStyle, styles.image_newevents]}
                //             source={{
                //             uri: albumData[0].image
                //             }}
                //         >
    
                //         <TouchableOpacity 
                //         style={[styles.More_Button, styles.Button_newevents]} 
                //         onPress={()=>{alert("you clicked me")}}>
    
                //             <Text 
                //             style={styles.More_textActive}
                //             >看更多...
                //             </Text>
                //         </TouchableOpacity>
                //         </ImageBackground>
                        
                //         </View>
    
    
                //         <View style={[styles.cardSectionStyle, styles.card_newsevents]}>
                //         <ImageBackground
                //             style={[styles.imageStyle, styles.image_newevents]}
                //             source={{
                //             uri: albumData[0].image
                //             }}
                //         >
    
                //         <TouchableOpacity 
                //         style={[styles.More_Button, styles.Button_newevents]} 
                //         onPress={()=>{alert("you clicked me")}}>
    
                //             <Text 
                //             style={styles.More_textActive}
                //             >看更多...
                //             </Text>
                //         </TouchableOpacity>
                //         </ImageBackground>
                        
                //         </View>
                    
    
                //         <View style={[styles.cardSectionStyle, styles.card_newsevents]}>
                //         <ImageBackground
                //             style={[styles.imageStyle, styles.image_newevents]}
                //             source={{
                //             uri: albumData[0].image
                //             }}
                //         >
    
                //         <TouchableOpacity 
                //         style={[styles.More_Button, styles.Button_newevents]} 
                //         onPress={()=>{alert("you clicked me")}}>
    
                //             <Text 
                //             style={styles.More_textActive}
                //             >看更多...
                //             </Text>
                //         </TouchableOpacity>
                //         </ImageBackground>
                        
                //         </View>
    
                //     </ScrollView>
                // </View>
                
                // 加回更多按鈕、style改名稱
                <View style={styles.event_container}>
                <EventsView data={data}/>
    
                    {/* <TouchableOpacity 
                        activeOpacity={.7}
                        style={[styles.cardSectionStyle, styles.card_events]}
                        onPress={() => setVisible(true)}>


                        <View style={styles.events_header}>
                            <Text style={styles.events_header_title}>李科永紀念圖書館「愛講堂Love Talks」</Text>
                        </View>
                        <View style={[styles.hr_style]}></View>
                        <View style={styles.events_dateloc}>
                            <Text style={styles.events_header_date}>活動時間：11月20日(週日)上午9:30-12:00</Text>
                            <Text style={styles.events_header_loc}>活動地點：李科永紀念圖書館B2會議廳</Text>
                        </View>
                        
                    </TouchableOpacity>
    
                    <TouchableOpacity 
                        activeOpacity={.7}
                        style={[styles.cardSectionStyle, styles.card_events]}
                        onPress={()=>{alert("you clicked me")}}>

                        <View style={styles.events_header}>
                            <Text style={styles.events_header_title}>李科永紀念圖書館「《Kulumaha回家吧！原聲》紀錄片賞析」</Text>
                        </View>
                        <View style={[styles.hr_style]}></View>
                        <View style={styles.events_dateloc}>
                            <Text style={styles.events_header_date}>活動時間：12月18日(週日)下午1:30-4:10</Text>
                            <Text style={styles.events_header_loc}>活動地點：李科永紀念圖書館B2會議廳</Text>
                        </View>
                    </TouchableOpacity>
    
    
                    <TouchableOpacity 
                        activeOpacity={.7}
                        style={[styles.cardSectionStyle, styles.card_events]}
                        onPress={()=>{alert("you clicked me")}}>

                        <View style={styles.events_header}>
                            <Text style={styles.events_header_title}>李科永紀念圖書館「草書道—書法藝術與智慧的追求」</Text>
                        </View>
                        <View style={[styles.hr_style]}></View>
                        <View style={styles.events_dateloc}>
                            <Text style={styles.events_header_date}>活動時間：12月11日（週日）下午2:00-4:30</Text>
                            <Text style={styles.events_header_loc}>活動地點：李科永紀念圖書館B2會議廳</Text>
                        </View>
                    </TouchableOpacity>
    
                    
    
    
                    <TouchableOpacity 
                        activeOpacity={.7}
                        style={[styles.cardSectionStyle, styles.card_events]}
                        onPress={()=>{alert("you clicked me")}}>

                        <View style={styles.events_header}>
                            <Text style={styles.events_header_title}>總館每月一書講座─唐珮玲《我是你的觀護人：凝視犯罪深淵》</Text>
                        </View>
                        <View style={[styles.hr_style]}></View>
                        <View style={styles.events_dateloc}>
                            <Text style={styles.events_header_date}>活動時間：12月11日（週日）下午2:00-4:30</Text>
                            <Text style={styles.events_header_loc}>活動地點：李科永紀念圖書館B2會議廳</Text>
                        </View>
                    </TouchableOpacity> */}
    
                
    
                    
                    
                </View>   
            )
        }
        else if(selectedIndex == 1){
            return (
                <View style={styles.event_container}>
                    {/* This Year */}
                    <View style={styles.thumbnailContainerStyle}>
                        <Image
                            style={styles.left_thumbnailStyle}
                            source={require('../image/left-Bear.png')}
                        />
                        <View style={styles.headerContentStyle}>
                            <Text style={styles.cardText}>2022</Text>
                        </View>
                        <Image
                            style={styles.right_thumbnailStyle}
                            source={require('../image/right-Bear.png')}
                        />
                    </View>
    
                    <View style={styles.columns}>
                    <View style={[styles.cardSectionStyle, styles.card_eventsRec]}>
                        <View style={styles.Rec_signbg}>
                            <Image style={styles.Rec_sign} source={require('../image/rec_sign.png')}/>
                        </View>
                        <View style={styles.Rec_header}>
                            <Text style={styles.Rec_header_title}>十月花博農民市集</Text>
                            <Text style={styles.Rec_header_date}>參與日期：10月15日(週六)</Text>
                        </View>
                    </View>
    
                    <View style={[styles.cardSectionStyle, styles.card_eventsRec]}>
                        <View style={styles.Rec_signbg}>
                            <Image style={styles.Rec_sign} source={require('../image/rec_sign.png')}/>
                        </View>
                        <View style={styles.Rec_header}>
                            <Text style={styles.Rec_header_title}>自助借書贈美食券</Text>
                            <Text style={styles.Rec_header_date}>參與日期：06月26日(週日)</Text>
                        </View>
                    </View>
    
    
                    <View style={[styles.cardSectionStyle, styles.card_eventsRec]}>
                        <View style={styles.Rec_signbg}>
                            <Image style={styles.Rec_sign} source={require('../image/rec_sign.png')}/>
                        </View>
                        <View style={styles.Rec_header}>
                            <Text style={styles.Rec_header_title}>讀享書香好滋味活動</Text>
                            <Text style={styles.Rec_header_date}>參與日期：03月12日(週二)</Text>
                        </View>
                    </View>
    
                    </View>
    
    
                    {/* Last Year */}
                    <View style={styles.thumbnailContainerStyle}>
                        <Image
                            style={styles.left_thumbnailStyle}
                            source={require('../image/left-Bear.png')}
                        />
                        <View style={styles.headerContentStyle}>
                            <Text style={styles.cardText}>2021</Text>
                        </View>
                        <Image
                            style={styles.right_thumbnailStyle}
                            source={require('../image/right-Bear.png')}
                        />
                    </View>
    
                    <View style={styles.columns}>
                    <View style={[styles.cardSectionStyle, styles.card_eventsRec]}>
                        <View style={styles.Rec_signbg}>
                            <Image style={styles.Rec_sign} source={require('../image/rec_sign.png')}/>
                        </View>
                        <View style={styles.Rec_header}>
                            <Text style={styles.Rec_header_title}>閱借閱好玩尋寶趣</Text>
                            <Text style={styles.Rec_header_date}>參與日期：12月26日(週日)</Text>
                        </View>
                    </View>
    
                    <View style={[styles.cardSectionStyle, styles.card_eventsRec]}>
                        <View style={styles.Rec_signbg}>
                            <Image style={styles.Rec_sign} source={require('../image/rec_sign.png')}/>
                        </View>
                        <View style={styles.Rec_header}>
                            <Text style={styles.Rec_header_title}>財犬生活養成遊戲</Text>
                            <Text style={styles.Rec_header_date}>參與日期：10月09日(週六)</Text>
                        </View>
                    </View>
    
    
                    <View style={[styles.cardSectionStyle, styles.card_eventsRec]}>
                        <View style={styles.Rec_signbg}>
                            <Image style={styles.Rec_sign} source={require('../image/rec_sign.png')}/>
                        </View>
                        <View style={styles.Rec_header}>
                            <Text style={styles.Rec_header_title}>柚緣千里共嬋娟</Text>
                            <Text style={styles.Rec_header_date}>參與日期：08月22日(週日)</Text>
                        </View>
                    </View>
    
                    </View>
                    
                </View>            
            )
        }
        else if(selectedIndex == 2) {
            return (
                <View style={styles.event_container}>
                    {/* <ScrollView> */}

                    <TouchableOpacity 
                        activeOpacity={.7}
                        style={[styles.cardSectionStyle, styles.card_newspost]}
                        onPress={() => setModalVisible2(true)}>

                        <Image
                            style={[styles.imageStyle, styles.image_newspost]}
                            source={{
                                uri: 'https://cdn2.ettoday.net/images/6629/d6629090.jpg',
                            }}
                        />
                        <View style={[styles.More_Button, styles.Button_newspost]}>
                        <Text 
                            style={styles.More_textActive}
                            >看更多...
                            </Text>
                        </View>



                        {/* <View style={styles.events_header}>
                            <Text style={styles.events_header_title}>李科永紀念圖書館「愛講堂Love Talks」</Text>
                        </View>
                        <View style={[styles.hr_style]}></View>
                        <View style={styles.events_dateloc}>
                            <Text style={styles.events_header_date}>活動時間：11月20日(週日)上午9:30-12:00</Text>
                            <Text style={styles.events_header_loc}>活動地點：李科永紀念圖書館B2會議廳</Text>
                        </View> */}
                    </TouchableOpacity>

                    <TouchableOpacity 
                        activeOpacity={.7}
                        style={[styles.cardSectionStyle, styles.card_newspost]}
                        onPress={() => setModalVisible2(true)}>

                        <Image
                            style={[styles.imageStyle, styles.image_newspost]}
                            source={{
                                uri: 'https://cdn2.ettoday.net/images/6664/6664168.jpg',
                            }}
                        />
                        <View style={[styles.More_Button, styles.Button_newspost]}>
                        <Text 
                            style={styles.More_textActive}
                            >看更多...
                            </Text>
                        </View>



                        {/* <View style={styles.events_header}>
                            <Text style={styles.events_header_title}>李科永紀念圖書館「愛講堂Love Talks」</Text>
                        </View>
                        <View style={[styles.hr_style]}></View>
                        <View style={styles.events_dateloc}>
                            <Text style={styles.events_header_date}>活動時間：11月20日(週日)上午9:30-12:00</Text>
                            <Text style={styles.events_header_loc}>活動地點：李科永紀念圖書館B2會議廳</Text>
                        </View> */}
                    </TouchableOpacity>
    
                    <TouchableOpacity 
                        activeOpacity={.7}
                        style={[styles.cardSectionStyle, styles.card_newspost]}
                        onPress={() => setModalVisible2(true)}>

                        <Image
                            style={[styles.imageStyle, styles.image_newspost]}
                            source={{
                                uri: 'https://cdn2.ettoday.net/images/5566/d5566380.jpg',
                            }}
                        />
                        <View style={[styles.More_Button, styles.Button_newspost]}>
                        <Text 
                            style={styles.More_textActive}
                            >看更多...
                            </Text>
                        </View>



                        {/* <View style={styles.events_header}>
                            <Text style={styles.events_header_title}>李科永紀念圖書館「愛講堂Love Talks」</Text>
                        </View>
                        <View style={[styles.hr_style]}></View>
                        <View style={styles.events_dateloc}>
                            <Text style={styles.events_header_date}>活動時間：11月20日(週日)上午9:30-12:00</Text>
                            <Text style={styles.events_header_loc}>活動地點：李科永紀念圖書館B2會議廳</Text>
                        </View> */}
                    </TouchableOpacity>
    
                        {/* <View style={[styles.cardSectionStyle,styles.card_newspost]}>
                        <ImageBackground
                            style={[styles.imageStyle, styles.image_newspost]}
                            source={{
                                uri: 'https://cdn2.ettoday.net/images/6629/d6629090.jpg',
                            }}
                        >
    
                        <TouchableOpacity 
                        style={[styles.More_Button, styles.Button_newspost]} 
                        onPress={()=>{alert("you clicked me")}}>
    
                            <Text 
                            style={styles.More_textActive}
                            >看更多...
                            </Text>
                        </TouchableOpacity>
                        </ImageBackground>
                        
                        </View> */}



                    {/* </ScrollView> */}
                </View>            
            )
        }
    }
    

    return (
        <ScrollView>
            <View style={styles.container}>

            <View style={styles.wrapA}>
                <ScrollView
                    scrollEventThrottle={16}
                    onScroll={({nativeEvent}) => onchange=(nativeEvent)}
                    showsHorizontalScrollIndicator = {false}
                    pagingEnabled
                    horizontal
                    style={styles.wrapB}
                >
                    {
                        images.map((e, index) =>
                        <Image
                            key={e}
                            resizeMode = 'stretch'
                            style={styles.wrapC}
                            source={e}
                        />
                        )
                    }
                </ScrollView>
                {/* <View style={styles.wrapDot}>
                    {
                        images.map((e, index) => 
                        <Text
                            key={e}
                            style={imgActive == index ? styles.dotActive : styles.dot}
                        >
                        ●
                        </Text>
                        )
                    }
                </View> */}
            </View>
            


            
            {/* <View style={styles.btn_container}>
            <View style={styles.btn_styles}>
                {
                    buttons.map((buttonLabel, index) => {
                        return (
                            <TouchableOpacity 
                            onPress={(item) => handleClick(item,index)}
                            key={index}
                            style={[
                                index === clickedId ? styles.buttonActive : styles.button,
                                index === 0 ? styles.buttonActiveLR:"",
                                index === 2 ? styles.buttonActiveLR:""
                            ]}
                            >
                            <Text 
                            style={index === clickedId ? styles.textActive : styles.text}
                            >{buttonLabel}
                            </Text>
                            </TouchableOpacity>
                            
                        )
                    })
                }
                </View> */}

                <SegmentedControlTab
                    values={["最新活動","活動紀錄","新聞"]}
                    tabStyle={{
                        ...styles.buttonActive,
                        height:48,
                        borderWidth:0,
                        backgroundColor:"#CDE49C"
                    }}

                    firstTabStyle={{ marginLeft: 28, marginRight:20, borderTopLeftRadius:10, borderBottomLeftRadius:10}}
                    lastTabStyle={{ marginRight: 28, marginLeft:20,borderTopRightRadius:10,borderBottomRightRadius:10}}
                    tabTextStyle={{ ...styles.textActive}}
                    activeTabStyle={{backgroundColor:"#F6CA2C"}}
                    activeTabTextStyle={{...styles.textActive}}
                    selectedIndex={selectedIndex}
                    onTabPress={(index) => setSelectedIndex(index)}
                />
                <SegmentedContent/>


                
            </View>

        
     {/* 最新活動 */}
      {/* <ModalPoup visible={visible}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Image
                source={require('../image/x.png')}
                style={{height: 30, width: 30, marginTop: 21.29, marginLeft: 260}}
              />
            </TouchableOpacity>
          </View>
        </View> */}
        {/* <View style={{alignItems: 'center'}}> */}
          {/* <Text style={styles.content_header}>
            活動資訊
          </Text>
        <View >
        <Text style={styles.content_title}>
        李科永紀念圖書館「愛講堂Love Talks」</Text>
        <Text style={styles.content_main}>
            活動宗旨：希望藉由講座傳達給父母良善的教養理念，支持並成就每一個孩子生命。{"\n"}
                活動內容：{"\n"}
                1、葉淑美：那些老師教我的事{"\n"}
                2、蔡興正：學校漏教的事{"\n"}
                3、徐碧珠：學習體驗體驗學習{"\n"}
                4、王思媁：好能力都是玩出來的{"\n"}
                活動時間：11月20日(週日)上午9:30-12:00{"\n"}
                活動地點：李科永紀念圖書館B2會議廳（臺北市士林區中正路15號02-28833453）{"\n"}
                本活動提供閱讀存摺點數5點認證。{"\n"}
                無須報名，自由參加。{"\n"}
        </Text>
        
        </View> 

        
      </ModalPoup>*/}

      {/* 新聞 */}
      <ModalNEWS visible={modalVisible2}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setModalVisible2(false)}>
              <Image
                source={require('../image/x.png')}
                style={{height: 30, width: 30, marginTop: 21.29, marginLeft: 260}}
              />
            </TouchableOpacity>
          </View>
        </View>
          <Text style={styles.content_header}>
            新聞消息
          </Text>
        <View >
        <Text style={styles.content_title}>
            明午後水氣又增！周五起連3天濕涼　「跌破20°C↓」放晴時間曝光
        </Text>

        <Text style={styles.content_main}>
            新聞發布時間：2022年11月02日 17:34
            {"\n"}明日午後南方雲系北移，大台北、東半部降雨機率增加，東北部有局部大雨或豪雨，周五東北季風增強，濕涼天氣持續到周日，必須等到下周一天氣才會好轉。
            {"\n"}氣象局預報員陳伊秀表示，明日午後南方雲系北移，水氣增加，宜蘭持續有局部大雨或豪雨，基隆北海岸有局部大雨，東半部、大台北地區降雨機率高，整天多雲偶雨，西半部山區午後也有局部短暫降雨。明日早晚低溫21到23度，白天苗栗以北、宜花25到28度，中南部、台東29到31度。

        </Text>
        
        </View>

        
      </ModalNEWS>



      {/* <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible2}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible2(!modalVisible2);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView2}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible2(!modalVisible2)}
              >
                <Text style={styles.textStyle}>X</Text>
              </Pressable>
              <Text style={styles.modalText}>被子</Text>
              <Image source={require('../image/bigseed1.png')} style={styles.rabbiticonstyle} />
              <Image source={require('../image/brightyellowline.png')} style={styles.yellowlinestyle} />
              <Text style={styles.modalText}>種子介紹</Text>
              <View style={styles.seedbackground}>
                <Text style={styles.rabbitText}>被子為鯊人掌的種子，任何等級都能輕鬆培育！</Text>
              </View>
              
              <TouchableOpacity onPress={() => setModalVisible2(!modalVisible2)}>
              </TouchableOpacity>

            </View>
          </View>

        </Modal> */}

      
        </ScrollView>

    );
};




// define your styles
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
        textAlign:'left',
        lineHeight: 22,
      },

    container: {
        flex: 1,
        height: windoheight + 300,
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
            height: 145,
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
            height:66,
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

//make this component available to the app
export default NewsEvents;