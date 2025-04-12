package com.web.farmerweb.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.farmerweb.entities.Farmer;
import com.web.farmerweb.repositories.FarmerRepo;
import com.web.farmerweb.serviceinterface.FarmerImpl;

@Service
public class FarmerService implements FarmerImpl {

    @Autowired
    FarmerRepo fr;

    @Override
    public Farmer saveData(Farmer farmer) {
        return fr.save(farmer); 
    }
    
}
