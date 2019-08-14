package com.usrdt.component;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Order(1)
public class CORSFilter implements Filter {

	@Override
	public void doFilter(ServletRequest request, 
		      ServletResponse resp, 
		      FilterChain chain) throws IOException, ServletException
	{
		System.out.println("Filtering on.................CORSFilterCORSFilter..........................................");     
		   HttpServletResponse response = (HttpServletResponse) resp;       
		 response.setHeader("Access-Control-Allow-Origin", "*");       
		 response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE");      
		 response.setHeader("Access-Control-Max-Age", "3600");   
		 response.setHeader("Access-Control-Allow-Headers", "X-requested-with, Content-Type");   
		     chain.doFilter(request, resp);    
	}
}
