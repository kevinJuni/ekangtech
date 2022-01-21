import * as React from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Message() {
    const [text, onChangeText] = React.useState("");

    return (
        <View  style={{ flex: 1, backgroundColor:"#eee", overflow:"hidden"}}>
        <View style={{flex: 1 ,borderTopLeftRadius:20,borderTopRightRadius:20,backgroundColor:"#fff" ,overflow:"hidden",marginTop:5}}>
        <View style={styles.inputBox}>
            <TextInput
                style={styles.input}
                placeholder='search...'
                onChangeText={onChangeText}
                value={text}
            />
            <Pressable style={styles.searchBtn}  onPress={() => props.navigation.navigate('Notice')}>
                <Image source={require('../images/searchBtn.png')}/>
            </Pressable>
        </View>
        <View style={{flex:1,justifyContent: 'center',alignContent:"center",alignItems: 'center',}}>
            <Image style={{marginTop:-40}} source={require('../images/not_list.png')}/>
            <Text style={{fontSize:16, fontWeight:'800', marginTop:15}}>
                메세지가 없습니다.
            </Text>
        </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputBox : {
        borderRadius:20,
        margin: 12,
        marginBottom:0,
        borderStyle: 'solid',
        borderColor:'#DBD3D3',
        borderWidth:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    input: {
        height: 40,
        padding: 10,
    },
    searchBtn:{
        padding:7
    },
});