import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/Navigation';
import SplashScreen from "./src/componentes/home/SplashScreen.js";

export default function App() {
    return (
        <NavigationContainer>
            <Navigation/>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

