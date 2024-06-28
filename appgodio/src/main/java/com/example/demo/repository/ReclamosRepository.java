package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.modelo.Reclamos;
 
@Repository
public interface ReclamosRepository extends JpaRepository<Reclamos, Long>{
    public List<Reclamos> findByDocumento(String documento);

}
 