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

import com.nguyenvu.converter.SongConverter;
import com.nguyenvu.dto.SongLikeDTO;
import com.nguyenvu.dto.SongPurposeDTO;
import com.nguyenvu.dto.SuggestSongDTO;
import com.nguyenvu.dto.songHistoryDTO;
import com.nguyenvu.dto.songRankDTO;
import com.nguyenvu.dto.xSongDTO;
import com.nguyenvu.entities.xSongEntity;
import com.nguyenvu.repository.AlbumRepository;
import com.nguyenvu.repository.SongRepository;
import com.nguyenvu.service.ISongService;

@Service
public class SongService implements ISongService{
	
	@Autowired
	private SongRepository songRepository;
	
	@Autowired 
	private SongConverter songConverter;
	
	@Autowired
	private AlbumRepository albumRepository;
	
	@Autowired
	private FileService fileService;

	@Override
	public List<xSongDTO> findAll() {
		List<xSongDTO> listResult = new ArrayList<>();
		List<xSongEntity> entities = songRepository.findAll();
		for (xSongEntity item : entities) {
			xSongDTO dto = songConverter.toDTO(item);
			listResult.add(dto);
			
		}
		return listResult;
	}

	@Override
	public List<xSongDTO> findAll(Pageable pageable) {
		List<xSongDTO> listResult = new ArrayList<>();
		List<xSongEntity> entities = songRepository.findAll(pageable).getContent();
		for (xSongEntity item : entities) {
			xSongDTO dto = songConverter.toDTO(item);
			listResult.add(dto);
			
		}
		return listResult;
	}

	@Override
	public xSongDTO save(String name, MultipartFile image, String nameArtist, String gerne, int duration,
			MultipartFile source) {
		xSongEntity entity = new xSongEntity();
		entity.setName(name);
		entity.setImage(fileService.uploadImage(image));
		entity.setArtist(nameArtist);
		entity.setGerne(gerne);
		entity.setDuration(duration);
		entity.setPath(fileService.uploadAudio(source));
		entity = songRepository.save(entity);
		return songConverter.toDTO(entity);
	}

	@Override
	public xSongDTO update(String name, MultipartFile image, String nameArtist, String gerne, int duration,
			MultipartFile source, String nameAlbum, long id) {
		xSongEntity entity = songRepository.findOne(id);
		entity.setName(name);
		entity.setImage(fileService.uploadImage(image));
		entity.setArtist(nameArtist);
		entity.setGerne(gerne);
		entity.setDuration(duration);
		entity.setPath(fileService.uploadAudio(source));
		entity.setAlbumSong(albumRepository.findByName(nameAlbum));
		entity = songRepository.save(entity);
		return songConverter.toDTO(entity);
	}

	@Override
	public void delete(long id) {
		songRepository.delete(id);
	}

	@Override
	public int totalItem() {
		return (int) songRepository.count();
	}

	@Override
	public List<xSongDTO> searchByName(String name) {
		List<xSongDTO> listResult = new ArrayList<>();
		List<xSongEntity> entities = songRepository.findByNameContaining(name);
		for (xSongEntity item : entities) {
			xSongDTO dto = songConverter.toDTO(item);
			listResult.add(dto);
			
		}
		return listResult;
	}

	@Override
	public List<xSongDTO> searchByAlbum(long id) {
		List<xSongDTO> listResult = new ArrayList<>();
		List<xSongEntity> entities = songRepository.findByAlbumid(id);
		for (xSongEntity item : entities) {
			xSongDTO dto = songConverter.toDTO(item);
			listResult.add(dto);
			
		}
		return listResult;
	}

	@Override
	public List<xSongDTO> searchByGerne(String gerne) {
		List<xSongDTO> listResult = new ArrayList<>();
		List<xSongEntity> entities = songRepository.findByGerne(gerne);
		for (xSongEntity item : entities) {
			xSongDTO dto = songConverter.toDTO(item);
			listResult.add(dto);
			
		}
		return listResult;
	}

	@Override
	public List<xSongDTO> searchByArtist(String nameArtist) {
		List<xSongDTO> listResult = new ArrayList<>();
		List<xSongEntity> entities = songRepository.findByArtist(nameArtist);
		for (xSongEntity item : entities) {
			xSongDTO dto = songConverter.toDTO(item);
			listResult.add(dto);
			
		}
		return listResult;
	}

	@Override
	public List<songRankDTO> rankSong() {
		List<songRankDTO> listResult = new ArrayList<>();
     	List<Object> entities = songRepository.rankSong();
     	Iterator itr = entities.iterator();
		while(itr.hasNext()) {
			songRankDTO dto = new songRankDTO();
			Object[] obj = (Object[]) itr.next();
			dto.setSongid((BigInteger) obj[0]) ;
			dto.setCount((BigInteger) obj[1]);
			dto.setName((String) obj[2]);
			dto.setArtist((String) obj[3]);
			dto.setDuration((int) obj[4]);
			dto.setGerne((String) obj[5]);
			dto.setImage((String) obj[6]);
			dto.setPath((String) obj[7]);			
			listResult.add(dto);
		}
		return listResult;
	}

	@Override
	public List<xSongDTO> songNew() {
		List<xSongDTO> listResult = new ArrayList<>();
		List<xSongEntity> entities = songRepository.findSongNew();
		for (xSongEntity item : entities) {
			xSongDTO dto = songConverter.toDTO(item);
			listResult.add(dto);
		}
		return listResult;
	}

	@Override
	public List<xSongDTO> listGerne() {
		List<xSongDTO> listResult = new ArrayList<>();
		List<xSongEntity> entities = songRepository.listGerne();
		for (xSongEntity item : entities) {
			xSongDTO dto = songConverter.toDTO(item);
			listResult.add(dto);
		}
		return listResult;
	}

	@Override
	public List<songHistoryDTO> listHistorySong(long id) {
		List<songHistoryDTO> listResult = new ArrayList<>();
     	List<Object> entities = songRepository.historySong(id);
     	Iterator itr = entities.iterator();
		while(itr.hasNext()) {
			songHistoryDTO dto = new songHistoryDTO();
			Object[] obj = (Object[]) itr.next();
			dto.setHistoryid((BigInteger) obj[0]);
			dto.setSongid((BigInteger) obj[1]);
			dto.setName((String) obj[2]);
			dto.setArtist((String) obj[3]);
			dto.setGerne((String) obj[4]);
			dto.setDuration((int) obj[5]);
			dto.setImage((String) obj[6]);
			dto.setPath((String) obj[7]);
			dto.setPlaydate((Timestamp) obj[8]) ;
			listResult.add(dto);
		}
		return listResult;
	}

	@Override
	public List<SuggestSongDTO> listSuggestSong(long id) {
		List<SuggestSongDTO> listResult = new ArrayList<>();
     	List<Object> entities = songRepository.suggestSong(id);
     	Iterator itr = entities.iterator();
		while(itr.hasNext()) {
			SuggestSongDTO dto = new SuggestSongDTO();
			Object[] obj = (Object[]) itr.next();
			dto.setId((BigInteger) obj[0]) ;
			dto.setName((String) obj[1]);
			dto.setArtist((String) obj[2]);
			dto.setGerne((String) obj[3]);
			dto.setDuration((int) obj[4]);
			dto.setImage((String) obj[5]);
			dto.setPath((String) obj[6]);
			listResult.add(dto);
		}
		return listResult;
	}

	@Override
	public List<SongLikeDTO> listLikeSong(long id) {
		List<SongLikeDTO> listResult = new ArrayList<>();
     	List<Object> entities = songRepository.listLikeSong(id);
     	Iterator itr = entities.iterator();
		while(itr.hasNext()) {
			SongLikeDTO dto = new SongLikeDTO();
			Object[] obj = (Object[]) itr.next();
			dto.setLikeid((BigInteger) obj[0]);
			dto.setSongid((BigInteger) obj[1]);
			dto.setName((String) obj[2]);
			dto.setArtist((String) obj[3]);
			dto.setGerne((String) obj[4]);
			dto.setDuration((int) obj[5]);
			dto.setImage((String) obj[6]);
			dto.setPath((String) obj[7]);
			listResult.add(dto);
		}
		return listResult;
	}

	@Override
	public List<SongPurposeDTO> listDXSong() {
		List<SongPurposeDTO> listResult = new ArrayList<>();
     	List<Object> entities = songRepository.listDXSong();
     	Iterator itr = entities.iterator();
		while(itr.hasNext()) {
			SongPurposeDTO dto = new SongPurposeDTO();
			Object[] obj = (Object[]) itr.next();
			dto.setId((BigInteger) obj[0]) ;
			dto.setName((String) obj[1]);
			dto.setArtist((String) obj[2]);
			dto.setGerne((String) obj[3]);
			dto.setDuration((int) obj[4]);
			dto.setImage((String) obj[5]);
			dto.setPath((String) obj[6]);
			listResult.add(dto);
		}
		return listResult;
	}

	
}
