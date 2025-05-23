import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/Ionicons'; // Importa el componente Icon
import { router } from "expo-router";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';

export default function crear_reclamo() {
  const [legajo, setLegajo] = useState('');
  const [sitio, setSitio] = useState('');
  const [desperfecto, setDesperfecto] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fotos, setFotos] = useState([]);
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const getUserLegajo = async () => {
      const userLegajo = await AsyncStorage.getItem('userLegajo');
      if (userLegajo) {
        setLegajo(userLegajo);
      }
    };

    getUserLegajo();

    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const storeReclamoLocally = async (reclamo) => {
    const reclamosGuardados = JSON.parse(await AsyncStorage.getItem('reclamosGuardados')) || [];
    reclamosGuardados.push(reclamo);
    await AsyncStorage.setItem('reclamosGuardados', JSON.stringify(reclamosGuardados));
    Alert.alert('Guardado Localmente', 'El reclamo se ha guardado localmente debido a la falta de conexión.');
  };

  const sendStoredReclamos = async () => {
    const reclamosGuardados = JSON.parse(await AsyncStorage.getItem('reclamosGuardados')) || [];
    for (const reclamo of reclamosGuardados) {
      try {
        const response = await axios.post(`http://10.0.2.2:8080/inicio/reclamo/personal?legajo=${legajo}&idsitio=${sitio}&iddesperfecto=${desperfecto}&descripcion=${descripcion}`, reclamo);
        if (response.status === 200) {
          Alert.alert('Exito', 'Se ha enviado un reclamo almacenado localmente.');
        }
      } catch (error) {
        console.error('Error enviando reclamo almacenado localmente:', error);
      }
    }
    await AsyncStorage.removeItem('reclamosGuardados');
  };

  useEffect(() => {
    if (isConnected) {
      sendStoredReclamos();
    }
  }, [isConnected]);

  const handleCrearReclamo = async () => {
    const reclamo = await axios.post(`http://10.0.2.2:8080/inicio/reclamo/personal?legajo=${legajo}&idsitio=${sitio}&iddesperfecto=${desperfecto}&descripcion=${descripcion}`,{
      legajo,
      sitio,
      desperfecto,
      descripcion,
    });
  
    if (!legajo || !sitio || !desperfecto || !descripcion) {
      Alert.alert('Error', 'Todos los campos son obligatorios.');
      return;
    }
  
    if (!isConnected) {
      await storeReclamoLocally(reclamo);
      return;
    }
   
    try {
      const response = await axios.post(`http://10.0.2.2:8080/inicio/reclamo/personal`, reclamo);
  
      if (response.status === 200 || reclamo.status === 200) {
        router.push("../../../Inspector/inicio/home");
        Alert.alert('Exito', 'Se creo con exito el reclamo.');
      } else {
        Alert.alert('Error', 'No se pudo completar el registro del reclamo.');
      }
    } catch (error) {
      if (error.response) {
        router.push("../../../Inspesctor/inicio/home");
        Alert.alert('Exito', 'Se creo con exito el reclamo.');
      } else if (error.request) {
        Alert.alert('Error', 'No se recibió respuesta del servidor.');
      } else {
        Alert.alert('Error', `Error al configurar la solicitud: ${error.message}`);
      }
      console.error(error.config);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      setFotos([...fotos, ...result.assets.map(asset => asset.uri)]);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backIconContainer}
        onPress={() => {
          router.push("../inicio/reclamo")
        }}
      >
        <Icon name="arrow-back" size={30} color="#fff" />
      </TouchableOpacity>

      <View style={styles.separator} />

      <View style={styles.header}>
        <Text style={styles.headerText}>Datos</Text>
      </View>
      <View style={styles.contentContainer}>

        <TextInput
          style={styles.input}
          placeholder="Sitio"
          value={sitio}
          onChangeText={setSitio}
        />

        <TextInput
          style={styles.input}
          placeholder="Desperfecto"
          value={desperfecto}
          onChangeText={setDesperfecto}
        />

        <View style={styles.separator} />

        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Descripcion....."
          value={descripcion}
          onChangeText={setDescripcion}
          multiline
        />

        <View style={styles.separator} />

        <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
          <Text style={styles.imagePickerText}>
            {fotos.length === 0 ? '0 fotos adjuntadas' : `${fotos.length} fotos adjuntadas`}
          </Text>
        </TouchableOpacity>
        <Text style={styles.imagePickerNote}>Máximo: 5 fotos</Text>

        <TouchableOpacity style={styles.button}
          onPress={handleCrearReclamo}>
          <Text style={styles.buttonText}>ENVIAR</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0091EA',
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
  icon: {
    width: 24,
    height: 24,
    backgroundColor: '#007BB5', // Placeholder color, replace with actual icon if available
    borderRadius: 12,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'top',
  },
  input: {
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'medium',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  separator: {
    marginTop: 20, // Adjust the value as needed to create the desired spacing
  },

  imagePicker: {
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },

  imagePickerText: {
    color: '#000',
  },

  imagePickerNote: {
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#0277BD',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
