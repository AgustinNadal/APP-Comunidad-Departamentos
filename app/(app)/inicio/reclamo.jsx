import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { router } from "expo-router";

export default function reclamo() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>RECLAMOS</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Icon name="megaphone-outline" size={30} color="#000" style={styles.icon} />
        <Text style={styles.buttonText}>CREAR RECLAMO</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Icon name="document-text-outline" size={30} color="#000" style={styles.icon} />
        <Text style={styles.buttonText}>MIS RECLAMOS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Icon name="list-outline" size={30} color="#000" style={styles.icon} />
        <Text style={styles.buttonText}>LISTA DE RECLAMOS</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
  },
  header: {
    backgroundColor: '#29B6F6',
    padding: 16,
    alignItems: 'center',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 16,
    justifyContent: 'center',
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
