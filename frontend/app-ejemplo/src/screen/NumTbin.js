import React, {useState} from "react";
import {TextInput, View, StyleSheet, Text, Button} from "react-native";


const NumTbin = () => {
    const [prompt, setPrompt] = useState('')
    const [result, setResult] = useState('')

    const getResultFromOpenApit = async () => {

        try {
            const response = await fetch('http://localhost:9004/convertir', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({prompt})
            })
            const jsonData = await response.json()
            setResult(`${jsonData.result} : ${jsonData.token} `)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {'Escribe el numero en letras para convertirlo en binario'}
            </Text>
            <TextInput style={styles.input} value={prompt} onChangeText={setPrompt}/>
            <Button title={'Convertir'} onPress={getResultFromOpenApit}/>
            <Text style={styles.text}>
                {result}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold'
    },
})

export default NumTbin