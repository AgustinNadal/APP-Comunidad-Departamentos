import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { router } from "expo-router";


export default function servicio() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Contratar servicios</Text>
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Categoria</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ofrecer servicios</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.contactText}>Contacto: 1167539799</Text>
        <Text style={styles.titleText}>Fontanero</Text>
        <Text style={styles.descriptionText}>
          Nuestro equipo de fontaneros expertos está disponible para atender todas sus necesidades de fontanería, ofreciendo un servicio confiable y de alta calidad
        </Text>
        <Image source={{ uri: 'image_uri_here' }} style={styles.image} />
        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.moreButtonText}>Ver más</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.contactText}>Contacto: 1167357330</Text>
        <Text style={styles.titleText}>Electricista</Text>
        <Text style={styles.descriptionText}>
          Nuestro equipo de electricistas certificados está listo para ofrecerle soluciones eléctricas confiables y seguras.
        </Text>
        <Image source={{ uri: 'image_uri_here' }} style={styles.image} />
        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.moreButtonText}>Ver más</Text>
        </TouchableOpacity>
      </View>
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
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 8,
  },
  buttonText: {
    color: '#29B6F6',
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    alignItems: 'center',
  },
  contactText: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 8,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 14,
    color: '#757575',
    textAlign: 'center',
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 8,
    borderRadius: 8,
  },
  moreButton: {
    backgroundColor: '#29B6F6',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  moreButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});