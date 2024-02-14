package com.nguyenvu.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nguyenvu.entities.xPlaylistSongEntity;

public interface PlaylistSongRepository extends JpaRepository<xPlaylistSongEntity, Long>{

	@Query(value = "SELECT * FROM playlistsong WHERE playlistid = ?1", nativeQuery = true)
	List<xPlaylistSongEntity> findByPlaylistid(long playlistID);
}
