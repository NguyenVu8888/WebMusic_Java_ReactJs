package com.nguyenvu.service;

import java.util.List;

import com.nguyenvu.dto.xLikeDTO;

public interface ILikeService {

	List<xLikeDTO> findAll(long UserID);
	xLikeDTO save(long userID, long songID);
	void delete(long id);
	List<xLikeDTO> searchByName(String nameSong);
}
