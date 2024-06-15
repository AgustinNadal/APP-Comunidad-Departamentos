import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import { router } from "expo-router";
import Icon from 'react-native-vector-icons/Ionicons'; // Importa el componente Icon

export default function x_servicio() {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backIconContainer}
        onPress={() => {
          router.push("../inicio/servicio")
        }}
      >
        <Icon name="arrow-back" size={30} color="#fff" />
      </TouchableOpacity>

      <View style={styles.separator} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Fontanero</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.description}>
          Nuestro equipo de fontaneros expertos está disponible para atender todas sus necesidades de fontanería, ofreciendo un servicio confiable y de alta calidad. Nos especializamos en:
        </Text>
        <Text style={styles.listItem}>• Reparaciones y Mantenimiento: Solucionamos fugas de agua, desatascamos tuberías y reparamos instalaciones dañadas para asegurar el funcionamiento óptimo de su sistema de fontanería.</Text>
        <Text style={styles.listItem}>• Asesoramiento personalizado para proyectos de remodelación y mejoras en su hogar o negocio, asegurando que cada detalle esté perfectamente planeado y ejecutado.</Text>
        <Text style={styles.description}>
          Confíe en nosotros para mantener su sistema de fontanería en perfectas condiciones. ¡Contáctenos hoy para una cotización gratuita y descubra la diferencia de trabajar con verdaderos profesionales!
        </Text>
        <Image
          source={require('../../../../assets/images/fontanero.png')} // Reemplaza con la URL de tu imagen
          style={styles.image}
        />
        <View style={styles.contactContainer}>
          <Text style={styles.contactText}>Contacto</Text>
          <Text style={styles.phoneNumber}>1167539799</Text>
        </View>
        <TouchableOpacity style={styles.button}
            onPress={() => router.push("/inicio/home")}
        >
          <Text style={styles.buttonText}>CONTRATAR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0091EA',
    padding: 20,
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
  },
  listItem: {
    fontSize: 14,
    color: '#000',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  contactContainer: {
    backgroundColor: '#E0E0E0',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  contactText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  phoneNumber: {
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: '#0277BD',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  separator: {
    marginTop: 20, // Adjust the value as needed to create the desired spacing
  },
});
