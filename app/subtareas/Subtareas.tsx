import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { subtareasPorTarea, Subtarea } from '../constants/tareas';
import { SafeAreaView } from 'react-native';

export default function SubtareasScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const tareaId = params.id?.toString();

  const subtareas: Subtarea[] = subtareasPorTarea[tareaId] || [];

  const renderItem = ({ item }: { item: Subtarea }) => (
    <TouchableOpacity
      style={{ padding: 15, borderBottomWidth: 1 }}
      onPress={() => router.push({ pathname: '/subtareas/[id]', params: { id: item.id } })}
    >
      <Text>{item.titulo}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={subtareas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
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
