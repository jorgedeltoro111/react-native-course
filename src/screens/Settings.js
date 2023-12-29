import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Settings(props) {
    const {navigation} = props;
    const goToPage = () => {
        navigation.navigate('Home');
    }
    return (
        <View>
            <Text>Estamos en Settings</Text>
            <Button onPress={goToPage} title='Home'/>
        </View>
    );
}