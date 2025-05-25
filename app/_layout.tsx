// app/_layout.tsx
import { Slot } from 'expo-router';
import { useState, useEffect } from 'react';
import { View } from 'react-native';

// 👇 Necesario para usar global en TypeScript o JavaScript
declare global {
  var setLoggedIn: (() => void) | undefined;
}

export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Hacemos accesible el cambio de estado desde cualquier parte
    global.setLoggedIn = () => setIsLoggedIn(true);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Slot initialRouteName={isLoggedIn ? '(tabs)/inicio' : '(auth)/login'} />
    </View>
  );
}
