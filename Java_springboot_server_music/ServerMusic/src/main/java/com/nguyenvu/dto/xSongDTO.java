package com.nguyenvu.dto;

public class xSongDTO extends BaseDTO<xSongDTO>{

	private String name;
	private String image;
	private String artist;
	private String gerne;
	private Integer duration;
	private String path;
	private long albumID;
	
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
	public long getAlbumID() {
		return albumID;
	}
	public void setAlbumID(long albumID) {
		this.albumID = albumID;
	}
	
}
