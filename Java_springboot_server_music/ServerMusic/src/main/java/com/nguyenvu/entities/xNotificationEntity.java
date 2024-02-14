package com.nguyenvu.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "notification")
public class xNotificationEntity extends BaseEntity{

	@Column(name = "title")
	private String title;
	
	@Column(name = "content", columnDefinition = "TEXT")
	private String content;
	
	@ManyToOne
	@JoinColumn(name = "userID")
	private xUserEntity userNotification;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public xUserEntity getUserNotification() {
		return userNotification;
	}

	public void setUserNotification(xUserEntity userNotification) {
		this.userNotification = userNotification;
	}
	
	
}
