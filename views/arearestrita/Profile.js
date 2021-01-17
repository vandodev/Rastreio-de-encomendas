import React , {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity } from 'react-native';
import {css} from '../../assets/css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Profile ({navigation}){
   
    return(
        <View style={css.area__menu}>
            <TouchableOpacity style={css.button__home2} onPress={()=>props.navigation.navigate('Home')}>
                <Icon name="home" size={20} color="#999" />
            </TouchableOpacity>

            <Text style={css.area__title}>Profile</Text>

            <TouchableOpacity style={css.button__logout}>
                <Icon name="sign-out" size={20} color="#999" />
            </TouchableOpacity>

        </View>
    );
};