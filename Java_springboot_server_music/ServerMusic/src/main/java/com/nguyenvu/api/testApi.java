package com.nguyenvu.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class testApi {

	@GetMapping(value = "/test")
	public String testApi() {
		String ouput = "success";
		return ouput;
	}
}
