package com.jimmy.experimentals.springmvctest.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.jimmy.experimentals.springmvctest.bean.Employee;
import com.jimmy.experimentals.springmvctest.service.EmployeeService;

@RestController
public class DataController {

	@Autowired
	EmployeeService employeeService;
	
	@RequestMapping(value="/getEmployees", method=RequestMethod.GET)
	public ResponseEntity<List<Employee>> listAllEmployees() {
		List<Employee> employees = employeeService.getEmployees();
		if (employees.isEmpty()) {
			return new ResponseEntity<List<Employee>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Employee>>(employees, HttpStatus.OK);
	}
	
	@RequestMapping(value="/getEmployee", method=RequestMethod.GET)
	public ResponseEntity<Employee> getEmployee() {
		Employee employee = new Employee();
		employee.setId(5);
		employee.setName("Michael");
		employee.setCreatedDate(LocalDateTime.now());
		
		return new ResponseEntity<Employee>(employee, HttpStatus.OK);
	}
}
