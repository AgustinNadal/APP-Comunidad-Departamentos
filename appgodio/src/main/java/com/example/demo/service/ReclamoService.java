package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.modelo.Reclamos;
import com.example.demo.repository.ReclamosRepository;
import com.example.demo.repository.PersonalRepository;

@Service
public class ReclamoService {
 
    @Autowired
    ReclamosRepository repositorio;

    @Autowired
    PersonalRepository personalRepository;

    public String registrarReclamo(String documento, String idsitio, String iddesperfecto, String descripcion) {
        // Creación de un nuevo reclamo con estado "P" y sin ID de reclamo unificado
        Reclamos nuevoReclamo = new Reclamos(null, documento, null, idsitio, iddesperfecto, descripcion, "P", null);
        
        // Guardar el nuevo reclamo en el repositorio
        repositorio.save(nuevoReclamo);
        
        return "Reclamo registrado";
    }

    public List<Reclamos> listarReclamoPorDocumento(String documento) {
        // Obtener todas las denuncias por documento del repositorio
        return repositorio.findByDocumento(documento);
    }

    public List<Reclamos> listarTodosReclamos() {
        // Obtener todas las denuncias del repositorio
        return repositorio.findAll();
    }  

    public String registrarReclamoPersonal(Integer legajo, String idsitio, String iddesperfecto, String descripcion) {
        // Creación de un nuevo reclamo con estado "P" y sin ID de reclamo unificado
        Reclamos nuevoReclamo = new Reclamos(null, null, legajo, idsitio, iddesperfecto, descripcion, "P", null);
        
        // Guardar el nuevo reclamo en el repositorio
        repositorio.save(nuevoReclamo);
        
        return "Reclamo registrado";
    }

    public List<Reclamos> listarReclamoPorLegajo(Integer legajo) {
        // Obtener todas las denuncias por legajo del repositorio
        return repositorio.findByLegajo(legajo);
    }



}
