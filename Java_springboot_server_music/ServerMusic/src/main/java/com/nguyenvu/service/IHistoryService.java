package com.nguyenvu.service;

import java.util.List;

import com.nguyenvu.dto.xHistoryDTO;

public interface IHistoryService {

	List<xHistoryDTO> findAll(long UserID);
	xHistoryDTO save(long userID, long songID);
	void delete(long id);
	List<xHistoryDTO> searchByName(String nameSong);
}
