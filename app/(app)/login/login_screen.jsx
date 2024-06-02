import { router } from "expo-router";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function login_screen() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../../assets/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.mainContent}>
        <View style={styles.iconContainer}>
          <Ionicons name="person-circle" size={200} color="white" />
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
              secureTextEntry={!passwordVisible}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
              <Ionicons name={passwordVisible ? "eye" : "eye-off"} size={20} color="gray" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              router.push("./recuperar_password")
            }}
          >
            <Text style={styles.forgotPassword}>¿Ha olvidado su contraseña?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}
            onPress={() => {
              router.push("../inicio/home")
            }}
          >
            <Text style={styles.buttonText}>Iniciar Sesion</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.createAccountButton}
            onPress={() => {
              router.push("./register_screen")
            }}
          >
            <Text style={styles.buttonText}>Crear cuenta</Text>
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
    alignItems: "center",
    justifyContent: "flex-start",
  },
  logoContainer: {
    width: "100%",
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
  logo: {
    width: 75,
    height: 75,
  },
  mainContent: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 0,
  },
  iconContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  inputContainer: {
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
