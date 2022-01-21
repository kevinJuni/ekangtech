import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Button, Pressable, StyleSheet, Text, View } from "react-native";


const list = [
    {
        id:0,
        title:"공지사항 테스트1",
        date:"2021-12-31",
        writer:"관리자",
        content:"aaaaaaaaaaaaaaaaaaaaaa"
    },
    {
        id:1,
        title:"공지사항 테스트2",
        date:"2022-01-02",
        writer:"관리자",
        content:"aaaaaaaaaaaaaaaaaaaaaa"

    },
    {
        id:2,
        title:"공지사항 테스트3",
        date:"2022-01-02",
        writer:"관리자",
        content:"aaaaaaaaaaaaaaaaaaaaaa"
    }
]

export default function NoticeDetail({route}) {
    const { id } = route.params;
    const navigation = useNavigation(); 

    return (
        <View style={{ flex: 1,  borderTopLeftRadius:20,borderTopRightRadius:20, backgroundColor:"#fff", overflow:"hidden",padding:20}}>
        <View style={styles.listBox}>
                <Text style={styles.titleBox}>{list[id].title}</Text>
            <View style={styles.felxBox}>
                <Text style={styles.writerBox}>{list[id].writer}</Text>
                <Text style={styles.dateBox}>{list[id].date}</Text>
            </View>
        </View>
        <View style={styles.contentBox}>
            <Text style={{color:'#000', lineHeight:20}}>
                {list[id].content}
            </Text>
        </View>
        <Pressable style={{ position: 'absolute', bottom:50, alignSelf: 'center'}} onPress={() => navigation.navigate('Notice')}>
            <Text style={styles.button}>목록</Text>
        </Pressable>
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
    listBox:{
        borderBottomColor:'#eee',
        borderBottomWidth:1,
        paddingBottom:15
    },
    felxBox:{
        paddingTop:5,
        flexDirection:'row',
    },
    titleBox:{
        fontSize:16,
        fontWeight:'900'
    },
    writerBox:{
        fontSize:12,
        color:'#746F6F',
        fontWeight:'bold'
    },
    dateBox:{
        fontSize:12,
        paddingLeft:15,
        color:'#746F6F'
    },
    contentBox:{
        marginTop:10
    },
    button:{
        width:150,
        textAlign:'center',
        borderWidth:1,
        padding:10,
        borderColor:"#E9E4E4",
        borderRadius:25,
    }
});