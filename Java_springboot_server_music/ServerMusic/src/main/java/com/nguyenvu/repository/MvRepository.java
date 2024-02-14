package com.nguyenvu.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenvu.entities.xMvEntity;

public interface MvRepository extends JpaRepository<xMvEntity, Long>{

	List<xMvEntity> findByTitleContaining(String name);
}
