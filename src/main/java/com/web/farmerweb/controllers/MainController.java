package com.web.farmerweb.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.web.farmerweb.entities.BasePrice;
import com.web.farmerweb.entities.Farmer;
import com.web.farmerweb.entities.Product;
import com.web.farmerweb.entities.Purchaser;
import com.web.farmerweb.services.GovernmentService;
import com.web.farmerweb.services.ProductService;
import com.web.farmerweb.services.PurchaserService;

@Controller
public class MainController {

    @Autowired
    ProductService ps;
    @Autowired
    GovernmentService gs;
    @Autowired
    PurchaserService pcs;

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/farmer")
    public String farmer(Model model) {
        model.addAttribute("product", new Product());
        model.addAttribute("productdata", new Product());
        model.addAttribute("pricedata", new BasePrice());
        model.addAttribute("pruchaser", new Purchaser());

        List<Purchaser> purchasers = pcs.getPurchaser();
        model.addAttribute("purchasers", purchasers);

        // Base Price List Rendering
        List<BasePrice> baseprice = gs.getPrice();
        System.out.println(baseprice);
        model.addAttribute("basepricedata", baseprice);

        // Product List Rendering
        List<Product> productdata = ps.getData();
        System.out.println(productdata);
        model.addAttribute("productdata", productdata);

        return "farmer";
    }

    @GetMapping("/government")
    public String government(Model model) {
        model.addAttribute("BasePrice", new BasePrice());
        model.addAttribute("pricedata", new BasePrice());

        // Product List Rendering
        List<BasePrice> baseprice = gs.getPrice();
        System.out.println(baseprice);
        model.addAttribute("baseprice", baseprice);
        return "government";
    }

    @GetMapping("/purchaser")
    public String purchaser(Model model) {
        model.addAttribute("pricedata", new BasePrice());
        model.addAttribute("productdata", new Product());

         // Product List Rendering
         List<Product> productdata = ps.getData();
         System.out.println(productdata);
         model.addAttribute("productdata", productdata);

        // Base Price List Rendering
        List<BasePrice> baseprice = gs.getPrice();
        System.out.println(baseprice);
        model.addAttribute("baseprice", baseprice);
        return "purchaser";
    }

    @GetMapping("/farmerRegister")
    public String showRegistrationForm(Model model) {
        model.addAttribute("farmer", new Farmer());
        return "authenticForms/farmerRegister";
    }

    @GetMapping("/purchaserRegister")
    public String purchaserRegister(Model model) {
        model.addAttribute("purchaser", new Purchaser());
        return "authenticForms/purchaserRegister";
    }

    @GetMapping("/login")
    public String login() {
        return "authenticForms/login";
    }
    
    @GetMapping("/purchaserlogin")
    public String plogin() {
        return "authenticForms/purchaserlogin";
    }
    
    @GetMapping("/govlogin")
    public String glogin() {
        return "authenticForms/govlogin";
    }
    

}
