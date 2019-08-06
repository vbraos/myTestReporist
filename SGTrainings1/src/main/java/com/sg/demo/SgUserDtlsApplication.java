package com.sg.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.sg"})
public class SgUserDtlsApplication implements CommandLineRunner {

	@Autowired
	UserDtlsRepository repository;
	
	public static void main(String[] args) {
		SpringApplication.run(SgUserDtlsApplication.class, args);
		System.out.println(" application accessed");
	}
	@Override
	public void run(String... args) throws Exception
    {
		System.out.println(" application run accessed");
		for(UserData ud:repository.findAll())
		{
			System.out.println(ud);
		}
    }
}
