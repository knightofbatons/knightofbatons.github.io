---
title: Setting-up-a-Github-Pages-blog-with-Hexo
date: 2017-09-28
category:
  - 记录
tag:
  - GithubPages
  - Hexo
---

关于如何用博客框架 Hexo 快速简单的搭建个人博客，并使用 GithubPages 托管
<!--more-->

## 1. 写出来的目的

本来这个东西是简单的，可是介绍给别人的时候贴上 4 到 5 个链接有时候并不能说明问题，所以写在一起

## 2. Hexo 的安装

其 [文档](https://hexo.io/zh-cn/docs/) 很详细,但需要注意的是 git for windows 已经可以被 Github Desktop 代替
与这个文档相比，下面写的过程比较简练，且发生在Windows系统下。

### 2.1. 安装前置 [Node.js](https://nodejs.org/en/)

至于 Node.js 各版本的区别，对于本流程没有多大影响

### 2.2. 安装前置 [Git](https://git-scm.com/)

### 2.3. 推荐安装 [Github Desktop](https://desktop.github.com/) 很方便的简单使用 Github

### 2.4. 安装本体 [Hexo](https://hexo.io/zh-cn/)

前置需求都有了以后打开 Windows PowerShell 还是什么其他的命令行工具

```
npm install hexo-cli -g //安装 Hexo

hexo init <folder>      //在指定文件夹中新建所需要的文件
cd <folder>
npm install

hexo server             //开启 Server 测试安装成功
```

刚才建立的目录结构里面

```
.
├── _config.yml     //网站的 [配置](https://hexo.io/zh-cn/docs/configuration.html) 信息
├── package.json    //应用程序的信息
├── scaffolds       //默认填充内容 [模板](https://hexo.io/zh-cn/docs/writing.html) 文件夹
├── source
|   ├── _drafts
|   └── _posts      //那些 .md 格式的,用 [Markdown](https://daringfireball.net/projects/markdown/) 语法写的文章
└── themes          //[主题](https://hexo.io/themes/) 文件夹
```

## 3. 去 [这里](https://hexo.io/themes/) 选择主题

主题的页面一般有说该怎么安装怎么配置
没说怎么安装的话，一般是下载下来：无论是直接下 .zip 还是用 Git Clone 到本地
打开 Hexo 的配置文件 _config.yml 找到改一下

```
 _config.yml
------------
theme: 这里写主题文件夹的名字
```

## 4. 试一下 Hexo 和你刚刚选好的主题

在 \blog\ 目录下打开命令行工具

```
Hexo Help
```

可以获取 Hexo 的所有命令，主要用到的就是

```
//在重新输出静态文件前，清理输出目录下的文件以及数据
clean     Remove generated files and cache.
//生成静态文件
generate  Generate static files.
//获取帮助
help      Get help on a command.
//新建文章
new       Create a new post.
//起服务看看效果
server    Start the server.
```

## 5. [Github Pages](https://pages.github.com/) 的使用

这当然需要你有一个 Github 账号，这一步之后你会得到一个名为 username.github.io 的仓库和与之对应的本地文件夹
你的博客如果不绑定别的域名，访问地址就会是 https://username.github.io
其中的 username 是你自己的 Github 用户名
比如我的用户名是 knightofbatons 博客就在 https://knightofbatons.github.io/

## 6. 简例出一个流程

做完以上这些可以说是基本上完事了，现在简单举个例子看看流程是怎么样的

### 6.1. 新建文章

拿这篇文章为例，运行新建命令

```
hexo new post Setting-up-a-Github-Pages-blog-with-Hexo
```

就在 \blog\source\_posts 建立了文件 Setting-up-a-Github-Pages-blog-with-Hexo.md
用随便什么喜欢的编辑器打开，里面已经有了按照 post 规则生成的 title date tags 。用 Markdown 语法书写开始！
如果你在此之前不熟悉 Markdown 那你大可不必担心，因为它是那么的易学、易用，让你可以专注于文字的同时拥有不错的样子
作为开始你大可 [在这里](https://daringfireball.net/projects/markdown/dingus) 一点点尝试它的效果

### 6.2. 生成静态文件

我很可能忘记了命令 hexo help 可以帮我记起来

```
hexo help //获取 Hexo 的命令
...
hexo clean
hexo generate
```

这样先清空之前的输出
之后在 \blog\public 文件夹下生成了需要的所有静态文件

### 6.3. 查看效果

```
hexo server
```

默认访问地址为 localhost:4000 用浏览器查看效果是否正常且满意
很明显，我可以调整到满意为止

## 7. 推送到 Github

如果一切没问题，那么就是时候把他放上去了，如果你安装了 Github Desktop 那会是一件非常显而易见且简单的事情
当然你可以选择在 Hexo 做一些配置然后用命令行直接推上去，这个 Hexo 的文档有详细介绍
把 blog\public 下的所有内容复制到与你的 username.github.io 关联的文件夹下，Github Desktop 会检查到它们
提交并推上去，等一会就到 https://username.github.io 看看吧，你的博客已经在那里了
第一次推上去到显示出来可能有延迟，并有可能高达10min以上，不要着急耐心等待