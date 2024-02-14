package com.nguyenvu.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenvu.entities.xPlaylistEntity;

public interface PlaylistRepository extends JpaRepository<xPlaylistEntity, Long>{

	List<xPlaylistEntity> findByNameContaining(String name);
}
