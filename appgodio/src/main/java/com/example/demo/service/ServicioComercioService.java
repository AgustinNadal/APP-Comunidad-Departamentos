package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.modelo.ServicioComercio;
import com.example.demo.repository.ServicioComercioRepository;

@Service
public class ServicioComercioService {

    @Autowired
    ServicioComercioRepository repositorio;

    public String registrarServicioComercio(String direccion, String contacto, String descripcion, String documento) {
        // Creación de un nuevo servicio de comercio con estado "P" y sin ID de servicio
        ServicioComercio nuevoServicioComercio = new ServicioComercio(null, direccion, contacto, descripcion, documento, "D");
        
        // Guardar el nuevo servicio de comercio en el repositorio
        repositorio.save(nuevoServicioComercio);
        
        return "Servicio de comercio registrado";
    }

}
