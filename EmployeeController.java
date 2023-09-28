package com.abin.EmployeeSystem.controller;


import com.abin.EmployeeSystem.model.Employee;
import com.abin.EmployeeSystem.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;


    @GetMapping("/employees")
    public List<Employee> getAllEmployee(){
        return employeeRepository.findAll();
    }


    @PostMapping("/add")
    public String add(@RequestBody Employee employee);

}
