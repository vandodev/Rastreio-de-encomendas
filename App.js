import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Page from './views/Page';

export default function App() {

  const props={
    empresa: 'Desenvolvimento',
    name: 'Evandro'
  };

  return (
    <View style={styles.container}>
      <Text>Rastreio</Text>
      <Page {...props}/>
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
