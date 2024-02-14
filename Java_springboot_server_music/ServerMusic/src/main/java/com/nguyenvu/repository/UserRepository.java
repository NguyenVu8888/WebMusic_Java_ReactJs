package com.nguyenvu.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenvu.entities.xUserEntity;

public interface UserRepository extends JpaRepository<xUserEntity, Long>{

	List<xUserEntity> findByFullnameContaining(String name);
	
	xUserEntity findByUsernameAndPassword(String username, String password);
	
	//@Query(value = "select * from user where username = ?1", nativeQuery = true)
	xUserEntity findByUsername (String username);
}
