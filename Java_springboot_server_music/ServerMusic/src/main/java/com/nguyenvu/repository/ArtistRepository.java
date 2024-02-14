package com.nguyenvu.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenvu.entities.xArtistEntity;

public interface ArtistRepository extends JpaRepository<xArtistEntity, Long>{

	List<xArtistEntity> findByNameContaining(String name);
	
	xArtistEntity findByName(String name);
}
