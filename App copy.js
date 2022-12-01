import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
export default function App() {
  const [contBananas, setContBananas] = useState(0);
  const [contLaranjas, setContLaranjas] = useState(0);
  useEffect(() => {
    console.warn('Contou laranja');
  }, [contLaranjas]);
  useEffect(() => {
    console.warn('Contou bananas');
  }, [contBananas]);
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Você possui {contBananas} bananas</Text>
      <Text style={styles.texto}>Você possui {contLaranjas} laranjas</Text>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => setContBananas(contBananas + 1)}
      >
        <Text>Contar Bananas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => setContLaranjas(contLaranjas + 1)}
      >
        <Text>Contar Laranja</Text>
      </TouchableOpacity>
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
  texto: {
    fontSize: 30,
  },
  botao: {
    marginTop: 50,
    backgroundColor: 'coral',
    padding: 40,
    borderRadius: 40,
  },
  textoBotao: {},
});
