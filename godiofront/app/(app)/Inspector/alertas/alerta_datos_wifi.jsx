import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function alerta_datos_wifi() {
  /*<TouchableOpacity style={styles.button}>
            <Icon name="save-outline" size={24} color="#000" style={styles.icon} />
            <Text style={styles.buttonText}>RECLAMO LOCAL</Text>
          </TouchableOpacity> */
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>NO HAY SEÑAL</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={{color: 'white', fontSize: 20, textAlign: 'center', marginBottom: 20}}>No hay señal de internet disponible. Por favor, verifique tener wifi o usar datos mobiles.</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Icon name="wifi-outline" size={24} color="#000" style={styles.icon} />
            <Text style={styles.buttonText}>CONECTAR WIFI</Text>
          </View>

          <View style={styles.button}>
            <Icon name="cellular-outline" size={24} color="#000" style={styles.icon} />
            <Text style={styles.buttonText}>USAR DATOS        MOVILES</Text>
          </View>

          
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0091EA',
  },
  header: {
    backgroundColor: '#29B6F6',
    padding: 16,
    alignItems: 'center',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    height: 120, // Fixed height
    width: 300, // Fixed width to make the button square
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', // To keep icon and text in a row
  },
  icon: {
    marginRight: 20,
  },
  buttonText: {
    color: '#000000',
    fontSize: 25, // Adjusted font size to fit the new button size
    fontWeight: 'bold',
    textAlign: 'center', // Ensures text is centered within the button
  },
});
