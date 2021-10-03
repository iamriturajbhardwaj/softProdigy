import React from 'react';
import { View } from 'react-native';

import { TextType1,TextType2 } from '../components/uiComponent';
import { styles } from '../components/style/style';
  
export default Message =()=>{
  
    return (
      <View style={styles.container}>
        <TextType1> Message </TextType1>
        <TextType2> You are at Message screen </TextType2>
      </View>
    );
  
}
