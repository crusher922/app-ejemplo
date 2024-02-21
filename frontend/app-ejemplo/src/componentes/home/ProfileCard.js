import React from "react";
import {View, Text, StyleSheet, Image, Linking,TouchableWithoutFeedback} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const youtube = <Icon name={'youtube'} size={40} color={'black'}/>
const android = <Icon name={'android'} size={40} color={'black'}/>
const paypal = <Icon name={'paypal'} size={40} color={'black'}/>
const apple = <Icon name={'apple'} size={40} color={'black'}/>
const github = <Icon name={'wrench'} size={40} color={'black'}/>


const ProfileCard = () => {
    const user = {
        avatar: "https://media-lim1-1.cdn.whatsapp.net/v/t61.24694-24/424317271_756755705965100_2395189311351003884_n.jpg?ccb=11-4&oh=01_AdR-sBPUQQPE0myFdURn24kYuXDZE6IhSDzoZ-ni5Wi8WQ&oe=65E2FCF5&_nc_sid=e6ed6c&_nc_cat=110",
        coverPhoto: "https://wallpapercave.com/wp/wp13591803.jpg",
        name: "Francisco Jaramillo"
    }
    return (
        <View style={styles.container}>
            <Image source={{uri: user.coverPhoto}} style={styles.coverPhoto}/>
            <View style={styles.avatarContainer}>
                <Image source={{uri: user.avatar}} style={styles.avatar}/>
                <Text style={styles.name}>
                    {user.name}
                </Text>
            </View>
            <View style={styles.buttonContainer}>

                <TouchableWithoutFeedback style={{color: 'blue'}} onPress={() => {
                    Linking.openURL('https://www.youtube.com/')
                }}>
                    {youtube}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{color: 'blue'}} onPress={() => {
                    Linking.openURL('https://www.paypal.com/ec/home')
                }}>
                    {paypal}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{color: 'blue'}} onPress={() => {
                    Linking.openURL('https://www.android.com/intl/es_es/')
                }}>
                    {android}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>Linking.openURL('https://www.apple.com/la/')}>
                    {apple}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>Linking.openURL('https://www.kwai.com/es')}>
                    {github}
                </TouchableWithoutFeedback>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center' //flex y grid
    },
    coverPhoto: {
        width: '100%',
        height: 200,
        resizeMode: 'cover'

    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: -75
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 10,
        borderColor: 'white'
    },
    name: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        width: '60%',
        justifyContent: 'space-between'
    }
});
export default ProfileCard