package com.web.farmerweb.serviceinterface;

import java.util.List;

import org.springframework.stereotype.Service;

import com.web.farmerweb.entities.Product;

@Service
public interface ProductImpl {

    public List<Product> getData();

    public void saveData(Product product);

}
