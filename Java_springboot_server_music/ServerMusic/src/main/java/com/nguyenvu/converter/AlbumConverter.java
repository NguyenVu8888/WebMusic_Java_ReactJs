package com.nguyenvu.converter;

import org.springframework.stereotype.Controller;

import com.nguyenvu.dto.xAlbumDTO;
import com.nguyenvu.entities.xAlbumEntity;

@Controller
public class AlbumConverter {

	public xAlbumEntity toEntity(xAlbumDTO dto) {
		xAlbumEntity entity = new xAlbumEntity();
		
		entity.setName(dto.getName());
		entity.setImage(dto.getImage());
		entity.setReleaseDate(dto.getReleaseDate());
		
		return entity;
	}
	
	public xAlbumDTO toDTO(xAlbumEntity entity) {
		xAlbumDTO dto = new xAlbumDTO();
		if(entity.getId() != null) {
			dto.setId(entity.getId());
		}
		
		dto.setName(entity.getName());
		dto.setImage(entity.getImage());
		dto.setReleaseDate(entity.getReleaseDate());
		
		dto.setCreatedBy(entity.getCreatedBy());
		dto.setCreatedDate(entity.getCreatedDate());
		dto.setModifiedBy(entity.getModifiedBy());
		dto.setModifiedDate(entity.getModifiedDate());
		return dto;
	}
	
	public xAlbumEntity toEntity(xAlbumDTO dto, xAlbumEntity entity ) {
		
		entity.setName(dto.getName());
		entity.setImage(dto.getImage());
		entity.setReleaseDate(dto.getReleaseDate());
		
		return entity;
	}
	
}
