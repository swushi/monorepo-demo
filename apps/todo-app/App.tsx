import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { greeting, usePackage } from 'test-package';

// @ts-ignore environment variables
import { IDK, WHAT, PLEASE } from '@env';

export default function App() {
  usePackage();
  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff' }}>{greeting}</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
