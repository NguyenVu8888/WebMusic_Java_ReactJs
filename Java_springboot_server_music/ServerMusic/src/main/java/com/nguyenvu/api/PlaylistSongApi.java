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

import com.nguyenvu.api.output.PlaylistSongOuput;
import com.nguyenvu.dto.xPlaylistSongDTO;
import com.nguyenvu.service.impl.PlaylistSongService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class PlaylistSongApi {

	@Autowired 
	private PlaylistSongService playlistSongService;
	
	@GetMapping(value = "/playlistsong")
	public PlaylistSongOuput showPlaylistSong(@RequestParam("playlistid") long playlistId) {
		PlaylistSongOuput result = new PlaylistSongOuput();
		result.setListResult(playlistSongService.findAll(playlistId));
		return result;
	}
	
	@PostMapping(value = "/playlistsong")
	public xPlaylistSongDTO createPlaylistSong(@RequestParam("playlistid") long playlistId,
									@RequestParam("songid") long songId) {
		return playlistSongService.save(playlistId, songId);
	}
	
	@DeleteMapping(value = "/playlistsong/{id}")
	public void deletePlaylistSong(@PathVariable("id") long id) {
		playlistSongService.delete(id);
	}
}
