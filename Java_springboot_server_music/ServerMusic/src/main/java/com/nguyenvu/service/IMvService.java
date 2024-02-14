package com.nguyenvu.service;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import com.nguyenvu.dto.xMvDTO;

public interface IMvService {

	List<xMvDTO> findAll();
	List<xMvDTO> findAll(Pageable pageable);
	xMvDTO save(String title, String description, int duration, MultipartFile thumb, MultipartFile source);
	xMvDTO update(String title, String description, int duration, MultipartFile thumb, MultipartFile source, long id);
	void delete(long id);
	int totalItem();
	List<xMvDTO> searchByName(String name);
}
