package com.example.backend.bean;

import lombok.Data;

import java.util.Date;

@Data
public class UserVO {

	String user_id;
	String user_pw;
	String user_name;
	Date user_birthdate;
	Character user_gender;
	String user_phone;
	String user_email;
	String user_addr1;
	String user_addr2;
	String user_category;
	Date user_joindate;

}