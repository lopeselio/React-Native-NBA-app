import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import Input from '../../utils/forms/input'

class AuthForm extends Component {
    state = {
        type: 'Login',
        action: 'Login',
        actionMode: 'I want to register',
        hasErrors: false,
        form:{
            email:{
                value: "",
                valid: false,
                type: 'textinput',
                rules:{
                    isRequired: true,
                    isEmail: true
                }
            },
            password: {
                value: "",
                valid: false,
                type: 'textinput',
                rules:{
                    isRequired: true,
                    minLength: 6
                }
            },
            confirmPassword: {
                value: "",
                valid: false,
                type: 'textinput',
                rules:{
                    confirmPass:'password'
                }
            }
        }
    }
    
    updateInput = (name, value) => {
        this.setState({
            hasErrors: false
        })
        let formCopy = this.state.form
        formCopy[name].value = value
        this.setState({
            form: formCopy
        })
    }

    render(){
        return(
            <View>
                <Input 
                    placeholder='Enter email'
                    placeholderTextColor='#cecece'
                    type={this.state.form.email.type}
                    value={this.state.form.email.value}
                    autoCapitalize={"none"}
                    keyboardType={"email-address"}
                    onChangeText={value => this.updateInput("email", value)}
                />
                <Input 
                    placeholder='Enter password'
                    placeholderTextColor='#cecece'
                    type={this.state.form.password.type}
                    value={this.state.form.password.value}
                    onChangeText={value => this.updateInput("password", value)}
                    secureTextEntry
                />
            </View>
        )
    }
}

export default AuthForm

