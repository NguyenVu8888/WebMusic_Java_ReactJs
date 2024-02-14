package com.nguyenvu.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class xUserEntity extends BaseEntity{

	@Column(name = "username")
	private String username;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "fullname")
	private String fullname;
	
	@Column(name = "image")
	private String image;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "status")
	private Integer status;
	
	@ManyToOne
	@JoinColumn(name = "role_id")
	private xRoleEntity role;
	
	@OneToMany(mappedBy = "userFollow")
	private List<xFollowEntity> follows = new ArrayList<>();
	
	@OneToMany(mappedBy = "userHistory")
	private List<xHistoryEntity> histories = new ArrayList<>();
	
	@OneToMany(mappedBy = "userLike")
	private List<xLikeEntity> likes = new ArrayList<>();
	
	@OneToMany(mappedBy = "userPlaylist")
	private List<xPlaylistEntity> playlists = new ArrayList<>();
	
	@OneToMany(mappedBy = "userNotification")
	private List<xNotificationEntity> notifications = new ArrayList<>();

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}



	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public xRoleEntity getRole() {
		return role;
	}

	public void setRole(xRoleEntity role) {
		this.role = role;
	}

	public List<xFollowEntity> getFollows() {
		return follows;
	}

	public void setFollows(List<xFollowEntity> follows) {
		this.follows = follows;
	}

	public List<xHistoryEntity> getHistories() {
		return histories;
	}

	public void setHistories(List<xHistoryEntity> histories) {
		this.histories = histories;
	}

	public List<xLikeEntity> getLikes() {
		return likes;
	}

	public void setLikes(List<xLikeEntity> likes) {
		this.likes = likes;
	}

	public List<xPlaylistEntity> getPlaylists() {
		return playlists;
	}

	public void setPlaylists(List<xPlaylistEntity> playlists) {
		this.playlists = playlists;
	}

	public List<xNotificationEntity> getNotifications() {
		return notifications;
	}

	public void setNotifications(List<xNotificationEntity> notifications) {
		this.notifications = notifications;
	}


	
	
	
	
}
