import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function denuncias_entrantes() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Denuncias entrantes</Text>
      </View>
      <View style={styles.card}>
        <Image 
          source={require('../../../assets/images/denuncia2.png')} // Replace with actual image URL
          style={styles.image}
          resizeMode="contain" // Ensure the image adjusts its size to fit the container
        />
        <Text style={styles.title}>RUIDOS MOLESTOS</Text>
        <Text style={styles.text}><Text style={styles.boldText}>Denunciado:</Text> Tú</Text>
        <Text style={styles.text}>
          <Text style={styles.iconText}></Text>Ceibos 2179
        </Text>
        <Text style={styles.boldText}>Descripción</Text>
        <Text style={styles.text}>No deja de hacer ruido a altas horas de la noche</Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'left',
  },
  image: {
    width: windowWidth * 0.8, // Use 90% of the screen width for the image
    height: undefined, // Height will be calculated automatically to maintain aspect ratio
    aspectRatio: 4 / 2, // Change the aspect ratio as needed
    borderRadius: 30,
    marginBottom: 15,
    marginRight: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'left',
  },
  boldText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    alignItems: 'left',
  },
  iconText: {
    fontSize: 18,
  },
});
