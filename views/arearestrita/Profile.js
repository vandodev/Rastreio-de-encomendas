import React , {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity } from 'react-native';
import {css} from '../../assets/css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile ({navigation}){

    async function logout()
    {
        await AsyncStorage.clear();
        navigation.navigate('Login');
    }

    return(
        <View style={css.area__menu}>
            <TouchableOpacity style={css.button__home2} onPress={()=>props.navigation.navigate('Home')}>
                <Icon name="home" size={20} color="#999" />
            </TouchableOpacity>

            <Text style={css.area__title}>Profile</Text>

            <TouchableOpacity style={css.button__logout} onPress={()=>logout()}>
                <Icon name="sign-out" size={20} color="#999" />
            </TouchableOpacity>

        </View>
    );
};