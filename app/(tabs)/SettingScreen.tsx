import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Ajustes de la aplicacion</Text>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff0f5', // fondo rosa claro
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#e91e63', // texto rosa fuerte
    fontSize: 20,
    fontWeight: 'bold',
  },
  name: { fontSize: 20, marginTop: 10 },
});