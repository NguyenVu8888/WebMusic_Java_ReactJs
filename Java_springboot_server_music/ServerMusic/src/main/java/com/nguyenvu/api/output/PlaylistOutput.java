package com.nguyenvu.api.output;

import java.util.ArrayList;
import java.util.List;

import com.nguyenvu.dto.xPlaylistDTO;

public class PlaylistOutput {

	private int page;
	private int totalPage;
	private List<xPlaylistDTO> listResult = new ArrayList<>();
	
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
	public List<xPlaylistDTO> getListResult() {
		return listResult;
	}
	public void setListResult(List<xPlaylistDTO> listResult) {
		this.listResult = listResult;
	}
	
	
}
