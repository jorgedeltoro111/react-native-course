import React from 'react'
import { View, Text, Button, SafeAreaView } from 'react-native'


export default function Home(props) {
  const {navigation} = props;

  const goToPage = () => {
    navigation.navigate("Settings");
  };
  return (
    <SafeAreaView>
      <Text>Estamos en Home</Text>
      <Button onPress={goToPage} title='Settings'/>
    </SafeAreaView>
  );
}