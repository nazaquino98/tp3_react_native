import React from 'react';
import { View, Text, FlatList } from 'react-native';

const productos = [
  { id: '1', nombre: 'Cómic A' },
  { id: '2', nombre: 'Cómic B' },
];

export default function ProductosScreen() {
  return (
    <FlatList
      data={productos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Text>{item.nombre}</Text>}
    />
  );
}
