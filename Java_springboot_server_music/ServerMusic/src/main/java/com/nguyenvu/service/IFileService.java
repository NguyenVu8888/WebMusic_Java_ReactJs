package com.nguyenvu.service;

import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

public interface IFileService {

	String uploadImage(MultipartFile file);
	String uploadAudio(MultipartFile file);
	String uploadVideo(MultipartFile file);
	
	ResponseEntity<ByteArrayResource> getImage(String filename);
	ResponseEntity<ByteArrayResource> getAudio(String filename);
	ResponseEntity<ByteArrayResource> getVideo(String filename);
	
	ResponseEntity<Resource> downloadImage(String filename);
	ResponseEntity<Resource> downloadAudio(String filename);
	ResponseEntity<Resource> downloadVideo(String filename);
}
