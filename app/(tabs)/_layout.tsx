// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="HomeScreen" options={{ title: 'Inicio' }} />
      <Tabs.Screen name="ProfileScreen" options={{ title: 'Perfil' }} />
      <Tabs.Screen name="SettingScreen" options={{ title: 'Ajustes' }} />
      <Tabs.Screen name="ProductsScreen" options={{ title: 'Productos' }} />
    </Tabs>
  );
}
