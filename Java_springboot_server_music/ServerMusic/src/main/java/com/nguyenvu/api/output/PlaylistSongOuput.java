package com.nguyenvu.api.output;

import java.util.ArrayList;
import java.util.List;

import com.nguyenvu.dto.xPlaylistSongDTO;

public class PlaylistSongOuput {

	private int page;
	private int totalPage;
	private List<xPlaylistSongDTO> listResult = new ArrayList<>();
	
	public int getPage() {
		return page;
	}
	public void setPage(int page) {
		this.page = page;
	}
	public int getTotalPage() {
		return totalPage;
	}
	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}
	public List<xPlaylistSongDTO> getListResult() {
		return listResult;
	}
	public void setListResult(List<xPlaylistSongDTO> listResult) {
		this.listResult = listResult;
	}
	
	
}
