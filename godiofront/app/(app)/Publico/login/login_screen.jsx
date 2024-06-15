import { router } from "expo-router";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';

export default function login_screen() {
  const [contrasenia, setContrasenia] = useState('');
  const [mail, setMail] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleRegister = async () => {
    try {
      const response = await axios.post(`http://10.0.2.2:8080/inicio/loginVecino?mail=${mail}&contrasenia=${contrasenia}`, {
        contrasenia: contrasenia,
        mail: mail,
      });

      if (response.status === 200) {
        router.push("../../../Vecino/inicio/home");
        Alert.alert('Exito', 'Inicio de sesion exitoso.');
      } else {
        Alert.alert('Error', 'No se pudo completar el inicio de sesion.');
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
            <Ionicons name="mail" size={20} color="gray" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="correo electrónico"
              autoCapitalize="none"
              autoCorrect={false}
              value={mail}
              onChangeText={setMail}
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
              value={contrasenia}
              onChangeText={setContrasenia}
            />
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
              <Ionicons name={passwordVisible ? "eye" : "eye-off"} size={20} color="gray" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              router.push("./recuperar_password")
            }}
          >
            <Text style={styles.forgotPassword}>¿Ha olvidado su contraseña?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}
            onPress={handleRegister}
          >
            <Text style={styles.buttonText}>Iniciar Sesion</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.createAccountButton, styles.spacing]}
            onPress={() => {
              router.push("./register_screen")
            }}
          >
            <Text style={styles.buttonText}>Crear cuenta</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.button}
            onPress={() => {
              router.push("./login_inspector")
            }}
          >
            <Text style={styles.buttonText}>Iniciar Sesion Inspector</Text>
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
  backIconContainer: {
    paddingLeft: 20,
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
  spacing: {
    marginBottom: 9, // Aumenta la separación entre botones
  },
  buttonText: {
    color: "#0188CC",
    fontWeight: "bold",
  },
});
