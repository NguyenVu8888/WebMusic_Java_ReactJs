package com.nguyenvu.dto;

import java.util.Date;

public class xAlbumDTO extends BaseDTO<xAlbumDTO>{

	private String name;
	private Date releaseDate;
	private String image;
	private long artistID;
	
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
	public long getArtistID() {
		return artistID;
	}
	public void setArtistID(long artistID) {
		this.artistID = artistID;
	}
	
	
	
}
