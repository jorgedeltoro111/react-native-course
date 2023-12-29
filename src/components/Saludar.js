import React from 'react';
import {Text} from 'react-native';

export default function Saludar(props){
    return(
        <Text>Hello, {props.name}</Text>
    );
}