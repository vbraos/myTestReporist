package com.usrdt.controller;

import java.util.Optional;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.usrdt.model.User;
import com.usrdt.repo.UserDtlsRepository;

@RestController
public class UserDtlsController {

	@Autowired
	private UserDtlsRepository repository;
	
	@GetMapping(path="/all")
	public Iterable<User> findAll(){
		System.out.println("all method ");
		return repository.findAll();
	}
	
	@Transactional
    @PostMapping(path="/nuser")
    public User newUser(@Valid @RequestBody User newUserData)
	{
		System.out.println("new user method ");
		return repository.save(newUserData);
	}
	
	 // Save or update
    @PutMapping(path="/user/{id}")
    public User saveOrUpdate(@RequestBody User newUser, @PathVariable Long id) {

    	System.out.println("save or update method ");
        return repository.findById(id)
        		.map(x -> {
                	x.setUserName(newUser.getUserName());
                	x.setUserType(newUser.getUserType());
                    x.setUserGrade(newUser.getUserGrade());
                    return repository.save(x);
                })
                .orElseGet(() -> {
                	newUser.setUserId(id);
                    return repository.save(newUser);
                });
    }
    
    @DeleteMapping("/users/{userId}")
    public Optional<Object> deletePost(@PathVariable Long userId) {
        return repository.findById(userId).map(x -> {
        	repository.delete(x);
            return ResponseEntity.ok().build();
        });
    }
}
