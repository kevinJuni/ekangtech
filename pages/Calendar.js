import * as React from 'react';
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';




const list = [
    {
        date: "2022-01-16",
        time: "15:00",
        text: "주간 회의"
    },
    {
        date: "2022-01-17",
        time: "12:00",
        text: "점심 약속"
    },
    {
        date: "2022-01-18",
        time: "17:20",
        text: "저녁 미팅"
    }
]


function getToday(){
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    return year + " - " + month + " - " + day ;
}
export default function CalendarPage() {
    const [today, setToday] = React.useState(getToday());
    const [todayText, setTodayText] =React.useState("일정이 없습니다.");
    return (
        <View  style={{ flex: 1, backgroundColor:"#eee", overflow:"hidden"}}>
            <View style={{flex: 1 ,borderTopLeftRadius:20,borderTopRightRadius:20,backgroundColor:"#fff" ,overflow:"hidden",marginTop:5}}>
                <Calendar
                    style={{
                    }}
                    theme={{
                        selectedDayTextColor: 'red',
                        todayTextColor: 'blue',
                        selectedDayBackgroundColor: '#00adf5',
                    }}
                    // Collection of dates that have to be marked. Default = {}
                    markedDates={{
                        '2022-01-16': {marked: true, dotColor: 'red'},
                        '2022-01-17': {marked: true, dotColor: 'red'},
                        '2022-01-18': {marked: true, dotColor: 'red'},
                    }}
                    onDayPress={day => {
                        setToday(day.dateString);
                    }}
                    renderArrow={direction =><View><Text>
                        {direction === "left" ? "<" : ">"
                        }</Text></View>}
                />

                <View style={{
                    paddingLeft:20
                }}>
                    <Text style={{marginTop:20, marginBottom:10}}>
                        {today} 일정
                    </Text>
               
                <ScrollView >
                    <View >
                        {
                            list.find(item=>item.date === today) ? 
                            <View style={{display:'flex', flexDirection:"row"}}>
                                <Text style={{
                                    borderWidth:1,
                                    borderColor:"red",
                                    padding:10,
                                    paddingLeft:15,
                                    paddingRight:15,
                                    borderRadius:20,
                                    color:"red"
                                }}>{list.find(item=>item.date === today).time }</Text>
                                <Text style={{
                                    padding:10,
                                    fontWeight:'900',
                                    fontSize:15                                    
                                }}>
                                    {list.find(item=>item.date === today).text }
                                </Text>
                            </View>
                            :
                            <Text>일정이 없습니다.</Text>
                        }
                    </View>

                </ScrollView>
                </View>
                
            </View>
            </View>
    )
  }