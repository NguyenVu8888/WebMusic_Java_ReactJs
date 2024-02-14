package com.nguyenvu.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenvu.converter.PlaylistSongConverter;
import com.nguyenvu.dto.xPlaylistSongDTO;
import com.nguyenvu.entities.xPlaylistSongEntity;
import com.nguyenvu.repository.PlaylistRepository;
import com.nguyenvu.repository.PlaylistSongRepository;
import com.nguyenvu.repository.SongRepository;
import com.nguyenvu.service.IPlaylistSongService;

@Service
public class PlaylistSongService implements IPlaylistSongService{
	
	@Autowired 
	private PlaylistSongConverter playlistSongConverter;
	
	@Autowired 
	private PlaylistSongRepository playlistSongRepository;
	
	@Autowired 
	private SongRepository songRepository;
	
	@Autowired
	private PlaylistRepository playlistRepository;

	@Override
	public List<xPlaylistSongDTO> findAll(long playlistID) {
		List<xPlaylistSongDTO> listResult = new ArrayList<>();
		List<xPlaylistSongEntity> entities = playlistSongRepository.findByPlaylistid(playlistID);
		for (xPlaylistSongEntity item : entities) {
			xPlaylistSongDTO dto = playlistSongConverter.toDTO(item);
			dto.setNameSong(songRepository.findOne(item.getPlaylist2song().getId()).getName());
			listResult.add(dto);
		}
		
		return listResult;
	}

	@Override
	public xPlaylistSongDTO save(long playlistID, long songID) {
		xPlaylistSongEntity entity = new xPlaylistSongEntity();
		entity.setPlaylist2song(playlistRepository.findOne(playlistID));
		entity.setSongplaylist(songRepository.findOne(songID));
		entity = playlistSongRepository.save(entity);
		return playlistSongConverter.toDTO(entity);
	}

	@Override
	public void delete(long id) {
		playlistSongRepository.delete(id);
	}

	@Override
	public List<xPlaylistSongDTO> searchByName(String nameSong) {
		// TODO Auto-generated method stub
		return null;
	}
	
	

}
