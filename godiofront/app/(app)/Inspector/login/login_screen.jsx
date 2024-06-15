import { router } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/Ionicons';

export default function login_screen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backIconContainer}
        onPress={() => {
          router.push("../inicio/home")
        }}
      >
        <Icon name="arrow-back" size={30} color="#fff" />
      </TouchableOpacity>
      <View style={styles.mainContent}>
        <View style={styles.iconContainer}>
          <Ionicons name="person-circle" size={200} color="white" />
          <Text style={styles.welcomeText}>Bienvenido Inspector</Text>
        </View>
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.createAccountButton}
            onPress={() => {
              router.push("../../../Publico/inicio/home")
              Alert.alert('Exito', 'Cierre de sesion exitoso.');
            }}
          >
            <Text style={styles.buttonText}>Cerrar Sesion</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0188CC",
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  backIconContainer: {
    paddingLeft: 20,
  },
  mainContent: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  welcomeText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 30,
  },
  createAccountButton: {
    backgroundColor: "#fff",
    borderRadius: 5,
    alignItems: "center",
    paddingVertical: 15,
    marginTop: 20,
  },
  buttonText: {
    color: "#0188CC",
    fontWeight: "bold",
  },
});
