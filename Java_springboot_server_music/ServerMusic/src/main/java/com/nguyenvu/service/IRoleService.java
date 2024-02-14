package com.nguyenvu.service;

import java.util.List;

import com.nguyenvu.dto.xRoleDTO;

public interface IRoleService {

	List<xRoleDTO> findAll();
	xRoleDTO save(String code, String name);
	xRoleDTO update(String code, String name, long id);
	void delete(long id);
}
