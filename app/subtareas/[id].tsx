import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { detallesSubtareas, DetalleSubtarea } from '../constants/tareas';

export default function DetalleSubtareaScreen() {
  const params = useLocalSearchParams();
  const subtareaId = params.id?.toString();

  const detalle: DetalleSubtarea | undefined = detallesSubtareas[subtareaId];

  if (!detalle) {
    return (
      <View style={{ padding: 20 }}>
        <Text>No se encontró la subtarea.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Descripción:</Text>
      <Text>{detalle.descripcion}</Text>
      
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
});
