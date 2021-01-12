import React, {useState, useEffect} from 'react';
import { Text, View } from 'react-native';
import {css} from './assets/css/Css';

import Page from './views/Page';

export default function App() {

  const [product, setProduct] = useState('inicial');

  useEffect(() => {
    setProduct('Novo produto');
  });

  const props={
    empresa: 'Desenvolvimento',
    name: 'Evandro'
  };

  return (
    <View style={css.container}>
      <Text>Rastreio</Text>
      <Text>{product}</Text>
      <Page {...props}/>
    </View>
  );
}
