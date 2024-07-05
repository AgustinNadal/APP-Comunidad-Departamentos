import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Modal, ActivityIndicator, Alert, TextInput } from 'react-native';
import { router } from "expo-router";
import axios from 'axios';

export default function servicio() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [professionalServices, setProfessionalServices] = useState([]);
  const [commercialServices, setCommercialServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const [professionalResponse, commercialResponse] = await Promise.all([
          axios.get('http://192.168.83.213:8080/inicio/servicio/profesional/todos-servicios'),
          axios.get('http://192.168.83.213:8080/inicio/servicio/comercio/todos-servicios')
        ]);
        setProfessionalServices(professionalResponse.data);
        setCommercialServices(commercialResponse.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
        Alert.alert("Error", "No se pudo cargar la información");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const renderProfessionalServiceModal = () => (
    <View style={styles.modalContainer}>
      <Text style={styles.modalHeader}>{selectedService.nombre + " " +  selectedService.apellido}</Text>
      <Text>{selectedService.contacto}</Text>
      <Text>{selectedService.horario}</Text>
      <Text>{selectedService.descripcion}</Text>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => setModalVisible(false)}
      >
        <Text style={styles.closeButtonText}>Cerrar</Text>
      </TouchableOpacity>
    </View>
  );

  const renderCommercialServiceModal = () => (
    <View style={styles.modalContainer}>
      <Text style={styles.modalHeader}>{selectedService.nombrecomercio}</Text>
      <Text>{selectedService.direccion}</Text>
      <Text>{selectedService.contacto}</Text>
      <Text>{selectedService.descripcion}</Text>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => setModalVisible(false)}
      >
        <Text style={styles.closeButtonText}>Cerrar</Text>
      </TouchableOpacity>
    </View>
  );

  const filteredProfessionalServices = professionalServices.filter(service =>
    service.rubro.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCommercialServices = commercialServices.filter(service =>
    service.nombrecomercio.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Contratar servicios</Text>
      </View>


      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar por rubro"
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#29B6F6" />
      ) : (
        <>
          <Text style={styles.sectionHeader}>Servicios Profesionales</Text>
          {filteredProfessionalServices.map((service, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.titleText}>{service.rubro}</Text>
              <Text style={styles.descriptionText}>{service.descripcion}</Text>
              <TouchableOpacity style={styles.moreButton} onPress={() => {
                setSelectedService(service);
                setModalVisible(true);
              }}>
                <Text style={styles.moreButtonText}>Más información</Text>
              </TouchableOpacity>
            </View>
          ))}
          <Text style={styles.sectionHeader}>Servicios de Comercios</Text>
          {filteredCommercialServices.map((service, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.titleText}>{service.nombrecomercio}</Text>
              <Text style={styles.descriptionText}>{service.descripcion}</Text>
              <TouchableOpacity style={styles.moreButton} onPress={() => {
                setSelectedService(service);
                setModalVisible(true);
              }}>
                <Text style={styles.moreButtonText}>Más información</Text>
              </TouchableOpacity>
            </View>
          ))}
        </>
      )}
      {modalVisible && selectedService && (
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            {professionalServices.includes(selectedService) ? renderProfessionalServiceModal() : renderCommercialServiceModal()}
          </View>
        </Modal>
      )}
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
  searchContainer: {
    marginHorizontal: 16,
    marginVertical: 10,
  },
  searchInput: {
    height: 40,
    borderColor: '#29B6F6',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
