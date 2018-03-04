/**
 * 
 */

app.factory('BlogService',function($http){
	var blogService={}
	
	blogService.addBlog=function(blog){
		return $http.post("http://localhost:8081/proj2coll_middleware/addblogpost",blog)
	}
	
	blogService.getBlogsWaitingForApproval=function(){
		return $http.get("http://localhost:8081/proj2coll_middleware/getblogs/"+0)
	}
	
	blogService.getBlogsApproved=function(){
		return $http.get("http://localhost:8081/proj2coll_middleware/getblogs/"+1)
	}
	
	blogService.getBlog=function(id){
		return $http.get("http://localhost:8081/proj2coll_middleware/getblog/"+id)
	}
	
	return blogService;
	
})