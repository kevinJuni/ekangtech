import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { FlatList, Text, View, TextInput, StyleSheet, Image, Pressable, Animated, TouchableOpacity, TouchableHighlight } from "react-native";
import { PanGestureHandler  } from 'react-native-gesture-handler';
import {usePanGestureHandler, useVector} from  "react-native-redash/lib/module/v1";
import { SwipeListView } from 'react-native-swipe-list-view';

const list = [
    {
        id:0,
        title:"공지사항 테스트1",
        date:"2021-12-31",
        writer:"관리자"
    },
    {
        id:1,
        title:"공지사항 테스트2",
        date:"2022-01-02",
        writer:"관리자"
    },
    {
        id:2,
        title:"공지사항 테스트3",
        date:"2022-01-02",
        writer:"관리자"
    }
]
const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
        
        <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnRight]}
            // onPress={() => deleteRow(rowMap, data.item.key)}
        >
            <Text style={styles.backTextWhite}>Delete</Text>
        </TouchableOpacity>
    </View>
);

const Item = ({ item }) => {
    const navigation = useNavigation(); 

    return (
        <TouchableHighlight
            onPress={() => console.log('You touched me')}
            style={styles.rowFront}
            underlayColor={'#AAA'}
        >
            <View style={styles.listBox}>
                     <Pressable onPress={() => navigation.navigate('NoticeDetail',{id:item.id})}>
                         <Text style={styles.titleBox}>{item.title}</Text>
                     </Pressable>
                     <View style={styles.felxBox}>
                        <Text style={styles.writerBox}>{item.writer}</Text>
                        <Text style={styles.dateBox}>{item.date}</Text>
                    </View>
                
                </View>
        </TouchableHighlight>
    //    <Animated.View >
    //            <Animated.View  style={{ flex: 1,  transform: [{ translateX:0}] }}>
    //             <View style={styles.listBox}>
    //                 <Pressable onPress={() => navigation.navigate('NoticeDetail',{id:item.id})}>
    //                     <Text style={styles.titleBox}>{item.title}</Text>
    //                 </Pressable>
    //                 <View style={styles.felxBox}>
    //                     <Text style={styles.writerBox}>{item.writer}</Text>
    //                     <Text style={styles.dateBox}>{item.date}</Text>
    //                 </View>
                
    //             </View>
    //             </Animated.View>
    // </Animated.View>
  )};
export default function Notice() {
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
        <SwipeListView
            style={{padding:10, backgroundColor:"#fff"}}
            data={list}
            renderItem={(item)=><Item {...item}></Item>}
            keyExtractor={item => item.id}
            previewRowKey={'0'}
            previewOpenValue={-40}
            renderHiddenItem={renderHiddenItem}
            rightOpenValue={-75}
            alwaysBounceHorizontal={false}
            disableRightSwipe={true} 
        />
{/* 
        <FlatList
            style={{padding:10}}
            data={list}
            renderItem={(item)=><Item {...item}></Item>}
            keyExtractor={item => item.id}
        /> */}
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
    listBox:{
        borderBottomColor:'#eee',
        borderBottomWidth:1,
        margin:10
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
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: 'blue',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },
    rowFront: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        height: 50,
    },
});