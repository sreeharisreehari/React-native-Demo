import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { Card, Header } from 'react-native-elements';

const MyComponent = () => {
  return (
   <>
      <Header
        centerComponent={{ text: 'Cartify', style: { color: '#fff' } }}
        containerStyle={{ backgroundColor:'rgb(46, 21, 144)', justifyContent: 'space-around' }}

      />
     
     
    </>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});


export default MyComponent;
