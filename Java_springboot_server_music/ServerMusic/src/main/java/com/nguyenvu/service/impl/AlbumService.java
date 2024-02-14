package com.nguyenvu.service.impl;

import java.math.BigInteger;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.nguyenvu.converter.AlbumConverter;
import com.nguyenvu.dto.SuggestAlbumDTO;
import com.nguyenvu.dto.SuggestSongDTO;
import com.nguyenvu.dto.xAlbumDTO;
import com.nguyenvu.entities.xAlbumEntity;
import com.nguyenvu.entities.xArtistEntity;
import com.nguyenvu.entities.xSongEntity;
import com.nguyenvu.repository.AlbumRepository;
import com.nguyenvu.repository.ArtistRepository;
import com.nguyenvu.repository.SongRepository;
import com.nguyenvu.service.IAlbumService;

@Service
public class AlbumService implements IAlbumService{

	@Autowired
	private AlbumRepository albumRepository;
	
	@Autowired
	private AlbumConverter albumConverter;
	
	@Autowired
	private FileService fileService;
	
	@Autowired
	private ArtistRepository artistRepository;
	
	@Autowired
	private SongRepository songRepository;
	
	@Override
	public List<xAlbumDTO> findAll() {
		List<xAlbumDTO> listResult = new ArrayList<>();
		List<xAlbumEntity> entities = albumRepository.findAll();
		for (xAlbumEntity item : entities) {
			xAlbumDTO dto = albumConverter.toDTO(item);
			listResult.add(dto);
			
		}
		return listResult;
	}

	@Override
	public List<xAlbumDTO> findAll(Pageable pageable) {
		List<xAlbumDTO> listResult = new ArrayList<>();
		List<xAlbumEntity> entities = albumRepository.findAll(pageable).getContent();
		for (xAlbumEntity item : entities) {
			xAlbumDTO dto = albumConverter.toDTO(item);
			listResult.add(dto);
			
		}
		return listResult;
	}

	@Override
	public xAlbumDTO save(String name, MultipartFile image, String nameArtist ) {
		long millis=System.currentTimeMillis();   
		java.sql.Date date=new java.sql.Date(millis);
		
		xAlbumEntity albumEntity = new xAlbumEntity();
		albumEntity.setName(name);
		albumEntity.setReleaseDate(date);
		albumEntity.setImage(fileService.uploadImage(image));
		xArtistEntity artistEntity = artistRepository.findByName(nameArtist);
		albumEntity.setArtistAlbum(artistEntity);
		albumEntity = albumRepository.save(albumEntity);
		return albumConverter.toDTO(albumEntity);
	}

	@Override
	public xAlbumDTO update(String name, MultipartFile image, String nameArtist, long id) {
		long millis=System.currentTimeMillis();   
		java.sql.Date date=new java.sql.Date(millis);
		
		xAlbumEntity albumEntity = albumRepository.findOne(id);
		albumEntity.setName(name);
		albumEntity.setReleaseDate(date);
		albumEntity.setImage(fileService.uploadImage(image));
		xArtistEntity artistEntity = artistRepository.findByName(nameArtist);
		albumEntity.setArtistAlbum(artistEntity);
		List<xSongEntity> listSong = songRepository.findByAlbumid(id);
		albumEntity.setSongs(listSong);
		albumEntity = albumRepository.save(albumEntity);
		
		return albumConverter.toDTO(albumEntity);
	}

	@Override
	public void delete(long id) {
		albumRepository.delete(id);;
	}

	@Override
	public int totalItem() {
		return (int) albumRepository.count();
	}

	@Override
	public List<xAlbumDTO> searchByName(String name) {
		List<xAlbumDTO> listResult = new ArrayList<>();
		List<xAlbumEntity> entities = albumRepository.findByNameContaining(name);
		for (xAlbumEntity item : entities) {
			xAlbumDTO dto = albumConverter.toDTO(item);
			listResult.add(dto);
			
		}
		return listResult;
	}

	@Override
	public List<SuggestAlbumDTO> listAlbumSuggest(long id) {
		List<SuggestAlbumDTO> listResult = new ArrayList<>();
     	List<Object> entities = albumRepository.suggestAlbum(id);
     	Iterator itr = entities.iterator();
		while(itr.hasNext()) {
			SuggestAlbumDTO dto = new SuggestAlbumDTO();
			Object[] obj = (Object[]) itr.next();
			dto.setAlbumID((BigInteger) obj[0]) ;
			dto.setName((String) obj[1]);
			dto.setImage((String) obj[2]);
			dto.setReleaseDate((Timestamp) obj[3]);
			listResult.add(dto);
		}
		return listResult;
	}

}
