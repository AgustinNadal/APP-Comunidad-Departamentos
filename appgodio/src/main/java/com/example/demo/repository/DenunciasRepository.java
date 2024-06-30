package com.example.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.modelo.Denuncias;
import java.util.List;
import java.util.Optional;

@Repository
public interface DenunciasRepository extends JpaRepository<Denuncias, Long>{

    public List<Denuncias> findByDocumento(String documento);

    public List<Denuncias> findByDocumentodenunciado(String documentodenunciado);

    @Query("SELECT d FROM Denuncias d WHERE d.documento = :documento AND d.idsitio = :idsitio AND d.descripcion = :descripcion AND d.documentodenunciado = :documentodenunciado")
    public Optional<Denuncias> findByDocumentAndSiteAndDescriptionAndDocumentedDenunced(
        @Param("documento") String documento,
        @Param("idsitio") String idsitio,
        @Param("descripcion") String descripcion,
        @Param("documentodenunciado") String documentodenunciado
    );




}
 