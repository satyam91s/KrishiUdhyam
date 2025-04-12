package com.web.farmerweb.serviceinterface;

import java.util.List;

import org.springframework.stereotype.Service;

import com.web.farmerweb.entities.Purchaser;

@Service
public interface PurchaserImpl {

    public void saveData(Purchaser purchaser);

    public List<Purchaser> getPurchaser();
    
}
