import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
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
//Requerimientos de tipos para las propiedades
Saludar.propTypes = {
    name: PropTypes.string.isRequired
}