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
@Table(name = "governmentdetails")
public class Government {

    @Id
    String gov_id;
    String role;
    String gov_name;
    String department;
    String email;
    String password;
    
    @PrePersist
    public void generateId() {
        this.gov_id = "GOV" + UUID.randomUUID().toString().replace("-","").substring(0, 4);
    }
    
}
