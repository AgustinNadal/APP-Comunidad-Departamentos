import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const activeColor = Colors[colorScheme ?? 'light'].tint;
  const inactiveColor = '#000000'; // Define un color inactivo

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: activeColor,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="servicio"
        options={{
          title: 'Servicios',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon 
              name={focused ? 'bag' : 'bag-outline'} 
              color={focused ? activeColor : inactiveColor} 
            />
          ),
        }}
      />

      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon 
              name={focused ? 'home' : 'home-outline'} 
              color={focused ? activeColor : inactiveColor} 
            />
          ),
        }}
      />

      <Tabs.Screen
        name="reclamo"
        options={{
          title: 'Reclamo',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon 
              name={focused ? 'megaphone' : 'megaphone-outline'} 
              color={focused ? activeColor : inactiveColor} 
            />
          ),
        }}
      />


    </Tabs>
  );
}
