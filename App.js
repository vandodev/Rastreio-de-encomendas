import React from 'react';
import { Text, View } from 'react-native';
import {css} from './assets/css/Css';

import Page from './views/Page';

export default function App() {

  const props={
    empresa: 'Desenvolvimento',
    name: 'Evandro'
  };

  return (
    <View style={css.container}>
      <Text>Rastreio</Text>
      <Page {...props}/>
    </View>
  );
}
