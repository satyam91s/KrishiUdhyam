package com.web.farmerweb.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.farmerweb.entities.Product;
import com.web.farmerweb.repositories.ProductRepo;
import com.web.farmerweb.serviceinterface.ProductImpl;

@Service
public class ProductService implements ProductImpl {

    @Autowired
    ProductRepo pr;

    @Override
    public List<Product> getData() {
       
        return pr.findAll();
    }

    @Override
    public void saveData(Product product) {
         pr.save(product);
    }
    
}
