package com.nguyenvu.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.nguyenvu.converter.FollowConverter;
import com.nguyenvu.dto.xFollowDTO;
import com.nguyenvu.entities.xFollowEntity;
import com.nguyenvu.repository.ArtistRepository;
import com.nguyenvu.repository.FollowRepository;
import com.nguyenvu.repository.UserRepository;
import com.nguyenvu.service.IFollowService;

@Controller
public class FollowService implements IFollowService{

	@Autowired 
	private FollowRepository followRepository;
	
	@Autowired 
	private FollowConverter followConverter;
	
	@Autowired
	private ArtistRepository artistRepository;
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public List<xFollowDTO> findAll(long UserID) {
		List<xFollowDTO> listResult = new ArrayList<>();
		List<xFollowEntity> entities = followRepository.findByUserid(UserID);
		for (xFollowEntity item : entities) {
			xFollowDTO dto = followConverter.toDTO(item);
			dto.setNameArtist(artistRepository.findOne(item.getArtistFollow().getId()).getName());
			listResult.add(dto);
		}
		
		return listResult;
	}

	@Override
	public xFollowDTO save(long userID, long ArtistID) {
		xFollowEntity entity = new xFollowEntity();
		entity.setArtistFollow(artistRepository.findOne(ArtistID));
		entity.setUserFollow(userRepository.findOne(userID));
		entity = followRepository.save(entity);
		return followConverter.toDTO(entity);
	}

	@Override
	public void delete(long id) {
		followRepository.delete(id);		
	}

	@Override
	public List<xFollowDTO> searchByName(String nameArtist) {
		// TODO Auto-generated method stub
		return null;
	}
	
	
}
