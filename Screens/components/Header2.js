/*此檔案只有Header 樣式 */
import React , { useState }  from "react";
import { StyleSheet, Text, View, Image,ImageBackground,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;

const Header2 = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const{title} = props;
  const navigation = useNavigation()

  return (
    <View style={styles.headerStyle}>
    <ImageBackground  style={styles.center} source={require('../image/header.png')} >
      <TouchableOpacity style={styles.leftButton} onPress={()=> navigation.replace("Three") }>
        <Image style={styles.iconStyle} source={require('../image/left_nav.png')} />
      </TouchableOpacity>

      <Text style={styles.textStyle}>{props.title}</Text>
    </ImageBackground>
  </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: 136,
    // Android Only
    elevation: 4
  },
  textStyle: {
    fontSize: 20,
    color: "#705A31",
    fontWeight: "bold",
    paddingTop: 39,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth,
    height: 136,
  },

  leftButton: {
    position: 'absolute',
    paddingTop: 39,
    left: 28,

  },

  rightButton: {
    position: 'absolute',
    paddingTop: 10,
    right: (windowWidth/24),
  },

  iconStyle: {
    width: 36,
    height: 36,
  },
});

export default Header2;