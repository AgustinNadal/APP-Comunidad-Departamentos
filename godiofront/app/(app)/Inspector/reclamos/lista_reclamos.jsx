import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { router } from "expo-router";
import axios from 'axios';

export default function lista_reclamos() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://192.168.0.73:8080/inicio/reclamo/todos-reclamos`);
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
  }, []);

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
        <Text style={styles.headerText}>Lista de Reclamos</Text>
      </View>
      
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <ScrollView style={styles.dataContainer}>
          {data && data.map((denuncia, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardTitle}>
                {denuncia.documento ? "DNI: " : "Legajo: "}
                <Text style={styles.cardText}>{denuncia.documento ? denuncia.documento : denuncia.legajo}</Text>
              </Text>
              <Text style={styles.cardSubtitle}>Ubicación del problema: <Text style={styles.cardText}>{denuncia.idsitio}</Text></Text>
              <Text style={styles.cardSubtitle}>Desperfecto: <Text style={styles.cardText}>{denuncia.iddesperfecto}</Text></Text>
              <Text style={styles.cardDescription}>Descripción del problema: {denuncia.descripcion}</Text>
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
