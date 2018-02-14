/**
 * 
 */

app.controller('UserController',function($scope,$location,UserService){
	
	$scope.registerUser=function(user){
		 UserService.registerUser(user).then(function(response){
				alert('Updated Details successfully')
				$location.path('/getallemployees')
			},function(response){
				$scope.errorMessage=response.data
			})
	}
	
})