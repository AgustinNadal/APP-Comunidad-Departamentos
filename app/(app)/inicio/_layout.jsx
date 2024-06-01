import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="servicio"
        options={{
          title: 'Servicios',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'bag' : 'bag-outline'} color={color} />

          ),
        }}
      />

      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="reclamo"
        options={{
          title: 'Reclamo',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'megaphone' : 'megaphone-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="denuncia"
        options={{
          title: 'Denuncias',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person-remove' : 'person-remove-outline'} color={color} />
          ),
        }}
      />

      
    </Tabs>
  );
}
