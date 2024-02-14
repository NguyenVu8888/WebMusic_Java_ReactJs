package com.nguyenvu.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "role")
public class xRoleEntity extends BaseEntity{

    @Column(name = "code")
	private String code;
    
    @Column(name = "name")
	private String name;
    
    @OneToMany(mappedBy = "role")
    private List<xUserEntity> users = new ArrayList<>();

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<xUserEntity> getUsers() {
		return users;
	}

	public void setUsers(List<xUserEntity> users) {
		this.users = users;
	}
    
    
	
	
}
