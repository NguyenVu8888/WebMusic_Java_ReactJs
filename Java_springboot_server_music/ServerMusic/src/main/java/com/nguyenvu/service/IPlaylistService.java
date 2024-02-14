package com.nguyenvu.service;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import com.nguyenvu.dto.xPlaylistDTO;

public interface IPlaylistService {

	List<xPlaylistDTO> findAll();
	List<xPlaylistDTO> findAll(Pageable pageable);
	xPlaylistDTO save(String name, MultipartFile image, long userID );
	xPlaylistDTO update(String name, MultipartFile image, long id);
	int totalItem();
	List<xPlaylistDTO> searchByName(String name);
}
