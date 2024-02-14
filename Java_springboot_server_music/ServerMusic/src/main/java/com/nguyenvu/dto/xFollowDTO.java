package com.nguyenvu.dto;

public class xFollowDTO extends BaseDTO<xFollowDTO>{

	private String nameArtist;
	private long userID;
	private long artistID;
	
	public String getNameArtist() {
		return nameArtist;
	}
	public void setNameArtist(String nameArtist) {
		this.nameArtist = nameArtist;
	}
	public long getUserID() {
		return userID;
	}
	public void setUserID(long userID) {
		this.userID = userID;
	}
	public long getArtistID() {
		return artistID;
	}
	public void setArtistID(long artistID) {
		this.artistID = artistID;
	}
	
}
