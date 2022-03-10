package com.example.backend.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.backend.bean.UserVO;

@Mapper
public interface UserMapper {

	List<UserVO> userList();
	UserVO fetchUserByID(String id);
	void updateUser(UserVO user);
	void insertUser(UserVO user);
	void deleteUser(String id);
}