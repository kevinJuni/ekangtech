import * as React from 'react';
import { Image, Text, View } from "react-native";

export default function Alarm() {

    return (
        <View  style={{ flex: 1, backgroundColor:"#eee", overflow:"hidden"}}>
        <View style={{flex: 1 ,borderTopLeftRadius:20,borderTopRightRadius:20,backgroundColor:"#fff" ,overflow:"hidden",marginTop:5}}>
            <View style={{flex:1,justifyContent: 'center',alignContent:"center",alignItems: 'center',}}>
            <Image style={{marginTop:-40}} source={require('../images/not_list.png')}/>
            <Text style={{fontSize:16, fontWeight:'800', marginTop:15}}>
                알람이 없습니다.
            </Text>
        </View>
        </View>
        </View>
    )
  }