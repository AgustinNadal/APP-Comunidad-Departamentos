import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import axios from "axios";

export default function InfoScreen() {

  const [user, setUser] = useState({});

  const fetchData = () => {
    return axios.get(`http://10.0.2.2:8080/inicio/denuncia?documento=DNI28000075`)
    .then((response) => setUser(response.data))
  }

  useEffect(() => {
    fetchData();
  }, []);
  

  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0188CC",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "#0188CC",
    fontWeight: "bold",
  },
  dataContainer: {
    marginTop: 20,
    paddingHorizontal: 30,
  },
  dataText: {
    color: "#fff",
    textAlign: "center",
  },
});

