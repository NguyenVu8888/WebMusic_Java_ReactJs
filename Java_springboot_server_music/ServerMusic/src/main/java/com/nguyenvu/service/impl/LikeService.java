package com.nguyenvu.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenvu.converter.LikeConverter;
import com.nguyenvu.dto.xLikeDTO;
import com.nguyenvu.entities.xLikeEntity;
import com.nguyenvu.repository.LikeRepository;
import com.nguyenvu.repository.SongRepository;
import com.nguyenvu.repository.UserRepository;
import com.nguyenvu.service.ILikeService;

@Service
public class LikeService implements ILikeService{
	
	@Autowired
	private LikeRepository likeRepository;
	
	@Autowired
	private LikeConverter likeConverter;
	
	@Autowired
	private SongRepository songRepository;
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public List<xLikeDTO> findAll(long UserID) {
		List<xLikeDTO> listResult = new ArrayList<>();
		List<xLikeEntity> entities = likeRepository.findByUserid(UserID);
		for (xLikeEntity item : entities) {
			xLikeDTO dto = likeConverter.toDTO(item);
			dto.setNameSong(songRepository.findOne(item.getSongLike().getId()).getName());
			listResult.add(dto);
		}
		return listResult;
	}

	@Override
	public xLikeDTO save(long userID, long songID) {
		xLikeEntity entity = new xLikeEntity();
		entity.setSongLike(songRepository.findOne(songID));
		entity.setUserLike(userRepository.findOne(userID));
		entity = likeRepository.save(entity);
		return likeConverter.toDTO(entity);
	}

	@Override
	public void delete(long id) {
		likeRepository.delete(id);
	}

	@Override
	public List<xLikeDTO> searchByName(String nameSong) {
		// TODO Auto-generated method stub
		return null;
	}


}
