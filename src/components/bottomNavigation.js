import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'

import Home from '../screens/home';
import Message from '../screens/Message';

const Tab = createBottomTabNavigator();

  export default bottomNavigation =()=>{
  
    return (
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  let iconType;
                  if (route.name === 'Home') {
                    iconName = focused
                      ? 'home'
                      : 'home';
                      iconType="antdesign"
                  } else if (route.name === 'Message') {
                    iconName = focused ? 'message1' : 'message1';
                    iconType="antdesign"
                  }
                  return <Icon name={iconName} type={iconType} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                headerShown: false
              })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Message" component={Message} />
            </Tab.Navigator>
    );
  
}
