import React , {useState, useEffect} from 'react';
import {Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Profile, Cadastro, Edicao} from '../index';


export default function AreaRestrita (){

    const Tab = createMaterialBottomTabNavigator();

    const [user,setUser] = useState(null);

    useEffect(()=>{
        async function getUser()
        {
            let response=await AsyncStorage.getItem('userData');
            let json=JSON.parse(response);
            setUser(json.name);
        }
        getUser();
    },[]);

    return(
        <Tab.Navigator>
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Cadastro" component={Cadastro} />
            <Tab.Screen name="Edicao" component={Edicao} />
      </Tab.Navigator>
    );
};