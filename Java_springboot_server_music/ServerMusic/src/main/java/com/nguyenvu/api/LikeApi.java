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

import com.nguyenvu.api.output.LikeOutput;
import com.nguyenvu.dto.xLikeDTO;
import com.nguyenvu.service.impl.LikeService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class LikeApi {
	
	@Autowired
	private LikeService likeService;
	
	@GetMapping(value = "/like/get/{userid}")
	public LikeOutput showLike(@PathVariable("userid") long userID) {
		LikeOutput result = new LikeOutput();
		result.setListResult(likeService.findAll(userID));
		return result;
	}
	
	@PostMapping(value = "/like")
	public xLikeDTO createLike(@RequestParam("userid") long userId,
									@RequestParam("songid") long songId) {
		return likeService.save(userId, songId);
	}
	
	@DeleteMapping(value = "/like/{id}")
	public void deleteLike(@PathVariable("id") long id) {
		likeService.delete(id);
	}
	
	

}
