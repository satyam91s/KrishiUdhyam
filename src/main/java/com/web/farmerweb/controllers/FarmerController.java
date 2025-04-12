package com.web.farmerweb.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.web.farmerweb.entities.Farmer;
import com.web.farmerweb.entities.Product;
import com.web.farmerweb.services.FarmerService;
import com.web.farmerweb.services.ProductService;

@Controller
@RequestMapping("/farmer")
public class FarmerController {

    @Autowired
    FarmerService fs;
    @Autowired
    ProductService ps;

    @PostMapping("/register-farmer")
    public String registerFarmer(@ModelAttribute Farmer farmer, Model model) {
        fs.saveData(farmer);
        model.addAttribute("message", "Farmer registered successfully!");
        return "redirect:/login";
    }

    @GetMapping("/purchaserlist")
    public String purchaserList() {
        return "farmerModels/purchaserList";
    }

    @PostMapping("/addproduct")
    public String addProduct(@ModelAttribute Product product, Model model) {
        ps.saveData(product);
        model.addAttribute("product", new Product());
        return "redirect:/farmer/getdata";
    }

    @GetMapping("/getdata")
    public String getProductData(Model model) {
        List<Product> productdata = ps.getData(); // example method
        System.out.println(productdata);
        model.addAttribute("productdata", productdata);
        return "redirect:/farmer#products"; // or whatever your HTML template is named
    }
    @GetMapping("/productview")
    public String getProductView(Model model) {
        List<Product> products = ps.getData(); // example method
        System.out.println(products);
        model.addAttribute("products", products);
        return "farmerModels/productview"; // or whatever your HTML template is named
    }
    

}
