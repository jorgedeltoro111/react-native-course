import { StyleSheet, Text, View } from 'react-native';
import Saludar from './src/components/Saludar';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Curso react native</Text>
      <Saludar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
