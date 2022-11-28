import React, { useState } from 'react';
import { View, Text, Pressable,  StyleSheet, Image} from 'react-native';

const SettingButton = ({ data, onSelect }) => {
    const [userOption, setUserOption] = useState(null);
    const selectHandler = (value) => {
      onSelect(value);
      setUserOption(value);
    };

    return (
    <View>
      {data.map((item) => {
        return (
          <Pressable
            style={
              item.value === userOption ? styles.selected : styles.unselected
            }
            key={item.value}
            onPress={() => selectHandler(item.value)}>
            <Image
                source={item.imgURL}
                style={{ width: 100,height:'auto'}}
                resizeMode="center"
            />
            <View style={{ width: 168, display:'flex', paddingBottom:15,paddingTop:15}}>
                <Text style={styles.titlestyle}>{item.value}</Text>
                <Text style={styles.textstyle}>{item.intro}</Text>
            </View>

          </Pressable>
        );
      })}
    </View>
    )
  }
  
  const styles = StyleSheet.create({
    unselected: {
        display:'flex',
        flexDirection:'row',

        backgroundColor: 'white',
        borderRadius: 15,
        padding:5,
        marginBottom:10,
    },
    selected: {
        display:'flex',
        flexDirection:'row',
        
        backgroundColor: 'white',
        borderRadius: 15,
        borderWidth: 2,
        borderColor:'#62935F',
        padding:3,
        marginBottom:10,
    },
    titlestyle: {
        fontSize: 16,
        color: "#816B42",
        fontWeight: "900",
        textAlign:'left',
        // backgroundColor:"black"
    },
    textstyle: {
        width: 160,
        fontSize: 14,
        color: "#816B42",
        textAlign:'left',
        marginTop:10,
        // backgroundColor:"black",
    },
  });
  export default SettingButton;