package com.nguyenvu.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.nguyenvu.converter.PlaylistConverter;
import com.nguyenvu.dto.xPlaylistDTO;
import com.nguyenvu.entities.xPlaylistEntity;
import com.nguyenvu.repository.PlaylistRepository;
import com.nguyenvu.repository.UserRepository;
import com.nguyenvu.service.IPlaylistService;

@Service
public class PlaylistService implements IPlaylistService{
	@Autowired
	private PlaylistRepository playlistRepository;
	
	@Autowired
	private PlaylistConverter playlistConverter;
	
	@Autowired 
	private UserRepository userRepository;
	
	@Autowired
	private FileService fileService;

	@Override
	public List<xPlaylistDTO> findAll() {
		List<xPlaylistDTO> listResult = new ArrayList<>();
		List<xPlaylistEntity> entities = playlistRepository.findAll();
		for (xPlaylistEntity item : entities) {
			xPlaylistDTO dto = playlistConverter.toDTO(item);
			listResult.add(dto);
		}
		return listResult;
	}

	@Override
	public List<xPlaylistDTO> findAll(Pageable pageable) {
		List<xPlaylistDTO> listResult = new ArrayList<>();
		List<xPlaylistEntity> entities = playlistRepository.findAll(pageable).getContent();
		for (xPlaylistEntity item : entities) {
			xPlaylistDTO dto = playlistConverter.toDTO(item);
			listResult.add(dto);
		}
		return listResult;
	}

	@Override
	public xPlaylistDTO save(String name, MultipartFile image, long userID) {
		xPlaylistEntity entity  = new xPlaylistEntity();
		entity.setName(name);
		entity.setImage(fileService.uploadImage(image));
		entity.setUserPlaylist(userRepository.findOne(userID));
		entity = playlistRepository.save(entity);
		return playlistConverter.toDTO(entity);
	}

	@Override
	public xPlaylistDTO update(String name, MultipartFile image, long id) {
		xPlaylistEntity entity  = playlistRepository.findOne(id);
		entity.setName(name);
		entity.setImage(fileService.uploadImage(image));
		entity = playlistRepository.save(entity);
		return playlistConverter.toDTO(entity);
	}

	@Override
	public int totalItem() {
		return (int) playlistRepository.count();
	}

	@Override
	public List<xPlaylistDTO> searchByName(String name) {
		List<xPlaylistDTO> listResult = new ArrayList<>();
		List<xPlaylistEntity> entities = playlistRepository.findByNameContaining(name);
		for (xPlaylistEntity item : entities) {
			xPlaylistDTO dto = playlistConverter.toDTO(item);
			listResult.add(dto);
		}
		return listResult;
	}

}
