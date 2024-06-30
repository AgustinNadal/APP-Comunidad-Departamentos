package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.modelo.Denuncias;
import com.example.demo.repository.DenunciasRepository;

@Service
public class DenunciasService {

    @Autowired
    DenunciasRepository repositorio;

    public String registrarDenuncia(String documento, String idsitio, String descripcion, String documentodenunciado) {
        // Creación de una nueva denuncia con estado "P" y sin ID de denuncia
        Denuncias nuevaDenuncia = new Denuncias(null, documento, idsitio, descripcion, "P", null, documentodenunciado);
        
        // Guardar la nueva denuncia en el repositorio
        repositorio.save(nuevaDenuncia);
        
        return "Denuncia registrada";
    }

    
    public List<Denuncias> listarDenunciasPorDocumento(String documento) {
        // Obtener todas las denuncias por documento del repositorio
        return repositorio.findByDocumento(documento);
    }


    public List<Denuncias> buscarPorDocumentoDenunciado(String documentodenunciado) {
        return repositorio.findByDocumentodenunciado(documentodenunciado);
    }

    public String aceptarResponsabilidad(Long iddenuncia) {
        // Buscar la denuncia por ID
        Optional<Denuncias> optionalDenuncia = repositorio.findById(iddenuncia);
        
        // Verificar si la denuncia está presente
        Denuncias denuncia = optionalDenuncia.orElseThrow(() -> new IllegalArgumentException("Denuncia no encontrada"));
        
        // Cambiar el estado de la denuncia a "A"
        denuncia.setAceptaresponsabilidad("Aceptar");
        
        // Guardar la denuncia en el repositorio
        repositorio.save(denuncia);
        
        return "Denuncia aceptada";
    }

    public String rechazarResponsabilidad(Long iddenuncia) {
        // Buscar la denuncia por ID
        Optional<Denuncias> optionalDenuncia = repositorio.findById(iddenuncia);
        
        // Verificar si la denuncia está presente
        Denuncias denuncia = optionalDenuncia.orElseThrow(() -> new IllegalArgumentException("Denuncia no encontrada"));
        
        // Cambiar el estado de la denuncia a "R"
        denuncia.setAceptaresponsabilidad("Rechazar");
        
        // Guardar la denuncia en el repositorio
        repositorio.save(denuncia);
        
        return "Denuncia rechazada";
    }

    public String obtnerIdDenuncia(String documento, String idsitio, String descripcion, String documentodenunciado) {
        Optional<Denuncias> denuncia = repositorio.findByDocumentAndSiteAndDescriptionAndDocumentedDenunced(
            documento, idsitio, descripcion, documentodenunciado
        );

        if (denuncia.isPresent()) {
            return denuncia.get().getIddenuncias().toString();
        } else {
            // Manejar el caso en que no se encuentra la denuncia
            return null;
        }
    }

    






}
