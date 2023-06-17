---
title: Elasticsearch + Kibana
date: 2017-01-01
category:
  - 软件工具
tag:
  - Elasticsearch
  - Kibana
  - 搜索
---
 
被 Kibana 的外表吸引，试着了解了一下 [Elasticsearch + Kibana](https://www.elastic.co/)
记录备忘
<!--more-->


## 1. 马上开始安装

### 1.1 安装 Elasticsearch + Kibana (+ X-Pack)

官网提供了 [简洁的安装指导](https://www.elastic.co/start)

### 1.2 遇到的问题

因为安全方面的考虑这些组件默认只能在非 ROOT 用户下开启，ROOT 用户开启会被拒绝并报错
对于我只有 ROOT 用户的测试环境创建一个用户来使用
```
useradd 用户
passwd 密码
chown -R 用户 /那些组件的目录
```

打开 Kibana 的地址是
```
http://localhost:5601
```
但是当我们需要在非本机访问时（例如我在 Linux 虚拟机下安装在 Win 下访问
需要修改配置文件 /KIBANA_HOME/config/kibana.yml 中的 server.host 
默认为回环地址，不允许远程用户访问

我修改为
```
server.host: 192.168.231.233
```
修改后的远程访问地址为
```
http://192.168.231.233:5601
```

## 2. 马上开始试用

跟着官网的例子 [Getting Started](https://www.elastic.co/guide/en/kibana/current/getting-started.html) 了解一下 Elasticsearch + Kibana 的流程
同时有中文转述在这里 [Kibana基本使用](http://blog.csdn.net/ming_311/article/details/50619859) 是基本一样的内容
里面用到的数据文件都有提供下载

### 2.1 遇到的问题

官网教程里 curl 直接用例如
```
curl -XPUT
```
可是安装了 X-Pack 后是有安全防护的需要用户名和密码才能操作
安装完默认为 Username: elastic Password: changeme
```
curl --user elastic -XPUT
```
之后按提示输入密码就可以正常使用 curl 了

### 2.2 简例一个流程

为莎士比亚数据集建立一个索引（index）
```
curl --user elastic -XPUT http://localhost:9200/shakespeare -d '
{
 "mappings" : {
  "_default_" : {
   "properties" : {
    "speaker" : {"type": "string", "index" : "not_analyzed" },
    "play_name" : {"type": "string", "index" : "not_analyzed" },
    "line_id" : { "type" : "integer" },
    "speech_number" : { "type" : "integer" }
   }
  }
 }
}
';
```

使用 Elasticsearch 的批量导入 API 输入数据
```
curl --user elastic -XPOST 'localhost:9200/shakespeare/_bulk?pretty' --data-binary @shakespeare.json
```

使用如下命令验证成功导入
```
curl --user elastic 'localhost:9200/_cat/indices?v'
```

访问 Kibana 会提示没有索引匹配模式（index pattern）需要定义以便匹配索引
之后就是图形界面下的操作了 选择之前定义的索引匹配模式 -> discover -> visualize -> dashboard
这边需要注意的以及怎么做文档里都有了，图形界面也好理解

### 2.3 遇到的问题
需要注意 _bulk 接口的 [使用方式](https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-bulk.html)
例子里给的数据文件都是已经符合接口要求的 newline delimited JSON (NDJSON)
自己在看完例子马上用自己的数据进行一些尝试时可能会忘了这个问题