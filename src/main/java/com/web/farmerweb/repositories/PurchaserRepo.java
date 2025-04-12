package com.web.farmerweb.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.web.farmerweb.entities.Purchaser;

@Repository
public interface PurchaserRepo extends JpaRepository<Purchaser, String> {
    
}
