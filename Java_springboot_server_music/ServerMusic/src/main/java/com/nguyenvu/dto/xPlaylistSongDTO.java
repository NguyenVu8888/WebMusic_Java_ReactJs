package com.nguyenvu.dto;

public class xPlaylistSongDTO extends BaseDTO<xPlaylistSongDTO>{
	
	private String nameSong;
	private long playlistID;
	private long songID;
	
	
	
	public String getNameSong() {
		return nameSong;
	}
	public void setNameSong(String nameSong) {
		this.nameSong = nameSong;
	}
	public long getPlaylistID() {
		return playlistID;
	}
	public void setPlaylistID(long playlistID) {
		this.playlistID = playlistID;
	}
	public long getSongID() {
		return songID;
	}
	public void setSongID(long songID) {
		this.songID = songID;
	}
	
	

}
