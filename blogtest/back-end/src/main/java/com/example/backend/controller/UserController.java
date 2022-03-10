package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.mapper.UserMapper;
import com.example.backend.bean.UserVO;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	UserMapper userMapper;

	@GetMapping
	public List<UserVO> userList() {
		System.out.println(userMapper.userList());
		System.out.println("유저리스트 출력 성공");
		return userMapper.userList();
	}

	@PostMapping
	void insertUser(@RequestBody UserVO user) {
		userMapper.insertUser(user);
		System.out.println("유저 DB 저장 성공");
	}

	@GetMapping("/{id}")
	public UserVO fetchUserByID(@PathVariable("id") String id) {
		System.out.println(userMapper.fetchUserByID(id));
		return userMapper.fetchUserByID(id);
	}

	@PutMapping("/{id}")
	public void updateUser(@PathVariable("id") String id, @RequestBody UserVO user) {

		System.out.println("업데이트유저 => " + user);

		user.setUser_id(user.getUser_id());
		user.setUser_pw(user.getUser_pw());
		user.setUser_name(user.getUser_name());
		user.setUser_addr1(user.getUser_addr1());
		user.setUser_addr2(user.getUser_addr2());

		userMapper.updateUser(user);
	}

	@DeleteMapping("/{id}")
	public void deleteUser(@PathVariable("id") String id) {
		userMapper.deleteUser(id);
		System.out.println("유저 삭제, 성공적");
	}

}
