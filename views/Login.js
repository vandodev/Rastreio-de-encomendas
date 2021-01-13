import React from 'react';
import {Text, View } from 'react-native';

export default function Login (props){
    return(
        <View>
            <Text>Login</Text>
            <Text>Login id = {props.route.params.id}</Text>
        </View>
    );
};