package com.nguyenvu.converter;

import org.springframework.stereotype.Controller;

import com.nguyenvu.dto.xUserDTO;
import com.nguyenvu.entities.xUserEntity;

@Controller
public class UserConverter {

	public xUserEntity toEntity(xUserDTO dto) {
		xUserEntity entity = new xUserEntity();
		
		entity.setUsername(dto.getUsername());
		entity.setPassword(dto.getPassword());
		entity.setFullname(dto.getFullName());
		entity.setEmail(dto.getEmail());
		entity.setImage(dto.getImage());
		entity.setStatus(dto.getStatus());
		
		return entity;
	}
	
	public xUserDTO toDTO(xUserEntity entity) {
		xUserDTO dto = new xUserDTO();
		if(entity.getId() != null) {
			dto.setId(entity.getId());
		}
		
		dto.setUsername(entity.getUsername());
		dto.setPassword(entity.getPassword());
		dto.setFullName(entity.getFullname());
		dto.setEmail(entity.getEmail());
		dto.setImage(entity.getImage());
		dto.setStatus(entity.getStatus());
		dto.setRoleCode(entity.getRole().getName());

		dto.setCreatedBy(entity.getCreatedBy());
		dto.setCreatedDate(entity.getCreatedDate());
		dto.setModifiedBy(entity.getModifiedBy());
		dto.setModifiedDate(entity.getModifiedDate());
		return dto;
	}
	
	public xUserEntity toEntity(xUserDTO dto, xUserEntity entity ) {
		
		entity.setUsername(dto.getUsername());
		entity.setPassword(dto.getPassword());
		entity.setFullname(dto.getFullName());
		entity.setEmail(dto.getEmail());
		entity.setImage(dto.getImage());
		entity.setStatus(dto.getStatus());
		
		return entity;
	}
}
