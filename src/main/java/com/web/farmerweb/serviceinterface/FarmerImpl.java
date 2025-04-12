package com.web.farmerweb.serviceinterface;

import org.springframework.stereotype.Service;

import com.web.farmerweb.entities.Farmer;

@Service
public interface FarmerImpl {

    public Farmer saveData(Farmer farmer);
    
}
