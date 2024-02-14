package com.nguyenvu.entities;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "likesong")
public class xLikeEntity extends BaseEntity{

	@ManyToOne
	@JoinColumn(name = "userID")
	private xUserEntity userLike;
	
	@ManyToOne
	@JoinColumn(name ="songID")
	private xSongEntity songLike;

	public xUserEntity getUserLike() {
		return userLike;
	}

	public void setUserLike(xUserEntity userLike) {
		this.userLike = userLike;
	}

	public xSongEntity getSongLike() {
		return songLike;
	}

	public void setSongLike(xSongEntity songLike) {
		this.songLike = songLike;
	}

	
}
