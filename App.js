
import { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Calculator from './src/Calculator';

export default function App() {
  const [input, setInput] = useState(0); // 2 -> 14
  const [currentOperator, setCurrentOperator] = useState(null); // + -> null
  const [result, setResult] = useState(null); // 12 -> 14
  const [tempInput, setTempInput] = useState(null); // 2
  const [tempOperator, setTempOperator] = useState(null); // +

  return (
    <SafeAreaView style={styles.container}>
      <Calculator />
    </SafeAreaView>
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
