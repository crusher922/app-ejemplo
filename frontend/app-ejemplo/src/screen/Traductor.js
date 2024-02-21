import React, {useState} from "react";
import {TextInput, View, StyleSheet, Text, Button} from "react-native";
import {Picker} from "react-native-web";

const Traductor = () => {
    const [prompt, setPrompt] = useState('')
    const [result, setResult] = useState('')
    const [selectedLanguage, setSelectedLanguage] = useState('')

    const getResultFromOpenApit = async () => {

        try {
            const response = await fetch('http://localhost:9004/openapit', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({prompt, language: selectedLanguage})
            })
            const jsonData = await response.json()
            setResult(`${jsonData.result} : ${jsonData.token} `)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={prompt} onChangeText={setPrompt}
                placeholder={'Ingrese el texto a traducir'}/>
            <Picker
                style={styles.picker}
                selectedValue={selectedLanguage}
                onValueChange={(itemValue) => setSelectedLanguage(itemValue)}>
                <Picker.Item label="Español" value="es"/>
                <Picker.Item label="English" value="en"/>
                <Picker.Item label="Francés" value="fr"/>
                <Picker.Item label="Deutsch" value="de"/>
                <Picker.Item label="Italiano" value="it"/>
                <Picker.Item label="Portugues" value="pt"/>
                <Picker.Item label="Russo" value="ru"/>
                <Picker.Item label="Polski" value="pl"/>
                <Picker.Item label="Chinese" value="zh"/>
            </Picker>
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

    picker: {
        height: 50,
        width: 150,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10
    }
})

export default Traductor