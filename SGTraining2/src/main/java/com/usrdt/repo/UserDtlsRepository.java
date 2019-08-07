package com.usrdt.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.usrdt.model.User;


@Repository
@EnableTransactionManagement 
public interface UserDtlsRepository extends JpaRepository<User, Long>  {

	
}
