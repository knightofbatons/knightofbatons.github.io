import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as t,c as r,a as v,b as n,d as e,e as s,f as d}from"./app-cde74dc7.js";const u={},o=n("p",null,"Logstash 简单试用备忘",-1),c=n("h2",{id:"_1-从数据库里面输入开始试用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-从数据库里面输入开始试用","aria-hidden":"true"},"#"),e(" 1. 从数据库里面输入开始试用")],-1),m={href:"https://www.elastic.co/blog/logstash-jdbc-input-plugin",target:"_blank",rel:"noopener noreferrer"},b=d(`<h3 id="_1-1-mysql" tabindex="-1"><a class="header-anchor" href="#_1-1-mysql" aria-hidden="true">#</a> 1.1. Mysql</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql_to_elasticsearch.conf
---------------------------
input {
    jdbc {
        # Postgres jdbc connection string to our database, mydb
        jdbc_connection_string =&gt; &quot;jdbc:mysql://localhost:3306/databasename?characterEncoding=UTF-8&amp;useSSL=false&quot;  
        # The user we wish to execute our statement as
        jdbc_user =&gt; &quot;username&quot;
        jdbc_password =&gt; &quot;password&quot;
        # The path to our downloaded jdbc driver
        jdbc_driver_library =&gt; &quot;D:\\Applications\\logstash-5.6.3\\test_logstash_mysql\\mysql-connector-java-5.1.44-bin.jar&quot;
        # The name of the driver class for Postgresql
        jdbc_driver_class =&gt; &quot;com.mysql.jdbc.Driver&quot;
        # our query
        statement =&gt; &quot;SELECT * from user&quot;
        # 定时运行
        schedule =&gt; &quot;* * * * *&quot;
        # 是否全量同步
        clean_run =&gt; &quot;false&quot;
    }
}
output {
    elasticsearch {
        index =&gt; &quot;users&quot;
        document_type =&gt; &quot;user&quot;
        document_id =&gt; &quot;%{id}&quot;
        hosts =&gt; &quot;http://localhost:9200/&quot;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后用有大量数据的 sqlserver 测试</p><h3 id="_1-2-sqlserver" tabindex="-1"><a class="header-anchor" href="#_1-2-sqlserver" aria-hidden="true">#</a> 1.2. SqlServer</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sqlserver_to_elasticsearch.conf
-------------------------------
input {
    jdbc {
        # Postgres jdbc connection string to our database, mydb
        jdbc_connection_string =&gt; &quot;jdbc:sqlserver://address:1433;database=avc&quot;  
        # The user we wish to execute our statement as
        jdbc_user =&gt; &quot;username&quot;
        jdbc_password =&gt; &quot;password&quot;
        # The path to our downloaded jdbc driver
        jdbc_driver_library =&gt; &quot;D:\\Applications\\logstash-5.6.3\\test_logstash_sqlserver\\sqljdbc42-6.0.8112.100.jar&quot;
        # The name of the driver class for Postgresql
        jdbc_driver_class =&gt; &quot;com.microsoft.sqlserver.jdbc.SQLServerDriver&quot;
        # our query
        statement =&gt; &quot;SELECT * from H_CAC_DCC_SALES_DETAIL&quot;
        # 定时运行
        # schedule =&gt; &quot;* * * * *&quot;
        # 是否全量同步
        clean_run =&gt; &quot;false&quot;
    }
}
output {
    elasticsearch {
        index =&gt; &quot;avcs&quot;
        #document_type =&gt; &quot;avc&quot;
        #document_id =&gt; &quot;%{id}&quot;
        hosts =&gt; &quot;http://localhost:9200/&quot;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-ps" tabindex="-1"><a class="header-anchor" href="#_1-3-ps" aria-hidden="true">#</a> 1.3. PS</h3><p>driver 都是直接从 idea 文件夹下拿的，有那么个文件夹下存着</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>C:\\Users\\username\\.IntelliJIdea2017.2\\config\\jdbc-drivers
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-日志文件作为输入试用" tabindex="-1"><a class="header-anchor" href="#_2-日志文件作为输入试用" aria-hidden="true">#</a> 2. 日志文件作为输入试用</h2><h3 id="_2-1-两个日志文件" tabindex="-1"><a class="header-anchor" href="#_2-1-两个日志文件" aria-hidden="true">#</a> 2.1. 两个日志文件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>test.log
--------
&gt;&gt; Start process script E:\\CMR\\BIN\\CMRLoadrun.vbs 2017/11/14 2:29:03
Area = Flight
Agent = C5
Normal Run Mode
Processing File E:\\CMR\\Flight\\FLTALLOT1605.TXT
Regular mode - doing -static
Starting MRSLoad 2017/11/14 2:29:03
MRSLoad done 2017/11/14 6:45:07
Processing File E:\\CMR\\Flight\\FLTLGDTA1605.TXT
Regular mode - doing -static
Starting MRSLoad 2017/11/14 6:45:07
MRSLoad done 2017/11/14 8:00:45
Processing File E:\\CMR\\Flight\\FLTPROFL1605.TXT
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>test2.log
---------
&gt;&gt; Start process 2017/11/14 2:43:51
Normal Run Mode
Processing File E:\\CMR\\Waybill\\BOOKINGS1606.TXT   2:43:51
Starting MRSLoad 2017/11/14 2:43:52
MRSLoad done 2017/11/14 3:05:05
Processing File E:\\CMR\\Waybill\\AIRBILL1606.TXT   3:05:05
Starting MRSLoad 2017/11/14 3:05:10
MRSLoad done 2017/11/14 4:02:16
Processing File E:\\CMR\\Waybill\\ACTRATE1606.TXT   4:02:16
Starting MRSLoad 2017/11/14 4:02:16
MRSLoad done 2017/11/14 4:18:22
Processing File E:\\CMR\\Waybill\\ALTHIST1606.TXT   4:18:22
Starting MRSLoad 2017/11/14 4:18:23
MRSLoad done 2017/11/14 4:18:28
Processing File E:\\CMR\\Waybill\\BKGLIST1606.TXT   4:18:28
Starting MRSLoad 2017/11/14 4:18:28
MRSLoad done 2017/11/14 4:18:28
Processing File E:\\CMR\\Waybill\\MISCAWB1606.TXT   4:18:28
Starting MRSLoad 2017/11/14 4:18:29
MRSLoad done 2017/11/14 4:24:45
Processing File E:\\CMR\\Waybill\\PARTAWB1606.TXT   4:24:45
Starting MRSLoad 2017/11/14 4:24:45
MRSLoad done 2017/11/14 4:52:36
Processing File E:\\CMR\\Waybill\\BKGREFNO1606.TXT   4:52:36
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-ps" tabindex="-1"><a class="header-anchor" href="#_2-2-ps" aria-hidden="true">#</a> 2.2. PS</h3>`,13),g={href:"https://www.zhihu.com/question/54058964",target:"_blank",rel:"noopener noreferrer"},h=n("br",null,null,-1),p=d(`<h3 id="_2-3-配置文件分开写" tabindex="-1"><a class="header-anchor" href="#_2-3-配置文件分开写" aria-hidden="true">#</a> 2.3. 配置文件分开写</h3><p>logstash 的话什么 input filter output 都能分开写然后运行，分开的配置都丢在 \\test\\conf 下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>logstash -f .\\test\\conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>就能把它们合起来运行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>input1.conf
-----------
input {
        file {
                path=&gt;&quot;D:\\Applications\\ELK\\logstash-6.0.0\\test\\test.log&quot;
                codec=&gt; multiline {
                        pattern =&gt; &quot;^P&quot;
                        negate =&gt; true
                        what =&gt; &quot;previous&quot;
                }
                start_position=&gt;&quot;beginning&quot;
                ignore_older=&gt;0
                type=&gt; &quot;1&quot;
        }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>input2.conf
-----------
input {
        file {
                path=&gt;&quot;D:\\Applications\\ELK\\logstash-6.0.0\\test\\test2.log&quot;
                codec=&gt; multiline {
                        pattern =&gt; &quot;^P&quot;
                        negate =&gt; true
                        what =&gt; &quot;previous&quot;
                }
                start_position=&gt;&quot;beginning&quot;
                ignore_older=&gt;0
                type=&gt; &quot;2&quot;
        }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>filter2.conf
------------
filter {
        if [type] == &quot;2&quot;{
                grok {
                        match=&gt;[&quot;message&quot;,&quot;%{WINPATH:ProcessingFile}   %{TIME:ProceingTime}\\r\\nStarting MRSLoad %{DATA:StartingMRSLoad }\\r\\nMRSLoad done %{DATA:MRSLoaddone}\\r&quot;]
                }
      
                mutate {    
                        remove_field =&gt; &quot;message&quot;          
                        remove_field =&gt; &quot;@version&quot;      
                        remove_field =&gt; &quot;host&quot;      
                        remove_field =&gt; &quot;path&quot;      
                }
        }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>output.conf
-----------
output {
        stdout {
                codec=&gt;rubydebug
        }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-ps" tabindex="-1"><a class="header-anchor" href="#_2-4-ps" aria-hidden="true">#</a> 2.4. PS</h3>`,9),q={href:"http://grokdebug.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},_=n("br",null,null,-1),S=n("br",null,null,-1),f=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Processing File E:\\\\CMR\\\\Waybill\\\\BKGREFNO1606.TXT   4:52:36\\r\\nStarting MRSLoad 2017/11/14 4:52:36\\r\\nMRSLoad done 2017/11/14 4:52:37\\r\\nCycle number 1606\\r\\nStarting MRSLog 2017/11/14 4:52:37\\r\\nEnd MRSLog 2017/11/14 4:52:37\\r\\nFinal processing 4:52:37\\r\\nRevenue proportion processing 6:30:08\\r\\nDeleting data files 7:12:06\\r\\nDeleting flag files 7:12:06\\r\\nCreating complete flag file 7:12:06\\r
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在调试工具里这样写才能从这条里正确拿出东西：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>%{WINPATH:ProcessingFile}   %{TIME:ProceingTime}\\\\r\\\\nStarting MRSLoad %{DATA:StartingMRSLoad }\\\\r\\\\nMRSLoad done %{DATA:MRSLoaddone}\\\\r
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可是配置文件里这么写就不行，用那个 debuger 的时候也有点费解<br> 但是本着相信官方文档推荐的工具的前提下迷茫了，顺便想到了那句：<br> “Once you eliminate the impossible,whatever remains,no matter how improbable,must be the truth.”</p><p>问题出在 \\r\\n 那里，配置文件里这样写就可以正常工作了：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>%{WINPATH:ProcessingFile}   %{TIME:ProceingTime}\\r\\nStarting MRSLoad %{DATA:StartingMRSLoad }\\r\\nMRSLoad done %{DATA:MRSLoaddone}\\r
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6);function x(R,L){const i=a("ExternalLinkIcon");return t(),r("div",null,[o,v("more"),c,n("p",null,[e("看 "),n("a",m,[e("官网相关的教学blog"),s(i)]),e(" 后用自己的 Mysql 测试")]),b,n("p",null,[e("看了 "),n("a",g,[e("logstash 和filebeat 是什么关系？"),s(i)]),e(" 顺便试了一下 filebeat"),h,e(" 改改 filebeat.yml 这个配置文件就能用，里面一些常用的都是写好了注释起来的，有可以处理多行日志的 multiline 配置切分拼接一气呵成")]),p,n("p",null,[e("里面的 grok 有个 "),n("a",q,[e("调试工具"),s(i)]),_,e(" 我用这个调试工具遇到了个坑"),S,e(" 这是 multiline 切割拼接之后的一条：")]),f])}const y=l(u,[["render",x],["__file","Logstash_Backup.html.vue"]]);export{y as default};
