package com.nguyenvu.entities;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "album")
public class xAlbumEntity extends BaseEntity{

	@Column(name = "name")
	private String name;
	
	@Column(name = "releaseDate")
	private Date releaseDate;
	
	@Column(name = "image")
	private String image;
	
	@OneToMany(mappedBy = "albumSong")
	private List<xSongEntity> songs = new ArrayList<>();
	
	@ManyToOne
	@JoinColumn(name = "artistID")
	private xArtistEntity artistAlbum;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(Date releaseDate) {
		this.releaseDate = releaseDate;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public List<xSongEntity> getSongs() {
		return songs;
	}

	public void setSongs(List<xSongEntity> songs) {
		this.songs = songs;
	}

	public xArtistEntity getArtistAlbum() {
		return artistAlbum;
	}

	public void setArtistAlbum(xArtistEntity artistAlbum) {
		this.artistAlbum = artistAlbum;
	}
	
	
}
