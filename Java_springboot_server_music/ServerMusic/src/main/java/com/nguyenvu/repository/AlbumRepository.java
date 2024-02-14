package com.nguyenvu.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nguyenvu.entities.xAlbumEntity;

public interface AlbumRepository extends JpaRepository<xAlbumEntity, Long>{

	List<xAlbumEntity> findByNameContaining(String name);
	
	xAlbumEntity findByName(String name);
	
	@Query(value = "select al.id,al.name,al.image,al.release_date from album al inner join (select distinct s.albumid from songs s inner join history h on s.id = h.songid where userid = ?1 group by gerne) t on al.id = t.albumid limit 4", nativeQuery = true)
	List<Object> suggestAlbum(long id);
}
