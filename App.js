/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React,{useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen'; /** 추가 **/
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Pressable
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Message from './pages/Message';
import Notice from './pages/Notice';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NoticeDetail from './pages/NoticeDetail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalendarPage from './pages/Calendar';
import Setting from './pages/Setting';
import MessageDetail from './pages/MessageDetail';
import CalendarDetail from './pages/CalendarDetail';
import SettingDetail from './pages/SettingDetail';
import Alarm from './pages/Alarm';



const Header = () => {
  return(
    <View>
      <Text>
        이강테크aa
      </Text>
    </View>
  )
}
function TabHeader(props) {
  // alert(JSON.stringify(props))
  return (
    <View style={styles.wrap}>
      <View style={styles.container}>
        <View style={styles.item1}>
        {props.back && <Pressable onPress={() => props.navigation.navigate(props.back.title)}>
            <Image source={require('./images/backImg.png')}/>
          </Pressable>}
        </View>
        <View style={styles.item3}>
          <Image style={{}} source={require('./images/main.png')}/>
        </View>
        <View style={styles.item2}>
          <Pressable onPress={() =>props.navigation.navigate('Alarm')}>
            <Image source={require('./images/alarm.png')}/>
          </Pressable>
        </View>
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}> 
          {props.headerTitle}
        </Text>
      </View>
      
    </View>
  );
}

function HomeStackScreen({navigation }) {
  const Stack = createNativeStackNavigator();
  navigation.setOptions({ tabBarVisible: false })
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notice" component={Notice} options={{ header:(props)=><TabHeader {...props} headerTitle="공지사항"/> }}/>
      <Stack.Screen name="NoticeDetail" component={NoticeDetail} options={{ header:(props)=><TabHeader {...props} headerTitle="공지사항"/>  }}/>
    </Stack.Navigator>
  );
}
function MessageStackScreen() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Message" component={Message} options={{ header:(props)=><TabHeader {...props} headerTitle="메세지"/> }}/>
      <Stack.Screen name="MessageDetail" component={MessageDetail} options={{ header:(props)=><TabHeader {...props} headerTitle="메세지"/>  }}/>
    </Stack.Navigator>
  );
}
function CalendarStackScreen() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="CalendarPage" component={CalendarPage} options={{ header:(props)=><TabHeader {...props} headerTitle="일정"/> }}/>
      <Stack.Screen name="CalendarDetail" component={CalendarDetail} options={{ header:(props)=><TabHeader {...props} headerTitle="일정"/>  }}/>
    </Stack.Navigator>
  );
}
function SettingStackScreen() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Setting" component={Setting} options={{ header:(props)=><TabHeader {...props} headerTitle="설정"/> }}/>
      <Stack.Screen name="SettingDetail" component={SettingDetail} options={{ header:(props)=><TabHeader {...props} headerTitle="설정"/>  }}/>
    </Stack.Navigator>
  );
}

const tabNavi = ()=>{
  const Tab = createBottomTabNavigator();

  return(
    <>
    {/* <Header/> */}
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Notice') {
            return focused
            ? <Image source={require('./images/home_red.png')}/>
            : <Image source={require('./images/home.png')}/>
          } else if (route.name === 'Message') {
            return focused
            ? <Image source={require('./images/message_red.png')}/>
            : <Image source={require('./images/message.png')}/>
          } else if (route.name === 'Calendar') {
            return focused
            ? <Image source={require('./images/calendar_red.png')}/>
            : <Image source={require('./images/calendar.png')}/>
          } else if (route.name === 'Setting') {
            return focused
            ? <Image source={require('./images/setting_red.png')}/>
            : <Image source={require('./images/setting.png')}/>
          } 
        },
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'tomato',
        tabBarLabelStyle:{
          marginBottom:5
        },
        tabBarStyle:{ 
          borderRadius:20,
          margin:10,
          padding:5,
          backgroundColor:'#fff'
        },
        headerBackground:"#eee",
      })
    }
    >
      <Tab.Screen 
        name="Notice" 
        component={HomeStackScreen}
        options={{
          headerShown:false,
        }}
        // options={{ title: '공지사항' }}
        // options={{ tabBarBadge: 2 }}
      />
      <Tab.Screen 
        name="Message" 
        component={MessageStackScreen} 
        options={{headerShown:false}}
        // options={{ title: '메세지' }}
      />
      <Tab.Screen 
      name="Calendar" 
      component={CalendarStackScreen} 
      options={{headerShown:false}}
      // options={{ title: '메세지' }}
      />
        <Tab.Screen 
        name="Setting" 
        component={SettingStackScreen} 
        options={{headerShown:false}}
        
        // options={{ title: '메세지' }}
      />
    </Tab.Navigator>
  </>
  )
}
const App = () => {
  useEffect(() => {
    try {
      setTimeout(() => {
        SplashScreen.hide(); /** 추가 **/
      }, 2000); /** 스플래시 시간 조절 (2초) **/
    } catch(e) {
      console.warn('에러발생');
      console.warn(e);
    }
  });
  const isDarkMode = useColorScheme() === 'dark';
  const [hideTab, setHideTab] = useState(false);

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  const MyTheme = {
    dark: true,
    colors: {
      primary: '#fff',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      background:'#fff',
      card: '#eee',

    },
  };
  return (
    <>
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator 
      
        screenOptions={{

        }}
      >
        <Stack.Screen name="Home" component={tabNavi} options={{headerShown:false, }}/>
        <Stack.Screen name="Alarm" component={Alarm} options={{ header:(props)=><TabHeader {...props} headerTitle="알림"/>  }}/>
      </Stack.Navigator>
    </NavigationContainer>
  </>
  );
};

const styles = StyleSheet.create({
  wrap:{
    backgroundColor:"red",
  },
  container: {
    height:40,
    backgroundColor:'#eee'
  },
  item1:{
    height:40,
    width:"20%",
    paddingLeft:10,
    position: 'absolute', 
    left: 0,
    top:5
  },
  item2:{
    height:40,
    width:"10%",
    paddingRight:10,
    position: 'absolute', 
    right: 0,
    top:5
  },
  item3:{
    height:40,
    width:"10%",
    paddingRight:10,
    position: 'absolute', 
    right: 260,
    top:10
  },
  title:{
    height:50,
    backgroundColor:'#fff',
    paddingLeft:10,
    backgroundColor:'#eee'

  },
  titleText:{
    fontSize:25,
    fontWeight:'900'
  }
});

export default App;
