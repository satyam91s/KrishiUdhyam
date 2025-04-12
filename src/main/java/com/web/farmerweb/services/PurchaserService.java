package com.web.farmerweb.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.farmerweb.entities.Purchaser;
import com.web.farmerweb.repositories.PurchaserRepo;
import com.web.farmerweb.serviceinterface.PurchaserImpl;

@Service
public class PurchaserService implements PurchaserImpl{
    @Autowired
    PurchaserRepo pr;

    @Override
    public void saveData(Purchaser purchaser) {
         pr.save(purchaser);   
    }

    @Override
    public List<Purchaser> getPurchaser() {
       return pr.findAll();
    }


    
}
