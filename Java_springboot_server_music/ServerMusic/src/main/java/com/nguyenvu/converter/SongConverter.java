package com.nguyenvu.converter;

import org.springframework.stereotype.Controller;

import com.nguyenvu.dto.xSongDTO;
import com.nguyenvu.entities.xSongEntity;

@Controller
public class SongConverter {

	public xSongEntity toEntity(xSongDTO dto) {
		xSongEntity entity = new xSongEntity();
		
		entity.setName(dto.getName());
		entity.setArtist(dto.getArtist());
		entity.setImage(dto.getImage());
		entity.setGerne(dto.getGerne());
		entity.setDuration(dto.getDuration());
		entity.setPath(dto.getPath());
		
		
		return entity;
	}
	
	public xSongDTO toDTO(xSongEntity entity) {
		xSongDTO dto = new xSongDTO();
		if(entity.getId() != null) {
			dto.setId(entity.getId());
		}
		
		dto.setName(entity.getName());
		dto.setArtist(entity.getArtist());
		dto.setImage(entity.getImage());
		dto.setGerne(entity.getGerne());
		dto.setDuration(entity.getDuration());
		dto.setPath(entity.getPath());
		
		
		dto.setCreatedBy(entity.getCreatedBy());
		dto.setCreatedDate(entity.getCreatedDate());
		dto.setModifiedBy(entity.getModifiedBy());
		dto.setModifiedDate(entity.getModifiedDate());
		return dto;
	}
	
	public xSongEntity toEntity(xSongDTO dto, xSongEntity entity ) {
		
		entity.setName(dto.getName());
		entity.setArtist(dto.getArtist());
		entity.setImage(dto.getImage());
		entity.setGerne(dto.getGerne());
		entity.setDuration(dto.getDuration());
		entity.setPath(dto.getPath());
		
		return entity;
	}
}
