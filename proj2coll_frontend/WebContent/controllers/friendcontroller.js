/**
 * 
 */
app.controller('FriendCtrl',function($scope,$location,$rootScope,FriendService){
	function getAllSuggestedUsers(){
		FriendService.getAllSuggestedUsers().then(
				function(response){
					$scope.suggestedUsers=response.data;
					
				},
				function(response){
					$rootScope.error=response.data
					if(response.status==401)
						$location.path('/login')
				})
	}
	
	function getPendingRequests(){
		FriendService.getPendingRequests().then(
				function(response){
					$scope.pendingRequests=response.data
				},
				function(response){
					$rootScope.error=response.data
					if(response.status==401)
						$location.path('/login')
				})
		
	}
	
	
	$scope.addFriend=function(toId){
		FriendService.addFriend(toId).then(
				function(response){
					alert('Friend request sent successfully');
					getAllSuggestedUsers();
				},
				function(response){
					$rootScope.error=response.data
					if(response.status==401)
						$location.path('/login')
				})
	}
	
	
	
	
	
	getAllSuggestedUsers();
	getPendingRequests();
})