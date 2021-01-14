import React from 'react';
import {Text, TextInput,TouchableOpacity, View, KeyboardAvoidingView,Platform, Image } from 'react-native';
import {css} from '../assets/css/Css';

export default function Login (){
    return(
        <KeyboardAvoidingView
            style={[css.container, css.darkbg]}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >

            <View>
                <Image source={require('../assets/img/logomarca.png')} />
            </View>

            <View>
                <Text style={css.login__msg}>Usuário ou senha inválidos</Text>
            </View>

            <View style={css.login__form}>
                <TextInput placeholder='Usuário'  style={css.login__input} />
                <TextInput placeholder='Senha'  style={css.login__input} secureTextEntry={true}/>

                <TouchableOpacity  style={css.login__button}>
                    <Text  style={css.login__bottonText}>Entrar</Text>
                </TouchableOpacity>

            </View>

        </KeyboardAvoidingView>
    );
};