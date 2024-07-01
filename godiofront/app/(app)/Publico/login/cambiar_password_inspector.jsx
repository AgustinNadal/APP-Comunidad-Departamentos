import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { router } from "expo-router";
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons'; // Importa el componente Icon
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function recuperar_password() {
  
  const [legajo, setLegajo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');

  useEffect(() => {
    const getUserLegajo = async () => {
      const userLegajo = await AsyncStorage.getItem('userLegajo');
      if (userLegajo) {
        setLegajo(userLegajo);
      }
    };

    getUserLegajo();
  }, []);

  const handleCambiarInspectorPassword = async () => {
    if (password !== confirmarPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await axios.put(`http://10.0.2.2:8080/inicio/inspectores/cambiarcontrasenia?legajo=${legajo}&password=${password}`, {
        legajo: legajo,
        password: password,
      });

      if (response.status === 200) {
        router.push("../../../Publico/inicio/home");
        Alert.alert('Éxito', 'Se cambio su contrasenia.');
      } else {
        Alert.alert('Error', 'No se pudo cambiar su contrasenia.');
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
          router.push("../login/login_screen")
        }}
      >
        <Icon name="arrow-back" size={30} color="#fff" />
      </TouchableOpacity>
      <View style={styles.card}>
        <Text style={styles.title}>CAMBIAR CONTRASEÑA</Text>
        <TextInput
          style={styles.input}
          placeholder="Contraseña Nueva"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirmar Contraseña Nueva"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={confirmarPassword}
          onChangeText={setConfirmarPassword}
        />

        <TouchableOpacity style={styles.button}
          onPress={handleCambiarInspectorPassword}
        >
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
    /*alignItems: 'center',
    justifyContent: 'center',*/
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
  input:{
     borderBottomWidth :1 ,
     marginBottom :25 ,
     width:'100%'
   },
  button:{
     backgroundColor:'#0188CC' ,
     borderRadius :20 ,
     paddingVertical :10 ,
     paddingHorizontal :60 
  },

  backIconContainer: {
    paddingLeft: 20,
    paddingTop: 20,
  },
});
