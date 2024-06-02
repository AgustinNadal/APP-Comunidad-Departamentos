import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function crear_denuncia() {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [direccion, setDireccion] = useState('');

  const handleEnviar = () => {
    // Lógica para manejar el envío del formulario
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Datos</Text>
        <View style={styles.icon}></View> 
      </View>
      <View style={styles.contentContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={titulo}
          onChangeText={setTitulo}
        />

        <View style={styles.separator} />

        <TextInput
          style={styles.input}
          placeholder="Direccion"
          value={direccion}
          onChangeText={setDireccion}
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
        <View style={styles.photoContainer}>
          <Text style={styles.photoText}>0 fotos adjuntadas</Text>
          <Text style={styles.photoSubtext}>Máximo: 5 fotos</Text>
        </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
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
  photoContainer: {
    height: 60,
    backgroundColor: '#0288D1',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  photoText: {
    color: '#fff',
    fontSize: 16,
  },
  photoSubtext: {
    color: '#fff',
    fontSize: 12,
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
