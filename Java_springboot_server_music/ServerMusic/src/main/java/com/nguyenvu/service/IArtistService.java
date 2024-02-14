package com.nguyenvu.service;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import com.nguyenvu.dto.xArtistDTO;

public interface IArtistService {

	List<xArtistDTO> findAll();
	List<xArtistDTO> findAll(Pageable pageable);
	xArtistDTO save(String name, MultipartFile image, String gerne);
	xArtistDTO update(String name, MultipartFile image, String gerne, long id);
	void delete(long id);
	int totalItem();
	List<xArtistDTO> searchByName(String name);
}
