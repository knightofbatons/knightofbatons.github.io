---
title: Logstash
date: 2017-10-11
category:
  - 软件工具
tag:
  - Logstash
  - 日志
---

Logstash 简单试用备忘
<!--more-->

## 1. 从数据库里面输入开始试用

看 [官网相关的教学blog](https://www.elastic.co/blog/logstash-jdbc-input-plugin) 后用自己的 Mysql 测试

### 1.1. Mysql

```
mysql_to_elasticsearch.conf
---------------------------
input {
    jdbc {
        # Postgres jdbc connection string to our database, mydb
        jdbc_connection_string => "jdbc:mysql://localhost:3306/databasename?characterEncoding=UTF-8&useSSL=false"  
        # The user we wish to execute our statement as
        jdbc_user => "username"
        jdbc_password => "password"
        # The path to our downloaded jdbc driver
        jdbc_driver_library => "D:\Applications\logstash-5.6.3\test_logstash_mysql\mysql-connector-java-5.1.44-bin.jar"
        # The name of the driver class for Postgresql
        jdbc_driver_class => "com.mysql.jdbc.Driver"
        # our query
        statement => "SELECT * from user"
        # 定时运行
        schedule => "* * * * *"
        # 是否全量同步
        clean_run => "false"
    }
}
output {
    elasticsearch {
        index => "users"
        document_type => "user"
        document_id => "%{id}"
        hosts => "http://localhost:9200/"
    }
}
```

之后用有大量数据的 sqlserver 测试

### 1.2. SqlServer

```
sqlserver_to_elasticsearch.conf
-------------------------------
input {
    jdbc {
        # Postgres jdbc connection string to our database, mydb
        jdbc_connection_string => "jdbc:sqlserver://address:1433;database=avc"  
        # The user we wish to execute our statement as
        jdbc_user => "username"
        jdbc_password => "password"
        # The path to our downloaded jdbc driver
        jdbc_driver_library => "D:\Applications\logstash-5.6.3\test_logstash_sqlserver\sqljdbc42-6.0.8112.100.jar"
        # The name of the driver class for Postgresql
        jdbc_driver_class => "com.microsoft.sqlserver.jdbc.SQLServerDriver"
        # our query
        statement => "SELECT * from H_CAC_DCC_SALES_DETAIL"
        # 定时运行
        # schedule => "* * * * *"
        # 是否全量同步
        clean_run => "false"
    }
}
output {
    elasticsearch {
        index => "avcs"
        #document_type => "avc"
        #document_id => "%{id}"
        hosts => "http://localhost:9200/"
    }
}
```
### 1.3. PS

driver 都是直接从 idea 文件夹下拿的，有那么个文件夹下存着
```
C:\Users\username\.IntelliJIdea2017.2\config\jdbc-drivers
```

## 2. 日志文件作为输入试用

### 2.1. 两个日志文件

```
test.log
--------
>> Start process script E:\CMR\BIN\CMRLoadrun.vbs 2017/11/14 2:29:03
Area = Flight
Agent = C5
Normal Run Mode
Processing File E:\CMR\Flight\FLTALLOT1605.TXT
Regular mode - doing -static
Starting MRSLoad 2017/11/14 2:29:03
MRSLoad done 2017/11/14 6:45:07
Processing File E:\CMR\Flight\FLTLGDTA1605.TXT
Regular mode - doing -static
Starting MRSLoad 2017/11/14 6:45:07
MRSLoad done 2017/11/14 8:00:45
Processing File E:\CMR\Flight\FLTPROFL1605.TXT
Regular mode - doing -static
Starting MRSLoad 2017/11/14 8:00:45
MRSLoad done 2017/11/14 8:56:05
Cycle number 1605
Starting MRSLog 2017/11/14 8:56:05
End MRSLog 2017/11/14 8:56:05
Deleting data files
Deleting flag files 8:56:05
Allotment update processing 8:56:05
Creating complete flag file 8:56:05

```

```
test2.log
---------
>> Start process 2017/11/14 2:43:51
Normal Run Mode
Processing File E:\CMR\Waybill\BOOKINGS1606.TXT   2:43:51
Starting MRSLoad 2017/11/14 2:43:52
MRSLoad done 2017/11/14 3:05:05
Processing File E:\CMR\Waybill\AIRBILL1606.TXT   3:05:05
Starting MRSLoad 2017/11/14 3:05:10
MRSLoad done 2017/11/14 4:02:16
Processing File E:\CMR\Waybill\ACTRATE1606.TXT   4:02:16
Starting MRSLoad 2017/11/14 4:02:16
MRSLoad done 2017/11/14 4:18:22
Processing File E:\CMR\Waybill\ALTHIST1606.TXT   4:18:22
Starting MRSLoad 2017/11/14 4:18:23
MRSLoad done 2017/11/14 4:18:28
Processing File E:\CMR\Waybill\BKGLIST1606.TXT   4:18:28
Starting MRSLoad 2017/11/14 4:18:28
MRSLoad done 2017/11/14 4:18:28
Processing File E:\CMR\Waybill\MISCAWB1606.TXT   4:18:28
Starting MRSLoad 2017/11/14 4:18:29
MRSLoad done 2017/11/14 4:24:45
Processing File E:\CMR\Waybill\PARTAWB1606.TXT   4:24:45
Starting MRSLoad 2017/11/14 4:24:45
MRSLoad done 2017/11/14 4:52:36
Processing File E:\CMR\Waybill\BKGREFNO1606.TXT   4:52:36
Starting MRSLoad 2017/11/14 4:52:36
MRSLoad done 2017/11/14 4:52:37
Cycle number 1606
Starting MRSLog 2017/11/14 4:52:37
End MRSLog 2017/11/14 4:52:37
Final processing 4:52:37
Revenue proportion processing 6:30:08
Deleting data files 7:12:06
Deleting flag files 7:12:06
Creating complete flag file 7:12:06

```

### 2.2. PS

看了 [logstash 和filebeat 是什么关系？](https://www.zhihu.com/question/54058964) 顺便试了一下 filebeat
改改 filebeat.yml 这个配置文件就能用，里面一些常用的都是写好了注释起来的，有可以处理多行日志的 multiline 配置切分拼接一气呵成

### 2.3. 配置文件分开写
logstash 的话什么 input filter output 都能分开写然后运行，分开的配置都丢在 \test\conf 下

```
logstash -f .\test\conf
```

就能把它们合起来运行 

```
input1.conf
-----------
input {
        file {
                path=>"D:\Applications\ELK\logstash-6.0.0\test\test.log"
                codec=> multiline {
                        pattern => "^P"
                        negate => true
                        what => "previous"
                }
                start_position=>"beginning"
                ignore_older=>0
                type=> "1"
        }
}
```

```
input2.conf
-----------
input {
        file {
                path=>"D:\Applications\ELK\logstash-6.0.0\test\test2.log"
                codec=> multiline {
                        pattern => "^P"
                        negate => true
                        what => "previous"
                }
                start_position=>"beginning"
                ignore_older=>0
                type=> "2"
        }
}
```

```
filter2.conf
------------
filter {
        if [type] == "2"{
                grok {
                        match=>["message","%{WINPATH:ProcessingFile}   %{TIME:ProceingTime}\r\nStarting MRSLoad %{DATA:StartingMRSLoad }\r\nMRSLoad done %{DATA:MRSLoaddone}\r"]
                }
      
                mutate {    
                        remove_field => "message"          
                        remove_field => "@version"      
                        remove_field => "host"      
                        remove_field => "path"      
                }
        }
}
```

```
output.conf
-----------
output {
        stdout {
                codec=>rubydebug
        }
}
```

### 2.4. PS

里面的 grok 有个 [调试工具](http://grokdebug.herokuapp.com/)
我用这个调试工具遇到了个坑
这是 multiline 切割拼接之后的一条：

```
Processing File E:\\CMR\\Waybill\\BKGREFNO1606.TXT   4:52:36\r\nStarting MRSLoad 2017/11/14 4:52:36\r\nMRSLoad done 2017/11/14 4:52:37\r\nCycle number 1606\r\nStarting MRSLog 2017/11/14 4:52:37\r\nEnd MRSLog 2017/11/14 4:52:37\r\nFinal processing 4:52:37\r\nRevenue proportion processing 6:30:08\r\nDeleting data files 7:12:06\r\nDeleting flag files 7:12:06\r\nCreating complete flag file 7:12:06\r
```

在调试工具里这样写才能从这条里正确拿出东西：

```
%{WINPATH:ProcessingFile}   %{TIME:ProceingTime}\\r\\nStarting MRSLoad %{DATA:StartingMRSLoad }\\r\\nMRSLoad done %{DATA:MRSLoaddone}\\r
```

可是配置文件里这么写就不行，用那个 debuger 的时候也有点费解
但是本着相信官方文档推荐的工具的前提下迷茫了，顺便想到了那句：
“Once you eliminate the impossible,whatever remains,no matter how improbable,must be the truth.” 

问题出在 \r\n 那里，配置文件里这样写就可以正常工作了：

```
%{WINPATH:ProcessingFile}   %{TIME:ProceingTime}\r\nStarting MRSLoad %{DATA:StartingMRSLoad }\r\nMRSLoad done %{DATA:MRSLoaddone}\r
```