import React from "react";
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View, Image, ScrollView } from "react-native";

const AppBar = () => {
    return <NativeBaseProvider >
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="violet.600"/>
      <HStack bg="violet.800" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="350">
        <HStack alignItems="center">
          <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white" />} />
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>
        <HStack>
          <IconButton icon={<
            Icon as={        
                <Image source={require('../image/left_nav.png')} />
            } 
            name="favorite" 
            size="sm" 
            color="white" 
            />
        } />


        <IconButton icon={<
            Icon as={        
                <Image source={require('../image/right_nav.png')} />
            } 
            name="person" 
            size="sm" 
            color="white" 
            />
        } />
          <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />} />
        </HStack>
      </HStack>
    </NativeBaseProvider>;
}

const styles = StyleSheet.create({
    center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80,
    },
  });

export default AppBar;
