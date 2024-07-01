package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.modelo.ServicioComercio;

@Repository
public interface ServicioComercioRepository extends JpaRepository<ServicioComercio, Integer>{

}
 