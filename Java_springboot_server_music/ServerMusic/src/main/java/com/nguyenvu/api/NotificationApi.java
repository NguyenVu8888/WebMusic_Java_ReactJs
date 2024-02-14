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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nguyenvu.api.output.NotificationOutput;
import com.nguyenvu.dto.xNotificationDTO;
import com.nguyenvu.service.impl.NotificationService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class NotificationApi {
	
	@Autowired
	private NotificationService notificationService;
	
	@GetMapping(value = "/notification")
	public NotificationOutput showNotification(@RequestParam(value = "page", required = false) Integer page,
			                     @RequestParam(value = "limit", required = false) Integer limit) {
		NotificationOutput result = new NotificationOutput();
		if(page != null && limit != null) {
			result.setPage(page);
			Pageable pageable = new PageRequest(page -1, limit);
			result.setListResult(notificationService.findAll(pageable));
			result.setTotalPage((int) Math.ceil((double) (notificationService.totalItem()) / limit));
		}else {	
			result.setListResult(notificationService.findAll());

		}
		return result;
	}
	
	@PostMapping(value = "/notification")
	public xNotificationDTO createNotifi(@RequestParam("title") String title,
										@RequestParam("content") String content,
										@RequestParam("userid")long userId) {
		return notificationService.save(title, content, userId);
	}
	
	@DeleteMapping(value = "/notification/{id}")
	public void deleteNotifi(@PathVariable("id") long id) {
		notificationService.delete(id);
	}
	
	@PostMapping("/notification/search")
	public List<xNotificationDTO> searchNotifi(@RequestParam("name") String name){
		return notificationService.searchByName(name);
	}

}
