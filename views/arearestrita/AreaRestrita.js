import React , {useState, useEffect} from 'react';
import {Text, View } from 'react-native';
import {css} from '../../assets/css/Css';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Profile, Cadastro, Edicao} from '../index';
import Icon from 'react-native-vector-icons/FontAwesome';


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
        <Tab.Navigator
            activeColor="#999"
            inactiveColor="#fff"
            barStyle={css.area__tab}
        >
            <Tab.Screen 
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon:()=>(
                        <Icon name="users" size={20} color="#999" />
                    )
                }}
            />
            <Tab.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{
                    tabBarIcon:()=>(
                        <Icon name="archive" size={20} color="#999" />
                    )
                }}
            />
            <Tab.Screen
                    name="Edicao"
                    component={Edicao}
                    options={{
                    tabBarIcon:()=>(
                        <Icon name="edit" size={20} color="#999" />
                    )
                }}
            />
      </Tab.Navigator>
    );
};