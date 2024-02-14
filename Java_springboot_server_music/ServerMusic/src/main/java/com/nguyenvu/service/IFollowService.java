package com.nguyenvu.service;

import java.util.List;

import com.nguyenvu.dto.xFollowDTO;

public interface IFollowService {

	List<xFollowDTO> findAll(long UserID);
	xFollowDTO save(long userID, long ArtistID);
	void delete(long id);
	List<xFollowDTO> searchByName(String nameArtist);
}
