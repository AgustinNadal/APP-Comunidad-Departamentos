import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/Ionicons'; // Importa el componente Icon
import { router } from "expo-router";



export default function crear_reclamo() {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sitio, setSitio] = useState('');
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
          placeholder="Titulo del reclamo"
          value={titulo}
          onChangeText={setTitulo}
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

        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Fecha"
            value={fecha}
            onChangeText={setFecha}
          />
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Hora"
            value={hora}
            onChangeText={setHora}
          />
        </View>
        
        <View style={styles.separator} />
        
        <TextInput
          style={styles.input}
          placeholder="Sitio"
          value={sitio}
          onChangeText={setSitio}
        />

        <View style={styles.separator} />
        
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
