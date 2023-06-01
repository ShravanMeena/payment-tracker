import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

export default function SPInput({ text, onChangeText,placeholder,secureTextEntry,textContentType,keyboardType }) {

    console.log(text);
    return (
        <TextInput
            style={styles.input}
            onChangeText={(e) => onChangeText(e)}
            value={text}
            placeholder={placeholder}
            autoCapitalize={'none'}
            autoCorrect={false}
            secureTextEntry={secureTextEntry}
            textContentType={textContentType}
            keyboardType={keyboardType || "default"}
        />
    )
}

 const styles = StyleSheet.create({
    input: {
        height: 50,
        borderBottomWidth: .7,
        padding: 10,
        fontSize:20
    },
})