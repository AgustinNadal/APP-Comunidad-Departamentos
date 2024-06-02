import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Modal, FlatList } from 'react-native';
import { router } from "expo-router";

const services = [
  {
    id: '1',
    contact: '1167539799',
    title: 'Fontanero Manolo',
    description: 'Nuestro equipo de fontaneros expertos está disponible para atender todas sus necesidades de fontanería, ofreciendo un servicio confiable y de alta calidad',
    image: require('../../../assets/images/fontanero.png'),
    category: 'Fontanería' // Nueva propiedad para la categoría
  },
  {
    id: '2',
    contact: '1167357330',
    title: 'Electricista Pedro',
    description: 'Nuestro equipo de electricistas certificados está listo para ofrecerle soluciones eléctricas confiables y seguras.',
    image: require('../../../assets/images/electricista.png'),
    category: 'Electricidad' // Nueva propiedad para la categoría
  },
  {
    id: '3',
    contact: '1167539799',
    title: 'Carpintero Gustavo',
    description: 'Nuestro equipo de carpinteros expertos está disponible para atender todas sus necesidades de carpintería, ofreciendo un servicio confiable y de alta calidad',
    image: require('../../../assets/images/carpintero.png'),
    category: 'Carpintería' // Nueva propiedad para la categoría
  }
  // Agrega más servicios según sea necesario
];

export default function servicio() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = ["Fontanería", "Electricidad", "Carpintería", "Cerrajería", "Pintura"]; // Lista de categorías

  const filteredServices = selectedCategory
    ? services.filter(service => service.category === selectedCategory) // Filtrar por categoría en lugar de título
    : services;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Contratar servicios</Text>
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>Categoria</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
          onPress={() => router.push("/servicios/ofrecer_servicio")}
        >
          <Text style={styles.buttonText}>Ofrecer servicios</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalHeader}>Seleccione una categoría</Text>
            <FlatList
              data={categories}
              renderItem={({ item }) => (
                <TouchableOpacity 
                  style={styles.categoryItem}
                  onPress={() => {
                    setSelectedCategory(item);
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.categoryText}>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
            />
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {filteredServices.map(service => (
        <View key={service.id} style={styles.card}>
          <Text style={styles.contactText}>Contacto: {service.contact}</Text>
          <Text style={styles.titleText}>{service.title}</Text>
          <Text style={styles.descriptionText}>{service.description}</Text>
          <Image source={service.image} style={styles.image} />
          <TouchableOpacity style={styles.moreButton}
            onPress={() => router.push("/servicios/x_servicio")}
          >
            <Text style={styles.moreButtonText}>Ver más</Text>
          </TouchableOpacity>
        </View>
      ))}
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  categoryItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    width: '100%',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 16,
    color: '#333',
  },
  closeButton: {
    backgroundColor: '#29B6F6',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 16,
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});
