package com.nguyenvu.entities;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "follow")
public class xFollowEntity extends BaseEntity{


	@ManyToOne
	@JoinColumn(name = "userID")
	private xUserEntity userFollow;
	
	@ManyToOne
	@JoinColumn(name = "artistID")
	private xArtistEntity artistFollow;

	public xUserEntity getUserFollow() {
		return userFollow;
	}

	public void setUserFollow(xUserEntity userFollow) {
		this.userFollow = userFollow;
	}

	public xArtistEntity getArtistFollow() {
		return artistFollow;
	}

	public void setArtistFollow(xArtistEntity artistFollow) {
		this.artistFollow = artistFollow;
	}
	
	

}
