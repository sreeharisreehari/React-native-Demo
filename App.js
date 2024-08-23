import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyComponent from './Navi';
import Home from './Home';
import { SearchBar } from 'react-native-elements';
import TextInANest from './Sidebar';
import SwitchComponent from './Sidebar';

export default function App() {
  return (
    <>
    
     <MyComponent/>
     <Home/> 

     <TextInANest/> 





     













    
      
     
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



