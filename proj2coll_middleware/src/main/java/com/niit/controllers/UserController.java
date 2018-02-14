package com.niit.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.niit.dao.UserDao;
import com.niit.model.ErrorClazz;
import com.niit.model.User;

@Controller
public class UserController {
	@Autowired
	private UserDao userDao;
	
	@RequestMapping(value="/registeruser",method=RequestMethod.POST)
	public ResponseEntity<?> registerUser(@RequestBody User user){
		
		if(!userDao.isEmailUnique(user.getEmail()))
		{
			ErrorClazz error=new ErrorClazz(1,"Email already exists. Please enter a different email address");
			return new ResponseEntity<ErrorClazz>(error,HttpStatus.CONFLICT);
		}
		
		try {
			userDao.registerUser(user);
		}
		catch(Exception e)
		{
			ErrorClazz error=new ErrorClazz(2,"Some required fields are empty..."+e.getMessage());
			return new ResponseEntity<ErrorClazz>(error,HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return new ResponseEntity<User>(user,HttpStatus.OK);
	}
	
	@RequestMapping(value="/login",method=RequestMethod.POST)
	public ResponseEntity<?> login(@RequestBody User user)
	{
		User validUser=userDao.login(user);
		if(validUser==null)
		{
			ErrorClazz error=new ErrorClazz(5,"Login Failed. Invalid UserId/Password");
			return new ResponseEntity<ErrorClazz>(error,HttpStatus.UNAUTHORIZED);
		}
		
		else
			return new ResponseEntity<User>(validUser,HttpStatus.OK);
	}
	

}
