/**
 * 
 */

app.factory('UserService',function($http){
	var userService={}
	
	userService.registerUser=function(user){
		return $http.post("http://localhost:8081/proj2coll_middleware/registeruser",user)
	}
	
	return userService
})