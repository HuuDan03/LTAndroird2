package com.huudan.example02.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.huudan.example02.Entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

    
} 