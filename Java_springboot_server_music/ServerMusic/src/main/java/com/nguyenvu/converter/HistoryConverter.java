package com.nguyenvu.converter;

import org.springframework.stereotype.Controller;

import com.nguyenvu.dto.xHistoryDTO;
import com.nguyenvu.entities.xHistoryEntity;

@Controller
public class HistoryConverter {

	public xHistoryEntity toEntity(xHistoryDTO dto) {
		xHistoryEntity entity = new xHistoryEntity();
		
		entity.setPlayDate(dto.getPlayDate());
		
		return entity;
	}
	
	public xHistoryDTO toDTO(xHistoryEntity entity) {
		xHistoryDTO dto = new xHistoryDTO();
		if(entity.getId() != null) {
			dto.setId(entity.getId());
		}
		
		dto.setPlayDate(entity.getPlayDate());
		dto.setSongID(entity.getSongHistory().getId());
		dto.setUserID(entity.getUserHistory().getId());
		
		dto.setCreatedBy(entity.getCreatedBy());
		dto.setCreatedDate(entity.getCreatedDate());
		dto.setModifiedBy(entity.getModifiedBy());
		dto.setModifiedDate(entity.getModifiedDate());
		return dto;
	}
	
	public xHistoryEntity toEntity(xHistoryDTO dto, xHistoryEntity entity ) {
		
		dto.setPlayDate(entity.getPlayDate());
		dto.setSongID(entity.getSongHistory().getId());
		dto.setUserID(entity.getUserHistory().getId());
		
		return entity;
	}
}
