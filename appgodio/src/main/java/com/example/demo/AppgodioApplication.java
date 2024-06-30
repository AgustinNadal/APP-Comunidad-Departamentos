package com.example.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AppgodioApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(AppgodioApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// Aca podemos hacer prints
		System.out.println("------------------------------------Sistema Bakcend Iniciado!-----------------------------------------");
		
	}

}
