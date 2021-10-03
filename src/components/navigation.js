import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomNavigation from './bottomNavigation';


const Stack = createNativeStackNavigator()

export default Navigation =()=> {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    );
  
}
