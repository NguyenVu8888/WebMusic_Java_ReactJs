package com.nguyenvu.service;

import java.util.List;

import org.springframework.data.domain.Pageable;

import com.nguyenvu.dto.xNotificationDTO;

public interface INotificationService {

	List<xNotificationDTO> findAll();
	List<xNotificationDTO> findAll(Pageable pageable);
	xNotificationDTO save(String title, String content, long ids);
//	xNotificationDTO save(String title, String content, long[] ids);
	void delete(long id);
	int totalItem();
	List<xNotificationDTO> searchByName(String name);
}
