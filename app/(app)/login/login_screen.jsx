import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert} from "react-native";
import { Ionicons } from "@expo/vector-icons";





export default function login_screen() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Ionicons name="person-circle" size={100} color="white" />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Ionicons name="person" size={20} color="gray" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="usuario"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Ionicons name="lock-closed" size={20} color="gray" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="contraseña"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>¿Ha olvidado su contraseña?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Iniciar Sesion</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.createAccountButton}
          onPress={() =>{
            router.push("./register_screen")
          }}
        >
          <Text style={styles.buttonText}>Crear cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0188CC",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    backgroundColor: "#4FB3FF",
    width: "100%",
    alignItems: "center",
    paddingVertical: 20,
  },
  inputContainer: {
    backgroundColor: "#0188CC",
    width: "100%",
    paddingHorizontal: 30,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
  },
  forgotPassword: {
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 5,
    alignItems: "center",
    paddingVertical: 15,
    marginBottom: 10,
  },
  createAccountButton: {
    backgroundColor: "#fff",
    borderRadius: 5,
    alignItems: "center",
    paddingVertical: 15,
  },
  buttonText: {
    color: "#0188CC",
    fontWeight: "bold",
  },
});