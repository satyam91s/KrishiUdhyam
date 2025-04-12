package com.web.farmerweb.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.farmerweb.entities.BasePrice;
import com.web.farmerweb.repositories.BasePriceRepo;
import com.web.farmerweb.repositories.GovernmentRepo;
import com.web.farmerweb.serviceinterface.GovernmentImpl;

@Service
public class GovernmentService implements GovernmentImpl {

    @Autowired
    GovernmentRepo gr;
    @Autowired
    BasePriceRepo br;


    @Override
    public BasePrice getBasePrice(BasePrice BasePrice) {
        return br.save(BasePrice);
    }


    @Override
    public List<BasePrice> getPrice() {
        return br.findAll();
    }
    
}
