package com.nguyenvu.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nguyenvu.entities.xHistoryEntity;

public interface HistoryRepository extends JpaRepository<xHistoryEntity, Long>{

	@Query(value = "SELECT * FROM history WHERE userid = ?1 order by playdate desc", nativeQuery = true)
	List<xHistoryEntity> findByUserid(long userID);
	
	@Query(value = "delete from history where userid = ?1 ", nativeQuery = true)
	void deleteHisUser(long id);
}
