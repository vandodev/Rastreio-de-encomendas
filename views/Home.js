import React from 'react';
import {Text, View, Button } from 'react-native';

export default function Home (props){
    console.log(props);
    return(
        <View>
            <Text>Home</Text>
            <Button title='Ir para o login' onPress={()=> props.navigation.navigate('Login', {
              id:30
            })} />
        </View>
    );
};