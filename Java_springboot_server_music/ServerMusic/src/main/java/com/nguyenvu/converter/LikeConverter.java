package com.nguyenvu.converter;

import org.springframework.stereotype.Controller;

import com.nguyenvu.dto.xLikeDTO;
import com.nguyenvu.entities.xLikeEntity;

@Controller
public class LikeConverter {

	public xLikeEntity toEntity(xLikeDTO dto) {
		xLikeEntity entity = new xLikeEntity();
		
		
		
		return entity;
	}
	
	public xLikeDTO toDTO(xLikeEntity entity) {
		xLikeDTO dto = new xLikeDTO();
		if(entity.getId() != null) {
			dto.setId(entity.getId());
		}
		
		dto.setSongID(entity.getSongLike().getId());
		dto.setUserID(entity.getUserLike().getId());
		dto.setNameSong(entity.getSongLike().getName());
		
		dto.setCreatedBy(entity.getCreatedBy());
		dto.setCreatedDate(entity.getCreatedDate());
		dto.setModifiedBy(entity.getModifiedBy());
		dto.setModifiedDate(entity.getModifiedDate());
		return dto;
	}
	
	public xLikeEntity toEntity(xLikeDTO dto, xLikeEntity entity ) {
		

		
		return entity;
	}
}
