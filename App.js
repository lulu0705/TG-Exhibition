import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet, StatusBar, SafeAreaView,View, Image, TouchableOpacity } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from "./navigation/Tabs";
// import MainContainer from "./navigation/MainContainer";
import InterPage from './Screens/pages/InterPage';
import Loginpage from './Screens/pages/Loginpage';
import Registerpage from './Screens/pages/Registerpage';
import Registerpage2 from './Screens/pages/Registerpage02'
import Registerpage3 from './Screens/pages/Registerpage03'

import AboutMe from './Screens/pages/AboutMe';
import NurtureHome from './Screens/pages/NurtureHome';
import Observepage from './Screens/pages/Observepage';
import CactusCommunicate from './Screens/pages/CactusCommunicate';
import Messageboardpage from './Screens/pages/Messageboardpage';



const Stack = createStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Inter'>
        <Stack.Screen name ="Inter" component={InterPage}
          options={{
          headerShown: false,
        }}  
        />
        <Stack.Screen name ="Login" component={Loginpage}
          options={{
          headerShown: false,
        }}  
        />
        <Stack.Screen name ="Register" component={Registerpage}
          options={{
          headerShown: false,
        }}  
        />
        <Stack.Screen name ="Register02" component={Registerpage2}
          options={{
          headerShown: false,
        }}  
        />
        <Stack.Screen name ="Register03" component={Registerpage3}
          options={{
          headerShown: false,
        }}  
        />
        {/* <Stack.Screen name ="About" component={AboutMe}
        options={{
          headerShown: false,
        }}  
        />
        <Stack.Screen name ="NurtureHome" component={NurtureHome}
        options={{
          headerShown: false,
        }}  
        />
        <Stack.Screen name ="Observepage" component={Observepage}
        options={{
          headerShown: false,
        }}  
        />
        <Stack.Screen name ="CactusCommunicate" component={CactusCommunicate}
        options={{
          headerShown: false,
        }}  
        />
        <Stack.Screen name ="Messageboardpage" component={Messageboardpage}
        options={{
          headerShown: false,
        }}  
        /> */}
        <Stack.Screen name ="Tabs" component={Tabs}
          options={{
          headerShown: false,
        }}  
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAF2",
  },
});

export default App;