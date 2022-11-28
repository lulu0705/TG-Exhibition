const EventPy = () => {
   
};

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// import { 
//     View, 
//     Text, 
//     StyleSheet, 
//     SafeAreaView, 
//     Image, 
//     ScrollView,
//     Dimensions, 
//     ImageBackground,
// } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import SegmentedControlTab from 'react-native-segmented-control-tab';
// import albumData from "../json/albums";


// const images = [
//     require('../image/swiper_1.png'),
//     require('../image/swiper_2.png'),
//     require('../image/swiper_3.png')
// ];

// const windowWidth = Dimensions.get('window').width;
// const windoheight = Dimensions.get('window').height;


// let result_des0 = "";
// let result_time = "";

// const EventPy = () => {
//     // { buttons, doSomethingAfterClick }
//     const [imgActive, setimgActive] = useState(0);
//     const [selectedIndex, setSelectedIndex] = useState(0);

//     const [clickedId, setClickedId] = useState(0);
//     const handleClick = (item,id) => {
//         setClickedId(id)
//         doSomethingAfterClick(item)
//     }

    
//     onchange = (nativeEvent) => {
//         if(nativeEvent) {
//             const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
//             if(slide != imgActive) {
//                 setimgActive(slide);
//             }
//         }
//     }


//     const SegmentedContent = () => {
//         if(selectedIndex == 0){
//             return (
//                 <View style={styles.event_container}>
    
//                     <View style={[styles.cardSectionStyle, styles.card_events]}>
//                         <View style={styles.events_signbg}>
//                             <Image style={styles.events_sign} source={require('../image/rec_sign.png')}/>
//                         </View>
//                         <View style={styles.events_header}>
//                             <Text style={styles.events_header_title}>活動名稱：{result_des0}</Text>
//                         </View>
//                         <View style={styles.events_dateloc}>
//                         <Text style={styles.events_header_date}>參與日期：{result_time}</Text>
//                         <Text style={styles.events_header_loc}>活動地點</Text>
//                         </View>
//                         <TouchableOpacity 
//                                 style={[styles.More_Button, styles.Button_events]} 
//                                 onPress={()=>{alert("you clicked me")}}>
            
//                                     <Text 
//                                     style={styles.More_textActive}
//                                     >看更多...
//                                     </Text>
//                         </TouchableOpacity>
//                     </View>
    
//                     <View style={[styles.cardSectionStyle, styles.card_events]}>
//                         <View style={styles.events_signbg}>
//                             <Image style={styles.events_sign} source={require('../image/rec_sign.png')}/>
//                         </View>
//                         <View style={styles.events_header}>
//                             <Text style={styles.events_header_title}>活動名稱</Text>
//                         </View>
//                         <View style={styles.events_dateloc}>
//                         <Text style={styles.events_header_date}>參與日期</Text>
//                         <Text style={styles.events_header_loc}>活動地點</Text>
//                         </View>
//                         <TouchableOpacity 
//                                 style={[styles.More_Button, styles.Button_events]} 
//                                 onPress={()=>{alert("you clicked me")}}>
            
//                                     <Text 
//                                     style={styles.More_textActive}
//                                     >看更多...
//                                     </Text>
//                         </TouchableOpacity>
//                     </View>
    
    
//                     <View style={[styles.cardSectionStyle, styles.card_events]}>
//                         <View style={styles.events_signbg}>
//                             <Image style={styles.events_sign} source={require('../image/rec_sign.png')}/>
//                         </View>
//                         <View style={styles.events_header}>
//                             <Text style={styles.events_header_title}>活動名稱</Text>
//                         </View>
//                         <View style={styles.events_dateloc}>
//                         <Text style={styles.events_header_date}>參與日期</Text>
//                         <Text style={styles.events_header_loc}>活動地點</Text>
//                         </View>
//                         <TouchableOpacity 
//                                 style={[styles.More_Button, styles.Button_events]} 
//                                 onPress={()=>{alert("you clicked me")}}>
            
//                                     <Text 
//                                     style={styles.More_textActive}
//                                     >看更多...
//                                     </Text>
//                         </TouchableOpacity>
//                     </View>
    
                    
    
    
//                     <View style={[styles.cardSectionStyle, styles.card_events]}>
//                         <View style={styles.events_signbg}>
//                             <Image style={styles.events_sign} source={require('../image/rec_sign.png')}/>
//                         </View>
//                         <View style={styles.events_header}>
//                             <Text style={styles.events_header_title}>活動名稱</Text>
//                         </View>
//                         <View style={styles.events_dateloc}>
//                         <Text style={styles.events_header_date}>參與日期</Text>
//                         <Text style={styles.events_header_loc}>活動地點</Text>
//                         </View>
//                         <TouchableOpacity 
//                                 style={[styles.More_Button, styles.Button_events]} 
//                                 onPress={()=>{alert("you clicked me")}}>
            
//                                     <Text 
//                                     style={styles.More_textActive}
//                                     >看更多...
//                                     </Text>
//                         </TouchableOpacity>
//                     </View>
    
                
    
                    
                    
//                 </View>   
//             )
//         }
//         else if(selectedIndex == 1){
//             return (
//                 <View style={styles.event_container}>
//                     {/* This Year */}
//                     <View style={styles.thumbnailContainerStyle}>
//                         <Image
//                             style={styles.left_thumbnailStyle}
//                             source={require('../image/left-Bear.png')}
//                         />
//                         <View style={styles.headerContentStyle}>
//                             <Text style={styles.cardText}>2022</Text>
//                         </View>
//                         <Image
//                             style={styles.right_thumbnailStyle}
//                             source={require('../image/right-Bear.png')}
//                         />
//                     </View>
    
//                     <View style={styles.columns}>
//                     <View style={[styles.cardSectionStyle, styles.card_eventsRec]}>
//                         <View style={styles.Rec_signbg}>
//                             <Image style={styles.Rec_sign} source={require('../image/rec_sign.png')}/>
//                         </View>
//                         <View style={styles.Rec_header}>
//                             <Text style={styles.Rec_header_title}>活動名稱</Text>
//                             <Text style={styles.Rec_header_date}>參與日期 ● 活動地點</Text>
//                         </View>
//                     </View>
    
//                     <View style={[styles.cardSectionStyle, styles.card_eventsRec]}>
//                         <View style={styles.Rec_signbg}>
//                             <Image style={styles.Rec_sign} source={require('../image/rec_sign.png')}/>
//                         </View>
//                         <View style={styles.Rec_header}>
//                             <Text style={styles.Rec_header_title}>活動名稱</Text>
//                             <Text style={styles.Rec_header_date}>參與日期 ● 活動地點</Text>
//                         </View>
//                     </View>
    
    
//                     <View style={[styles.cardSectionStyle, styles.card_eventsRec]}>
//                         <View style={styles.Rec_signbg}>
//                             <Image style={styles.Rec_sign} source={require('../image/rec_sign.png')}/>
//                         </View>
//                         <View style={styles.Rec_header}>
//                             <Text style={styles.Rec_header_title}>活動名稱</Text>
//                             <Text style={styles.Rec_header_date}>參與日期 ● 活動地點</Text>
//                         </View>
//                     </View>
    
//                     </View>
    
    
//                     {/* Last Year */}
//                     <View style={styles.thumbnailContainerStyle}>
//                         <Image
//                             style={styles.left_thumbnailStyle}
//                             source={require('../image/left-Bear.png')}
//                         />
//                         <View style={styles.headerContentStyle}>
//                             <Text style={styles.cardText}>2021</Text>
//                         </View>
//                         <Image
//                             style={styles.right_thumbnailStyle}
//                             source={require('../image/right-Bear.png')}
//                         />
//                     </View>
    
//                     <View style={styles.columns}>
//                     <View style={[styles.cardSectionStyle, styles.card_eventsRec]}>
//                         <View style={styles.Rec_signbg}>
//                             <Image style={styles.Rec_sign} source={require('../image/rec_sign.png')}/>
//                         </View>
//                         <View style={styles.Rec_header}>
//                             <Text style={styles.Rec_header_title}>活動名稱</Text>
//                             <Text style={styles.Rec_header_date}>參與日期 ● 活動地點</Text>
//                         </View>
//                     </View>
    
//                     <View style={[styles.cardSectionStyle, styles.card_eventsRec]}>
//                         <View style={styles.Rec_signbg}>
//                             <Image style={styles.Rec_sign} source={require('../image/rec_sign.png')}/>
//                         </View>
//                         <View style={styles.Rec_header}>
//                             <Text style={styles.Rec_header_title}>活動名稱</Text>
//                             <Text style={styles.Rec_header_date}>參與日期 ● 活動地點</Text>
//                         </View>
//                     </View>
    
    
//                     <View style={[styles.cardSectionStyle, styles.card_eventsRec]}>
//                         <View style={styles.Rec_signbg}>
//                             <Image style={styles.Rec_sign} source={require('../image/rec_sign.png')}/>
//                         </View>
//                         <View style={styles.Rec_header}>
//                             <Text style={styles.Rec_header_title}>活動名稱</Text>
//                             <Text style={styles.Rec_header_date}>參與日期 ● 活動地點</Text>
//                         </View>
//                     </View>
    
//                     </View>
                    
//                 </View>            
//             )
//         }
//         else if(selectedIndex == 2) {
//             return (
//                 <View style={styles.event_container}>
//                     <ScrollView>
//                         <View style={[styles.cardSectionStyle,styles.card_newspost]}>
//                         <ImageBackground
//                             style={[styles.imageStyle, styles.image_newspost]}
//                             source={{
//                             uri: albumData[0].image
//                             }}
//                         >
    
//                         <TouchableOpacity 
//                         style={[styles.More_Button, styles.Button_newspost]} 
//                         onPress={()=>{alert("you clicked me")}}>
    
//                             <Text 
//                             style={styles.More_textActive}
//                             >看更多...
//                             </Text>
//                         </TouchableOpacity>
//                         </ImageBackground>
                        
//                         </View>
    
//                         <View style={[styles.cardSectionStyle,styles.card_newspost]}>
//                         <ImageBackground
//                             style={[styles.imageStyle, styles.image_newspost]}
//                             source={{
//                             uri: albumData[0].image
//                             }}
//                         >
    
//                         <TouchableOpacity 
//                         style={[styles.More_Button, styles.Button_newspost]} 
//                         onPress={()=>{alert("you clicked me")}}>
    
//                             <Text 
//                             style={styles.More_textActive}
//                             >看更多...
//                             </Text>
//                         </TouchableOpacity>
//                         </ImageBackground>
                        
//                         </View>
    
//                         <View style={[styles.cardSectionStyle,styles.card_newspost]}>
//                         <ImageBackground
//                             style={[styles.imageStyle, styles.image_newspost]}
//                             source={{
//                             uri: albumData[0].image
//                             }}
//                         >
    
//                         <TouchableOpacity 
//                         style={[styles.More_Button, styles.Button_newspost]} 
//                         onPress={()=>{alert("you clicked me")}}>
    
//                             <Text 
//                             style={styles.More_textActive}
//                             >看更多...
//                             </Text>
//                         </TouchableOpacity>
//                         </ImageBackground>
                        
//                         </View>
//                     </ScrollView>
//                 </View>            
//             )
//         }
//     }
    

//     /* 後端串接 */
//     const [result, setResult] = useState(null);
    
//     let result_ans = "";

//     const chart = async () => {
//         try {
//             let res = await axios.get('http://127.0.0.1:8000/main');
//             let result = res.data.item_id[0][0];
//             result_des0 = res.data.item_id[0][3];
//             result_time = res.data.item_time[0][0];
//             setResult(result);
//             console.log(result_time)
//         } catch(e) {
//             console.log(e);
//         }
//     };
//     console.log(result);

//     useEffect(() => {
//         chart()
//     },[])



//     return (
//         <ScrollView>
//             <View style={styles.container}>

//             <View style={styles.wrapA}>
//                 <ScrollView
//                     scrollEventThrottle={16}
//                     onScroll={({nativeEvent}) => onchange=(nativeEvent)}
//                     showsHorizontalScrollIndicator = {false}
//                     pagingEnabled
//                     horizontal
//                     style={styles.wrapB}
//                 >
//                     {
//                         images.map((e, index) =>
//                         <Image
//                             key={e}
//                             resizeMode = 'stretch'
//                             style={styles.wrapC}
//                             source={e}
//                         />
//                         )
//                     }
//                 </ScrollView>
//                 {/* <View style={styles.wrapDot}>
//                     {
//                         images.map((e, index) => 
//                         <Text
//                             key={e}
//                             style={imgActive == index ? styles.dotActive : styles.dot}
//                         >
//                         ●
//                         </Text>
//                         )
//                     }
//                 </View> */}
//             </View>
            


            
//             {/* <View style={styles.btn_container}> */}
//             {/* <View style={styles.btn_styles}>
//                 {
//                     buttons.map((buttonLabel, index) => {
//                         return (
//                             <TouchableOpacity 
//                             onPress={(item) => handleClick(item,index)}
//                             key={index}
//                             style={[
//                                 index === clickedId ? styles.buttonActive : styles.button,
//                                 index === 0 ? styles.buttonActiveLR:"",
//                                 index === 2 ? styles.buttonActiveLR:""
//                             ]}
//                             >
//                             <Text 
//                             style={index === clickedId ? styles.textActive : styles.text}
//                             >{buttonLabel}
//                             </Text>
//                             </TouchableOpacity>
                            
//                         )
//                     })
//                 }
//                 </View> */}

//                 <SegmentedControlTab
//                     values={["最新活動","活動紀錄","新聞"]}
//                     tabStyle={{
//                         ...styles.buttonActive,
//                         height:48,
//                         borderWidth:0,
//                         backgroundColor:"#CDE49C"
//                     }}

//                     firstTabStyle={{ marginLeft: 28, marginRight:20, borderTopLeftRadius:10, borderBottomLeftRadius:10}}
//                     lastTabStyle={{ marginRight: 28, marginLeft:20,borderTopRightRadius:10,borderBottomRightRadius:10}}
//                     tabTextStyle={{ ...styles.textActive}}
//                     activeTabStyle={{backgroundColor:"#F6CA2C"}}
//                     activeTabTextStyle={{...styles.textActive}}
//                     selectedIndex={selectedIndex}
//                     onTabPress={(index) => setSelectedIndex(index)}
//                 />
//                 <SegmentedContent/>


//                 {/* 新聞 */}
//                 {/* <View style={styles.event_container}>
//                     <ScrollView>
//                         <View style={[styles.cardSectionStyle,styles.card_newspost]}>
//                         <ImageBackground
//                             style={[styles.imageStyle, styles.image_newspost]}
//                             source={{
//                             uri: albumData[0].image
//                             }}
//                         >

//                         <TouchableOpacity 
//                         style={[styles.More_Button, styles.Button_newspost]} 
//                         onPress={()=>{alert("you clicked me")}}>

//                             <Text 
//                             style={styles.More_textActive}
//                             >看更多...
//                             </Text>
//                         </TouchableOpacity>
//                         </ImageBackground>
                        
//                         </View>

//                         <View style={[styles.cardSectionStyle,styles.card_newspost]}>
//                         <ImageBackground
//                             style={[styles.imageStyle, styles.image_newspost]}
//                             source={{
//                             uri: albumData[0].image
//                             }}
//                         >

//                         <TouchableOpacity 
//                         style={[styles.More_Button, styles.Button_newspost]} 
//                         onPress={()=>{alert("you clicked me")}}>

//                             <Text 
//                             style={styles.More_textActive}
//                             >看更多...
//                             </Text>
//                         </TouchableOpacity>
//                         </ImageBackground>
                        
//                         </View>

//                         <View style={[styles.cardSectionStyle,styles.card_newspost]}>
//                         <ImageBackground
//                             style={[styles.imageStyle, styles.image_newspost]}
//                             source={{
//                             uri: albumData[0].image
//                             }}
//                         >

//                         <TouchableOpacity 
//                         style={[styles.More_Button, styles.Button_newspost]} 
//                         onPress={()=>{alert("you clicked me")}}>

//                             <Text 
//                             style={styles.More_textActive}
//                             >看更多...
//                             </Text>
//                         </TouchableOpacity>
//                         </ImageBackground>
                        
//                         </View>
//                     </ScrollView>
//                 </View> */}


//                 {/* 最新活動 */}
//                 {/* <View style={styles.event_container}>
//                     <ScrollView>
//                         <View style={[styles.cardSectionStyle, styles.card_newsevents]}>
//                         <ImageBackground
//                             style={[styles.imageStyle, styles.image_newevents]}
//                             source={{
//                             uri: albumData[0].image
//                             }}
//                         >

//                         <TouchableOpacity 
//                         style={[styles.More_Button, styles.Button_newevents]} 
//                         onPress={()=>{alert("you clicked me")}}>

//                             <Text 
//                             style={styles.More_textActive}
//                             >看更多...
//                             </Text>
//                         </TouchableOpacity>
//                         </ImageBackground>
                        
//                         </View>


//                         <View style={[styles.cardSectionStyle, styles.card_newsevents]}>
//                         <ImageBackground
//                             style={[styles.imageStyle, styles.image_newevents]}
//                             source={{
//                             uri: albumData[0].image
//                             }}
//                         >

//                         <TouchableOpacity 
//                         style={[styles.More_Button, styles.Button_newevents]} 
//                         onPress={()=>{alert("you clicked me")}}>

//                             <Text 
//                             style={styles.More_textActive}
//                             >看更多...
//                             </Text>
//                         </TouchableOpacity>
//                         </ImageBackground>
                        
//                         </View>
                    

//                         <View style={[styles.cardSectionStyle, styles.card_newsevents]}>
//                         <ImageBackground
//                             style={[styles.imageStyle, styles.image_newevents]}
//                             source={{
//                             uri: albumData[0].image
//                             }}
//                         >

//                         <TouchableOpacity 
//                         style={[styles.More_Button, styles.Button_newevents]} 
//                         onPress={()=>{alert("you clicked me")}}>

//                             <Text 
//                             style={styles.More_textActive}
//                             >看更多...
//                             </Text>
//                         </TouchableOpacity>
//                         </ImageBackground>
                        
//                         </View>

//                     </ScrollView>
//                 </View> */}

//                 {/* 活動紀錄 */}
//                 {/* <ScrollView> */}
                
//                 {/* <View style={styles.event_container}>
                    
                
                    
//                     <View style={styles.thumbnailContainerStyle}>
//                         <Image
//                             style={styles.left_thumbnailStyle}
//                             source={require('../image/left-Bear.png')}
//                         />
//                         <View style={styles.headerContentStyle}>
//                             <Text style={styles.cardText}>2022</Text>
//                         </View>
//                         <Image
//                             style={styles.right_thumbnailStyle}
//                             source={require('../image/right-Bear.png')}
//                         />
//                     </View>

//                     <View style={styles.columns}>
//                     <View style={[styles.cardSectionStyle, styles.card_eventsRec]}>
//                         <View style={styles.Rec_signbg}>
//                             <Image style={styles.Rec_sign} source={require('../image/rec_sign.png')}/>
//                         </View>
//                         <View style={styles.Rec_header}>
//                             <Text style={styles.Rec_header_title}>活動名稱</Text>
//                             <Text style={styles.Rec_header_date}>參與日期 ● 活動地點</Text>
//                         </View>
//                     </View>

//                     <View style={[styles.cardSectionStyle, styles.card_eventsRec]}>
//                         <View style={styles.Rec_signbg}>
//                             <Image style={styles.Rec_sign} source={require('../image/rec_sign.png')}/>
//                         </View>
//                         <View style={styles.Rec_header}>
//                             <Text style={styles.Rec_header_title}>活動名稱</Text>
//                             <Text style={styles.Rec_header_date}>參與日期 ● 活動地點</Text>
//                         </View>
//                     </View>


//                     <View style={[styles.cardSectionStyle, styles.card_eventsRec]}>
//                         <View style={styles.Rec_signbg}>
//                             <Image style={styles.Rec_sign} source={require('../image/rec_sign.png')}/>
//                         </View>
//                         <View style={styles.Rec_header}>
//                             <Text style={styles.Rec_header_title}>活動名稱</Text>
//                             <Text style={styles.Rec_header_date}>參與日期 ● 活動地點</Text>
//                         </View>
//                     </View>

//                     </View>


                    
//                     <View style={styles.thumbnailContainerStyle}>
//                         <Image
//                             style={styles.left_thumbnailStyle}
//                             source={require('../image/left-Bear.png')}
//                         />
//                         <View style={styles.headerContentStyle}>
//                             <Text style={styles.cardText}>2021</Text>
//                         </View>
//                         <Image
//                             style={styles.right_thumbnailStyle}
//                             source={require('../image/right-Bear.png')}
//                         />
//                     </View>

//                     <View style={styles.columns}>
//                     <View style={[styles.cardSectionStyle, styles.card_eventsRec]}>
//                         <View style={styles.Rec_signbg}>
//                             <Image style={styles.Rec_sign} source={require('../image/rec_sign.png')}/>
//                         </View>
//                         <View style={styles.Rec_header}>
//                             <Text style={styles.Rec_header_title}>活動名稱</Text>
//                             <Text style={styles.Rec_header_date}>參與日期 ● 活動地點</Text>
//                         </View>
//                     </View>

//                     <View style={[styles.cardSectionStyle, styles.card_eventsRec]}>
//                         <View style={styles.Rec_signbg}>
//                             <Image style={styles.Rec_sign} source={require('../image/rec_sign.png')}/>
//                         </View>
//                         <View style={styles.Rec_header}>
//                             <Text style={styles.Rec_header_title}>活動名稱</Text>
//                             <Text style={styles.Rec_header_date}>參與日期 ● 活動地點</Text>
//                         </View>
//                     </View>


//                     <View style={[styles.cardSectionStyle, styles.card_eventsRec]}>
//                         <View style={styles.Rec_signbg}>
//                             <Image style={styles.Rec_sign} source={require('../image/rec_sign.png')}/>
//                         </View>
//                         <View style={styles.Rec_header}>
//                             <Text style={styles.Rec_header_title}>活動名稱</Text>
//                             <Text style={styles.Rec_header_date}>參與日期 ● 活動地點</Text>
//                         </View>
//                     </View>

//                     </View>
                    
//                 </View> */}

//                 {/* </ScrollView> */}







//             {/* </View> */}
//             </View>
//             </ScrollView>

//     );
// };

// // define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         height: windoheight + 150,
//     },
//     wrapA: {
//         width: windowWidth,
//         height: windoheight*0.25,
//         padding:25,
//         // paddingVertical:25,
//         // backgroundColor:'gray',
//     },
//     wrapB: {
//         width: windowWidth,
//         height: 700,
//     },
//     wrapC: {
//         width: windowWidth-40,
//         height: "100%",
//         justifyContent: "center",
//         alignItems: "center",
//         marginRight:40,
//     },
//     wrapDot: {
//         position: 'absolute',
//         bottom: 0,
//         flexDirection: 'row',
//         alignSelf: 'center'
//     },
//     dotActive: {
//         margin:3,
//         color:'black'
//     },
//     dot:{
//         margin:3,
//         color:'white'
//     },

//     btn_container: {
//         flex: 1,
//         flexDirection:'row',
//     },
//     btn_styles: {
//         flex: 1,
//         flexDirection:'row',
//         justifyContent: "center",
//         alignItems: "center",
//         position: 'absolute',
//         width:windowWidth,
//         height:48,
//     },
//     button:{
//         flex:1,
//         width:100,
//         height:48,
//         alignItems:'center',
//         justifyContent:'center',
//         backgroundColor:'#CDE49C',
//         borderWidth:0.5,
//         borderColor:'#CDE49C',
//         borderRadius:9,
//     },
//     text:{
//         color:'#705A31',
//         fontWeight: "bold",
//         fontSize: 16,
//     },
//     buttonActive:{
//         width:100,
//         flex:1,
//         height:48,
//         alignItems:'center',
//         justifyContent:'center',
//         // backgroundColor:'#F6CA2C',
//         borderWidth:0.5,
//         // borderColor:'#F6CA2C',
//         borderRadius:9,
//     },
//     textActive:{
//         color:'#705A31',
//         fontWeight: "bold",
//         fontSize: 16,
//     },
//     buttonActiveLR:{
//         borderTopLeftRadius:9,
//         borderBottomLeftRadius:9,
//         marginRight:24,
//         marginLeft:24
//     },

//     event_container:{
//         position: 'absolute',
//         marginTop:300,
//         marginEnd:25,
//         marginStart:28,
//         alignItems:'center',
//         justifyContent:'center',
//         backgroundColor:'#CDE49C',
//         borderRadius:25,
//         borderWidth:0.5,
//         borderColor:'#CDE49C',
//         width:355,
//         paddingTop:24,
//     },


//         cardSectionStyle: {
//           backgroundColor: "#fff",
//           borderColor: "#fff",
//           borderBottomWidth: 1,
//           borderWidth: 1,
//           borderRadius: 15,

//         },
//         imageStyle: {
//           width: null,
//           borderRadius:15,
//           overflow: 'hidden',          
//         },

//         More_Button: {
//             flex:1,
//             width:70,
//             height:24,
//             backgroundColor:'#F6CA2C',
//             borderWidth:0.5,
//             borderColor:'#F6CA2C',
//             borderRadius:10,
//             position: 'absolute',
//             paddingHorizontal:12,
//             paddingVertical:4,
//         },
//         More_textActive:{
//             color:'#705A31',
//             fontWeight: "bold",
//             fontSize: 12,
//         },




//         card_newsevents: {
//             width: 286,
//             height: 145,
//             marginBottom: 19,
//         },

//         image_newevents: {
//             height: 145,
//         },

//         Button_newevents: {
//             marginLeft:212,
//             marginTop:117
//         },


//         card_newspost: {
//             width: 278,
//             height:217,
//             marginBottom: 12,
//           },

//         image_newspost: {
//             height: 217,      
//           },
  
//           Button_newspost: {
//             marginLeft:201,
//             marginTop:189
//         },



//         card_eventsRec: {
//             width: 286,
//             height: 80,
//             marginBottom: 12,
//             flexDirection: "row",
//             justifyContent: "flex-start"
//         },

//         image_eventsRec: {
//             height: 145,
//         },

//         Button_eventsRec: {
//             marginLeft:212,
//             marginTop:117
//         },







//         cardText: {
//             color:'#705A31',
//             fontWeight: "bold",
//             fontSize: 20,
//         },



//         thumbnailContainerStyle: {
//             flexDirection: "row",
//             justifyContent: "flex-start",
//             width:350,
//             height: 48,
//             marginBottom:11,
//             marginTop:-2,
//           },
//           left_thumbnailStyle: {
//             width:41.75,
//             height: 18.55,
//             marginStart:90,
//             marginTop:15.25,
//           },

//           right_thumbnailStyle: {
//             width:41.75,
//             height: 18.55,
//             marginStart:15,
//             marginTop:15.25,
//           },
//           headerContentStyle: {
//             flexDirection: "column",
//             justifyContent: "space-around",
//             marginLeft: 15.25,
//           },

//           columns: {
//             justifyContent: "center",
//             alignItems: "center",
//           },

//           Rec_signbg: {
//             backgroundColor:"#FFEEB4",
//             borderColor:"#FFEEB4",
//             borderWidth:0.5,
//             borderRadius:15,
//             margin: 7,
//             width: 66,
//             height: 66
//           },

//           Rec_sign: {
//             width:56,
//             height:48.45,
//             position: 'absolute',
//             marginHorizontal: 5,
//             marginVertical: 9,
//           },

//           Rec_header: {
//             flexDirection: "column",
//             justifyContent: "space-around",
//             marginLeft: 6,
//             marginTop: 7,
//             height:66,
//         },

//         Rec_header_title: {
//             color:'#705A31',
//             fontWeight: "bold",
//             fontSize: 20,
//         },

//         Rec_header_date: {
//             color:'#705A31',
//             fontWeight: "normal",
//             fontSize: 14,
//         },




//         card_events: {
//             width: 286,
//             height: 145,
//             marginBottom: 12,
//             flexDirection: "row",
//             justifyContent: "flex-start"
//         },

//         events_signbg: {
//             backgroundColor:"#FFEEB4",
//             borderColor:"#FFEEB4",
//             borderWidth:0.5,
//             borderRadius:15,
//             margin: 7,
//             width: 66,
//             height: 66
//           },

//         events_sign: {
//             width:56,
//             height:48.45,
//             position: 'absolute',
//             marginHorizontal: 5,
//             marginVertical: 9,
//           },

//         events_header: {
//             flexDirection: "column",
//             justifyContent: "space-around",
//             marginLeft: 6,
//             marginTop: 7,
//             height:66,
//         },

//         events_header_title: {
//             color:'#705A31',
//             fontWeight: "bold",
//             fontSize: 20,
//         },

//         events_header_date: {
//             color:'#705A31',
//             fontWeight: "bold",
//             fontSize: 14,
//             marginBottom:10,
//         },

//         events_header_loc: {
//             color:'#705A31',
//             fontWeight: "bold",
//             fontSize: 14,
//             marginBottom:10,
//         },
//         events_dateloc: {
//             width: 262,
//             height:50,
//             marginStart:12,
//             position: 'absolute',
//             marginTop:85,
//         },

//         Button_events :{
//             marginLeft:20,
//             marginTop:50
//         }

// });

export default EventPy;