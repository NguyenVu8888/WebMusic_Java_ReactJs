package com.nguyenvu.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nguyenvu.api.output.HistoryOutput;
import com.nguyenvu.dto.xHistoryDTO;
import com.nguyenvu.service.impl.HistoryService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class HistoryApi {

	@Autowired
	private HistoryService historyService;
	
	@PostMapping(value = "/history/get")
	public HistoryOutput showHistory(@RequestParam("userid") long userID) {
		HistoryOutput result = new HistoryOutput();
		result.setListResult(historyService.findAll(userID));
		return result;
	}
	
	@PostMapping(value = "/history")
	public xHistoryDTO createHistory(@RequestParam("userid") long userId,
									@RequestParam("songid") long songId) {
		return historyService.save(userId, songId);
	}
	
	@DeleteMapping(value = "/history/{id}")
	public void deleteHistory(@PathVariable("id") long id) {
			historyService.delete(id);		
	}
	
}
