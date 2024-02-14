package com.nguyenvu.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nguyenvu.entities.xFollowEntity;

public interface FollowRepository extends JpaRepository<xFollowEntity, Long>{
	
	@Query(value = "SELECT * FROM follow WHERE userid = ?1", nativeQuery = true)
	List<xFollowEntity> findByUserid(long id);
}
