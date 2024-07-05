import React, { useState }from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { router } from "expo-router";
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons'; // Importa el componente Icon


export default function recuperar_password() {
  
  const [mail, setMail] = useState('');

  const handleRecuperarPassword = async () => {
    try {
      const response = await axios.post(`http://192.168.0.73:8080/inicio/vecino/olvidecontrasenia?mail=${mail}`, {
        mail: mail,
      });
 
      if (response.status === 200) {
        router.push("../../../Publico/inicio/home");
        Alert.alert('Exito', 'Se envio un mail a su direccion.');
      } else {
        Alert.alert('Error', 'No se pudo enviar el mail.');
      }
    } catch (error) {
      if (error.response) {
        Alert.alert('Error', `El servidor respondió con el estado ${error.response.status}: ${error.response.data}`);
      } else if (error.request) {
        Alert.alert('Error', 'No se recibió respuesta del servidor.');
      } else {
        Alert.alert('Error', `Error al configurar la solicitud: ${error.message}`);
      }
      console.error(error.config);
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
        <Text style={styles.title}>RECUPERAR CONTRASEÑA</Text>
        <TextInput
          style={styles.input}
          placeholder="correo electrónico"
          autoCapitalize="none"
          autoCorrect={false}
          value={mail}
          onChangeText={setMail}
        />
        <TouchableOpacity style={styles.button}
          onPress={handleRecuperarPassword}
        >
          <Text>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0188CC',
    /*alignItems: 'center',
    justifyContent: 'center',*/
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
    textAlign: 'center',
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
