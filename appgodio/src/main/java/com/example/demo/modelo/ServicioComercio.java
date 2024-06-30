package com.example.demo.modelo;

import jakarta.persistence.Basic;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "servicioscomercios")
public class ServicioComercio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idserviciocomercio;

    @Basic
    private String direccion;

    @Basic
    private String contacto;

    @Basic
    private String descripcion;

    @Basic
    private String documento;

    @Basic
    private String estado;

    public ServicioComercio() {}

    public ServicioComercio(Integer idserviciocomercio, String direccion, String contacto, String descripcion, String documento, String estado) {
        this.idserviciocomercio = idserviciocomercio;
        this.direccion = direccion;
        this.contacto = contacto;
        this.descripcion = descripcion;
        this.documento = documento;
        this.estado = estado;
    }

    public Integer getIdserviciocomercio() {
        return idserviciocomercio;
    }

    public void setIdserviciocomercio(Integer idserviciocomercio) {
        this.idserviciocomercio = idserviciocomercio;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getContacto() {
        return contacto;
    }

    public void setContacto(String contacto) {
        this.contacto = contacto;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getDocumento() {
        return documento;
    }

    public void setDocumento(String documento) {
        this.documento = documento;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

}
