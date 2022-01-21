import * as React from 'react';
import { Button, Image, Pressable, Text, Touchable, View } from "react-native";

export default function Setting() {
    const [onOff,setOnOff] = React.useState(false);
    return (
        <View  style={{ flex: 1, backgroundColor:"#eee", overflow:"hidden"}}>
        <View style={{flex: 1 ,borderTopLeftRadius:20,borderTopRightRadius:20,backgroundColor:"#fff" ,overflow:"hidden",marginTop:5}}>
            <View style={{ justifyContent:'space-between', flexDirection:'row', padding:13,borderBottomWidth:1, borderBottomColor:'#eee'}}>
                <Text style={{fontSize:18, fontWeight:'900'}}>
                    내 정보
                </Text>
                <View >
                    <Image source={require('../images/next_btn.png')}/>
                </View>
            </View>
            <View style={{ justifyContent:'space-between', flexDirection:'row', padding:13,borderBottomWidth:1, borderBottomColor:'#eee'}}>
                <Text  style={{fontSize:18, fontWeight:'900'}}>
                    알림
                </Text>
                <Pressable 
                    onPress={()=>setOnOff(!onOff)}
                >
                    {!onOff && <Image source={require('../images/setting_btn.png')}/>}
                    {onOff && <Image source={require('../images/setting_btn_red.png')}/>}
                </Pressable>
            </View>
        </View>
        </View>
    )
  }