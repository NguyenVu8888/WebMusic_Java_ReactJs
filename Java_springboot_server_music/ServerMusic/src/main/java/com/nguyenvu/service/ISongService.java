package com.nguyenvu.service;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import com.nguyenvu.dto.SongLikeDTO;
import com.nguyenvu.dto.SongPurposeDTO;
import com.nguyenvu.dto.SuggestSongDTO;
import com.nguyenvu.dto.songHistoryDTO;
import com.nguyenvu.dto.songRankDTO;
import com.nguyenvu.dto.xSongDTO;

public interface ISongService {

	List<xSongDTO> findAll();
	List<xSongDTO> findAll(Pageable pageable);
	xSongDTO save(String name, MultipartFile image ,String nameArtist, String gerne, int duration, MultipartFile source);
	xSongDTO update(String name, MultipartFile image ,String nameArtist, String gerne, int duration, MultipartFile source, String nameAlbum, long id);
	void delete(long id);
	int totalItem();
	List<xSongDTO> searchByName(String name);
	List<xSongDTO> searchByAlbum(long id);
	List<xSongDTO> searchByGerne(String gerne);
	List<xSongDTO> searchByArtist(String nameArtist);
	
	List<songRankDTO> rankSong();
	
	List<xSongDTO> songNew();
	List<xSongDTO> listGerne();
	
	List<songHistoryDTO> listHistorySong(long id);
	List<SuggestSongDTO> listSuggestSong(long id);
	List<SongLikeDTO> listLikeSong(long id);
	List<SongPurposeDTO> listDXSong();
	
	
}
