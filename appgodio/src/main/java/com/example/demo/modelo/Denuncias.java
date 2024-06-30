package com.example.demo.modelo;

import jakarta.persistence.Basic;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "denuncias")
public class Denuncias {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long iddenuncias;

    @Basic
    private String documento;

    @Basic
    private String idsitio;

    @Basic
    private String descripcion;

    @Basic
    private String estado;

    @Basic
    private String aceptaresponsabilidad;

    @Basic
    private String documentodenunciado;

    public Denuncias() {}

    public Denuncias(Long iddenuncias, String documento, String idsitio, String descripcion, String estado, String aceptaresponsabilidad, String documentoDenunciado) {
        this.iddenuncias = iddenuncias;
        this.documento = documento;
        this.idsitio = idsitio;
        this.descripcion = descripcion;
        this.estado = estado;
        this.aceptaresponsabilidad = aceptaresponsabilidad;
        this.documentodenunciado = documentoDenunciado;
    }

    public Long getIddenuncias() {
        return iddenuncias;
    }

    public void setIddenuncias(Long iddenuncias) {
        this.iddenuncias = iddenuncias;
    }

    public String getDocumento() {
        return documento;
    }

    public void setDocumento(String documento) {
        this.documento = documento;
    }

    public String getIdsitio() {
        return idsitio;
    }

    public void setIdsitio(String idsitio) {
        this.idsitio = idsitio;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getAceptaresponsabilidad() {
        return aceptaresponsabilidad;
    }

    public void setAceptaresponsabilidad(String aceptaresponsabilidad) {
        this.aceptaresponsabilidad = aceptaresponsabilidad;
    }

    public String getDocumentoDenunciado() {
        return documentodenunciado;
    }

    public void setDocumentoDenunciado(String documentoDenunciado) {
        this.documentodenunciado = documentoDenunciado;
    }

    @Override
    public String toString() {
        return "Denuncias [iddenuncias=" + iddenuncias + ", documento=" + documento + ", idsitio=" + idsitio
                + ", descripcion=" + descripcion + ", estado=" + estado + ", aceptaresponsabilidad="
                + aceptaresponsabilidad + " , documentoDenunciado=" + documentodenunciado + "]";
    }


}
