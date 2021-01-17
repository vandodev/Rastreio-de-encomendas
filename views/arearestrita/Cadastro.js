import React , {useState, useEffect} from 'react';
import {Text, View } from 'react-native';
import MenuAreaRestrita from "../../assets/components/MenuAreaRestrita";

export default function Cadastro ({navigation}){

    return(
        <View>
             <MenuAreaRestrita title='Cadastro' navigation={navigation} />
        </View>
    );
};