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

import com.nguyenvu.api.output.MvOutput;
import com.nguyenvu.dto.xMvDTO;
import com.nguyenvu.service.impl.MvService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class MvApi {

	@Autowired
	private MvService mvService;
	
	@GetMapping(value = "/mv")
	public MvOutput showMV(@RequestParam(value = "page", required = false) Integer page,
			                     @RequestParam(value = "limit", required = false) Integer limit) {
		MvOutput result = new MvOutput();
		if(page != null && limit != null) {
			result.setPage(page);
			Pageable pageable = new PageRequest(page -1, limit);
			result.setListResult(mvService.findAll(pageable));
			result.setTotalPage((int) Math.ceil((double) (mvService.totalItem()) / limit));
		}else {	
			result.setListResult(mvService.findAll());

		}
		return result;
	}
	
	@PostMapping(value = "/mv")
	public xMvDTO createMV(@RequestParam("title") String title, 
							@RequestParam("description") String description,
							@RequestParam("duration") int duration, 
							@RequestParam("thumb") MultipartFile thumb,
							@RequestParam("source") MultipartFile source) {
		
		return mvService.save(title, description, duration, thumb, source);
	}
	
	@PutMapping(value = "/mv/{id}")
	public xMvDTO updateMV(@RequestParam("title") String title, 
							@RequestParam("description") String description,
							@RequestParam("duration") int duration, 
							@RequestParam("thumb") MultipartFile thumb,
							@RequestParam("source") MultipartFile source,
							@PathVariable("id") long id) {
		
		return mvService.update(title, description, duration, thumb, source, id);
	}
	
	@DeleteMapping(value = "/mv/{id}")
	public void deleteMV(@PathVariable("id") long id) {
		mvService.delete(id);
	}
	
	@PostMapping(value = "/mv/search")
	public List<xMvDTO> searchMV(@RequestParam("name") String name){
		return mvService.searchByName(name);
	}
	
}
