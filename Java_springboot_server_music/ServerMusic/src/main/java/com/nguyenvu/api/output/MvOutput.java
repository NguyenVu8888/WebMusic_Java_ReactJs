package com.nguyenvu.api.output;

import java.util.ArrayList;
import java.util.List;

import com.nguyenvu.dto.xMvDTO;

public class MvOutput {

	private int page;
	private int totalPage;
	private List<xMvDTO> listResult = new ArrayList<>();
	
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
	public List<xMvDTO> getListResult() {
		return listResult;
	}
	public void setListResult(List<xMvDTO> listResult) {
		this.listResult = listResult;
	}
	
	
}
