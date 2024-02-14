package com.nguyenvu.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nguyenvu.entities.xLikeEntity;

public interface LikeRepository extends JpaRepository<xLikeEntity, Long>{

	@Query(value = "SELECT * FROM likesong WHERE userid = ?1", nativeQuery = true)
	List<xLikeEntity> findByUserid(long userID);
	
	@Query(value = "SELECT * FROM likesong WHERE userid = ?1", nativeQuery = true)
	List<xLikeEntity> rankSong();
	
	
	@Query(value = "delete from likesong where userid = ?1", nativeQuery = true)
	void deleteLikeUser(long id);
}
