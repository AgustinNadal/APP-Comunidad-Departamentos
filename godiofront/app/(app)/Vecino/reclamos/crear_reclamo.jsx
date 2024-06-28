import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/Ionicons'; // Importa el componente Icon
import { router } from "expo-router";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function crear_reclamo() {
  const [documento, setDocumento] = useState(''); // Se inicializa el estado [documento, setDocumento] con un string vacío
  const [sitio, setSitio] = useState('');
  const [desperfecto, setDesperfecto] = useState('');
  const [descripcion, setDescripcion] = useState('');
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


  const handleCrearReclamo = async () => {
    try {
      const response = await axios.post(`http://10.0.2.2:8080/inicio/reclamo?documento=${documento}&idsitio=${sitio}&iddesperfecto=${desperfecto}&descripcion=${descripcion}`, {
        documento: documento,
        sitio: sitio,
        desperfecto: desperfecto,
        descripcion: descripcion,
        
      });

      if (response.status === 200) {
        router.push("../../../Vecino/inicio/home");
        Alert.alert('Exito', 'Se creo con exito el reclamo.');
      } else {
        Alert.alert('Error', 'No se pudo completar el registro del reclamo.');
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
    justifyContent: 'center',
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
