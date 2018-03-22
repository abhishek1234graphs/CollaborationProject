/**
 * 
 */

app.factory('ChatService',function($rootScope){
	
	var socket=new SockJS("/proj2coll_middleware/chatmodule");
	var stompClient=Stomp.over(socket);
	stompClient.connect('','',function(frame){
		$rootScope.$broadcast('sockConnected',frame)
	})
	
	return{
		stompClient:stompClient
	}
})