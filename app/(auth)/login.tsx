import { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet} from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    setLoading(true);

    // Acá podrías poner una validación real si tuvieras backend
    if (username && password) {
      // Simular login exitoso
      setTimeout(() => {
        setLoading(false);
        router.replace('/(tabs)/HomeScreen'); // ⬅️ Redirige después de login
      }, 1000);
    } else {
      alert('Usuario o contraseña vacíos');
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Usuario" onChangeText={setUsername} />
      <TextInput placeholder="Contraseña" secureTextEntry onChangeText={setPassword} />
      <Button title={loading ? 'Ingresando' : 'Ingresar'} onPress={handleLogin} />
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
