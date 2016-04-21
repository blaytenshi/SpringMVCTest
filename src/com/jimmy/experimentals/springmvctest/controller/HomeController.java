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
	
}
