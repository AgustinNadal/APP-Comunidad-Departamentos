import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function mis_reclamos() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Mis reclamos</Text>
      </View>
      <View style={styles.card}>
        <Image
          source={require('../../../assets/images/reclamo1.png')} // Actualiza la ruta de la imagen según sea necesario
          style={styles.image}
        />
        <Text style={styles.title}>TUBERIAS ROTAS EN LA PLAZA</Text>
        <Text style={styles.location}>Cnel. Bogado 2179</Text>
        <Text style={styles.description}>
          Desde hace unas horas, noté un flujo inusual de agua. El agua se está acumulando rápidamente, causando daños a la propiedad y representando un riesgo para la seguridad.
        </Text>
      </View>
    </View>
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
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
  },
  location: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#000',
    textAlign: 'left',
  },
});
