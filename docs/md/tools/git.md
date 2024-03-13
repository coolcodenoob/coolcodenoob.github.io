# git详解

> 本文将描述常用的git常用操作命令。

## 必读
> 推荐阅读《Pro Git》第二版
- 《Pro Git》第二版
  - [《Pro Git》第二版英文版](https://git-scm.com/book/en/v2)
  - [《Pro Git》第二版中文版](https://git-scm.com/book/zh/v2)
  - [《Pro Git》github仓库](https://github.com/progit/progit2)
- 在线学习
  - [learngitbranching网站](https://learngitbranching.js.org/)

## Git常用操作命令
### 代码提交和同步代码
第零步: 工作区与仓库保持一致

第一步: 文件增删改，变为已修改状态

第二步: git add ，变为已暂存状态
```bash
$ git status
$ git add --all # 当前项目下的所有更改
$ git add .  # 当前目录下的所有更改
$ git add xx/xx.py xx/xx2.py  # 添加某几个文件
```
第三步: git commit，变为已提交状态
```bash
$ git commit -m"<这里写commit的描述>"
```
第四步: git push，变为已推送状态
```bash
$ git push -u origin master # 第一次需要关联上
$ git push # 之后再推送就不用指明应该推送的远程分支了
$ git branch # 可以查看本地仓库的分支
$ git branch -a # 可以查看本地仓库和本地远程仓库(远程仓库的本地镜像)的所有分支
```

## 参考资料
- [https://pdai.tech/md/devops/tool/tool-git.html](https://pdai.tech/md/devops/tool/tool-git.html)
