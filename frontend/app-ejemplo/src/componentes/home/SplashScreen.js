import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        // Simula una carga inicial, luego navega a la pantalla principal después de 2 segundos
        setTimeout(() => {
            navigation.replace('MainScreen'); // Reemplaza la pantalla actual con MainScreen
        }, 2000); // 2000ms = 2 segundos
    }, []);

    return (
        <View style={styles.container}>
            <Text>Splash Screen</Text>
            {/* Puedes agregar un logo u otras representaciones de la pantalla de inicio aquí */}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
