package com.nguyenvu.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.nguyenvu.converter.ArtistConverter;
import com.nguyenvu.dto.xArtistDTO;
import com.nguyenvu.entities.xArtistEntity;
import com.nguyenvu.repository.ArtistRepository;
import com.nguyenvu.service.IArtistService;

@Service
public class ArtistService implements IArtistService{

	@Autowired
	private ArtistRepository artistRepository;
	
	@Autowired 
	private ArtistConverter artistConverter;
	
	@Autowired
	private FileService fileService;
	
	@Override
	public List<xArtistDTO> findAll() {
		List<xArtistDTO> resultList = new ArrayList<>();
		List<xArtistEntity> entities = artistRepository.findAll();
		for (xArtistEntity item : entities) {
			xArtistDTO dto = artistConverter.toDTO(item);
			resultList.add(dto);
		}
		return resultList;
	}

	@Override
	public List<xArtistDTO> findAll(Pageable pageable) {
		List<xArtistDTO> resultList = new ArrayList<>();
		List<xArtistEntity> entities = artistRepository.findAll(pageable).getContent();
		for (xArtistEntity item : entities) {
			xArtistDTO dto = artistConverter.toDTO(item);
			resultList.add(dto);
		}
		return resultList;
	}

	@Override
	public xArtistDTO save(String name, MultipartFile image, String gerne) {
		xArtistEntity entity = new xArtistEntity();
		entity.setName(name);
		entity.setImage(fileService.uploadImage(image));
		entity.setGerne(gerne);
		entity = artistRepository.save(entity);
		return artistConverter.toDTO(entity);
	}

	@Override
	public xArtistDTO update(String name, MultipartFile image, String gerne, long id) {
		xArtistEntity entity = artistRepository.findOne(id);
		entity.setName(name);
		entity.setImage(fileService.uploadImage(image));
		entity.setGerne(gerne);
		entity = artistRepository.save(entity);
		return artistConverter.toDTO(entity);
	}

	@Override
	public void delete(long id) {
		artistRepository.delete(id);
	}

	@Override
	public int totalItem() {
		return (int)artistRepository.count();
	}

	@Override
	public List<xArtistDTO> searchByName(String name) {
		List<xArtistDTO> resultList = new ArrayList<>();
		List<xArtistEntity> entities = artistRepository.findByNameContaining(name);
		for (xArtistEntity item : entities) {
			xArtistDTO dto = artistConverter.toDTO(item);
			resultList.add(dto);
		}
		return resultList;
	}

}
