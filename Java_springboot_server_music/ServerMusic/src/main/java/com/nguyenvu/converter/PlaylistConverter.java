package com.nguyenvu.converter;

import org.springframework.stereotype.Controller;

import com.nguyenvu.dto.xPlaylistDTO;
import com.nguyenvu.entities.xPlaylistEntity;

@Controller
public class PlaylistConverter {

	public xPlaylistEntity toEntity(xPlaylistDTO dto) {
		xPlaylistEntity entity = new xPlaylistEntity();
		
		entity.setName(dto.getName());
		entity.setImage(dto.getImage());
		
		
		return entity;
	}
	
	public xPlaylistDTO toDTO(xPlaylistEntity entity) {
		xPlaylistDTO dto = new xPlaylistDTO();
		if(entity.getId() != null) {
			dto.setId(entity.getId());
		}
		
		dto.setName(entity.getName());
		dto.setImage(entity.getImage());
		dto.setUsername(entity.getUserPlaylist().getUsername());
		
		dto.setCreatedBy(entity.getCreatedBy());
		dto.setCreatedDate(entity.getCreatedDate());
		dto.setModifiedBy(entity.getModifiedBy());
		dto.setModifiedDate(entity.getModifiedDate());
		return dto;
	}
	
	public xPlaylistEntity toEntity(xPlaylistDTO dto, xPlaylistEntity entity ) {
		
		entity.setName(dto.getName());
		entity.setImage(dto.getImage());
		
		return entity;
	}
}
