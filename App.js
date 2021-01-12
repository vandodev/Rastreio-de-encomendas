import React, {useState} from 'react';
import { Text, View } from 'react-native';
import {css} from './assets/css/Css';

import Page from './views/Page';

export default function App() {

  const [product, setProduct] = useState('inicial');

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
