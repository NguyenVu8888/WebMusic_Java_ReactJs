package com.nguyenvu.service;

import java.util.List;

import com.nguyenvu.dto.xPlaylistSongDTO;

public interface IPlaylistSongService {

	List<xPlaylistSongDTO> findAll(long playlistID);
	xPlaylistSongDTO save(long playlistID, long songID);
	void delete(long id);
	List<xPlaylistSongDTO> searchByName(String nameSong);
}
