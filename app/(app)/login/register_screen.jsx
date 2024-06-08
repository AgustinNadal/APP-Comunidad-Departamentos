import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from "react";
import { router } from "expo-router";
import Icon from 'react-native-vector-icons/Ionicons'; // Importa el componente Icon
import { registerUser } from "../../services/userService";


export default function register_screen() {
  const [email, setEmail] = useState("");
  const [dni, setDni] = useState("");
  const [responseCode, setResponseCode] = useState(0);

  const handleRegister = async () => {
    await registerUser(email, dni, setResponseCode);
    if (responseCode === 201) {
      router.replace("../inicio/home");
      
    } else if (responseCode === 400) {
      Alert.alert("Error", "No es un vecino. Contacte a la municipalidad");
    }
  };


  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backIconContainer}
        onPress={() => {
          router.push("../login/login_screen")
        }}
      >
        <Icon name="arrow-back" size={30} color="#fff" />
      </TouchableOpacity>

      <View style={styles.card}>
        <Text style={styles.title}>REGISTRACIÓN</Text>

        <TextInput 
          style={styles.input} 
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setEmail(text)}
        />


        <TextInput 
          style={styles.input} 
          placeholder="DNI" 
          autoCapitalize="none"
          keyboardType='numeric'
          autoCorrect={false}
          onChangeText={(text) => setDni(text)}
        />

        <TouchableOpacity style={styles.button}
          onPress={() =>{
            //router.push("/inicio/home")
            handleRegister();
          }}
        >
          <Text>Registrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0188CC',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 20,
    marginLeft: 40,
    marginTop: 220,
    width: '80%',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 40
  },
  input:{
     borderBottomWidth :1 ,
     marginBottom :25 ,
     width:'100%'
   },
   button:{
     backgroundColor:'#0188CC' ,
     borderRadius :20 ,
     paddingVertical :10 ,
     paddingHorizontal :60 
   },
   backIconContainer: {
    paddingLeft: 20,
    paddingTop: 20,
  },
});
