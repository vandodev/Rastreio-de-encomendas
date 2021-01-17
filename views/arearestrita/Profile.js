import React , {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity } from 'react-native';
import {css} from '../../assets/css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MenuAreaRestrita from "../../assets/components/MenuAreaRestrita";

export default function Profile ({navigation}){
        return (
            <View style={[css.container, css.containerTop]}>
                <MenuAreaRestrita title='Perfil' navigation={navigation} />
            </View>
        );
    }