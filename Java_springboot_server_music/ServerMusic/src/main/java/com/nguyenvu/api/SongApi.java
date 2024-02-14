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

import com.nguyenvu.api.output.SongOutput;
import com.nguyenvu.dto.SongLikeDTO;
import com.nguyenvu.dto.SongPurposeDTO;
import com.nguyenvu.dto.SuggestSongDTO;
import com.nguyenvu.dto.songHistoryDTO;
import com.nguyenvu.dto.songRankDTO;
import com.nguyenvu.dto.xSongDTO;
import com.nguyenvu.service.impl.SongService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class SongApi {

	@Autowired
	private SongService songService;
	
	@GetMapping(value = "/song")
	public SongOutput showSong(@RequestParam(value = "page", required = false) Integer page,
			                     @RequestParam(value = "limit", required = false) Integer limit) {
		SongOutput result = new SongOutput();
		if(page != null && limit != null) {
			result.setPage(page);
			Pageable pageable = new PageRequest(page -1, limit);
			result.setListResult(songService.findAll(pageable));
			result.setTotalPage((int) Math.ceil((double) (songService.totalItem()) / limit));
		}else {	
			result.setListResult(songService.findAll());

		}
		return result;
	}
	
	@PostMapping(value = "/song")
	public xSongDTO createSong(@RequestParam("name") String name,
								@RequestParam("image") MultipartFile image,
								@RequestParam("nameArtist") String nameArtist,
								@RequestParam("gerne") String gerne,
								@RequestParam("duration") int duration,
								@RequestParam("source") MultipartFile source) {
		return songService.save(name, image, nameArtist, gerne, duration, source);
	}
	
	@PutMapping(value = "/song/{id}")
	public xSongDTO updateSong(@RequestParam("name") String name,
								@RequestParam("image") MultipartFile image,
								@RequestParam("nameArtist") String nameArtist,
								@RequestParam("gerne") String gerne,
								@RequestParam("duration") int duration,
								@RequestParam("source") MultipartFile source,
								@RequestParam("nameAlbum") String nameAlbum,
								@PathVariable("id") long id) {
		return songService.update(name, image, nameArtist, gerne, duration, source, nameAlbum, id);
	}
	
	@DeleteMapping(value = "/song/{id}")
	public void deleteSong(@PathVariable("id") long id){
		songService.delete(id);
	}
	
	@PostMapping(value = "/song/search")
	public List<xSongDTO> searchSong(@RequestParam("name") String name){
		return songService.searchByName(name);
	}
	
	@PostMapping(value = "/song/search/album")
	public List<xSongDTO> searchSongByAlbum(@RequestParam("id") long id ){
		return songService.searchByAlbum(id);
	}
	
	@PostMapping(value = "/song/search/artist")
	public List<xSongDTO> searchSongByArtist(@RequestParam("nameArtist") String nameArtist ){
		return songService.searchByArtist(nameArtist);
	}
	
	@PostMapping(value = "/song/search/gerne")
	public List<xSongDTO> searchSongByGerne(@RequestParam("gerne") String gerne ){
		return songService.searchByGerne(gerne);
	}
	
	@GetMapping(value = "/song/rank")
	public List<songRankDTO> getSongRank(){
		return songService.rankSong();
	}
	
	@GetMapping(value = "/song/new")
	public List<xSongDTO> getSongNew(){
		return songService.songNew();
	}
	
	@GetMapping(value = "/song/gerne")
	public List<xSongDTO> getSongGerne(){
		return songService.listGerne();
	}
	
	@PostMapping(value = "/song/history")
	public List<songHistoryDTO> getSongHistory(@RequestParam("userid") long id){
		return songService.listHistorySong(id);
	}
	
	@PostMapping(value = "/song/suggest")
	public List<SuggestSongDTO> getSongSuggest(@RequestParam("userid") long id){
		return songService.listSuggestSong(id);
	}
	
	@PostMapping(value = "/song/like")
	public List<SongLikeDTO> getSongLike(@RequestParam("userid") long id){
		return songService.listLikeSong(id);
	}
	
	@GetMapping(value = "/song/DX")
	public List<SongPurposeDTO> getSongDX(){
		return songService.listDXSong();
	}
	
}
