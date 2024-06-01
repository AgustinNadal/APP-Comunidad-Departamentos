import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from "expo-router";

export default function cambiar_password() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>CAMBIAR      CONTRASEÑA</Text>
        <TextInput style={styles.input} placeholder="Nueva Contraseña" />
        <TextInput style={styles.input} placeholder="Confirmar Contraseña" />
        <TouchableOpacity style={styles.button}
            onPress={() =>{
                router.push("/inicio/home")
              }}
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 20,
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
   }
});
