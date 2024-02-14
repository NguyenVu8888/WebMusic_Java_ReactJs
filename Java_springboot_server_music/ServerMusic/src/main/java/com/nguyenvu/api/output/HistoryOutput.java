package com.nguyenvu.api.output;

import java.util.ArrayList;
import java.util.List;

import com.nguyenvu.dto.xHistoryDTO;

public class HistoryOutput {

	private int page;
	private int totalPage;
	private List<xHistoryDTO> listResult = new ArrayList<>();
	
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
	public List<xHistoryDTO> getListResult() {
		return listResult;
	}
	public void setListResult(List<xHistoryDTO> listResult) {
		this.listResult = listResult;
	}
	
	
}
