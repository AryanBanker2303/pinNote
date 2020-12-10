import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View ,TouchableOpacity,TextInput } from 'react-native';
import database from "../database"
import {Header,Icon} from "react-native-elements";

export default class AddNotificationScreen extends React.Component{
    constructor(){
        super();
        this.state={
        notification:"",
        }
    }
    
    saveNotification(){
     database.notification="Test4 or something"
    }

    saveJsonFile(){
        const editJsonFile= require("edit-json-file");
        let file = editJsonFile("${_pinNote}/file1.json");
        file.set("notification","Do something");
        file.set("notification1","test2");
        alert(file.get())
        file.save();
    }

    render(){
        return(
<View>
            <KeyboardAvoidingView>
            <Header
            leftComponent= {< Icon name="menu" type="feather"/>}
            centerComponent={<Text>PinNote</Text>}
            rightComponent={<Icon name="bell" type="feather"/>}
            style={styles.header}
            />    
            <View style={styles.backgroundBack}>
              
                <Text style={styles.text}>
                    Insert your text
                </Text>

                <TextInput placeholder="  here"
                style={styles.textInput}
                           value={this.state.notification}
                           onChangeText={(text)=>{this.setState({
                               notification:text,
                           })}}/>

                              <TouchableOpacity style={styles.touchableOpacity2} onPress={()=>{this.setState({
                                  notification:"Get Groceries",
                              })}}>
                                  <Text style={styles.text2}> Get Groceries </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity style={styles.touchableOpacity2} onPress={()=>{this.setState({
                                  notification:"Submit HW by tommorrow",
                              })}}>
                                  <Text style={styles.text2}> Submit HW by tommorrow </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity style={styles.touchableOpacity2} onPress={()=>{this.setState({
                                  notification:"Remember to pay bills",
                              })}}>
                                  <Text style={styles.text2}> Remember to pay bills </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity style={styles.touchableOpacity2} onPress={()=>{this.setState({
                                  notification:"Do the laundry",
                              })}}>
                                  <Text style={styles.text2}> Do the laundry </Text>
                              </TouchableOpacity>

                <TouchableOpacity style={styles.touchableOpacity} onPress={()=>{
                    /*
                    alert("Pressed")
                    this.saveNotification();
                    alert(database.notification)
                    alert(database.content)
                    alert(database)
                    alert("function executed")
                    */
                   this.saveJsonFile()
                }}>
                    <Text style={{color:"white"}}
                    >Save</Text>
                </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
            </View>
        )     
    }
}

const styles=StyleSheet.create({
    textInput:{
        marginTop:10,
        justifyContent:"center",
        alignItems:"center",
        color:"white",
        borderColor:"yellow",
        borderWidth:3,
        backgroundColor:"black",
        borderRadius:10,
        height:70
    },

    text:{
        marginTop:5,
        color:"white"
    },
    text2:{
        marginTop:5,
        color:"#ccf2ff"
    },
    touchableOpacity:{
        justifyContent:"center",
        alignItems:"center",
        borderColor:"lime",
        borderWidth:3,
        backgroundColor:"black",
        borderRadius:90,
        marginTop:20
    },
    touchableOpacity2:{
        justifyContent:"center",
        alignItems:"center",
        borderColor:"#33ccff",
        borderWidth:3,
        backgroundColor:"black",
        borderRadius:90,
        marginTop:20
    },
    backgroundBack:{
        backgroundColor:"black",
        padding:40,
        marginTop:0,
        marginBottom:0,
    }, 


})