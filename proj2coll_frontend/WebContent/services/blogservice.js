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
	
	blogService.hasUserLikedBlog=function(id){
		return $http.get("http://localhost:8081/proj2coll_middleware/hasuserlikedblog/"+id)
	}
	
	blogService.approve=function(blog){
		return $http.put("http://localhost:8081/proj2coll_middleware/approve",blog)
	}
	
	blogService.reject=function(blog,rejectionReason){
		return $http.put("http://localhost:8081/proj2coll_middleware/reject/"+rejectionReason,blog)
	}
	
	blogService.updateLikes=function(id){
		return $http.put("http://localhost:8081/proj2coll_middleware/updatelikes/"+id);
	}
	
	blogService.addComment=function(blogComment){
		return $http.post("http://localhost:8081/proj2coll_middleware/addcomment",blogComment);
	}
	
	blogService.getBlogComments=function(id){
		return $http.get("http://localhost:8081/proj2coll_middleware/blogcomments/"+id);
	}
	
	
	return blogService;
	
})