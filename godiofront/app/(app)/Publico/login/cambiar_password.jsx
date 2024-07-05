import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { router } from "expo-router";
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function cambiar_password() {
  const [documento, setDocumento] = useState('');
  const [nuevaContrasenia, setNuevaContrasenia] = useState('');
  const [confirmarContrasenia, setConfirmarContrasenia] = useState('');

  useEffect(() => {
    const getUserDocumento = async () => {
      const userDocumento = await AsyncStorage.getItem('userDocumento');
      if (userDocumento) {
        setDocumento(userDocumento);
      }
    };

    getUserDocumento();
  }, []);

  const handleChangePassword = async () => {
    if (nuevaContrasenia !== confirmarContrasenia) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await axios.put(`http://192.168.83.213:8080/inicio/vecino/cambiarcontrasenia?documento=${documento}&contrasenia=${nuevaContrasenia}`);
      if (response.status === 200) {
        Alert.alert('Éxito', 'Contraseña cambiada exitosamente');
        router.push("../inicio/home");
      } else {
        Alert.alert('Error', 'No se pudo cambiar la contraseña');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Hubo un problema al cambiar la contraseña');
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

      <View style={styles.card}>
        <Text style={styles.title}>CAMBIAR CONTRASEÑA</Text>
        <TextInput
          style={styles.input}
          placeholder="Nueva Contraseña"
          secureTextEntry
          value={nuevaContrasenia}
          onChangeText={setNuevaContrasenia}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar Contraseña"
          secureTextEntry
          value={confirmarContrasenia}
          onChangeText={setConfirmarContrasenia}
        />
        <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
          <Text>Confirmar</Text>
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
    textAlign: 'center',
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
  backIconContainer: {
    paddingLeft: 20,
    paddingTop: 20,
  },
});
