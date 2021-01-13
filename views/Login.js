import React from 'react';
import {Text, View } from 'react-native';

export default function Login ({route}){
    return(
        <View>
            <Text>Login</Text>
            <Text>Login id = {route.params.id}</Text>
        </View>
    );
};