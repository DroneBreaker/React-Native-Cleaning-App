import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Message from '../pages/Message';
import Orders from '../pages/Orders'
import { Box, Icon, Image } from 'native-base';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator initialRouteName='Home' 
      screenOptions={{headerShown: false, tabBarShowLabel: false, 
      tabBarStyle: {
        position: 'absolute', 
        bottom: 20, 
        right: 20, 
        left: 20, 
        elevation: 0,
        borderRadius: 15,
        height: 80,
        // backgroundColor: "lightgray"
        // shadowColor: "blue",
        // shadowOpacity: 0.8,
        // shadowOffset: {
        //   width: 10,
        //   height: 10
        // }
      }
      }}
    >
        <Tab.Screen name="Home" component={Home} options={{tabBarIcon: ({focused}) => (
          <Box>
            {/* <Image source={}/> */}
            {/* <Icon /> */}
            <Text>Home</Text>
          </Box>
        )}}/>

        {/* Orders tab */}
        <Tab.Screen name="Orders" component={Orders} options={{tabBarIcon: ({focused}) => (
          <Box>
            {/* <Image source={}/> */}
            {/* <Icon /> */}
            <Text>Orders</Text>
          </Box>
        )}}/>

        {/* Message tab */}
        <Tab.Screen name="Message" component={Message} options={{tabBarIcon: ({focused}) => (
          <Box>
            {/* <Image source={}/> */}
            {/* <Icon /> */}
            <Text>Messages</Text>
          </Box>
        )}}/>

        {/* Profile tab */}
        <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon: ({focused}) => (
          <Box>
            {/* <Image source={}/> */}
            {/* <Icon /> */}
            <Text>Profile</Text>
          </Box>
        )}}/>
    </Tab.Navigator>
  )
}