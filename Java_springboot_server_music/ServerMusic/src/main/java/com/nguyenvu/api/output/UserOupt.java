package com.nguyenvu.api.output;

import java.util.ArrayList;
import java.util.List;

import com.nguyenvu.dto.xUserDTO;

public class UserOupt {

	private int page;
	private int totalPage;
	private List<xUserDTO> listResult = new ArrayList<>();
	
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
	public List<xUserDTO> getListResult() {
		return listResult;
	}
	public void setListResult(List<xUserDTO> listResult) {
		this.listResult = listResult;
	}
	
	
}
