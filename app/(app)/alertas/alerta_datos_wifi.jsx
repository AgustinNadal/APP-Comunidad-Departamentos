import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function alerta_datos_wifi() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>MODO DE GUARDADO</Text>
      </View>
      <TouchableOpacity style={styles.option}>
        <Icon name="wifi-outline" size={24} color="#000" style={styles.icon} />
        <Text style={styles.optionText}>CONECTAR WIFI</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Icon name="cellular-outline" size={24} color="#000" style={styles.icon} />
        <Text style={styles.optionText}>USAR DATOS MOVILES</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Icon name="save-outline" size={24} color="#000" style={styles.icon} />
        <Text style={styles.optionText}>RECLAMO LOCAL</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0091EA',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#29B6F6',
    padding: 20,
    borderRadius: 10,
    marginBottom: 40,
    width: '100%',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  option: {
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  icon: {
    marginRight: 20,
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
