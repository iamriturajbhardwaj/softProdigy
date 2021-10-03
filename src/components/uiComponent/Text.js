import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { drawerStyle } from '../style/style';


export const TextType1 = (props) =>{
    return(
        <Text style={[drawerStyle.drawerHeaderText1,props.style]}>
            {props.children}
        </Text>
    )
}
export const TextType2 = (props) =>{
    return(
        <Text style={[drawerStyle.drawerHeaderText2,props.style]}>
            {props.children}
        </Text>
    )
}
