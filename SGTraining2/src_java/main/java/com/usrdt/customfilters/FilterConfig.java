package com.usrdt.customfilters;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.usrdt.component.CORSFilter;

@Configuration
public class FilterConfig {

	   @Bean
	   public FilterRegistrationBean<CORSFilter> loggingFilter() {

	    	System.out.println("Filtering on.................FilterRegistrationBean..........................................");   
	        FilterRegistrationBean<CORSFilter> registrationBean = new FilterRegistrationBean<>();
	        registrationBean.setFilter(new CORSFilter());
	        registrationBean.addUrlPatterns("/*");
	        return registrationBean;
	   }


	
}
