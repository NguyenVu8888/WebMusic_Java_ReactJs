package com.nguyenvu.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.nguyenvu.converter.MvConverter;
import com.nguyenvu.dto.xMvDTO;
import com.nguyenvu.entities.xMvEntity;
import com.nguyenvu.repository.MvRepository;
import com.nguyenvu.service.IMvService;

@Service
public class MvService implements IMvService{
	
	@Autowired 
	private MvRepository mvRepository;
	
	@Autowired
	private MvConverter MvConverter;
	
	@Autowired
	private FileService fileService;

	@Override
	public List<xMvDTO> findAll() {
		List<xMvDTO> listResult = new ArrayList<>();
		List<xMvEntity> entities = mvRepository.findAll();
		for (xMvEntity item : entities) {
			xMvDTO dto = MvConverter.toDTO(item);
			listResult.add(dto);
		}
		
		return listResult;
	}

	@Override
	public List<xMvDTO> findAll(Pageable pageable) {
		List<xMvDTO> listResult = new ArrayList<>();
		List<xMvEntity> entities = mvRepository.findAll(pageable).getContent();
		for (xMvEntity item : entities) {
			xMvDTO dto = MvConverter.toDTO(item);
			listResult.add(dto);
		}
		
		return listResult;
	}

	@Override
	public xMvDTO save(String title, String description, int duration, 
			MultipartFile thumb, MultipartFile source) {
		xMvEntity entity = new xMvEntity();
		entity.setTitle(title);
		entity.setDescription(description);
		entity.setDuration(duration);
		entity.setThumb(fileService.uploadImage(thumb));
		entity.setSource(fileService.uploadVideo(source));
		entity = mvRepository.save(entity);
		return MvConverter.toDTO(entity);
	}

	@Override
	public xMvDTO update(String title, String description, int duration, 
			MultipartFile thumb, MultipartFile source,long id) {
		xMvEntity entity = mvRepository.findOne(id);
		entity.setTitle(title);
		entity.setDescription(description);
		entity.setDuration(duration);
		entity.setThumb(fileService.uploadImage(thumb));
		entity.setSource(fileService.uploadVideo(source));
		entity = mvRepository.save(entity);
		return MvConverter.toDTO(entity);
	}

	@Override
	public void delete(long id) {
		mvRepository.delete(id);
	}

	@Override
	public int totalItem() {
		return (int) mvRepository.count();
	}

	@Override
	public List<xMvDTO> searchByName(String name) {
		List<xMvDTO> listResult = new ArrayList<>();
		List<xMvEntity> entities = mvRepository.findByTitleContaining(name);
		for (xMvEntity item : entities) {
			xMvDTO dto = MvConverter.toDTO(item);
			listResult.add(dto);
		}
		
		return listResult;
	}

}
