/**
 * 
 */

app.factory('UserService',function($http){
	var userService={}
	
	userService.registerUser=function(user){
		return $http.post("http://localhost:8081/proj2coll_middleware/registeruser",user)
	}
	
	userService.login=function(user){
		return $http.post("http://localhost:8081/proj2coll_middleware/login",user)
	}
	
	
	userService.logout=function(){
		return $http.put("http://localhost:8081/proj2coll_middleware/logout")
	}
	
	return userService
})