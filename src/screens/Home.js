import { StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import axios from 'axios';
const Home = () => {
  const [repositorios, setRepositorios] = useState([]);
  async function lerRepositorios() {
    const resposta = await axios.get(
      'https://api.github.com/search/repositories?q=react+native&per_page=30',
    );
    setRepositorios(resposta.data);
  }
  // Não é permitido colocar uma função assíncrona dentro de um UseEffect,
  // dessa forma você deve criar essa função assíncrona fora do useEffect e chamá-la dentro do useEffect.
  useEffect(() => {
    lerRepositorios();
  }, []);

  return (
    <SafeAreaView>
      {repositorios.length == 0 && (
        <ActivityIndicator color="coral" size={54} />
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
