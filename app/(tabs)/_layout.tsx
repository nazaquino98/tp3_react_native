import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => {
        let iconName: string;

        if (route.name === 'inicio') iconName = 'home';
        else if (route.name === 'perfil') iconName = 'person';
        else if (route.name === 'ajustes') iconName = 'settings';
        else if (route.name === 'tareas') iconName = 'list';
        else iconName = 'home';

        return {
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={iconName as any} size={size} color={color} />
          ),
          tabBarActiveTintColor: '#e91e63',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          title: route.name.charAt(0).toUpperCase() + route.name.slice(1),
        };
      }}
    >
      <Tabs.Screen name="inicio" />
      <Tabs.Screen name="perfil" />
      <Tabs.Screen name="ajustes" />
      <Tabs.Screen name="tareas" />
    </Tabs>
  );
}
