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
	
}
