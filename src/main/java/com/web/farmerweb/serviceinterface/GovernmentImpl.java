package com.web.farmerweb.serviceinterface;

import java.util.List;

import org.springframework.stereotype.Service;

import com.web.farmerweb.entities.BasePrice;

@Service
public interface GovernmentImpl {

    public BasePrice getBasePrice(BasePrice BasePrice);

    public List<BasePrice> getPrice();

    
} 
