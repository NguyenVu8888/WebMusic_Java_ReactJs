package com.nguyenvu.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.nguyenvu.converter.RoleConverter;
import com.nguyenvu.dto.xRoleDTO;
import com.nguyenvu.entities.xRoleEntity;
import com.nguyenvu.repository.RoleRepository;
import com.nguyenvu.service.IRoleService;

@Controller
public class RoleService implements IRoleService{
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired 
	private  RoleConverter roleConverter;

	@Override
	public List<xRoleDTO> findAll() {
		List<xRoleDTO> listResult = new ArrayList<>();
		List<xRoleEntity> entities = roleRepository.findAll();
		for (xRoleEntity item : entities) {
			xRoleDTO dto = roleConverter.toDTO(item);
			listResult.add(dto);
		}
		return listResult;
	}


	@Override
	public xRoleDTO save(String code, String name) {
		xRoleEntity entity = new xRoleEntity();
		entity.setCode(code);
		entity.setName(name);
		entity = roleRepository.save(entity);
		return roleConverter.toDTO(entity);
	}

	@Override
	public xRoleDTO update(String code, String name, long id) {
		xRoleEntity entity = roleRepository.findOne(id);
		entity.setCode(code);
		entity.setName(name);
		entity = roleRepository.save(entity);
		return roleConverter.toDTO(entity);
	}

	@Override
	public void delete(long id) {
		roleRepository.delete(id);
	}

}
