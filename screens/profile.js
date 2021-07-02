import React,{ Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class Profile extends Component{

    render(){
        return(
            <View style={{alignItems:'center', flex:1, justifyContent:'center'}} >
                <Text>Profile</Text>
            </View>
        )
    }
}