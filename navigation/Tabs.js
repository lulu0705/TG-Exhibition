import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// Screens
import Events from '../Screens/pages/Events';
import Test from '../Screens/pages/Test';
import Home from '../Screens/pages/Home';
import AboutMe from '../Screens/pages/AboutMe';
// import TestList from '../Screens/components/Setting';
// import Setting from '../Screens/components/Setting';

import NurtureHome from '../Screens/pages/NurtureHome';
import Observepage from '../Screens/pages/Observepage';
import CactusCommunicate from '../Screens/pages/CactusCommunicate';
import Messageboardpage from '../Screens/pages/Messageboardpage';

//Screen names
// const Main = "Home";
// const Album = "Details";
// const settings = "settings";

const Tab = createBottomTabNavigator();


const CustomTabBarButtonA =({children, onPress}) => (
  <TouchableOpacity
  style={{
    top: -30,
    ...styles.shadow
  }}
  onPress={onPress}
  >
    <View style={{
      width: 58,
      height: 58,
      borderRadius:40,
      backgroundColor: '#62935F',
      // marginLeft:46,
      marginLeft:55,
    }}>
      {children}
    </View>
  </TouchableOpacity>
);

const CustomTabBarButton =({children, onPress}) => (
  <TouchableOpacity
  style={{
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
    ...styles.shadow
  }}
  onPress={onPress}
  >
    <View style={{
      width: 76,
      height: 76,
      borderRadius:40,
      backgroundColor: '#62935F',
      marginLeft:55,
    }}>
      {children}
    </View>
  </TouchableOpacity>
);


const CustomTabBarButtonC =({children, onPress}) => (
  <TouchableOpacity
  style={{
    top: -30,
    ...styles.shadow
  }}
  onPress={onPress}
  >
    <View style={{
      width: 58,
      height: 58,
      borderRadius:40,
      backgroundColor: '#62935F',
      marginLeft: 55,
    }}>
      {children}
    </View>
  </TouchableOpacity>
);


const Tabs = () => {
  return (
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
          showLabel: false,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {backgroundColor: '#CBE4C3'},
        }}
      >

        {/* Route */}
        <Tab.Screen name='Events' component={Events} options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
                source={require('../assets/btn_left.png')}
                // resizeMode='contain'
                style={{
                  width:32,
                  height:35.21,
                  marginLeft: 2.5,
                  marginTop: 5,
                  // tintColor: focused ? '#e32f45' : '#748c94',
                }}
                />
                /* <Text style={{color: focused ? '#e32f45' : '#748c94',fontSize:12 }}>
                  HOME
                </Text> */
          ),
           tabBarButton: (props) => (
            <CustomTabBarButtonA {...props} />
          )
          
        }}/>



        {/* 圓形 */}
        <Tab.Screen name="Home" component={Home} options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
              <Image
                source={require('../assets/btn_home.png')}
                // resizeMode='contain'
                style={{
                  width:45,
                  height:54.45,
                  marginLeft: 2.5,
                  marginTop: 5,
                }}
                />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          )
  
        }}/>








        <Tab.Screen name="CactusCommunicate" component={CactusCommunicate} options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
              <Image
                source={require('../assets/btn_right.png')}
                // resizeMode='contain'
                style={{
                  width:31,
                  height:38.05,
                  marginLeft: 2.5,
                  marginTop: 5,
                  // tintColor: focused ? '#e32f45' : '#748c94',
                }}
                />
                /* <Text style={{color: focused ? '#e32f45' : '#748c94',fontSize:12 }}>
                Album
                </Text> */
          ),
            tabBarButton: (props) => (
            <CustomTabBarButtonC {...props} />
          )
          
        }}/>





        <Tab.Screen name="AboutMe" component={AboutMe} options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
              <Image
                source={require('../assets/btn_right.png')}
                // resizeMode='contain'
                style={{
                  width:31,
                  height:38.05,
                  marginLeft: 550,
                  marginTop: 5,
                  // tintColor: focused ? '#e32f45' : '#748c94',
                }}
                />
          ),
          
        }}/>

<Tab.Screen name="Messageboardpage" component={Messageboardpage} options={{
        headerShown: false,

        tabBarIcon: ({ focused }) => (
          <Image
            source={require('../assets/btn_right.png')}
            // resizeMode='contain'
            style={{
              width: 32,
              height: 35.21,
              marginLeft: 250,
              marginTop: 5,
            }}
          />
        ),

      }} />

        <Tab.Screen name="NurtureHome" component={NurtureHome} options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
              <Image
                source={require('../assets/btn_right.png')}
                // resizeMode='contain'
                style={{
                  width:31,
                  height:38.05,
                  marginLeft: 550,
                  marginTop: 5,
                  // tintColor: focused ? '#e32f45' : '#748c94',
                }}
                />
          ),
          
        }}/>
      <Tab.Screen name="Observepage" component={Observepage} options={{
        headerShown: false,

        tabBarIcon: ({ focused }) => (
          <Image
          source={require('../assets/btn_right.png')}
            resizeMode='contain'
            style={{
              width: 31,
              height: 38.05,
              marginLeft: 550,
              marginTop: 5,
            }}
          />
        ),
      }} />

      </Tab.Navigator>
      
  );
}

const styles = StyleSheet.create({
  shadow:{
    shadowColor: '#000',
    shadowOffset:{
      width:0,
      height:4,
    },
    shadowOpacity:0.25,
    shadowRadius:3.5,
    elevation:5
  }
});

export default Tabs;