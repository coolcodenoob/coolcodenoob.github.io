# MVC版HelloWorld

> 本文用常见的MVC分层思路为你构建一个拥有常见包划分结构的HelloWorld

## 经典MVC三层架构
三层架构(3-tier application) 通常意义上的三层架构就是将整个业务应用划分为：表现层（UI）、业务逻辑层（BLL）、数据访问层（DAL）。这样区分层次的目的即为了“高内聚，低耦合”的思想。

1、表现层（UI）：通俗讲就是展现给用户的界面，即用户在使用一个系统的时候他的所见所得。

2、业务逻辑层（BLL）：针对具体问题的操作，也可以说是对数据层的操作，对数据业务逻辑处理。

3、数据访问层（DAL）：该层所做事务直接操作数据库，针对数据的增添、删除、修改、更新、查找等。

## 代码示例
### controller
表示层
```java
package top.coolcodenoob.hellworldmvc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import top.coolcodenoob.hellworldmvc.entity.User;
import top.coolcodenoob.hellworldmvc.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserContorller {
    @Autowired
    private UserService userService;

    /**
     * http://localhost:8080/user/add
     *
     * @param user 用户
     * @return user 用户
     */
    @PostMapping("add")
    public User add(@RequestBody User user) {
        userService.addUser(user);
        return user;
    }

    /**
     * http://localhost:8080/user/list
     *
     * @return user list
     */
    @GetMapping("list")
    public List<User> list() {
        return userService.list();
    }
}
```

### service
业务逻辑层
```java
package top.coolcodenoob.hellworldmvc.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import top.coolcodenoob.hellworldmvc.dao.UserRepository;
import top.coolcodenoob.hellworldmvc.entity.User;
import top.coolcodenoob.hellworldmvc.service.UserService;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userDao;

    /**
     *
     * @param user 用户
     */
    @Override
    public void addUser(User user) {
        userDao.save(user);
    }

    /**
     *
     * @return user list
     */
    @Override
    public List<User> list() {
        return userDao.findAll();
    }
}
```
### dao
数据访问层，把数据放在内存中。
```java
package top.coolcodenoob.hellworldmvc.dao;

import org.springframework.stereotype.Repository;
import top.coolcodenoob.hellworldmvc.entity.User;

import java.util.ArrayList;
import java.util.List;

@Repository
public class UserRepository {
    private List<User> userList = new ArrayList<>();

    public void save(User user) {
        userList.add(user);
    }

    public List<User> findAll() {
        return userList;
    }
}
```

### entity
model实体层
```java
package top.coolcodenoob.hellworldmvc.entity;

public class User {
    /**
     * 编号
     */
    private int userId;

    /**
     * 姓名
     */
    private String userName;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
```

## 运行测试
> 可使用hoppscotch对API接口进行测试

## 示例源码
- [springboot-hellworld-mvc](https://github.com/coolcodenoob/coolcodenoob-spring-demos/tree/main/springboot-hellworld-mvc)

## 参考资料
- [https://pdai.tech/md/spring/springboot/springboot-x-hello-world-mvc.html](https://pdai.tech/md/spring/springboot/springboot-x-hello-world-mvc.html)
