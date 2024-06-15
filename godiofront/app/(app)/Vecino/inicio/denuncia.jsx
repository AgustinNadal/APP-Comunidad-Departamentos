import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { router } from "expo-router";

export default function denuncia() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>DENUNCIAS</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}
             onPress={() => {
              router.push("../denuncias/crear_denuncia")
            }}
          >
            <Text style={styles.buttonText}>DENUNCIAR</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}
             onPress={() => {
              router.push("../denuncias/mis_denuncias")
            }}
          >
            <Text style={styles.buttonText}>MIS DENUNCIAS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}
             onPress={() => {
              router.push("../denuncias/denuncias_entrantes")
            }}
          >
            <Text style={styles.buttonText}>DENUNCIAS ENTRANTES</Text>
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
    fontSize: 24,
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
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    height: 120, // Fixed height
    width: 300, // Fixed width to make the button square
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000',
    fontSize: 25, // Adjusted font size to fit the new button size
    fontWeight: 'bold',
    textAlign: 'center', // Ensures text is centered within the button
  },
});
