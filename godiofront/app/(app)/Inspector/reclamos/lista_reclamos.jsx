import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importa el componente Icon
import { router } from "expo-router";

export default function lista_reclamos() {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backIconContainer}
        onPress={() => {
          router.push("../inicio/reclamo")
        }}
      >
        <Icon name="arrow-back" size={30} color="#fff" />
      </TouchableOpacity>

      <View style={styles.separator} />

      <View style={styles.header}>
        <Text style={styles.headerText}>Lista de reclamos</Text>
      </View>
      <View style={styles.card}>
        <Image
          source={require('../../../../assets/images/reclamo1.png')} // Actualiza la ruta de la imagen según sea necesario
          style={styles.image}
        />
        <Text style={styles.title}>TUBERIAS ROTAS EN LA PLAZA</Text>
        <Text style={styles.location}>Cnel. Bogado 2179</Text>
        <Text style={styles.description}>
          Desde hace unas horas, noté un flujo inusual de agua. El agua se está acumulando rápidamente, causando daños a la propiedad y representando un riesgo para la seguridad.
        </Text>
      </View>
      <View style={styles.card}>
        <Image
          source={require('../../../../assets/images/reclamo2.png')} // Actualiza la ruta de la imagen según sea necesario
          style={styles.image}
        />
        <Text style={styles.title}>CALLES ROTAS EN LA FRENTE DE MI CASA</Text>
        <Text style={styles.location}>Yerbal 1687</Text>
        <Text style={styles.description}>
          Las calles frente a mi casa están severamente dañadas, creando un peligro para los vehículos y peatones.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0091EA',
  },
  header: {
    backgroundColor: '#29B6F6',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    backgroundColor: '#007BB5', // Placeholder color, replace with actual icon if available
    borderRadius: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    alignItems: 'left',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
    textAlign: 'left',
  },
  location: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 10,
    textAlign: 'left',
  },
  description: {
    fontSize: 14,
    color: '#000',
    textAlign: 'left',
  },
  separator: {
    marginTop: 20, // Adjust the value as needed to create the desired spacing
  },
});
