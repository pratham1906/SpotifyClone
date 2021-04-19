import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {Entypo,
  FontAwesome5,
  MaterialIcons
  ,EvilIcons,
  MaterialCommunityIcons} from '@expo/vector-icons'

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import { BottomTabParamList, HomeScreenParamList, SearchScreenParamList,YourLibraryParamList ,PremiumParamList} from '../types';
import YourLibraryScreen from '../screens/YourLibraryScreen'
import PremiumScreen from '../screens/PremiumScreen'
import AlbumScreen from '../screens/AlbumScreen';
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="home" color={color} size={30}  style={{ marginBottom: -3 }}/>,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => <EvilIcons name="search" color={color} size={30}  style={{ marginBottom: -3 }} />,
        }}
      />
       <BottomTab.Screen
        name="YourLibrary"
        component={YourLibraryScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="library-music" size={30} color={color} />,
        }}
      />
       <BottomTab.Screen
        name="Premium"
        component={PremiumScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="spotify" color={color} size={30}  style={{ marginBottom: -3 }} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<HomeScreenParamList>();

export function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />
       <TabOneStack.Screen
        name="AlbumScreen"
        component={AlbumScreen}
        options={{headerTitle:'Album'}}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<SearchScreenParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
