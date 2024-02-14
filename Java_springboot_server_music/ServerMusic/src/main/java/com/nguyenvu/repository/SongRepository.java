package com.nguyenvu.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nguyenvu.entities.xSongEntity;

public interface SongRepository extends JpaRepository<xSongEntity, Long>{
	
	List<xSongEntity> findByNameContaining(String name);

	@Query(value = "SELECT * FROM songs WHERE albumid = ?1", nativeQuery = true)
	List<xSongEntity> findByAlbumid(long id);
	

	List<xSongEntity> findByGerne(String gerne);
	
	List<xSongEntity> findByArtist(String nameArtist);
	
	// lay xep hang bai hat theo do yeu thich
//	@Query(value = "select ranks.count, ranks.name, ranks.artist, ranks.duration, ranks.gerne, ranks.image, ranks.path from  (select ls.songid, count(*) as count, s.name, s.artist, s.duration, s.gerne, s.image, s.path from likesong ls left join songs s on s.id = ls.songid group by ls.songid order by count desc) as ranks", nativeQuery = true)
	@Query(value = "select ls.songid, count(*) as count, s.name, s.artist, s.duration, s.gerne, s.image, s.path from likesong ls left join songs s on s.id = ls.songid group by ls.songid order by count desc", nativeQuery = true)
	List<Object> rankSong();

	
	@Query(value = "select  * from songs order by modified_date desc", nativeQuery = true)
	List<xSongEntity> findSongNew();
	
	@Query(value = "select distinct(songs.gerne) from songs", nativeQuery = true)
	List<xSongEntity> listGerne();
	
	@Query(value = "select h.id as historyid, s.id as songid,s.name,s.artist,s.gerne,s.duration,s.image,s.path,h.playdate from history h inner join songs s on h.songid = s.id where userid = ?1 order by playdate desc;", nativeQuery = true)
	List<Object> historySong(long id);
	
	@Query(value = "select A.id,A.name,A.artist,A.gerne,A.duration,A.image,A.path from songs A inner join (select count(*) as count, s.gerne, h.userid from songs s inner join history h on s.id = h.songid where h.userid = ?1  group by gerne order by count desc limit 3) T on T.gerne = A.gerne order by A.createddate desc limit 20", nativeQuery = true)
	List<Object> suggestSong(long id);
	
	@Query(value = "select ls.id as likeid, s.id as songid,s.name,s.artist,s.gerne,s.duration,s.image,s.path from likesong ls inner join songs s on ls.songid = s.id where userid = ?1", nativeQuery = true)
	List<Object> listLikeSong(long id);
	
	@Query(value = "select A.id,A.name,A.artist,A.gerne,A.duration,A.image,A.path from (select s.id,s.name,s.artist,s.gerne,s.duration,s.image,s.path,count(*) as count from history h inner join songs s on s.id = h.songid group by songid order by count desc) as A limit 6;", nativeQuery = true)
	List<Object> listDXSong();
	
}
