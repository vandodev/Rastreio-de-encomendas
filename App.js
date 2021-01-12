import React, {useState, useEffect} from 'react';
import {Text, View, Button,Alert } from 'react-native';
import {css} from './assets/css/Css';

import Page from './views/Page';

export default function App() {

  const [product, setProduct] = useState('Bola');
  const [quantify, setQuantify] = useState(0);

  useEffect(() => {
    if(quantify > 0){
      Alert.alert('Novo produto adicionado');
    }
  },[quantify]);

  const props={
    empresa: 'Desenvolvimento',
    name: 'Evandro',
    produto: product,
    quantidade: quantify
  };

  return (
    <View style={css.container}>
      <Text>Rastreio</Text>
      <Text>{product}</Text>
      <Page {...props}/>
      <Button title='Adicionar produtos' onPress={() => setQuantify(quantify + 1)}/>
    </View>
  );
}
