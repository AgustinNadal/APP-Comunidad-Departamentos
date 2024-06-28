package com.example.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.modelo.Denuncias;
import java.util.List;

@Repository
public interface DenunciasRepository extends JpaRepository<Denuncias, Long>{

    public List<Denuncias> findByDocumento(String documento);

}
