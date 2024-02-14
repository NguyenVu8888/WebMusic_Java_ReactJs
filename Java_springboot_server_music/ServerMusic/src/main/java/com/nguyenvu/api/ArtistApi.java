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

import com.nguyenvu.api.output.AritistOutput;
import com.nguyenvu.dto.xArtistDTO;
import com.nguyenvu.service.impl.ArtistService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ArtistApi {
	
	@Autowired
	private ArtistService artistService;
	
	@GetMapping(value = "/artist")
	public AritistOutput showArtist(@RequestParam(value = "page", required = false) Integer page,
			                     @RequestParam(value = "limit", required = false) Integer limit) {
		AritistOutput result = new AritistOutput();
		if(page != null && limit != null) {
			result.setPage(page);
			Pageable pageable = new PageRequest(page -1, limit);
			result.setListResult(artistService.findAll(pageable));
			result.setTotalPage((int) Math.ceil((double) (artistService.totalItem()) / limit));
		}else {	
			result.setListResult(artistService.findAll());

		}
		return result;
	}
	
	@PostMapping(value = "/artist")
	public xArtistDTO createArtist(@RequestParam("name") String name,
								   @RequestParam("image") MultipartFile image,
								   @RequestParam("gerne") String gerne) {
		return artistService.save(name, image, gerne);
	}
	
	@PutMapping(value = "/artist/{id}")
	public xArtistDTO updateArtist(@RequestParam("name") String name,
									@RequestParam("image") MultipartFile image,
									@RequestParam("gerne") String gerne,
									@PathVariable("id") long id) {
		return artistService.update(name, image, gerne, id);
	}
	
	@DeleteMapping(value = "/artist/{id}")
	public void updateArtist(@PathVariable("id") long id) {
		artistService.delete(id);
	}
	
	@PostMapping(value = "/artist/search")
	public List<xArtistDTO> sreachAlbum(@RequestParam("name") String name){
		return artistService.searchByName(name);
	}
	

}
