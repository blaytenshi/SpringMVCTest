package com.jimmy.experimentals.springmvctest.bean;

import java.time.LocalDateTime;

public class Employee {
	private int id;
	private String name;
	private LocalDateTime createdDateTime;
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public LocalDateTime getCreatedDate() {
		return createdDateTime;
	}
	
	public void setCreatedDate(LocalDateTime createdDateTime) {
		this.createdDateTime = createdDateTime;
	}
}
