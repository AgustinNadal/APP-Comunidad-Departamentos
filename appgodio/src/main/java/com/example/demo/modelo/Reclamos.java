package com.example.demo.modelo;

import jakarta.persistence.Basic;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "reclamos")
public class Reclamos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idreclamo;

    @Basic
    private String documento;

    @Basic
    private Integer legajo;

    @Basic
    private String idsitio;

    @Basic
    private String iddesperfecto;

    @Basic
    private String descripcion;

    @Basic
    private String estado;

    @Basic
    private Integer idreclamounificado;

    public Reclamos() {}

    public Reclamos(Integer idreclamo, String documento, Integer legajo, String idsitio, String iddesperfecto, String descripcion, String estado, Integer idreclamounificado) {
        this.idreclamo = idreclamo;
        this.documento = documento;
        this.legajo = legajo;
        this.idsitio = idsitio;
        this.iddesperfecto = iddesperfecto;
        this.descripcion = descripcion;
        this.estado = estado;
        this.idreclamounificado = idreclamounificado;
    }

    public Integer getIdreclamo() {
        return idreclamo;
    }

    public void setIdreclamo(Integer idreclamo) {
        this.idreclamo = idreclamo;
    }

    public String getDocumento() {
        return documento;
    }

    public void setDocumento(String documento) {
        this.documento = documento;
    }

    public Integer getLegajo() {
        return legajo;
    }

    public void setLegajo(Integer legajo) {
        this.legajo = legajo;
    }

    public String getIdsitio() {
        return idsitio;
    }
 
    public void setIdsitio(String idsitio) {
        this.idsitio = idsitio;
    }

    public String getIddesperfecto() {
        return iddesperfecto;
    }

    public void setIddesperfecto(String iddesperfecto) {
        this.iddesperfecto = iddesperfecto;
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

    public Integer getIdreclamounificado() {
        return idreclamounificado;
    }

    public void setIdreclamounificado(Integer idreclamounificado) {
        this.idreclamounificado = idreclamounificado;
    }

    @Override
    public String toString() {
        return "Reclamos [idreclamo=" + idreclamo + ", documento=" + documento + ", legajo=" + legajo + ", idsitio=" + idsitio + ", iddesperfecto=" + iddesperfecto + ", descripcion=" + descripcion + ", estado=" + estado + ", idreclamounificado=" + idreclamounificado + "]";
    }
}
