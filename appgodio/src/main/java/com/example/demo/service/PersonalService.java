package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.modelo.Personal;
import com.example.demo.repository.PersonalRepository;

@Service
public class PersonalService {

	@Autowired
	PersonalRepository repositorio;

	public boolean loginInspector(Integer legajo, String password) {
		Optional<Personal> optionalPersonal = repositorio.findById(legajo);
		if (optionalPersonal.isEmpty()) {
			System.out.println("No sos inspector");
			return false;
		} else if (optionalPersonal.get().getPassword().equals(password)) {
			System.out.println("Login exitoso");
			return true;
		} else {
			System.out.println("Contraseña incorrecta");
			return false;
		}
	}

	public List<Personal> inspectores() {
		return repositorio.findAll();
	}

	public String getDocumentoByLegajo(Integer legajo) {
        Optional<Personal> optionalPersonal = repositorio.findById(legajo);
        if (optionalPersonal.isPresent()) {
            return optionalPersonal.get().getDocumento();
        } else {
            return null; // o puedes lanzar una excepción si prefieres
        }
    }

}
 