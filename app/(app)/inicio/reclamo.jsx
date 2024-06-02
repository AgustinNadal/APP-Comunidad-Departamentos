import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { router } from "expo-router";

export default function reclamo() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>RECLAMOS</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}
            onPress={() => {
              router.push("../reclamos/crear_reclamo")
            }}
          >
            <Icon name="megaphone-outline" size={40} color="#000" style={styles.icon} />
            <Text style={styles.buttonText}>CREAR RECLAMO</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}
            onPress={() => {
              router.push("../reclamos/mis_reclamos")
            }}
          >
            <Icon name="document-text-outline" size={40} color="#000" style={styles.icon} />
            <Text style={styles.buttonText}>MIS RECLAMOS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}
            onPress={() => {
              router.push("../reclamos/lista_reclamos")
            }}
          >
            <Icon name="list-outline" size={40} color="#000" style={styles.icon} />
            <Text style={styles.buttonText}>LISTA DE RECLAMOS</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
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
    fontSize: 24, // Increased font size
    fontWeight: 'bold',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    height: 120, // Fixed height
    width: 300, // Fixed width to make the button square
    margin: 16,
    justifyContent: 'center',
  },
  icon: {
    marginRight: 10, // Adjusted margin to fit the new button size
  },
  buttonText: {
    color: '#000000',
    fontSize: 25, // Adjusted font size to fit the new button size
    fontWeight: 'bold',
  },
});
