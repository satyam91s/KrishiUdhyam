package com.web.farmerweb.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.web.farmerweb.entities.Product;

@Repository
public interface ProductRepo extends JpaRepository<Product, Integer> {
    
}
