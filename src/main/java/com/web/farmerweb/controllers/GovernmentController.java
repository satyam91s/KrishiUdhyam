package com.web.farmerweb.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.web.farmerweb.entities.BasePrice;
import com.web.farmerweb.services.GovernmentService;

@Controller
@RequestMapping("/government")
public class GovernmentController {
    
    @Autowired
    GovernmentService gs;

@PostMapping("/addprice")
    public String addProduct(@ModelAttribute BasePrice baseprice, Model model) {
        gs.getBasePrice(baseprice);
        model.addAttribute("baseprice", new BasePrice());
        return "redirect:/government";
    }

    
    
}
