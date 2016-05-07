package com.jimmy.experimentals.springmvctest.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
	
	@RequestMapping("/")
	public String showHome() {
		System.out.println("Showing Home Page...");
		
		return "home";
	}
	
	@RequestMapping("/customMap")
	public String showCustomMap() {
		System.out.println("Showing Leaflet Map page...");
		return "customMap";
	}
	
	@RequestMapping("/openLayersMap")
	public String showOpenLayersMap() {
		System.out.println("Showing Open Layers Map Page...");
		return "openLayersMap";
	}
	
	@RequestMapping("/employees")
	public String showEmployees() {
		System.out.println("Show Employees");
		return "employees";
	}
	
	@RequestMapping("/bootstrapTesting")
	public String showBootstrapTesting() {
		System.out.println("Show Bootstrap Testing...");
		return "bootstrapTesting";
	}
	
}
