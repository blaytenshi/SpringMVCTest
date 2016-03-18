package com.jimmy.experimentals.springmvctest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jimmy.experimentals.springmvctest.bean.Employee;
import com.jimmy.experimentals.springmvctest.dao.EmployeeDao;

@Service("employeeService")
public class EmployeeServiceImpl implements EmployeeService {
	
	@Autowired
	private EmployeeDao employeeDao;

	@Override
	public List<Employee> getEmployees() {
		return employeeDao.getEmployees();
	}

}
