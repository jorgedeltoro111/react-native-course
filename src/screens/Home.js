import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Home(props) {
  const {navigation} = props;

  const goToPage = () => {
    navigation.navigate("Settings");
  };
  return (
    <View>
      <Text>Estamos en Home</Text>
      <Button onPress={goToPage} title='Settings'/>
    </View>
  );
}