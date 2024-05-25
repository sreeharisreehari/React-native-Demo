import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';



const TextInANest = () => {
    const [titleText, setTitleText] = useState("Bird's Ne");
    const bodyText = 'This is not really a bird nest.';
  
    const onPressTitle = () => {
      setTitleText("Bird's Nest [pressed]");
    };
  
    return (
    <>
    
        <Text style={styles.baseText}>
          <Text style={styles.titleText} onPress={onPressTitle}>
            {titleText}
            {'\n'}
            {'\n'}
          </Text>
          <Text numberOfLines={5}>{bodyText}</Text>
        </Text>
    </>
    );
  };
  
  const styles = StyleSheet.create({
    baseText: {
      fontFamily: 'Cochin',
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
  
  export default TextInANest;