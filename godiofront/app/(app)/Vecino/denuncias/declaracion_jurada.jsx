import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import { router } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


export default function declaracion_jurada() {

  const [iddenuncia, setIdDenuncia] = useState('');

  useEffect(() => {
    const getUserIdDenuncia = async () => {
      const userIdDenuncia = await AsyncStorage.getItem('userIdDenuncia');
      if (userIdDenuncia) {
        setIdDenuncia(userIdDenuncia);
      }
    };

    getUserIdDenuncia();
  }, []);

  const handleAceptar = async () => {

    try {
      const response = await axios.put(`http://192.168.0.73:8080/inicio/denuncia/aceptar-responsabilidad?iddenuncia=${iddenuncia}`, {
        iddenuncia: iddenuncia,
        
      });

      if (response.status === 200) {
        router.push("../../../Vecino/inicio/home");
        Alert.alert('Acuerdo aceptado', 'Has aceptado decir la verdad. En caso de falsedad, podrías enfrentar consecuencias legales.');
      } else {
        Alert.alert('Error', 'No se pudo completar la denuncia.');
      }
    } catch (error) {
      if (error.response) {
        Alert.alert('Error', `El servidor respondió con el estado ${error.response.status}: ${error.response.data}`);
      } else if (error.request) {
        Alert.alert('Error', 'No se recibió respuesta del servidor.');
      } else {
        Alert.alert('Error', `Error al configurar la solicitud: ${error.message}`);
      }
      console.error(error.config);
    }
    
  };

  const handleRechazar = async () => {

    try {
      const response = await axios.put(`http://192.168.0.73:8080/inicio/denuncia/rechazar-responsabilidad?iddenuncia=${iddenuncia}`, {
        iddenuncia: iddenuncia,
        
      });

      if (response.status === 200) {
        router.push("../../../Vecino/inicio/home");
        Alert.alert('Acuerdo rechazado', 'Has rechazado el acuerdo. No podrás proceder con la denuncia.');
      } else {
        Alert.alert('Error', 'No se pudo completar la denuncia.');
      }
    } catch (error) {
      if (error.response) {
        Alert.alert('Error', `El servidor respondió con el estado ${error.response.status}: ${error.response.data}`);
      } else if (error.request) {
        Alert.alert('Error', 'No se recibió respuesta del servidor.');
      } else {
        Alert.alert('Error', `Error al configurar la solicitud: ${error.message}`);
      }
      console.error(error.config);
    }

  };

  return (
    <View style={styles.container}>
      <View style={styles.declaracionContainer}>
        <Text style={styles.declaracionText}>
          Al aceptar este acuerdo, usted declara bajo juramento que la información proporcionada es veraz y completa. Entiende que cualquier falsedad puede resultar en acciones legales, incluida la posibilidad de encarcelamiento.
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleAceptar}>
            <Text style={styles.buttonText}>ACEPTAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.rechazarButton]} onPress={handleRechazar}>
            <Text style={styles.buttonText}>RECHAZAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0091EA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  declaracionContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  declaracionText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#0277BD',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  rechazarButton: {
    backgroundColor: '#D32F2F', // Color rojo para el botón de rechazar
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
