import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { router } from "expo-router";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;

export default function DenunciasEntrantes() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [documento, setDocumento] = useState('');
  const [documentodenunciado, setDocumentodenunciado] = useState('');


  useEffect(() => {
    const getUserDocumento = async () => {
      const userDocumento = await AsyncStorage.getItem('userDocumento');
      if (userDocumento) {
        setDocumento(userDocumento);
      }
    };
  
    getUserDocumento();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://192.168.83.213:8080/inicio/denuncia/buscar-documento-denunciado?documentodenunciado=${documento}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
        Alert.alert("Error", "No se pudo cargar la información");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [data]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backIconContainer}
        onPress={() => {
          router.push("../inicio/denuncia")
        }}
      >
        <Icon name="arrow-back" size={30} color="#fff" />
      </TouchableOpacity>

      <View style={styles.separator} />

      <View style={styles.header}>
        <Text style={styles.headerText}>Denuncias Entrantes</Text>
      </View>

      {loading ? (
        <Text style={styles.loadingText}>Cargando...</Text>
      ) : (
        <ScrollView style={styles.dataContainer}>
          {data && data.map((denuncia, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardTitle}>Usted ha sido denunciado </Text>
              <Text style={styles.cardSubtitle}>Ubicación del incidente: <Text style={styles.cardText}>{denuncia.idsitio}</Text></Text>
              <Text style={styles.cardDescription}>{denuncia.descripcion}</Text>
              <Text style={styles.cardTitle}>Tu documento: <Text style={styles.cardText}>{denuncia.documentoDenunciado}</Text></Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0091EA',
  },
  backIconContainer: {
    alignSelf: 'flex-start',
    marginBottom: 10,
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
  dataContainer: {
    flex: 1,
    width: '100%',
  },
  loadingText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginBottom: 5,
  },
  cardText: {
    fontWeight: 'normal',
    color: '#333',
  },
  cardDescription: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  separator: {
    marginVertical: 10,
  },
});
