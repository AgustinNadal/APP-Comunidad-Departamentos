package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.modelo.Vecinoregistrado;
import com.example.demo.repository.VecinoregistradoRepository;

@Service
public class VecinoRegistradoService {

    @Autowired
    VecinoregistradoRepository repoVecinoRegistrado;

    public String cambiarContrasenia (String documento, String contrasenia) {
        Vecinoregistrado vecino = repoVecinoRegistrado.findById(documento).orElse(null);
        if (vecino == null) {
            return "No existe el vecino";
        } else {
            vecino.setContrasenia(contrasenia);
            repoVecinoRegistrado.save(vecino);
            return "Contrasenia cambiada";
        }
    }


}
