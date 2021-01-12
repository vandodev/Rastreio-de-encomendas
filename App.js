import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Page from './views/Page';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Rastreio</Text>
      <Page empresa='Webdesign'/>
      <Page empresa='Programação'/>
      <Page empresa='Desenvolvimento'/>
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
