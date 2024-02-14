package com.nguyenvu.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "artist")
public class xArtistEntity extends BaseEntity{

	@Column(name = "name")
	private String name;
	
	@Column(name = "image")
	private String image;
	
	@Column(name = "gerne")
	private String gerne;
	
	@OneToMany(mappedBy = "artistFollow")
	private List<xFollowEntity> follows = new ArrayList<>();
	
	@OneToMany(mappedBy = "artistAlbum")
	private List<xAlbumEntity> albums = new ArrayList<>();

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

	public String getGerne() {
		return gerne;
	}

	public void setGerne(String gerne) {
		this.gerne = gerne;
	}

	public List<xFollowEntity> getFollows() {
		return follows;
	}

	public void setFollows(List<xFollowEntity> follows) {
		this.follows = follows;
	}

	public List<xAlbumEntity> getAlbums() {
		return albums;
	}

	public void setAlbums(List<xAlbumEntity> albums) {
		this.albums = albums;
	}
	
	
}
