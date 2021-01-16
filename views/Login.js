import React, {useState, useEffect} from 'react';
import {Text, TextInput,TouchableOpacity, View, KeyboardAvoidingView,Platform, Image } from 'react-native';
import {css} from '../assets/css/Css';

export default function Login (){

    const [display, setDisplay] = useState('none');
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);
    const [login, setLogin] = useState(null);

    async function sendForm(){
        let response = await fetch('http://192.168.1.5:3000/login',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: user,
                password: password
            })
        });

        let json = await response.json();
        console.log(json);
    }

    return(
        <KeyboardAvoidingView
            style={[css.container, css.darkbg]}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >

            <View>
                <Image source={require('../assets/img/logomarca.png')} />
                {/* <Text>{user} - {password}</Text> */}
            </View>

            <View>
                <Text style={css.login__msg(display)}>Usuário ou senha inválidos</Text>
            </View>

            <View style={css.login__form}>
                <TextInput placeholder='Usuário' onChangeText={text =>setUser(text)} style={css.login__input}  />
                <TextInput placeholder='Senha' onChangeText={text =>setPassword(text)}  style={css.login__input} secureTextEntry={true}/>

                <TouchableOpacity  style={css.login__button} onPress={()=> sendForm()}>
                    <Text  style={css.login__bottonText}>Entrar</Text>
                </TouchableOpacity>

            </View>

        </KeyboardAvoidingView>
    );
};