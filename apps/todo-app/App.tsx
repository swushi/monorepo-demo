import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { greeting } from 'test-package';

// @ts-ignore environment variables
import { IDK, WHAT, PLEASE } from '@env';

console.log(IDK, WHAT, PLEASE)

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{greeting}</Text>
      <StatusBar style="auto" />
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
