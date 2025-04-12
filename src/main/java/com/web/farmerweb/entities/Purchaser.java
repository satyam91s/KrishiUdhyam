package com.web.farmerweb.entities;

import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "purchaserdetails")
public class Purchaser {
    @Id
    String purchaser_id;

    String role;
    String name;
    String email;
    String contact;
    String address;
    String tehsil;
    String district;
    String state;
    String id_type;
    String gov_id;
    String password;

    @PrePersist
    public void generateId() {
        this.purchaser_id = "PUR" + UUID.randomUUID().toString().replace("-","").substring(0, 4);
        this.role = "PURCHASER";
    } 
}
