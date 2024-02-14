package com.nguyenvu.service.impl;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.nguyenvu.service.IFileService;

@Service
public class FileService implements IFileService{

	@Value("${file.upload-path-image}")
	private String uploadPathImage;
	
	@Value("${file.upload-path-audio}")
	private String uploadPathAudio;
	
	@Value("${file.upload-path-video}")
	private String uploadPathVideo;
	
	
	@Override
	public String uploadImage(MultipartFile file) {
		String originalFileName = file.getOriginalFilename();
		String targetPath = uploadPathImage + "/" + originalFileName;
		try {
			if(!Files.exists(Paths.get(uploadPathImage))) {
				Files.createDirectories(Paths.get(uploadPathImage));
			}
//     		Files.copy(file.getInputStream(), Paths.get(targetPath),StandardCopyOption.REPLACE_EXISTING);	
//			file.transferTo(new File(targetPath));
			
			OutputStream out = null;
			try {
	            out = new FileOutputStream(targetPath);
	            byte[] dataBytes = file.getBytes();
	            out.write(dataBytes);
	        }
	        catch (Exception e) {
	            e.getStackTrace();
	        }finally {
	            out.close();
	        }
			return originalFileName;
		} catch (IOException e) {
			throw new RuntimeException();
		}
	}

	@Override
	public String uploadAudio(MultipartFile file) {
		String originalFileName = file.getOriginalFilename();
		String targetPath = uploadPathAudio + "/" + originalFileName;
		try {
			if(!Files.exists(Paths.get(uploadPathAudio))) {
				Files.createDirectories(Paths.get(uploadPathAudio));
			}
			OutputStream out = null;
			try {
	            out = new FileOutputStream(targetPath);
	            byte[] dataBytes = file.getBytes();
	            out.write(dataBytes);
	        }
	        catch (Exception e) {
	            e.getStackTrace();
	        }finally {
	            out.close();
	        }
			return originalFileName;
		} catch (IOException e) {
			throw new RuntimeException();
		}
	}

	@Override
	public String uploadVideo(MultipartFile file) {
		String originalFileName = file.getOriginalFilename();
		String targetPath = uploadPathVideo + "/" + originalFileName;
		try {
			if(!Files.exists(Paths.get(uploadPathVideo))) {
				Files.createDirectories(Paths.get(uploadPathVideo));
			}
			OutputStream out = null;
			try {
	            out = new FileOutputStream(targetPath);
	            byte[] dataBytes = file.getBytes();
	            out.write(dataBytes);
	        }
	        catch (Exception e) {
	            e.getStackTrace();
	        }finally {
	            out.close();
	        }
			return originalFileName;
		} catch (IOException e) {
			throw new RuntimeException();
		}
	}
	
	
	////////////////// get image/audio/video

	@Override
	public ResponseEntity<ByteArrayResource> getImage(String filename) {
		if( !filename.equals("") || filename != null) {
			String targetPath = System.getProperty("user.dir") + "/" + uploadPathImage;
//			System.out.println(targetPath);
			String filepath = filename + ".JPG";
			try {
				Path path = Paths.get(targetPath,filepath);
//				System.out.println(path);
				byte[] image = Files.readAllBytes(path);
				ByteArrayResource arrayResource = new ByteArrayResource(image);
				return ResponseEntity.ok()
						.contentLength(image.length)
//						.contentType(MediaType.IMAGE_JPEG)
						.contentType(MediaType.parseMediaType(Files.probeContentType(path)))
						.body(arrayResource);
			} catch (Exception e) {
				e.getMessage();
			}	
		}
		return ResponseEntity.badRequest().build();
	}

	@Override
	public ResponseEntity<ByteArrayResource> getAudio(String filename) {
		if( !filename.equals("") || filename != null) {
			String targetPath = System.getProperty("user.dir") + "/" + uploadPathAudio;
			String filepath = filename + ".mp3";
			try {
				Path path = Paths.get(targetPath,filepath);
				byte[] image = Files.readAllBytes(path);
				ByteArrayResource arrayResource = new ByteArrayResource(image);
				return ResponseEntity.ok()
						.contentLength(image.length)
						.contentType(MediaType.parseMediaType(Files.probeContentType(path)))
						.body(arrayResource);
			} catch (Exception e) {
				e.getMessage();
			}	
		}
		return ResponseEntity.badRequest().build();
	}

	@Override
	public ResponseEntity<ByteArrayResource> getVideo(String filename) {
		if( !filename.equals("") || filename != null) {
			String targetPath = System.getProperty("user.dir") + "/" + uploadPathVideo;
			String filepath = filename + ".mp4";
			try {
				Path path = Paths.get(targetPath,filepath);
				byte[] image = Files.readAllBytes(path);
				ByteArrayResource arrayResource = new ByteArrayResource(image);
				return ResponseEntity.ok()
						.contentLength(image.length)
						.contentType(MediaType.parseMediaType(Files.probeContentType(path)))
						.body(arrayResource);
			} catch (Exception e) {
				e.getMessage();
			}	
		}
		return ResponseEntity.badRequest().build();
	}

	
	//////////////   download image/audio/video
	
	
	@Override
	public ResponseEntity<Resource> downloadImage(String filename) {
		String targetPath = System.getProperty("user.dir") + "/" + uploadPathImage;
		String name = filename + ".JPG";
		Path filePath = Paths.get(targetPath, name);
		
		Resource resource = null;
		try {
			resource = new UrlResource(filePath.toUri());
		} catch (MalformedURLException e1) {
			e1.printStackTrace();
		}
		HttpHeaders headers = new HttpHeaders();
		headers.add("File-Name", filename);
		headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment;File-Name=" + resource.getFilename());
		try {
			return ResponseEntity.ok().contentType(MediaType.parseMediaType(Files.probeContentType(filePath)))
					.headers(headers)
					.body(resource);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return ResponseEntity.badRequest().build();
	}

	@Override
	public ResponseEntity<Resource> downloadAudio(String filename) {
		String targetPath = System.getProperty("user.dir") + "/" + uploadPathAudio;
		String name = filename + ".mp3";
		Path filePath = Paths.get(targetPath, name);
		
		Resource resource = null;
		try {
			resource = new UrlResource(filePath.toUri());
		} catch (MalformedURLException e1) {
			e1.printStackTrace();
		}
		HttpHeaders headers = new HttpHeaders();
		headers.add("File-Name", filename);
		headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment;File-Name=" + resource.getFilename());
		try {
			return ResponseEntity.ok().contentType(MediaType.parseMediaType(Files.probeContentType(filePath)))
					.headers(headers)
					.body(resource);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return ResponseEntity.badRequest().build();
	}

	@Override
	public ResponseEntity<Resource> downloadVideo(String filename) {
		String targetPath = System.getProperty("user.dir") + "/" + uploadPathVideo;
		String name = filename + ".mp4";
		Path filePath = Paths.get(targetPath, name);
		
		Resource resource = null;
		try {
			resource = new UrlResource(filePath.toUri());
		} catch (MalformedURLException e1) {
			e1.printStackTrace();
		}
		HttpHeaders headers = new HttpHeaders();
		headers.add("File-Name", filename);
		headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment;File-Name=" + resource.getFilename());
		try {
			return ResponseEntity.ok().contentType(MediaType.parseMediaType(Files.probeContentType(filePath)))
					.headers(headers)
					.body(resource);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return ResponseEntity.badRequest().build();
	}

}
