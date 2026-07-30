package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication

@RestController

public class FoodCourtApplication {

    public static void main(String[] args) {

        SpringApplication.run(FoodCourtApplication.class,args);

    }

    @GetMapping("/")

    public String home(){

        return """

        <h1>🍕 Food Court</h1>

        <h2>Order Successful</h2>

        <h3>Pizza + Burger + Coke</h3>

        <h2>Total ₹499</h2>

        """;

    }

}
