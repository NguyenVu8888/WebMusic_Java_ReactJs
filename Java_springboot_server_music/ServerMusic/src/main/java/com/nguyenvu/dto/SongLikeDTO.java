package com.nguyenvu.dto;

import java.math.BigInteger;

public class SongLikeDTO {

	BigInteger likeid;
	BigInteger songid;
	String name;
	String artist;
	int duration;
	String gerne;
	String image;
	String path;
	
	
	public BigInteger getLikeid() {
		return likeid;
	}
	public void setLikeid(BigInteger likeid) {
		this.likeid = likeid;
	}
	public BigInteger getSongid() {
		return songid;
	}
	public void setSongid(BigInteger songid) {
		this.songid = songid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getArtist() {
		return artist;
	}
	public void setArtist(String artist) {
		this.artist = artist;
	}
	public int getDuration() {
		return duration;
	}
	public void setDuration(int duration) {
		this.duration = duration;
	}
	public String getGerne() {
		return gerne;
	}
	public void setGerne(String gerne) {
		this.gerne = gerne;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getPath() {
		return path;
	}
	public void setPath(String path) {
		this.path = path;
	}
	
}
