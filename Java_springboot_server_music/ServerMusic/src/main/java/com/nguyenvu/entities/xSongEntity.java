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
@Table(name = "songs")
public class xSongEntity extends BaseEntity{

	@Column( name = "name")
	private String name;
	
	@Column( name = "image")
	private String image;
	
	@Column( name = "artist")
	private String artist;
	
	@Column( name = "gerne")
	private String gerne;
	
	@Column( name = "duration")
	private Integer duration;
	
	@Column( name = "path")
	private String path;
	
	@ManyToOne
	@JoinColumn(name = "albumID")
	private xAlbumEntity albumSong;
	
	@OneToMany(mappedBy = "songHistory")
	private List<xHistoryEntity> histories = new ArrayList<>();
	
	@OneToMany(mappedBy = "songLike")
	private List<xLikeEntity> likes = new ArrayList<>();
	
	@OneToMany(mappedBy = "songplaylist")
	private List<xPlaylistSongEntity> playlists = new ArrayList<>();

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

	public String getArtist() {
		return artist;
	}

	public void setArtist(String artist) {
		this.artist = artist;
	}

	public String getGerne() {
		return gerne;
	}

	public void setGerne(String gerne) {
		this.gerne = gerne;
	}

	public Integer getDuration() {
		return duration;
	}

	public void setDuration(Integer duration) {
		this.duration = duration;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public xAlbumEntity getAlbumSong() {
		return albumSong;
	}

	public void setAlbumSong(xAlbumEntity albumSong) {
		this.albumSong = albumSong;
	}

	public List<xHistoryEntity> getHistories() {
		return histories;
	}

	public void setHistories(List<xHistoryEntity> histories) {
		this.histories = histories;
	}

	public List<xLikeEntity> getLikes() {
		return likes;
	}

	public void setLikes(List<xLikeEntity> likes) {
		this.likes = likes;
	}

	public List<xPlaylistSongEntity> getPlaylists() {
		return playlists;
	}

	public void setPlaylists(List<xPlaylistSongEntity> playlists) {
		this.playlists = playlists;
	}
	
	
	
	
}
