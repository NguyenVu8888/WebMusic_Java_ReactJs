package com.nguyenvu.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenvu.converter.HistoryConverter;
import com.nguyenvu.dto.xHistoryDTO;
import com.nguyenvu.entities.xHistoryEntity;
import com.nguyenvu.repository.HistoryRepository;
import com.nguyenvu.repository.SongRepository;
import com.nguyenvu.repository.UserRepository;
import com.nguyenvu.service.IHistoryService;

@Service
public class HistoryService implements IHistoryService{
	
	@Autowired
	private HistoryRepository historyRepository;
	
	@Autowired 
	private HistoryConverter historyConverter;
	
	@Autowired
	private SongRepository songRepository;
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public List<xHistoryDTO> findAll(long UserID) {
		List<xHistoryDTO> listResult = new ArrayList<>();
		List<xHistoryEntity> entities = historyRepository.findByUserid(UserID);
		for (xHistoryEntity item : entities) {
			xHistoryDTO dto = historyConverter.toDTO(item);
			dto.setNameSong(songRepository.findOne(item.getSongHistory().getId()).getName());
			listResult.add(dto);
		}
		
		return listResult;
	}

	@Override
	public xHistoryDTO save(long userID, long songID) {
		xHistoryEntity entity = new xHistoryEntity();
		entity.setUserHistory(userRepository.findOne(userID));
		entity.setSongHistory(songRepository.findOne(songID));
		
		long millis=System.currentTimeMillis();   
		java.sql.Date date=new java.sql.Date(millis);
		entity.setPlayDate(date);
		
		entity = historyRepository.save(entity);
		return historyConverter.toDTO(entity);
	}

	@Override
	public void delete(long id) {
		historyRepository.delete(id);
	}

	@Override
	public List<xHistoryDTO> searchByName(String nameSong) {
		// TODO Auto-generated method stub
		return null;
	}

}
