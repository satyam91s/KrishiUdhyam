package com.web.farmerweb.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.web.farmerweb.entities.Farmer;

@Repository
public interface FarmerRepo extends JpaRepository<Farmer, String> {
    
}
