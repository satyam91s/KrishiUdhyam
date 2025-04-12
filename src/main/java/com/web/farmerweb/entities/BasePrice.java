package com.web.farmerweb.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "baseprice")
public class BasePrice {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)

    int id;
    String name;
    String price;
    
    
}
