package com.nguyenvu.dto;

import java.util.Date;

public class xHistoryDTO extends BaseDTO<xHistoryDTO>{

	private String nameSong;
	private long userID;
	private long songID;
	private Date playDate;
	
	
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
	public Date getPlayDate() {
		return playDate;
	}
	public void setPlayDate(Date playDate) {
		this.playDate = playDate;
	}
	
}
