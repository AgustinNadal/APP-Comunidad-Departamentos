package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.modelo.ServicioProfesional;
import java.util.List;

@Repository
public interface ServicioProfesionalRepository extends JpaRepository<ServicioProfesional, Integer> {

	public List<ServicioProfesional> findByEstado(String estado);
}
