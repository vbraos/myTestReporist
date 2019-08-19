package com.usrdt.repo;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.usrdt.model.User;


@Repository
@EnableTransactionManagement 
public interface UserDtlsRepository extends JpaRepository<User, Long>  {

	Page<User> findAll(Pageable pageable);

    Page<User> findByUserName(String userName, Pageable pageable);
    
  // List<User> findAll();
}
