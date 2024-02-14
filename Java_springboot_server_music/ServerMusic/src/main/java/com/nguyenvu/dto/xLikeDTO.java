package com.nguyenvu.dto;

public class xLikeDTO extends BaseDTO<xLikeDTO>{

	private String nameSong;
	private long userID;
	private long songID;
	
	
	public String getNameSong() {
		return nameSong;
	}
	public void setNameSong(String nameSong) {
		this.nameSong = nameSong;
	}
	public long getUserID() {
		return userID;
	}
	public void setUserID(long userID) {
		this.userID = userID;
	}
	public long getSongID() {
		return songID;
	}
	public void setSongID(long songID) {
		this.songID = songID;
	}
	
}
