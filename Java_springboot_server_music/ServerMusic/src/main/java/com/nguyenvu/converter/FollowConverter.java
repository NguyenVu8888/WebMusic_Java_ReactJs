package com.nguyenvu.converter;

import org.springframework.stereotype.Controller;

import com.nguyenvu.dto.xFollowDTO;
import com.nguyenvu.entities.xFollowEntity;

@Controller
public class FollowConverter {

	public xFollowEntity toEntity(xFollowDTO dto) {
		xFollowEntity entity = new xFollowEntity();
		

		
		return entity;
	}
	
	public xFollowDTO toDTO(xFollowEntity entity) {
		xFollowDTO dto = new xFollowDTO();
		if(entity.getId() != null) {
			dto.setId(entity.getId());
		}
		
		dto.setArtistID(entity.getArtistFollow().getId());
		dto.setUserID(entity.getUserFollow().getId());

		
		dto.setCreatedBy(entity.getCreatedBy());
		dto.setCreatedDate(entity.getCreatedDate());
		dto.setModifiedBy(entity.getModifiedBy());
		dto.setModifiedDate(entity.getModifiedDate());
		return dto;
	}
	
	public xFollowEntity toEntity(xFollowDTO dto, xFollowEntity entity ) {
		
		
		return entity;
	}
}
