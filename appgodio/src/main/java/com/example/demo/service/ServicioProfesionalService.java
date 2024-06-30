package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.modelo.ServicioProfesional;
import com.example.demo.repository.ServicioProfesionalRepository;

@Service
public class ServicioProfesionalService {

    @Autowired
    ServicioProfesionalRepository repositorio;

    public String registrarServicioProfesional(String nombre, String apellido, String contacto, String horario, String rubro, String descripcion, String documento) {
        // Creación de un nuevo servicio profesional con estado "D" y sin ID de servicio
        ServicioProfesional nuevoServicioProfesional = new ServicioProfesional(null, nombre, apellido, contacto, horario, rubro, descripcion, documento, "D");
        
        // Guardar el nuevo servicio profesional en el repositorio
        repositorio.save(nuevoServicioProfesional);
        
        return "Servicio profesional registrado";
    }

}
