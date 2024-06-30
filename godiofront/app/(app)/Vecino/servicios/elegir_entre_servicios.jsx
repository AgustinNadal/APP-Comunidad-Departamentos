import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import { router } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


export default function elegir_entre_servicios() {


  return (
    <View style={styles.container}>
      <View style={styles.declaracionContainer}>
      <Text style={styles.declaracionText}>
        ¿Qué servicio desea publicar?
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}
            onPress={() => {
              router.push("../servicios/ofrecer_comercio")
            }}
          >
            <Text style={styles.buttonText}>Comercio</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button]}
            onPress={() => {
              router.push("../servicios/ofrecer_profesion")
            }}
          >
            <Text style={styles.buttonText}>Profesional</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0091EA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  declaracionContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  declaracionText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#0277BD',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
