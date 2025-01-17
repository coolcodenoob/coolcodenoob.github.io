---
# 这是文章的标题
title: Git
# 这是侧边栏的顺序
order: 1
# 设置作者
author: coolcodenoob
# 设置写作时间
date: 2025-01-17
# 一个页面可以有多个分类
category:
  - 使用指南
# 一个页面可以有多个标签
tag:
  - 使用指南
---

## 常用命令

```bash
# 该命令会显示当前分支的工作状态，包括哪些文件被修改过、哪些文件是未跟踪的等信息。这有助于了解目前项目的状态。
git status
# 这个命令会把所有更改（包括新文件、已修改文件和删除的文件）添加到暂存区（staging area）。使用--all选项意味着它会包含所有的改动，而不仅仅是新增或修改过的文件。
git add --all
# 再次运行git status可以查看现在哪些文件已经被添加到了暂存区，准备提交。
git status
# 提交暂存区的所有更改到本地仓库，并附带一条简短的消息（用 'xxx' 表示），描述此次提交的内容。这条消息对于追踪历史记录非常重要。
git commit -m 'xxx'
# 从远程仓库拉取最新的更改并与本地分支合并。使用--rebase选项会尝试将本地的更改重新应用在从远程获取的最新提交之上，而不是创建一个合并提交。这样可以使提交历史更加线性清晰。
git pull --rebase
# 将本地分支xxbranch上的所有更改推送到名为origin的远程仓库对应的分支上。这一步会让远程仓库与本地仓库同步。
git push origin xxbranch
```

## init

```bash
git init
git add --all
git commit -m "first commit"
git branch -M main
git remote add origin <REMOTE_URL>
git push -u origin main
```