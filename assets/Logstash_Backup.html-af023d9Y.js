import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as e,o as i}from"./app-DxQU-vOm.js";const l={};function p(d,s){return i(),a("div",null,[...s[0]||(s[0]=[e(`<p>Logstash 简单试用备忘</p><h2 id="_1-从数据库里面输入开始试用" tabindex="-1"><a class="header-anchor" href="#_1-从数据库里面输入开始试用"><span>1. 从数据库里面输入开始试用</span></a></h2><p>看 <a href="https://www.elastic.co/blog/logstash-jdbc-input-plugin" target="_blank" rel="noopener noreferrer">官网相关的教学blog</a> 后用自己的 Mysql 测试</p><h3 id="_1-1-mysql" tabindex="-1"><a class="header-anchor" href="#_1-1-mysql"><span>1.1. Mysql</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>mysql_to_elasticsearch.conf</span></span>
<span class="line"><span>---------------------------</span></span>
<span class="line"><span>input {</span></span>
<span class="line"><span>    jdbc {</span></span>
<span class="line"><span>        # Postgres jdbc connection string to our database, mydb</span></span>
<span class="line"><span>        jdbc_connection_string =&gt; &quot;jdbc:mysql://localhost:3306/databasename?characterEncoding=UTF-8&amp;useSSL=false&quot;  </span></span>
<span class="line"><span>        # The user we wish to execute our statement as</span></span>
<span class="line"><span>        jdbc_user =&gt; &quot;username&quot;</span></span>
<span class="line"><span>        jdbc_password =&gt; &quot;password&quot;</span></span>
<span class="line"><span>        # The path to our downloaded jdbc driver</span></span>
<span class="line"><span>        jdbc_driver_library =&gt; &quot;D:\\Applications\\logstash-5.6.3\\test_logstash_mysql\\mysql-connector-java-5.1.44-bin.jar&quot;</span></span>
<span class="line"><span>        # The name of the driver class for Postgresql</span></span>
<span class="line"><span>        jdbc_driver_class =&gt; &quot;com.mysql.jdbc.Driver&quot;</span></span>
<span class="line"><span>        # our query</span></span>
<span class="line"><span>        statement =&gt; &quot;SELECT * from user&quot;</span></span>
<span class="line"><span>        # 定时运行</span></span>
<span class="line"><span>        schedule =&gt; &quot;* * * * *&quot;</span></span>
<span class="line"><span>        # 是否全量同步</span></span>
<span class="line"><span>        clean_run =&gt; &quot;false&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>output {</span></span>
<span class="line"><span>    elasticsearch {</span></span>
<span class="line"><span>        index =&gt; &quot;users&quot;</span></span>
<span class="line"><span>        document_type =&gt; &quot;user&quot;</span></span>
<span class="line"><span>        document_id =&gt; &quot;%{id}&quot;</span></span>
<span class="line"><span>        hosts =&gt; &quot;http://localhost:9200/&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后用有大量数据的 sqlserver 测试</p><h3 id="_1-2-sqlserver" tabindex="-1"><a class="header-anchor" href="#_1-2-sqlserver"><span>1.2. SqlServer</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>sqlserver_to_elasticsearch.conf</span></span>
<span class="line"><span>-------------------------------</span></span>
<span class="line"><span>input {</span></span>
<span class="line"><span>    jdbc {</span></span>
<span class="line"><span>        # Postgres jdbc connection string to our database, mydb</span></span>
<span class="line"><span>        jdbc_connection_string =&gt; &quot;jdbc:sqlserver://address:1433;database=avc&quot;  </span></span>
<span class="line"><span>        # The user we wish to execute our statement as</span></span>
<span class="line"><span>        jdbc_user =&gt; &quot;username&quot;</span></span>
<span class="line"><span>        jdbc_password =&gt; &quot;password&quot;</span></span>
<span class="line"><span>        # The path to our downloaded jdbc driver</span></span>
<span class="line"><span>        jdbc_driver_library =&gt; &quot;D:\\Applications\\logstash-5.6.3\\test_logstash_sqlserver\\sqljdbc42-6.0.8112.100.jar&quot;</span></span>
<span class="line"><span>        # The name of the driver class for Postgresql</span></span>
<span class="line"><span>        jdbc_driver_class =&gt; &quot;com.microsoft.sqlserver.jdbc.SQLServerDriver&quot;</span></span>
<span class="line"><span>        # our query</span></span>
<span class="line"><span>        statement =&gt; &quot;SELECT * from H_CAC_DCC_SALES_DETAIL&quot;</span></span>
<span class="line"><span>        # 定时运行</span></span>
<span class="line"><span>        # schedule =&gt; &quot;* * * * *&quot;</span></span>
<span class="line"><span>        # 是否全量同步</span></span>
<span class="line"><span>        clean_run =&gt; &quot;false&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>output {</span></span>
<span class="line"><span>    elasticsearch {</span></span>
<span class="line"><span>        index =&gt; &quot;avcs&quot;</span></span>
<span class="line"><span>        #document_type =&gt; &quot;avc&quot;</span></span>
<span class="line"><span>        #document_id =&gt; &quot;%{id}&quot;</span></span>
<span class="line"><span>        hosts =&gt; &quot;http://localhost:9200/&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-ps" tabindex="-1"><a class="header-anchor" href="#_1-3-ps"><span>1.3. PS</span></a></h3><p>driver 都是直接从 idea 文件夹下拿的，有那么个文件夹下存着</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>C:\\Users\\username\\.IntelliJIdea2017.2\\config\\jdbc-drivers</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_2-日志文件作为输入试用" tabindex="-1"><a class="header-anchor" href="#_2-日志文件作为输入试用"><span>2. 日志文件作为输入试用</span></a></h2><h3 id="_2-1-两个日志文件" tabindex="-1"><a class="header-anchor" href="#_2-1-两个日志文件"><span>2.1. 两个日志文件</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>test.log</span></span>
<span class="line"><span>--------</span></span>
<span class="line"><span>&gt;&gt; Start process script E:\\CMR\\BIN\\CMRLoadrun.vbs 2017/11/14 2:29:03</span></span>
<span class="line"><span>Area = Flight</span></span>
<span class="line"><span>Agent = C5</span></span>
<span class="line"><span>Normal Run Mode</span></span>
<span class="line"><span>Processing File E:\\CMR\\Flight\\FLTALLOT1605.TXT</span></span>
<span class="line"><span>Regular mode - doing -static</span></span>
<span class="line"><span>Starting MRSLoad 2017/11/14 2:29:03</span></span>
<span class="line"><span>MRSLoad done 2017/11/14 6:45:07</span></span>
<span class="line"><span>Processing File E:\\CMR\\Flight\\FLTLGDTA1605.TXT</span></span>
<span class="line"><span>Regular mode - doing -static</span></span>
<span class="line"><span>Starting MRSLoad 2017/11/14 6:45:07</span></span>
<span class="line"><span>MRSLoad done 2017/11/14 8:00:45</span></span>
<span class="line"><span>Processing File E:\\CMR\\Flight\\FLTPROFL1605.TXT</span></span>
<span class="line"><span>Regular mode - doing -static</span></span>
<span class="line"><span>Starting MRSLoad 2017/11/14 8:00:45</span></span>
<span class="line"><span>MRSLoad done 2017/11/14 8:56:05</span></span>
<span class="line"><span>Cycle number 1605</span></span>
<span class="line"><span>Starting MRSLog 2017/11/14 8:56:05</span></span>
<span class="line"><span>End MRSLog 2017/11/14 8:56:05</span></span>
<span class="line"><span>Deleting data files</span></span>
<span class="line"><span>Deleting flag files 8:56:05</span></span>
<span class="line"><span>Allotment update processing 8:56:05</span></span>
<span class="line"><span>Creating complete flag file 8:56:05</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>test2.log</span></span>
<span class="line"><span>---------</span></span>
<span class="line"><span>&gt;&gt; Start process 2017/11/14 2:43:51</span></span>
<span class="line"><span>Normal Run Mode</span></span>
<span class="line"><span>Processing File E:\\CMR\\Waybill\\BOOKINGS1606.TXT   2:43:51</span></span>
<span class="line"><span>Starting MRSLoad 2017/11/14 2:43:52</span></span>
<span class="line"><span>MRSLoad done 2017/11/14 3:05:05</span></span>
<span class="line"><span>Processing File E:\\CMR\\Waybill\\AIRBILL1606.TXT   3:05:05</span></span>
<span class="line"><span>Starting MRSLoad 2017/11/14 3:05:10</span></span>
<span class="line"><span>MRSLoad done 2017/11/14 4:02:16</span></span>
<span class="line"><span>Processing File E:\\CMR\\Waybill\\ACTRATE1606.TXT   4:02:16</span></span>
<span class="line"><span>Starting MRSLoad 2017/11/14 4:02:16</span></span>
<span class="line"><span>MRSLoad done 2017/11/14 4:18:22</span></span>
<span class="line"><span>Processing File E:\\CMR\\Waybill\\ALTHIST1606.TXT   4:18:22</span></span>
<span class="line"><span>Starting MRSLoad 2017/11/14 4:18:23</span></span>
<span class="line"><span>MRSLoad done 2017/11/14 4:18:28</span></span>
<span class="line"><span>Processing File E:\\CMR\\Waybill\\BKGLIST1606.TXT   4:18:28</span></span>
<span class="line"><span>Starting MRSLoad 2017/11/14 4:18:28</span></span>
<span class="line"><span>MRSLoad done 2017/11/14 4:18:28</span></span>
<span class="line"><span>Processing File E:\\CMR\\Waybill\\MISCAWB1606.TXT   4:18:28</span></span>
<span class="line"><span>Starting MRSLoad 2017/11/14 4:18:29</span></span>
<span class="line"><span>MRSLoad done 2017/11/14 4:24:45</span></span>
<span class="line"><span>Processing File E:\\CMR\\Waybill\\PARTAWB1606.TXT   4:24:45</span></span>
<span class="line"><span>Starting MRSLoad 2017/11/14 4:24:45</span></span>
<span class="line"><span>MRSLoad done 2017/11/14 4:52:36</span></span>
<span class="line"><span>Processing File E:\\CMR\\Waybill\\BKGREFNO1606.TXT   4:52:36</span></span>
<span class="line"><span>Starting MRSLoad 2017/11/14 4:52:36</span></span>
<span class="line"><span>MRSLoad done 2017/11/14 4:52:37</span></span>
<span class="line"><span>Cycle number 1606</span></span>
<span class="line"><span>Starting MRSLog 2017/11/14 4:52:37</span></span>
<span class="line"><span>End MRSLog 2017/11/14 4:52:37</span></span>
<span class="line"><span>Final processing 4:52:37</span></span>
<span class="line"><span>Revenue proportion processing 6:30:08</span></span>
<span class="line"><span>Deleting data files 7:12:06</span></span>
<span class="line"><span>Deleting flag files 7:12:06</span></span>
<span class="line"><span>Creating complete flag file 7:12:06</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-ps" tabindex="-1"><a class="header-anchor" href="#_2-2-ps"><span>2.2. PS</span></a></h3><p>看了 <a href="https://www.zhihu.com/question/54058964" target="_blank" rel="noopener noreferrer">logstash 和filebeat 是什么关系？</a> 顺便试了一下 filebeat<br> 改改 filebeat.yml 这个配置文件就能用，里面一些常用的都是写好了注释起来的，有可以处理多行日志的 multiline 配置切分拼接一气呵成</p><h3 id="_2-3-配置文件分开写" tabindex="-1"><a class="header-anchor" href="#_2-3-配置文件分开写"><span>2.3. 配置文件分开写</span></a></h3><p>logstash 的话什么 input filter output 都能分开写然后运行，分开的配置都丢在 \\test\\conf 下</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>logstash -f .\\test\\conf</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>就能把它们合起来运行</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>input1.conf</span></span>
<span class="line"><span>-----------</span></span>
<span class="line"><span>input {</span></span>
<span class="line"><span>        file {</span></span>
<span class="line"><span>                path=&gt;&quot;D:\\Applications\\ELK\\logstash-6.0.0\\test\\test.log&quot;</span></span>
<span class="line"><span>                codec=&gt; multiline {</span></span>
<span class="line"><span>                        pattern =&gt; &quot;^P&quot;</span></span>
<span class="line"><span>                        negate =&gt; true</span></span>
<span class="line"><span>                        what =&gt; &quot;previous&quot;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                start_position=&gt;&quot;beginning&quot;</span></span>
<span class="line"><span>                ignore_older=&gt;0</span></span>
<span class="line"><span>                type=&gt; &quot;1&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>input2.conf</span></span>
<span class="line"><span>-----------</span></span>
<span class="line"><span>input {</span></span>
<span class="line"><span>        file {</span></span>
<span class="line"><span>                path=&gt;&quot;D:\\Applications\\ELK\\logstash-6.0.0\\test\\test2.log&quot;</span></span>
<span class="line"><span>                codec=&gt; multiline {</span></span>
<span class="line"><span>                        pattern =&gt; &quot;^P&quot;</span></span>
<span class="line"><span>                        negate =&gt; true</span></span>
<span class="line"><span>                        what =&gt; &quot;previous&quot;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                start_position=&gt;&quot;beginning&quot;</span></span>
<span class="line"><span>                ignore_older=&gt;0</span></span>
<span class="line"><span>                type=&gt; &quot;2&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>filter2.conf</span></span>
<span class="line"><span>------------</span></span>
<span class="line"><span>filter {</span></span>
<span class="line"><span>        if [type] == &quot;2&quot;{</span></span>
<span class="line"><span>                grok {</span></span>
<span class="line"><span>                        match=&gt;[&quot;message&quot;,&quot;%{WINPATH:ProcessingFile}   %{TIME:ProceingTime}\\r\\nStarting MRSLoad %{DATA:StartingMRSLoad }\\r\\nMRSLoad done %{DATA:MRSLoaddone}\\r&quot;]</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>                mutate {    </span></span>
<span class="line"><span>                        remove_field =&gt; &quot;message&quot;          </span></span>
<span class="line"><span>                        remove_field =&gt; &quot;@version&quot;      </span></span>
<span class="line"><span>                        remove_field =&gt; &quot;host&quot;      </span></span>
<span class="line"><span>                        remove_field =&gt; &quot;path&quot;      </span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>output.conf</span></span>
<span class="line"><span>-----------</span></span>
<span class="line"><span>output {</span></span>
<span class="line"><span>        stdout {</span></span>
<span class="line"><span>                codec=&gt;rubydebug</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-ps" tabindex="-1"><a class="header-anchor" href="#_2-4-ps"><span>2.4. PS</span></a></h3><p>里面的 grok 有个 <a href="http://grokdebug.herokuapp.com/" target="_blank" rel="noopener noreferrer">调试工具</a><br> 我用这个调试工具遇到了个坑<br> 这是 multiline 切割拼接之后的一条：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>Processing File E:\\\\CMR\\\\Waybill\\\\BKGREFNO1606.TXT   4:52:36\\r\\nStarting MRSLoad 2017/11/14 4:52:36\\r\\nMRSLoad done 2017/11/14 4:52:37\\r\\nCycle number 1606\\r\\nStarting MRSLog 2017/11/14 4:52:37\\r\\nEnd MRSLog 2017/11/14 4:52:37\\r\\nFinal processing 4:52:37\\r\\nRevenue proportion processing 6:30:08\\r\\nDeleting data files 7:12:06\\r\\nDeleting flag files 7:12:06\\r\\nCreating complete flag file 7:12:06\\r</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在调试工具里这样写才能从这条里正确拿出东西：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>%{WINPATH:ProcessingFile}   %{TIME:ProceingTime}\\\\r\\\\nStarting MRSLoad %{DATA:StartingMRSLoad }\\\\r\\\\nMRSLoad done %{DATA:MRSLoaddone}\\\\r</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>可是配置文件里这么写就不行，用那个 debuger 的时候也有点费解<br> 但是本着相信官方文档推荐的工具的前提下迷茫了，顺便想到了那句：<br> “Once you eliminate the impossible,whatever remains,no matter how improbable,must be the truth.”</p><p>问题出在 \\r\\n 那里，配置文件里这样写就可以正常工作了：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>%{WINPATH:ProcessingFile}   %{TIME:ProceingTime}\\r\\nStarting MRSLoad %{DATA:StartingMRSLoad }\\r\\nMRSLoad done %{DATA:MRSLoaddone}\\r</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,33)])])}const t=n(l,[["render",p]]),o=JSON.parse('{"path":"/posts/Archives/Logstash_Backup.html","title":"Logstash","lang":"zh-CN","frontmatter":{"title":"Logstash","date":"2017-10-11T00:00:00.000Z","category":["软件工具"],"tag":["Logstash","日志"],"description":"Logstash 简单试用备忘 1. 从数据库里面输入开始试用 看 官网相关的教学blog 后用自己的 Mysql 测试 1.1. Mysql 之后用有大量数据的 sqlserver 测试 1.2. SqlServer 1.3. PS driver 都是直接从 idea 文件夹下拿的，有那么个文件夹下存着 2. 日志文件作为输入试用 2.1. 两个日志...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Logstash\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2017-10-11T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-17T15:10:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"KnightOfBatons\\",\\"url\\":\\"https://blog.nerv.love\\"}]}"],["meta",{"property":"og:url","content":"https://blog.nerv.love/posts/Archives/Logstash_Backup.html"}],["meta",{"property":"og:site_name","content":"KnightOfBatons Blog"}],["meta",{"property":"og:title","content":"Logstash"}],["meta",{"property":"og:description","content":"Logstash 简单试用备忘 1. 从数据库里面输入开始试用 看 官网相关的教学blog 后用自己的 Mysql 测试 1.1. Mysql 之后用有大量数据的 sqlserver 测试 1.2. SqlServer 1.3. PS driver 都是直接从 idea 文件夹下拿的，有那么个文件夹下存着 2. 日志文件作为输入试用 2.1. 两个日志..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-17T15:10:27.000Z"}],["meta",{"property":"article:tag","content":"日志"}],["meta",{"property":"article:tag","content":"Logstash"}],["meta",{"property":"article:published_time","content":"2017-10-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-17T15:10:27.000Z"}]]},"git":{"createdTime":1687014627000,"updatedTime":1687014627000,"contributors":[{"name":"Yu Chen","username":"","email":"knightofbatons@hotmail.com","commits":1}]},"readingTime":{"minutes":3.73,"words":1118},"filePathRelative":"posts/Archives/Logstash_Backup.md","excerpt":"<p>Logstash 简单试用备忘</p>\\n<!--more-->\\n<h2>1. 从数据库里面输入开始试用</h2>\\n<p>看 <a href=\\"https://www.elastic.co/blog/logstash-jdbc-input-plugin\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官网相关的教学blog</a> 后用自己的 Mysql 测试</p>\\n<h3>1.1. Mysql</h3>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code class=\\"language-\\"><span class=\\"line\\"><span>mysql_to_elasticsearch.conf</span></span>\\n<span class=\\"line\\"><span>---------------------------</span></span>\\n<span class=\\"line\\"><span>input {</span></span>\\n<span class=\\"line\\"><span>    jdbc {</span></span>\\n<span class=\\"line\\"><span>        # Postgres jdbc connection string to our database, mydb</span></span>\\n<span class=\\"line\\"><span>        jdbc_connection_string => \\"jdbc:mysql://localhost:3306/databasename?characterEncoding=UTF-8&#x26;useSSL=false\\"  </span></span>\\n<span class=\\"line\\"><span>        # The user we wish to execute our statement as</span></span>\\n<span class=\\"line\\"><span>        jdbc_user => \\"username\\"</span></span>\\n<span class=\\"line\\"><span>        jdbc_password => \\"password\\"</span></span>\\n<span class=\\"line\\"><span>        # The path to our downloaded jdbc driver</span></span>\\n<span class=\\"line\\"><span>        jdbc_driver_library => \\"D:\\\\Applications\\\\logstash-5.6.3\\\\test_logstash_mysql\\\\mysql-connector-java-5.1.44-bin.jar\\"</span></span>\\n<span class=\\"line\\"><span>        # The name of the driver class for Postgresql</span></span>\\n<span class=\\"line\\"><span>        jdbc_driver_class => \\"com.mysql.jdbc.Driver\\"</span></span>\\n<span class=\\"line\\"><span>        # our query</span></span>\\n<span class=\\"line\\"><span>        statement => \\"SELECT * from user\\"</span></span>\\n<span class=\\"line\\"><span>        # 定时运行</span></span>\\n<span class=\\"line\\"><span>        schedule => \\"* * * * *\\"</span></span>\\n<span class=\\"line\\"><span>        # 是否全量同步</span></span>\\n<span class=\\"line\\"><span>        clean_run => \\"false\\"</span></span>\\n<span class=\\"line\\"><span>    }</span></span>\\n<span class=\\"line\\"><span>}</span></span>\\n<span class=\\"line\\"><span>output {</span></span>\\n<span class=\\"line\\"><span>    elasticsearch {</span></span>\\n<span class=\\"line\\"><span>        index => \\"users\\"</span></span>\\n<span class=\\"line\\"><span>        document_type => \\"user\\"</span></span>\\n<span class=\\"line\\"><span>        document_id => \\"%{id}\\"</span></span>\\n<span class=\\"line\\"><span>        hosts => \\"http://localhost:9200/\\"</span></span>\\n<span class=\\"line\\"><span>    }</span></span>\\n<span class=\\"line\\"><span>}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as comp,o as data};
