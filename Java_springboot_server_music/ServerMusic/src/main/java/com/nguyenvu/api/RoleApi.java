package com.nguyenvu.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nguyenvu.api.output.RoleOutput;
import com.nguyenvu.dto.xRoleDTO;
import com.nguyenvu.service.impl.RoleService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class RoleApi {
	
	@Autowired
	private RoleService roleService;
	
	@GetMapping(value = "/role")
	public RoleOutput showRole() {
		RoleOutput result = new RoleOutput();
		result.setListResult(roleService.findAll());
		return result;
	}
	
	@PostMapping(value = "/role")
	public xRoleDTO createRole(@RequestParam("code") String code,
								@RequestParam("name") String name) {
		return roleService.save(code, name);
	}
	
	@PutMapping(value = "/role/{id}")
	public xRoleDTO updateRole(@RequestParam("code") String code,
								@RequestParam("name") String name,
								@PathVariable("id") long id) {
		return roleService.update(code, name, id);
	}

	@DeleteMapping(value = "/role/{id}")
	public void deleteRole(@PathVariable("id") long id) {
		roleService.delete(id);
	}
}
