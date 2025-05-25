import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://placekitten.com/200/200' }} style={styles.image} />
      <Text style={styles.name}>Nazarena</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginTop: 50 },
  image: { width: 120, height: 120, borderRadius: 60 },
  name: { fontSize: 20, marginTop: 10 },
});
