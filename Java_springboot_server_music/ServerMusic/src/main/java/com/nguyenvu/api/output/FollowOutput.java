package com.nguyenvu.api.output;

import java.util.ArrayList;
import java.util.List;

import com.nguyenvu.dto.xFollowDTO;

public class FollowOutput {

	private int page;
	private int totalPage;
	private List<xFollowDTO> listResult = new ArrayList<>();
	
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
	public List<xFollowDTO> getListResult() {
		return listResult;
	}
	public void setListResult(List<xFollowDTO> listResult) {
		this.listResult = listResult;
	}
	
	
}
