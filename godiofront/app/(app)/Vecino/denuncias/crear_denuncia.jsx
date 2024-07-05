// Importa las librerías necesarias y los componentes

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/Ionicons'; // Importa el componente Icon
import { router } from "expo-router";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function crear_denuncia() {
  const [documento, setDocumento] = useState('');
  const [sitio, setSitio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [documentodenunciado, setDocumentodenunciado] = useState('');
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    const getUserDocumento = async () => {
      const userDocumento = await AsyncStorage.getItem('userDocumento');
      if (userDocumento) {
        setDocumento(userDocumento);
      }
    };

    getUserDocumento();
  }, []);

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

  const handleCrearDenuncia = async () => {
    try {
      const responseCargarDenuncia = await axios.post(`http://192.168.83.213:8080/inicio/denuncia?documento=${documento}&idsitio=${sitio}&descripcion=${descripcion}&documentodenunciado=${documentodenunciado}`, {
        documento: documento,
        sitio: sitio,
        descripcion: descripcion,
        documentodenunciado: documentodenunciado,
      });

      if (responseCargarDenuncia.status === 200) {
        const responseIdDenuncia = await axios.get(`http://192.168.83.213:8080/inicio/denuncia/obtener-id-denuncia?documento=${documento}&idsitio=${sitio}&descripcion=${descripcion}&documentodenunciado=${documentodenunciado}`, {
          documento: documento,
          sitio: sitio,
          descripcion: descripcion,
          documentodenunciado: documentodenunciado,
        });

        // Convierte responseIdDenuncia.data a cadena antes de almacenarlo en AsyncStorage
        const idDenunciaString = String(responseIdDenuncia.data);
        await AsyncStorage.setItem('userIdDenuncia', idDenunciaString);

        // Utiliza router para navegar a la siguiente pantalla
        router.push("../../../Vecino/denuncias/declaracion_jurada");

        // Muestra una alerta de éxito
        Alert.alert('Éxito', 'Se creó con éxito la denuncia.');
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
      <TouchableOpacity style={styles.backIconContainer}
        onPress={() => {
          router.push("../inicio/denuncia")
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
          placeholder="Ubicacion del suceso"
          value={sitio}
          onChangeText={setSitio}
        />


        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Descripcion....."
          value={descripcion}
          onChangeText={setDescripcion}
          multiline
        />

        <TextInput
          style={styles.input}
          placeholder="Documento del denunciado"
          value={documentodenunciado}
          onChangeText={setDocumentodenunciado}
        />

  
        <View style={styles.separator} />
          <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
            <Text style={styles.imagePickerText}>
              {fotos.length === 0 ? '0 fotos adjuntadas' : `${fotos.length} fotos adjuntadas`}
            </Text>
          </TouchableOpacity>

          <Text style={styles.imagePickerNote}>Máximo: 5 fotos</Text>
          <TouchableOpacity style={styles.button} onPress={handleCrearDenuncia}>
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
    justifyContent: 'space-between',
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
