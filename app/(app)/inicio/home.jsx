import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { router } from "expo-router";

export default function home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          <Text style={styles.headerTextBold}>Hola </Text>
          Invitado
          <Text style={styles.headerTextLight}> Bienvenido</Text>
        </Text>
        <TouchableOpacity 
          onPress={() =>{
            router.push("/login/login_screen")
          }}
        >
          <View style={styles.avatarIconContainer}>
            <Icon name="person-circle-outline" size={40} color="#FFFFFF" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.serviceCard}>
        <View style={styles.serviceIcon} />
        <Text style={styles.serviceText}>¿Necesitas urgente un electricista?</Text>
        <Text style={styles.serviceSubText}>Podes pedir un profesional</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Pida uno</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.serviceCard}>
        <View style={styles.serviceIcon} />
        <Text style={styles.serviceText}>¿Necesitas urgente un Plomero?</Text>
        <Text style={styles.serviceSubText}>Podes pedir un profesional</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Pida uno</Text>
        </TouchableOpacity>
      </View>
      

      <View style={styles.servicesGrid}>
        <View style={styles.serviceItem}>
        <Icon name="build-outline" size={50} color="#000000" style={styles.gridIcon} />
          <Text style={styles.gridText}>Plomero</Text>
        </View>
        <View style={styles.serviceItem}>
        <Icon name="color-fill-outline" size={50} color="#000000" style={styles.gridIcon} />
          <Text style={styles.gridText}>Pintor</Text>
        </View>
        <View style={styles.serviceItem}>
        <Icon name="lock-closed-outline" size={50} color="#000000" style={styles.gridIcon} />
          <Text style={styles.gridText}>Cerrajero</Text>
        </View>
        <View style={styles.serviceItem}>
        <Icon name="bulb-outline" size={50} color="#000000" style={styles.gridIcon} />
          <Text style={styles.gridText}>Electricista</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
  },
  header: {
    backgroundColor: '#29B6F6',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 35, // Ajusta el valor según la curvatura deseada
    borderBottomRightRadius: 35, // Ajusta el valor según la curvatura deseada

  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  headerTextBold: {
    fontWeight: 'bold',
  },
  headerTextLight: {
    fontWeight: '300',
  },
  avatarIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    alignItems: 'center',
  },
  serviceIcon: {
    width: 60,
    height: 60,
    marginBottom: 8,
    backgroundColor: '#FFD54F',
    borderRadius: 30,
  },
  serviceText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  serviceSubText: {
    fontSize: 14,
    color: '#757575',
    textAlign: 'center',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#29B6F6',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingTop: 120,
    padding: 16,
  },
  serviceItem: {
    alignItems: 'center',
    marginBottom: 16,
  },
  gridIcon: {
    textAlign: 'center',
    width: 55,
    height: 55,
    marginBottom: 8,
    backgroundColor: '#FFD54F',
    borderRadius: 30,
  },
  gridText: {
    fontSize: 14,
    textAlign: 'center',
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  menuItem: {
    alignItems: 'center',
  },
  menuIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#29B6F6',
    borderRadius: 12,
  },
});
