package com.nguyenvu.service;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import com.nguyenvu.dto.SuggestAlbumDTO;
import com.nguyenvu.dto.xAlbumDTO;

public interface IAlbumService {

	List<xAlbumDTO> findAll();
	List<xAlbumDTO> findAll(Pageable pageable);
	xAlbumDTO save(String name, MultipartFile image ,String nameArtist);
	xAlbumDTO update(String name, MultipartFile image,String nameArtist, long id);
	void delete(long id);
	int totalItem();
	List<xAlbumDTO> searchByName(String name);
	
	List<SuggestAlbumDTO> listAlbumSuggest(long id);
}
