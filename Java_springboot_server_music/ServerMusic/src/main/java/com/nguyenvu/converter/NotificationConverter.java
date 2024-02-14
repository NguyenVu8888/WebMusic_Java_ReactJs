package com.nguyenvu.converter;

import org.springframework.stereotype.Controller;

import com.nguyenvu.dto.xNotificationDTO;
import com.nguyenvu.entities.xNotificationEntity;

@Controller
public class NotificationConverter {

	public xNotificationEntity toEntity(xNotificationDTO dto) {
		xNotificationEntity entity = new xNotificationEntity();
		
		entity.setTitle(dto.getTitle());
		entity.setContent(dto.getContent());
		
		return entity;
	}
	
	public xNotificationDTO toDTO(xNotificationEntity entity) {
		xNotificationDTO dto = new xNotificationDTO();
		if(entity.getId() != null) {
			dto.setId(entity.getId());
		}
		
		dto.setTitle(entity.getTitle());
		dto.setContent(entity.getContent());
		dto.setUserId(entity.getUserNotification().getId());
		
		dto.setCreatedBy(entity.getCreatedBy());
		dto.setCreatedDate(entity.getCreatedDate());
		dto.setModifiedBy(entity.getModifiedBy());
		dto.setModifiedDate(entity.getModifiedDate());
		return dto;
	}
	
	public xNotificationEntity toEntity(xNotificationDTO dto, xNotificationEntity entity ) {
		
		entity.setTitle(dto.getTitle());
		entity.setContent(dto.getContent());
		
		return entity;
	}
}
