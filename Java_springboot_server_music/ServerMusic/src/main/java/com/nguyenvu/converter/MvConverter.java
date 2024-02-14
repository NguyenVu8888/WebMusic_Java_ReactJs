package com.nguyenvu.converter;

import org.springframework.stereotype.Controller;

import com.nguyenvu.dto.xMvDTO;
import com.nguyenvu.entities.xMvEntity;

@Controller
public class MvConverter {

	public xMvEntity toEntity(xMvDTO dto) {
		xMvEntity entity = new xMvEntity();
		
		entity.setTitle(dto.getTitle());
		entity.setDescription(dto.getDescription());
		entity.setDuration(dto.getDuration());
		entity.setThumb(dto.getThumb());
		entity.setSource(dto.getSource());
		
		
		return entity;
	}
	
	public xMvDTO toDTO(xMvEntity entity) {
		xMvDTO dto = new xMvDTO();
		if(entity.getId() != null) {
			dto.setId(entity.getId());
		}
	
		dto.setTitle(entity.getTitle());
		dto.setDescription(entity.getDescription());
		dto.setDuration(entity.getDuration());
		dto.setThumb(entity.getThumb());
		dto.setSource(entity.getSource());
		
		dto.setCreatedBy(entity.getCreatedBy());
		dto.setCreatedDate(entity.getCreatedDate());
		dto.setModifiedBy(entity.getModifiedBy());
		dto.setModifiedDate(entity.getModifiedDate());
		return dto;
	}
	
	public xMvEntity toEntity(xMvDTO dto, xMvEntity entity ) {
		
		entity.setTitle(dto.getTitle());
		entity.setDescription(dto.getDescription());
		entity.setDuration(dto.getDuration());
		entity.setThumb(dto.getThumb());
		entity.setSource(dto.getSource());

		return entity;
	}
}
