package com.nguyenvu.service;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import com.nguyenvu.dto.xUserDTO;

public interface IUserSevice {

	List<xUserDTO> findAll();
	List<xUserDTO> findAll(Pageable pageable);
	xUserDTO save(String username, String password, String fullname, MultipartFile image, String email);
	xUserDTO updateAdmin(String username, String password, String fullname, MultipartFile image, String email, int status , String roleCode, long id);
	xUserDTO updateUser(String password, String fullname, MultipartFile image, String email, long id);
	void delete(long id);
	int totalItem();
	List<xUserDTO> searchByName(String name);
	xUserDTO getInf(long id);
	xUserDTO checkLogin(String username, String password);
	String checkEsixt(String username);
}
