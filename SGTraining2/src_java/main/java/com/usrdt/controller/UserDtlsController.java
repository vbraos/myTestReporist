package com.usrdt.controller;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.usrdt.model.User;
import com.usrdt.repo.UserDtlsRepository;

@RestController
@RequestMapping("/users")
public class UserDtlsController {

	@Autowired
	private UserDtlsRepository repository;
	
	
	@GetMapping(path="/all")
	public Page<User> getAllUsers(
			@RequestParam(defaultValue = "1") Integer pageNo, 
            @RequestParam(defaultValue = "5") Integer pageSize,
            @RequestParam(defaultValue = "id") String sortBy
            ){ 
		if(sortBy != null)
		{
			if(sortBy.equals("id"))
				sortBy = "userId";
		}
		System.out.println("all method ");
		System.out.println("all method pageNo="+pageNo+" pageSize="+pageSize+" sortBy="+sortBy);
		PageRequest paging = PageRequest.of(pageNo, pageSize,Sort.by(sortBy));
		return repository.findAll(paging);
	}
	
	
	@GetMapping(path="/all1")
	public List<User> findAll(){ 
		System.out.println("all method findall");
		return repository.findAll();
	}
	
	@Transactional
    @PostMapping(path="/nuser")
    public User newUser(@Valid @RequestBody User newUserData)
	{
		
		return repository.save(newUserData);
	}
	
	 // Save or update
    @PutMapping(path="/{id}")
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
    
    @DeleteMapping("/{id}")
    public Optional<Object> deletePost(@PathVariable Long id) {
        return repository.findById(id).map(x -> {
        	repository.delete(x);
            return ResponseEntity.ok().build();
        });
    }
    
    @GetMapping(path="/{id}")
    public Optional<User> getUserDetails(@PathVariable Long id) {
    	System.out.println("get user details method "+id);
            return repository.findById(id);
        }
}
