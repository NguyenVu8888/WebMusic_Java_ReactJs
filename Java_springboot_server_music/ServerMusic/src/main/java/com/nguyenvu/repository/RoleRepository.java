package com.nguyenvu.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenvu.entities.xRoleEntity;

public interface RoleRepository extends JpaRepository<xRoleEntity, Long>{

	xRoleEntity findByCode(String code);
}
