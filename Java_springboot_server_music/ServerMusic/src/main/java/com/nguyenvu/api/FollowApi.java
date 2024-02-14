package com.nguyenvu.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nguyenvu.api.output.FollowOutput;
import com.nguyenvu.dto.xFollowDTO;
import com.nguyenvu.service.impl.FollowService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class FollowApi {

	@Autowired
	private FollowService followService;
	
	@GetMapping(value = "/follow")
	public FollowOutput showFollow(@RequestParam("userid") long userID) {
		FollowOutput result = new FollowOutput();
		result.setListResult(followService.findAll(userID));
		return result;
	}
	
	@PostMapping(value = "/follow")
	public xFollowDTO createFollow(@RequestParam("userid") long userId,
									@RequestParam("artistid") long artistId) {
		return followService.save(userId, artistId);
	}
	
	@DeleteMapping(value = "/follow/{id}")
	public void updateFollow(@PathVariable("id") long id) {
		followService.delete(id);
	}
}
