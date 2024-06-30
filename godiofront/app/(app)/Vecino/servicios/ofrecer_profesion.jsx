import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/Ionicons'; // Importa el componente Icon
import { router } from "expo-router";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function OfrecerProfesion() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [contacto, setContacto] = useState('');
  const [horario, setHorario] = useState('');
  const [rubro, setRubro] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [documento, setDocumento] = useState('');
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

  const handleCrearServicioProfesion = async () => {
    // Validar campos vacíos
    if (!nombre || !apellido || !contacto || !descripcion || !horario || !rubro ) {
      Alert.alert('Error', 'Todos los campos deben estar completos.');
      return;
    }

    try{
      const responseCargarDenuncia = await axios.post(`http://10.0.2.2:8080/inicio/servicio/profesional?nombre=${nombre}&apellido=${apellido}&contacto=${contacto}&horario=${horario}&rubro=${rubro}&descripcion=${descripcion}&documento=${documento}`, {
        nombre: nombre,
        apellido: apellido,
        contacto: contacto,
        horario: horario,
        rubro: rubro,
        descripcion: descripcion,
        documento: documento,
      });

      if (responseCargarDenuncia.status === 200) {
        // Utiliza router para navegar a la siguiente pantalla
        router.push("../../../Vecino/inicio/home");

        // Muestra una alerta de éxito
        Alert.alert('Éxito', 'Se creó con éxito el servicio de profesion.');
      } else {
        Alert.alert('Error', 'No se pudo completar la creación del servicio de profesion.');
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
      {/* Aquí se agrega el contenedor para el ícono de volver atrás */}
      <TouchableOpacity style={styles.backIconContainer}
        onPress={() => {
          router.push("../inicio/servicio")
        }}
      >
        <Icon name="arrow-back" size={30} color="#fff" />
      </TouchableOpacity>

      <View style={styles.separator} />

      <View style={styles.header}>
        <Text style={styles.headerText}>OFRECER SERVICIO PROFESION</Text>
      </View>

      <ScrollView style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellido"
          value={apellido}
          onChangeText={setApellido}
        />
        <TextInput
          style={styles.input}
          placeholder="Contacto"
          value={contacto}
          onChangeText={setContacto}
        />
        <TextInput
          style={styles.input}
          placeholder="Horario"
          value={horario}
          onChangeText={setHorario}
        />
        <TextInput
          style={styles.input}
          placeholder="Rubro"
          value={rubro}
          onChangeText={setRubro}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Descripcion"
          value={descripcion}
          onChangeText={setDescripcion}
        />
      </ScrollView>

      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        <Text style={styles.imagePickerText}>
          {fotos.length === 0 ? '0 fotos adjuntadas' : `${fotos.length} fotos adjuntadas`}
        </Text>
      </TouchableOpacity>
      <Text style={styles.imagePickerNote}>Máximo: 5 fotos</Text>

      <TouchableOpacity style={styles.button} onPress={handleCrearServicioProfesion}>
        <Text style={styles.buttonText}>ENVIAR</Text>
      </TouchableOpacity>
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

  inputContainer: {
    marginBottom: 20,
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

  separator: {
    marginTop: 20, // Adjust the value as needed to create the desired spacing
  },
});
