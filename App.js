import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddNotificationScreen from './Screens/addNotification'

export default function App() {
  return (
    <View style={styles.container}>
<AddNotificationScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles=StyleSheet.create({
  textInput:{
      marginTop:10,
      justifyContent:"center",
      alignItems:"center",
      borderColor:"yellow",
      borderWidth:3,
      backgroundColor:"white",
      textColor:"black",
      borderRadius:90,
  },

  text:{
      marginTop:8,
      marginleft:5,
      color:"white"
  },

  touchableOpacity:{
      justifyContent:"center",
      alignItems:"center",
      borderColor:"lime",
      borderWidth:3,
      backgroundColor:"gray",
      textColor:"lightGray",
      borderRadius:90,
      marginTop:20
  },

  backgroundBack:{
      backgroundColor:"black",
      padding:40,
      marginTop:50,
      marginBottom:50,
  }, 
  

})

