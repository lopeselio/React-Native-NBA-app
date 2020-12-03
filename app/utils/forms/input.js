import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Picker } from 'react-native'

const Input = (props) => {
    let template = null;
    switch(props.type){
        case "textinput":
            template = 
            <TextInput 
                underlineColorAndroid='transparent'
                {...props}
                style={[styles.input, props.overridestyle]}
            />
            
        break;

        default:
            return template
    }
    return template
}

const styles = StyleSheet.create({
    input:{
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#eaeaea',
        fontSize: 16,
        padding: 5,
        marginTop: 10
    }
})

export default Input