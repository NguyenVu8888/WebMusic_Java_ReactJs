package com.nguyenvu.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "history")
public class xHistoryEntity extends BaseEntity{

	@Column(name = "playdate")
	private Date playDate;
	
	@ManyToOne
	@JoinColumn(name = "userID")
	private xUserEntity userHistory;
	
	@ManyToOne
	@JoinColumn(name = "songID")
	private xSongEntity songHistory;

	public Date getPlayDate() {
		return playDate;
	}

	public void setPlayDate(Date playDate) {
		this.playDate = playDate;
	}

	public xUserEntity getUserHistory() {
		return userHistory;
	}

	public void setUserHistory(xUserEntity userHistory) {
		this.userHistory = userHistory;
	}

	public xSongEntity getSongHistory() {
		return songHistory;
	}

	public void setSongHistory(xSongEntity songHistory) {
		this.songHistory = songHistory;
	}
	
	
}
