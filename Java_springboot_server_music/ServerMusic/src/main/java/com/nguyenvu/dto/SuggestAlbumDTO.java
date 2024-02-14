package com.nguyenvu.dto;

import java.math.BigInteger;
import java.sql.Timestamp;

public class SuggestAlbumDTO {
	
	BigInteger albumID;
	String name;
	String image;
	Timestamp releaseDate;
	
	public BigInteger getAlbumID() {
		return albumID;
	}
	public void setAlbumID(BigInteger albumID) {
		this.albumID = albumID;
	}
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
	public Timestamp getReleaseDate() {
		return releaseDate;
	}
	public void setReleaseDate(Timestamp releaseDate) {
		this.releaseDate = releaseDate;
	}
	
	

}
