/**
 * 
 */

app.factory('BlogService',function($http){
	var blogService={}
	
	blogService.addBlog=function(blog){
		return $http.post("http://localhost:8081/proj2coll_middleware/addblogpost",blog)
	}
	
	return blogService;
	
})