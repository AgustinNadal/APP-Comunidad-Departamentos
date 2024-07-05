import { router } from "expo-router";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons'; // Importa el componente Icon
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function login_inspector() {
  const [password, setPassword] = useState('');
  const [legajo, setLegajo] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Función para manejar el registro
  const handleRegister = async () => {
    try {
      // Llamada a la API para registrar el usuario
      const response = await axios.post(`http://192.168.83.213:8080/inicio/loginInspector?legajo=${legajo}&password=${password}`, {
        password: password,
        legajo: legajo,
      });

      // Manejo de la respuesta
      if (response.status === 200) {
        await AsyncStorage.setItem('userLegajo', legajo);
        router.push("../../../Inspector/inicio/home");
        Alert.alert('Exito', 'Inicio de sesion exitoso.');

      } else {
        Alert.alert('Error', 'No se pudo completar el inicio de sesion.');
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
          router.push("../inicio/home")
        }}
      >
        <Icon name="arrow-back" size={30} color="#fff" />
      </TouchableOpacity>
      <View style={styles.mainContent}>
        <View style={styles.iconContainer}>
          <Ionicons name="person-circle" size={200} color="white" />
        </View>
        <View style={styles.inputContainer}>

          <View style={styles.inputWrapper}>
            <Ionicons name="person" size={20} color="gray" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="nro de legajo"
              autoCapitalize="none"
              autoCorrect={false}
              value={legajo}
              onChangeText={setLegajo}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Ionicons name="lock-closed" size={20} color="gray" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="contraseña"
              secureTextEntry={!passwordVisible}
              autoCapitalize="none"
              autoCorrect={false}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
              <Ionicons name={passwordVisible ? "eye" : "eye-off"} size={20} color="gray" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button}
            onPress={handleRegister}
          >
            <Text style={styles.buttonText}>Iniciar Sesion</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0188CC",
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  logoContainer: {
    width: "100%",
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
  logo: {
    width: 75,
    height: 75,
  },
  mainContent: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 0,
  },
  iconContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 30,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
  },
  forgotPassword: {
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 5,
    alignItems: "center",
    paddingVertical: 15,
    marginBottom: 10,
  },
  createAccountButton: {
    backgroundColor: "#fff",
    borderRadius: 5,
    alignItems: "center",
    paddingVertical: 15,
  },
  buttonText: {
    color: "#0188CC",
    fontWeight: "bold",
  },

  backIconContainer: {
    paddingLeft: 20,
  }
});
