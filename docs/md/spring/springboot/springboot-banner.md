# 定制自己的Banner

## 如何更改Banner

在resource文件夹中配置`application.yml`和`banner.txt`文件

application.yml
```yml
spring:
  banner:
    charset: UTF-8
    location: classpath:banner.txt
```

banner.txt
```yml
                    .__                   .___                         ___.
  ____  ____   ____ |  |   ____  ____   __| _/____   ____   ____   ____\_ |__
_/ ___\/  _ \ /  _ \|  | _/ ___\/  _ \ / __ |/ __ \ /    \ /  _ \ /  _ \| __ \
\  \__(  <_> |  <_> )  |_\  \__(  <_> ) /_/ \  ___/|   |  (  <_> |  <_> ) \_\ \
 \___  >____/ \____/|____/\___  >____/\____ |\___  >___|  /\____/ \____/|___  /
     \/                       \/           \/    \/     \/                  \/
===============================================================================
Application Version : ${application.version}
Application Formatted Version : ${application.formatted-version}
Application Title : ${application.title}
Spring Boot Version : ${spring-boot.version}
Spring Boot Formatted Version : ${spring-boot.formatted-version}
===============================================================================
```
> 源码地址：[https://github.com/coolcodenoob/coolcodenoob-spring-demos/tree/main/springboot-banner](https://github.com/coolcodenoob/coolcodenoob-spring-demos/tree/main/springboot-banner)

## 设计Banner的网站
- [patorjk](https://patorjk.com/software/taag)
- [http://www.network-science.de/ascii/](http://www.network-science.de/ascii/)
- [http://www.bootschool.net/ascii](http://www.bootschool.net/ascii)


## 参考资料
- [https://pdai.tech/md/spring/springboot/springboot-x-hello-banner.html](https://pdai.tech/md/spring/springboot/springboot-x-hello-banner.html)


