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

import com.nguyenvu.api.output.AlbumOutput;
import com.nguyenvu.dto.SuggestAlbumDTO;
import com.nguyenvu.dto.xAlbumDTO;
import com.nguyenvu.service.impl.AlbumService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class AlbumApi {
	@Autowired
	private AlbumService albumService;

	@GetMapping(value = "/album")
	public AlbumOutput showAlbum(@RequestParam(value = "page", required = false) Integer page,
			                 @RequestParam(value = "limit", required = false) Integer limit) {
		AlbumOutput result = new AlbumOutput();
		if(page != null && limit != null) {
			result.setPage(page);
			Pageable pageable = new PageRequest(page -1, limit);
			result.setListResult(albumService.findAll(pageable));
			result.setTotalPage((int) Math.ceil((double) (albumService.totalItem()) / limit));
		}else {	
			result.setListResult(albumService.findAll());

		}
		return result;
	}
	
	@PostMapping(value = "/album")
	public xAlbumDTO createAlbum(@RequestParam("name") String name,
			                     @RequestParam("image") MultipartFile image,
			                     @RequestParam("artistName") String nameArtist  ) {
		
		return albumService.save(name, image, nameArtist);
	}
	
	@PutMapping(value = "/album/{id}")
	public xAlbumDTO updateAlbum(@RequestParam("name") String name,
                                 @RequestParam("image") MultipartFile image,
                                 @RequestParam("artistName") String nameArtist,
                                 @PathVariable("id") long id) {

		return albumService.update(name, image, nameArtist, id);
	}
	
	@DeleteMapping(value = "/album/{id}")
	public void deleteAlbum(@PathVariable("id") long id) {
		albumService.delete(id);
	}
	
	@PostMapping(value = "/album/search")
	public List<xAlbumDTO> sreachAlbum(@RequestParam("name") String name){
		return albumService.searchByName(name);
	}
	
	@PostMapping(value = "/album/suggest")
	public List<SuggestAlbumDTO> albumSuggest(@RequestParam("userid") long id){
		return albumService.listAlbumSuggest(id);
	}
	
}
