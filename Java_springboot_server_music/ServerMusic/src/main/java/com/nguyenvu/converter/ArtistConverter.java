package com.nguyenvu.converter;

import org.springframework.stereotype.Controller;

import com.nguyenvu.dto.xArtistDTO;
import com.nguyenvu.entities.xArtistEntity;

@Controller
public class ArtistConverter {

	public xArtistEntity toEntity(xArtistDTO dto) {
		xArtistEntity entity = new xArtistEntity();
		
		entity.setName(dto.getName());
		entity.setImage(dto.getImage());
		entity.setGerne(dto.getGerne());
		
		return entity;
	}
	
	public xArtistDTO toDTO(xArtistEntity entity) {
		xArtistDTO dto = new xArtistDTO();
		if(entity.getId() != null) {
			dto.setId(entity.getId());
		}
		
		dto.setName(entity.getName());
		dto.setImage(entity.getImage());
		dto.setGerne(entity.getGerne());
		
		dto.setCreatedBy(entity.getCreatedBy());
		dto.setCreatedDate(entity.getCreatedDate());
		dto.setModifiedBy(entity.getModifiedBy());
		dto.setModifiedDate(entity.getModifiedDate());
		return dto;
	}
	
	public xArtistEntity toEntity(xArtistDTO dto, xArtistEntity entity ) {
		
		entity.setName(dto.getName());
		entity.setImage(dto.getImage());
		entity.setGerne(dto.getGerne());
		
		return entity;
	}
}
