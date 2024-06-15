import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { router } from "expo-router";
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';


export default function RegisterScreen() {
  // Estados para almacenar los valores de documento y mail
  const [documento, setDocumento] = useState('');
  const [mail, setMail] = useState('');

  // Función para manejar el registro
  const handleRegister = async () => {
    try {
      // Llamada a la API para registrar el usuario
      const response = await axios.post(`http://10.0.2.2:8080/inicio/register?documento=${documento}&mail=${mail}`, {
        documento: documento,
        mail: mail,
      });

      // Manejo de la respuesta
      if (response.status === 200) {
        router.push("/inicio/home");
      } else {
        Alert.alert('Error', 'No se pudo completar el registro.');
      }
    } catch (error) {
      if (error.response) {
        // El servidor respondió con un estado fuera del rango 2xx
        Alert.alert('Error', `El servidor respondió con el estado ${error.response.status}: ${error.response.data}`);
      } else if (error.request) {
        // La solicitud fue hecha pero no hubo respuesta
        Alert.alert('Error', 'No se recibió respuesta del servidor.');
      } else {
        // Algo sucedió al configurar la solicitud
        Alert.alert('Error', `Error al configurar la solicitud: ${error.message}`);
      }
      console.error(error.config);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backIconContainer}
        onPress={() => {
          router.push("../login/login_screen")
        }}
      >
        <Icon name="arrow-back" size={30} color="#fff" />
      </TouchableOpacity>

      <View style={styles.card}>
        <Text style={styles.title}>REGISTRACIÓN</Text>
        <TextInput
          style={styles.input}
          placeholder="Documento"
          value={documento}
          onChangeText={setDocumento}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={mail}
          onChangeText={setMail}
        />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0188CC',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 20,
    marginLeft: 40,
    marginTop: 220,
    width: '80%',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 40
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 25,
    width: '100%'
  },
  button: {
    backgroundColor: '#0188CC',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 60
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  backIconContainer: {
    paddingLeft: 20,
    paddingTop: 20,
  },
});
