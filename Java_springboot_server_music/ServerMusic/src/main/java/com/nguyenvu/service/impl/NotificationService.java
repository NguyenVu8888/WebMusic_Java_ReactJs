package com.nguyenvu.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.nguyenvu.converter.NotificationConverter;
import com.nguyenvu.dto.xNotificationDTO;
import com.nguyenvu.entities.xNotificationEntity;
import com.nguyenvu.repository.NotificationRepository;
import com.nguyenvu.repository.UserRepository;
import com.nguyenvu.service.INotificationService;

@Service
public class NotificationService implements INotificationService{
	
	@Autowired
	private NotificationRepository  notificationRepository;
	
	@Autowired
	private  NotificationConverter notificationConverter;
	
	@Autowired 
	private UserRepository userRepository;

	@Override
	public List<xNotificationDTO> findAll() {
		List<xNotificationDTO> listResult = new ArrayList<>();
		List<xNotificationEntity> entites = notificationRepository.findAll();
		for (xNotificationEntity item : entites) {
			xNotificationDTO dto = notificationConverter.toDTO(item);
			listResult.add(dto);
		}
		return listResult;
	}

	@Override
	public List<xNotificationDTO> findAll(Pageable pageable) {
		List<xNotificationDTO> listResult = new ArrayList<>();
		List<xNotificationEntity> entites = notificationRepository.findAll(pageable).getContent();
		for (xNotificationEntity item : entites) {
			xNotificationDTO dto = notificationConverter.toDTO(item);
			listResult.add(dto);
		}
		return listResult;
	}

	@Override
	public xNotificationDTO save(String title, String content, long id) {
		xNotificationEntity entity = new xNotificationEntity();
		entity.setTitle(title);
		entity.setContent(content);
		entity.setUserNotification(userRepository.findOne(id));
		entity = notificationRepository.save(entity);
		return notificationConverter.toDTO(entity);
	}

	@Override
	public void delete(long id) {
		notificationRepository.delete(id);	
	}

	@Override
	public int totalItem() {
		return (int) notificationRepository.count();
	}

	@Override
	public List<xNotificationDTO> searchByName(String name) {
		List<xNotificationDTO> listResult = new ArrayList<>();
		List<xNotificationEntity> entites = notificationRepository.findByTitleContaining(name);
		for (xNotificationEntity item : entites) {
			xNotificationDTO dto = notificationConverter.toDTO(item);
			listResult.add(dto);
		}
		return listResult;
	}

}
