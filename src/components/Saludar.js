import React from 'react';
import {Text} from 'react-native';

export default function Saludar(props){
    //pasando propiedades por defecto directamente en la destructuracion del objeto
    //const { name='Enrique' } = props;
    const { name } = props;
    return(
        <Text>Hello, {name}</Text>
    );
}
//Mejor forma de usar propiedades de manera default
Saludar.defaultProps = {
    name: 'Enrique',
}