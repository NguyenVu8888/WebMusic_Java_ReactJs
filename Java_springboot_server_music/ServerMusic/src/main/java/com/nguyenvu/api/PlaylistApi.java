package com.nguyenvu.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.nguyenvu.api.output.PlaylistOutput;
import com.nguyenvu.dto.xPlaylistDTO;
import com.nguyenvu.service.impl.PlaylistService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class PlaylistApi {

	@Autowired
	private PlaylistService playlistService;
	
	@GetMapping(value = "/playlist")
	public PlaylistOutput showPlaylist(@RequestParam(value = "page", required = false) Integer page,
			                     @RequestParam(value = "limit", required = false) Integer limit) {
		PlaylistOutput result = new PlaylistOutput();
		if(page != null && limit != null) {
			result.setPage(page);
			Pageable pageable = new PageRequest(page -1, limit);
			result.setListResult(playlistService.findAll(pageable));
			result.setTotalPage((int) Math.ceil((double) (playlistService.totalItem()) / limit));
		}else {	
			result.setListResult(playlistService.findAll());

		}
		return result;
	}
	
	@PostMapping(value = "/playlist")
	public xPlaylistDTO createPlaylist(@RequestParam("name") String name,
										@RequestParam("image") MultipartFile image,
										@RequestParam("userid") long userID) {
		return playlistService.save(name, image, userID);
	}
	
	@PutMapping(value = "/playlist/{id}")
	public xPlaylistDTO updatePlaylist(@RequestParam("name") String name,
										@RequestParam("image") MultipartFile image,
										@PathVariable("id") long id) {
		return playlistService.update(name, image, id);
	}
	
	@PostMapping(value = "/playlist/search")
	public List<xPlaylistDTO> searchPlaylist(@RequestParam("name") String name){
		return playlistService.searchByName(name);
	}
}
