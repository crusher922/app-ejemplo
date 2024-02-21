import React, {useState} from "react";
import {TextInput, View, StyleSheet, Text, Button} from "react-native";


const Traductor = () => {
    const [prompt, setPrompt] = useState('')
    const [result, setResult] = useState('')

    const getResultFromOpenApit = async () => {

        try {
            const response = await fetch('http://localhost:9004/openapit', {
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
                {'Ingrese el texto a traducir'}
            </Text>
            <TextInput style={styles.input} value={prompt} onChangeText={setPrompt}/>
            <Button title={'Traducir'} onPress={getResultFromOpenApit}/>
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
    button: {
        marginVertical: 10 // Agrega margen vertical a los botones
    },
    separator: {
        height: 10 // Altura del separador
    }
})

export default Traductor