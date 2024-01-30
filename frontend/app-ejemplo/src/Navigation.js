import React from "react";
import {View, Text} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Menu from "./componentes/home/Menu.mjs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ListComponent from "./componentes/list/List";
import User from './screen/User'
import Chat from "./screen/Chat";
import Pdf from "./screen/Pdf";

const Tab = createBottomTabNavigator()

const Navigation = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Menu} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="home" color={color} size={size}/>
                )
            }}/>
            <Tab.Screen name={'list'} component={ListComponent} options={{
                tabBarLabel: 'Listado',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name={'android'} color={color} size={size}/>
                )
            }}/>
            <Tab.Screen name={'angular'} component={User} options={{
                tabBarLabel: 'Angular',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name={'angular'} color={color} size={size}/>
                )
            }}/>
            <Tab.Screen name={'VisualStudio'} component={Chat} options={{
                tabBarLabel: 'Visual Studio',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name={'microsoft-visual-studio'} color={color} size={size}/>
                )
            }}/>
            <Tab.Screen name={'pdf'} component={Pdf} options={{
                tabBarLabel: 'pdf-ninja',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name={'ninja'} color={color} size={size}/>
                )
            }}/>
        </Tab.Navigator>
    )
}

export default Navigation