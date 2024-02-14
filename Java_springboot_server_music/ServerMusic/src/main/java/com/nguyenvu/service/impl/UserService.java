package com.nguyenvu.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.nguyenvu.converter.UserConverter;
import com.nguyenvu.dto.xUserDTO;
import com.nguyenvu.entities.xUserEntity;
import com.nguyenvu.repository.HistoryRepository;
import com.nguyenvu.repository.LikeRepository;
import com.nguyenvu.repository.RoleRepository;
import com.nguyenvu.repository.UserRepository;
import com.nguyenvu.service.IUserSevice;

@Service
public class UserService implements IUserSevice{
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private UserConverter userConverter;
	
	@Autowired
	private FileService fileService;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
	private LikeRepository likeRepository;
	
	@Autowired
	private HistoryRepository historyRepository;

	@Override
	public List<xUserDTO> findAll() {
		List<xUserDTO> listResult = new ArrayList<>();
		List<xUserEntity> entities = userRepository.findAll();
		for (xUserEntity item : entities) {
			xUserDTO dto = userConverter.toDTO(item);
			listResult.add(dto);
			
		}
		return listResult;
	}

	@Override
	public List<xUserDTO> findAll(Pageable pageable) {
		List<xUserDTO> listResult = new ArrayList<>();
		List<xUserEntity> entities = userRepository.findAll(pageable).getContent();
		for (xUserEntity item : entities) {
			xUserDTO dto = userConverter.toDTO(item);
			listResult.add(dto);
			
		}
		return listResult;
	}

	@Override
	public xUserDTO save(String username, String password, String fullname, 
			MultipartFile image, String email) {
		xUserEntity entity = new xUserEntity();
		entity.setUsername(username);
		entity.setPassword(password);
		entity.setFullname(fullname);
		entity.setImage(fileService.uploadImage(image));
		entity.setEmail(email);
		entity.setStatus(1);
		entity.setRole(roleRepository.getOne((long) 4));
		entity = userRepository.save(entity);
		return userConverter.toDTO(entity);
	}

	@Override
	public xUserDTO updateAdmin(String username, String password, String fullname, 
			MultipartFile image, String email,int status, String roleCode, long id) {
		xUserEntity entity = userRepository.findOne(id);
		entity.setUsername(username);
		entity.setPassword(password);
		entity.setFullname(fullname);
		entity.setImage(fileService.uploadImage(image));
		entity.setEmail(email);
		entity.setStatus(status);
		entity.setRole(roleRepository.findByCode(roleCode));
		entity = userRepository.save(entity);
		return userConverter.toDTO(entity);
	}

	@Override
	public void delete(long id) {
//		System.out.println("start");
//		likeRepository.deleteLikeUser(id);
//		System.out.println("deleteLikeUser");
//		historyRepository.deleteHisUser(id);
//		System.out.println("deleteHisUser");
		userRepository.delete(id);
		System.out.println("deleteUser");
	}

	@Override
	public int totalItem() {
		return (int) userRepository.count();
	}

	@Override
	public List<xUserDTO> searchByName(String name) {
		List<xUserDTO> listResult = new ArrayList<>();
		List<xUserEntity> entities = userRepository.findByFullnameContaining(name);
		for (xUserEntity item : entities) {
			xUserDTO dto = userConverter.toDTO(item);
			listResult.add(dto);
			
		}
		return listResult;
	}

	@Override
	public xUserDTO checkLogin(String username, String password) {
		xUserEntity entity = userRepository.findByUsernameAndPassword(username, password);
		return userConverter.toDTO(entity);
	}

	@Override
	public String checkEsixt(String username) {
		xUserEntity entity = userRepository.findByUsername(username);
		if(entity != null) {
			return "Exsist";
		}else {
			return "UnExsist";
		}
		
	}

	@Override
	public xUserDTO getInf(long id) {
		xUserEntity entity = userRepository.findOne(id);
		return userConverter.toDTO(entity);
	}

	@Override
	public xUserDTO updateUser(String password, String fullname, MultipartFile image, String email,
			long id) {
		xUserEntity entity = userRepository.findOne(id);
		entity.setPassword(password);
		entity.setFullname(fullname);
		entity.setImage(fileService.uploadImage(image));
		entity.setEmail(email);
		entity = userRepository.save(entity);
		return userConverter.toDTO(entity);
	}
	
	

}
