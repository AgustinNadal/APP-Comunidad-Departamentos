import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { router } from "expo-router";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function mis_reclamos() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [legajo, setLegajo] = useState('');

  useEffect(() => {
    const getUserLegajo = async () => {
      const userLegajo = await AsyncStorage.getItem('userLegajo');
      if (userLegajo) {
        setLegajo(userLegajo);
      }
    };

    getUserLegajo();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (legajo) {
        setLoading(true);
        try {
          const response = await fetch(`http://192.168.83.213:8080/inicio/reclamo/mis-reclamos-personal?legajo=${legajo}`);
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error("Error fetching data: ", error);
          Alert.alert("Error", "No se pudo cargar la información");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [legajo]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backIconContainer}
        onPress={() => {
          router.push("../inicio/reclamo");
        }}
      >
        <Icon name="arrow-back" size={30} color="#fff" />
      </TouchableOpacity>

      <View style={styles.separator} />

      <View style={styles.header}>
        <Text style={styles.headerText}>Mis Reclamos</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <ScrollView style={styles.dataContainer}>
          {data && data.map((reclamo, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardTitle}>Tu Legajo: <Text style={styles.cardText}>{reclamo.legajo}</Text></Text>
              <Text style={styles.cardSubtitle}>Ubicación del problema: <Text style={styles.cardText}>{reclamo.idsitio}</Text></Text>
              <Text style={styles.cardSubtitle}>Desperfecto: <Text style={styles.cardText}>{reclamo.iddesperfecto}</Text></Text>
              <Text style={styles.cardDescription}>Descripción del problema: {reclamo.descripcion}</Text>
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
    padding: 15,
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
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
  loadingText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
});
