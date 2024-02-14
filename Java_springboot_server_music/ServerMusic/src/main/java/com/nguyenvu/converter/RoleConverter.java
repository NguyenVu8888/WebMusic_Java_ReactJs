package com.nguyenvu.converter;

import org.springframework.stereotype.Controller;

import com.nguyenvu.dto.xRoleDTO;
import com.nguyenvu.entities.xRoleEntity;

@Controller
public class RoleConverter {

	public xRoleEntity toEntity(xRoleDTO dto) {
		xRoleEntity entity = new xRoleEntity();
		
		entity.setName(dto.getName());
		entity.setCode(dto.getCode());
		
		return entity;
	}
	
	public xRoleDTO toDTO(xRoleEntity entity) {
		xRoleDTO dto = new xRoleDTO();
		if(entity.getId() != null) {
			dto.setId(entity.getId());
		}
		
		dto.setName(entity.getName());
		dto.setCode(entity.getCode());
		
		dto.setCreatedBy(entity.getCreatedBy());
		dto.setCreatedDate(entity.getCreatedDate());
		dto.setModifiedBy(entity.getModifiedBy());
		dto.setModifiedDate(entity.getModifiedDate());
		return dto;
	}
	
	public xRoleEntity toEntity(xRoleDTO dto, xRoleEntity entity ) {
		
		entity.setName(dto.getName());
		entity.setCode(dto.getCode());
		
		return entity;
	}
}
