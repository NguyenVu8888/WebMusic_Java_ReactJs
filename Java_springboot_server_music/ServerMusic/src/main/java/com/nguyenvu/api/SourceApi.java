package com.nguyenvu.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nguyenvu.service.impl.FileService;

@RestController
@RequestMapping("/files")
public class SourceApi {
	
	@Autowired
	private FileService fileService;
	
	@GetMapping(value = "/image/{filename}")
	public ResponseEntity<ByteArrayResource> getImage(@PathVariable("filename") String filename){
				return fileService.getImage(filename);
			}
	
	@GetMapping(value = "/audio/{filename}")
	public ResponseEntity<ByteArrayResource> getAudio(@PathVariable("filename") String filename){
				return fileService.getAudio(filename);
			}
	
	@GetMapping(value = "/video/{filename}")
	public ResponseEntity<ByteArrayResource> getVideo(@PathVariable("filename") String filename){
				return fileService.getVideo(filename);
			}
	
	// download link
	
	@GetMapping(value = "/image/download/{filename}")
	public ResponseEntity<Resource> downloadFileImage(@PathVariable("filename") String filename){
		 		return fileService.downloadImage(filename);
	        }
	
	
	@GetMapping(value = "/audio/download/{filename}")
	public ResponseEntity<Resource> downloadFileAudio(@PathVariable("filename") String filename){
				return fileService.downloadAudio(filename);
			}
	
	@GetMapping(value = "/video/download/{filename}")
	public ResponseEntity<Resource> downloadFileVideo(@PathVariable("filename") String filename){
				return fileService.downloadVideo(filename);
			}
	
}
