package com.nguyenvu.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.nguyenvu.api.output.UserOupt;
import com.nguyenvu.dto.xUserDTO;
import com.nguyenvu.service.impl.UserService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class UserApi {

	@Autowired
	private UserService userService;
	
	@GetMapping(value = "/user")
	public UserOupt showUser(@RequestParam(value = "page", required = false) Integer page,
			                     @RequestParam(value = "limit", required = false) Integer limit) {
		UserOupt result = new UserOupt();
		if(page != null && limit != null) {
			result.setPage(page);
			Pageable pageable = new PageRequest(page -1, limit);
			result.setListResult(userService.findAll(pageable));
			result.setTotalPage((int) Math.ceil((double) (userService.totalItem()) / limit));
		}else {	
			result.setListResult(userService.findAll());

		}
		return result;
	}
	
	@PostMapping(value = "/user")
	public xUserDTO createUser(@RequestParam("username") String username,
								@RequestParam("password") String password,
								@RequestParam("fullname") String fullname, 
								@RequestParam("image") MultipartFile image,
								@RequestParam("email") String email) {
		return userService.save(username, password, fullname, image, email);
	}
	
	@PutMapping(value = "/user/{id}")
	public xUserDTO updateUser(@RequestParam("username") String username,
								@RequestParam("password") String password,
								@RequestParam("fullname") String fullname, 
								@RequestParam("image") MultipartFile image,
								@RequestParam("email") String email,
								@RequestParam("status") int status,
								@RequestParam("roleCode") String roleCode,
								@PathVariable("id") long id) {
		return userService.updateAdmin(username, password, fullname, image, email, status, roleCode, id);
	}
	
	@PutMapping(value = "/user/inf/{id}")
	public xUserDTO updateUserInf(@RequestParam("password") String password,
									@RequestParam("fullname") String fullname, 
									@RequestParam("image") MultipartFile image,
									@RequestParam("email") String email,
									@PathVariable("id") long id) {
		return userService.updateUser(password, fullname, image, email, id);
	}
	
	@DeleteMapping(value = "/user/{id}")
	public void deleteUser(@PathVariable("id") long id) {
		userService.delete(id);
	}
	
	@PostMapping(value = "/user/search")
	public List<xUserDTO> searchUser(@RequestParam("name") String name){
		return userService.searchByName(name);
	}
	
	@GetMapping(value = "/user/inf/{id}")
	public xUserDTO getInf(@PathVariable("id") long id) {
		return userService.getInf(id);
	}
	
	@PostMapping(value = "/user/login")
	public xUserDTO userLogin(@RequestParam("username") String username,
								@RequestParam("password") String password) {
		return userService.checkLogin(username, password);
	}
	
	@PostMapping(value = "/user/regis")
	public String checkExsit(@RequestParam("username") String username) {
		return userService.checkEsixt(username);
	}
	
}
