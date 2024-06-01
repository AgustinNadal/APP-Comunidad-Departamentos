import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function register_screen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>REGISTRACIÓN</Text>
        <TextInput style={styles.input} placeholder="DNI" />
        <TextInput style={styles.input} placeholder="Email" />
        <TouchableOpacity style={styles.button}>
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
