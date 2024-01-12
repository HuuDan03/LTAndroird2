package com.huudan.example02.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.huudan.example02.Entity.Product;
import com.huudan.example02.service.ProductService;
import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "*", exposedHeaders = "Content-Range")
@RequestMapping("api/products")
public class ProductController {
    private ProductService productService;
    // Create Product REST API
    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody Product Product)
    {
        Product savedProduct = productService. createProduct(Product);
        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED); 
    }

    // Get Product by id REST API
    // http://localhost:8080/api/Products/1
    @GetMapping("{id}")
    public ResponseEntity<Product> getProductById(@PathVariable(value = "id") Long ProductId)
    {
        Product Product = productService.getProductById(ProductId);
        return new ResponseEntity<>(Product, HttpStatus.OK);
    }

    // Get All Products REST API
    // http://localhost:8080/api/Products
    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts()
    {
        List<Product> Products = productService.getAllProducts();
        return new ResponseEntity<>(Products, HttpStatus.OK); 
    }

    // Update Product REST API 
    @PutMapping("{id}")
    // http://localhost:8080/api/Products/1
    public ResponseEntity<Product> updateProduct(@PathVariable(value = "id") Long ProductId, @RequestBody Product Product)
    {
        Product.setId(ProductId);
        Product updateProduct = productService.updateProduct(Product);
        return new ResponseEntity<>(updateProduct, HttpStatus.OK);
    }

    // Delete Product REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable("id") Long ProductId)
    {
        productService.deleteProduct(ProductId);
        return new ResponseEntity<>("Product successfully deleted)", HttpStatus.OK); 
    }
}
