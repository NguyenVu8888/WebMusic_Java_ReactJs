package com.nguyenvu.entities;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "playlistsong")
public class xPlaylistSongEntity extends BaseEntity{

	@ManyToOne
	@JoinColumn(name = "playlistID")
	private xPlaylistEntity playlist2song;
	
	@ManyToOne
	@JoinColumn(name = "SongID")
	private xSongEntity songplaylist;

	public xPlaylistEntity getPlaylist2song() {
		return playlist2song;
	}

	public void setPlaylist2song(xPlaylistEntity playlist2song) {
		this.playlist2song = playlist2song;
	}

	public xSongEntity getSongplaylist() {
		return songplaylist;
	}

	public void setSongplaylist(xSongEntity songplaylist) {
		this.songplaylist = songplaylist;
	}
	
	
}
