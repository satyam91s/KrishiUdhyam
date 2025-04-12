package com.web.farmerweb.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.web.farmerweb.entities.Purchaser;
import com.web.farmerweb.services.PurchaserService;

@Controller
@RequestMapping("/purchaser")
public class PurchaserController {

    @Autowired
    PurchaserService pcs;

    @PostMapping("/register-purchaser")
    public String registerPurchaser(@ModelAttribute Purchaser purchaser, Model model) {
        pcs.saveData(purchaser);
        model.addAttribute("message", "Purchaser registered successfully!");
        return "redirect:/login";
    }
    
}
