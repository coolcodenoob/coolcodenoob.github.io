# H2内存数据库
> H2是一个用Java开发的嵌入式数据库，而且它还是是一个类库，可以直接嵌入到项目中。

## 用途
- 可以同应用程序打包在一起发布，方便存储少量结构化数据
- 用于单元测试。启动速度快，可关闭持久化功能，每一个用例执行完随即还原到初始状态。
- 作为缓存，作为NoSQL的一个补充。当某些场景下数据模型必须为关系型，可以拿它当Memcached使，作为后端MySQL/Oracle的一个缓冲层，缓存一些不经常变化但需要频繁访问的数据，比如字典表、权限表。

## 产品优势
- 非常快、开源、JDBC API
- 嵌入式和服务器模式；内存数据库
- 基于浏览器的控制台应用程序
- 占用空间小：jar 文件大小约为 2.5 MB

## 代码案例
### 添加H2和JPA的依赖

```xml
<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <scope>runtime</scope>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
```
### 配置H2和JPA注入参数

```yml
server:
  port: 8080
spring:
  datasource:
    driverClassName: org.h2.Driver
    url: jdbc:h2:mem:dbtest
    username: sa
    password: sa
  h2:
    console:
      enabled: true
      path: /h2
      settings:
        web-allow-others: true
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
```
schema.sql
```sql
create table if not exists tb_user (
USER_ID int not null primary key auto_increment,
USER_NAME varchar(100)
);
```
data.sql, 默认插入一条‘赵一’的数据
```sql
INSERT INTO tb_user (USER_ID,USER_NAME) VALUES(1,'赵一');
```

### 实体关联表

需给User添加@Entity注解和@Table注解
```java
package top.coolcodenoob.h2.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_user")
public class User {
    @Id
    private int userId;

    private  String userName;

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

### Dao继承JpaRepository
```java
package top.coolcodenoob.h2.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import top.coolcodenoob.h2.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {
}
```
> 其他代码service,App启动类等代码与前文一致

## 示例源码
- [springboot-db-h2-jpa](https://github.com/coolcodenoob/coolcodenoob-spring-demos/tree/main/springboot-db-h2-jpa)


## 参考资料
- [h2database官网](https://www.h2database.com)
- [https://pdai.tech/md/spring/springboot/springboot-x-hello-h2-jpa.html](https://pdai.tech/md/spring/springboot/springboot-x-hello-h2-jpa.html)