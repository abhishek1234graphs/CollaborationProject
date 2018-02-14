package proj2coll_middleware;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.niit.dao.UserDao;

@Controller
public class UserController {
	@Autowired
	private UserDao userDao;

}
