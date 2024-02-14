package com.nguyenvu.converter;

import org.springframework.stereotype.Controller;

import com.nguyenvu.dto.xPlaylistSongDTO;
import com.nguyenvu.entities.xPlaylistSongEntity;

@Controller
public class PlaylistSongConverter {

	public xPlaylistSongEntity toEntity(xPlaylistSongDTO dto) {
		xPlaylistSongEntity entity = new xPlaylistSongEntity();
		

		
		return entity;
	}
	
	public xPlaylistSongDTO toDTO(xPlaylistSongEntity entity) {
		xPlaylistSongDTO dto = new xPlaylistSongDTO();
		if(entity.getId() != null) {
			dto.setId(entity.getId());
		}
		
		dto.setSongID(entity.getSongplaylist().getId());
		dto.setPlaylistID(entity.getPlaylist2song().getId());
		
		dto.setCreatedBy(entity.getCreatedBy());
		dto.setCreatedDate(entity.getCreatedDate());
		dto.setModifiedBy(entity.getModifiedBy());
		dto.setModifiedDate(entity.getModifiedDate());
		return dto;
	}
	
	public xPlaylistSongEntity toEntity(xPlaylistSongDTO dto, xPlaylistSongEntity entity ) {
		

		
		return entity;
	}
}
