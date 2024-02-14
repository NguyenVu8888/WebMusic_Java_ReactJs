package com.nguyenvu.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "playlist")
public class xPlaylistEntity extends BaseEntity{

	@Column(name = "name")
	private String name;
	
	@Column(name = "image")
	private String image;
	
	@ManyToOne
	@JoinColumn(name = "userID")
	private xUserEntity userPlaylist;
	
	@OneToMany(mappedBy = "playlist2song")
	private List<xPlaylistSongEntity> playlistSongs = new ArrayList<>();

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public xUserEntity getUserPlaylist() {
		return userPlaylist;
	}

	public void setUserPlaylist(xUserEntity userPlaylist) {
		this.userPlaylist = userPlaylist;
	}

	public List<xPlaylistSongEntity> getPlaylistSongs() {
		return playlistSongs;
	}

	public void setPlaylistSongs(List<xPlaylistSongEntity> playlistSongs) {
		this.playlistSongs = playlistSongs;
	}
	
	
}
