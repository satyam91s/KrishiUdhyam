package com.web.farmerweb.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.web.farmerweb.entities.Government;

@Repository
public interface GovernmentRepo extends JpaRepository<Government, String> {


    
}
