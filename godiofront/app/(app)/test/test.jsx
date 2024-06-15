import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function InfoScreen() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://10.0.2.2:8080/inicio/inspectores');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={fetchData}>
        <Text style={styles.buttonText}>Traer Información</Text>
      </TouchableOpacity>
      {data && (
        <ScrollView style={styles.dataContainer}>
          <Text style={styles.dataText}>{JSON.stringify(data, null, 2)}</Text>
        </ScrollView>
      )}
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

