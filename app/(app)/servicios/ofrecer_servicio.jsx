import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/Ionicons'; // Importa el componente Icon
import { router } from "expo-router";


export default function OfrecerServicio() {
  const [titulo, setTitulo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fotos, setFotos] = useState([]);

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

  const handleEnviar = () => {
    // Lógica para manejar el envío del formulario
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
        <Text style={styles.headerText}>OFRECER SERVICIO</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Titulo de servicio"
          value={titulo}
          onChangeText={setTitulo}
        />
        <TextInput
          style={styles.input}
          placeholder="Numero de telefono"
          value={telefono}
          onChangeText={setTelefono}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Categoria"
          value={categoria}
          onChangeText={setCategoria}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Descripcion"
          value={descripcion}
          onChangeText={setDescripcion}
          multiline
        />
      </View>
      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        <Text style={styles.imagePickerText}>
          {fotos.length === 0 ? '0 fotos adjuntadas' : `${fotos.length} fotos adjuntadas`}
        </Text>
      </TouchableOpacity>
      <Text style={styles.imagePickerNote}>Máximo: 5 fotos</Text>
      <TouchableOpacity style={styles.button} onPress={handleEnviar}>
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
