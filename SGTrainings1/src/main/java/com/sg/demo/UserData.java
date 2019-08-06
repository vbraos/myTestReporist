package com.sg.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name="USER_DATA")
public class UserData {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long userId;
	
	@NotEmpty(message = "Please provide a name")
	private String userName;
	private String userType;
	private String userGrade;
	
	public UserData()
	{
		
	}
	
	public UserData(String userName,String userType,String userGrade)
	{
		this.userName = userName;
		this.userType = userType;
		this.userGrade = userGrade;
	}

	public long getUserId() {
		return userId;
	}
	public void setUserId(long userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserType() {
		return userType;
	}
	public void setUserType(String userType) {
		this.userType = userType;
	}
	public String getUserGrade() {
		return userGrade;
	}
	public void setUserGrade(String userGrade) {
		this.userGrade = userGrade;
	}
	
}
