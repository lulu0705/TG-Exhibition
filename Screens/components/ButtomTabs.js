import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import ContentMain from "./ContentMain";

const Tab = createBottomTabNavigator();

const ButtomTabs = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen name="Home" component={ContentMain} />
        <Tab.Screen name="Settings" component={ContentMain} />
    </Tab.Navigator>
    </NavigationContainer>
  );
};

export default ButtomTabs;
