import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { tareas, Tarea } from '../constants/tareas';

export default function TareasScreen() {
  const router = useRouter();

  const renderItem = ({ item }: { item: Tarea }) => (
    <TouchableOpacity
      style={{ padding: 15, borderBottomWidth: 1 }}
      onPress={() => router.push({ pathname: '/subtareas/Subtareas', params: { id: item.id } })}
    >
      <Text>{item.titulo}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tareas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
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
