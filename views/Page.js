import React from 'react';
import { View, Text } from 'react-native';
import {css} from '../assets/css/Css';

export default function Page (props){
    return(
        <View style={css.textPage}>
             <Text>O nome da empresa é {props.empresa} e seu funcionário é {props.name}</Text>
        </View>
    );
} 