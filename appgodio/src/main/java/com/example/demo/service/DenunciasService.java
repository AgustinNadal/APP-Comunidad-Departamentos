package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.modelo.Denuncias;
import com.example.demo.repository.DenunciasRepository;

@Service
public class DenunciasService {

    @Autowired
    DenunciasRepository repositorio;

    public String registrarDenuncia(String documento, String idsitio, String descripcion) {
        // Creación de una nueva denuncia con estado "P" y sin ID de denuncia
        Denuncias nuevaDenuncia = new Denuncias(null, documento, idsitio, descripcion, "P", "A");
        
        // Guardar la nueva denuncia en el repositorio
        repositorio.save(nuevaDenuncia);
        
        return "Denuncia registrada";
    }

    public List<Denuncias> listarDenunciasPorDocumento(String documento) {
        // Obtener todas las denuncias por documento del repositorio
        return repositorio.findByDocumento(documento);
    }






}
