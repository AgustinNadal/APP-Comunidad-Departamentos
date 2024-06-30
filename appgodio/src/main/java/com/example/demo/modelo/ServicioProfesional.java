package com.example.demo.modelo;

import jakarta.persistence.Basic;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "serviciosprofesionales")
public class ServicioProfesional {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idservicioprofesional;

    @Basic
    private String nombre;

    @Basic
    private String apellido;

    @Basic
    private String contacto;

    @Basic
    private String horario;

    @Basic
    private String rubro;

    @Basic
    private String descripcion;

    @Basic
    private String documento;

    @Basic
    private String estado;

    public ServicioProfesional() {}

    public ServicioProfesional(Integer idservicioprofesional, String nombre, String apellido, String contacto, String horario, String rubro, String descripcion, String documento, String estado) {
        this.idservicioprofesional = idservicioprofesional;
        this.nombre = nombre;
        this.apellido = apellido;
        this.contacto = contacto;
        this.horario = horario;
        this.rubro = rubro;
        this.descripcion = descripcion;
        this.documento = documento;
        this.estado = estado;
    }

    public Integer getIdservicioprofesional() {
        return idservicioprofesional;
    }

    public void setIdservicioprofesional(Integer idservicioprofesional) {
        this.idservicioprofesional = idservicioprofesional;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getContacto() {
        return contacto;
    }

    public void setContacto(String contacto) {
        this.contacto = contacto;
    }

    public String getHorario() {
        return horario;
    }

    public void setHorario(String horario) {
        this.horario = horario;
    }

    public String getRubro() {
        return rubro;
    }

    public void setRubro(String rubro) {
        this.rubro = rubro;
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
