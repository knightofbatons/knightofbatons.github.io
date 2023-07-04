import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r,o,c as d,a as l,b as e,d as n,e as i,f as s}from"./app-f2e7bd4b.js";const h={},c=e("p",null,"关于如何用博客框架 Hexo 快速简单的搭建个人博客，并使用 GithubPages 托管",-1),u=e("h2",{id:"_1-写出来的目的",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-写出来的目的","aria-hidden":"true"},"#"),n(" 1. 写出来的目的")],-1),_=e("p",null,"本来这个东西是简单的，可是介绍给别人的时候贴上 4 到 5 个链接有时候并不能说明问题，所以写在一起",-1),b=e("h2",{id:"_2-hexo-的安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-hexo-的安装","aria-hidden":"true"},"#"),n(" 2. Hexo 的安装")],-1),p={href:"https://hexo.io/zh-cn/docs/",target:"_blank",rel:"noopener noreferrer"},g=e("br",null,null,-1),v={id:"_2-1-安装前置-node-js",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#_2-1-安装前置-node-js","aria-hidden":"true"},"#",-1),x={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,"至于 Node.js 各版本的区别，对于本流程没有多大影响",-1),k={id:"_2-2-安装前置-git",tabindex:"-1"},w=e("a",{class:"header-anchor",href:"#_2-2-安装前置-git","aria-hidden":"true"},"#",-1),G={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},H={id:"_2-3-推荐安装-github-desktop-很方便的简单使用-github",tabindex:"-1"},S=e("a",{class:"header-anchor",href:"#_2-3-推荐安装-github-desktop-很方便的简单使用-github","aria-hidden":"true"},"#",-1),j={href:"https://desktop.github.com/",target:"_blank",rel:"noopener noreferrer"},P={id:"_2-4-安装本体-hexo",tabindex:"-1"},N=e("a",{class:"header-anchor",href:"#_2-4-安装本体-hexo","aria-hidden":"true"},"#",-1),z={href:"https://hexo.io/zh-cn/",target:"_blank",rel:"noopener noreferrer"},V=s(`<p>前置需求都有了以后打开 Windows PowerShell 还是什么其他的命令行工具</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install hexo-cli -g //安装 Hexo

hexo init &lt;folder&gt;      //在指定文件夹中新建所需要的文件
cd &lt;folder&gt;
npm install

hexo server             //开启 Server 测试安装成功
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>刚才建立的目录结构里面</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├── _config.yml     //网站的 [配置](https://hexo.io/zh-cn/docs/configuration.html) 信息
├── package.json    //应用程序的信息
├── scaffolds       //默认填充内容 [模板](https://hexo.io/zh-cn/docs/writing.html) 文件夹
├── source
|   ├── _drafts
|   └── _posts      //那些 .md 格式的,用 [Markdown](https://daringfireball.net/projects/markdown/) 语法写的文章
└── themes          //[主题](https://hexo.io/themes/) 文件夹
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),C={id:"_3-去-这里-选择主题",tabindex:"-1"},D=e("a",{class:"header-anchor",href:"#_3-去-这里-选择主题","aria-hidden":"true"},"#",-1),y={href:"https://hexo.io/themes/",target:"_blank",rel:"noopener noreferrer"},B=s(`<p>主题的页面一般有说该怎么安装怎么配置<br> 没说怎么安装的话，一般是下载下来：无论是直接下 .zip 还是用 Git Clone 到本地<br> 打开 Hexo 的配置文件 _config.yml 找到改一下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> _config.yml
------------
theme: 这里写主题文件夹的名字
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-试一下-hexo-和你刚刚选好的主题" tabindex="-1"><a class="header-anchor" href="#_4-试一下-hexo-和你刚刚选好的主题" aria-hidden="true">#</a> 4. 试一下 Hexo 和你刚刚选好的主题</h2><p>在 \\blog\\ 目录下打开命令行工具</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Hexo Help
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以获取 Hexo 的所有命令，主要用到的就是</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//在重新输出静态文件前，清理输出目录下的文件以及数据
clean     Remove generated files and cache.
//生成静态文件
generate  Generate static files.
//获取帮助
help      Get help on a command.
//新建文章
new       Create a new post.
//起服务看看效果
server    Start the server.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),E={id:"_5-github-pages-的使用",tabindex:"-1"},M=e("a",{class:"header-anchor",href:"#_5-github-pages-的使用","aria-hidden":"true"},"#",-1),I={href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"},L={href:"http://username.github.io",target:"_blank",rel:"noopener noreferrer"},W=e("br",null,null,-1),R={href:"https://username.github.io",target:"_blank",rel:"noopener noreferrer"},T=e("br",null,null,-1),q=e("br",null,null,-1),A={href:"https://knightofbatons.github.io/",target:"_blank",rel:"noopener noreferrer"},F=s(`<h2 id="_6-简例出一个流程" tabindex="-1"><a class="header-anchor" href="#_6-简例出一个流程" aria-hidden="true">#</a> 6. 简例出一个流程</h2><p>做完以上这些可以说是基本上完事了，现在简单举个例子看看流程是怎么样的</p><h3 id="_6-1-新建文章" tabindex="-1"><a class="header-anchor" href="#_6-1-新建文章" aria-hidden="true">#</a> 6.1. 新建文章</h3><p>拿这篇文章为例，运行新建命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hexo new post Setting-up-a-Github-Pages-blog-with-Hexo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),J={href:"http://Setting-up-a-Github-Pages-blog-with-Hexo.md",target:"_blank",rel:"noopener noreferrer"},K=e("br",null,null,-1),O=e("br",null,null,-1),Q=e("br",null,null,-1),U={href:"https://daringfireball.net/projects/markdown/dingus",target:"_blank",rel:"noopener noreferrer"},X=s(`<h3 id="_6-2-生成静态文件" tabindex="-1"><a class="header-anchor" href="#_6-2-生成静态文件" aria-hidden="true">#</a> 6.2. 生成静态文件</h3><p>我很可能忘记了命令 hexo help 可以帮我记起来</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hexo help //获取 Hexo 的命令
...
hexo clean
hexo generate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样先清空之前的输出<br> 之后在 \\blog\\public 文件夹下生成了需要的所有静态文件</p><h3 id="_6-3-查看效果" tabindex="-1"><a class="header-anchor" href="#_6-3-查看效果" aria-hidden="true">#</a> 6.3. 查看效果</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hexo server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认访问地址为 localhost:4000 用浏览器查看效果是否正常且满意<br> 很明显，我可以调整到满意为止</p><h2 id="_7-推送到-github" tabindex="-1"><a class="header-anchor" href="#_7-推送到-github" aria-hidden="true">#</a> 7. 推送到 Github</h2>`,8),Y=e("br",null,null,-1),Z=e("br",null,null,-1),$={href:"http://username.github.io",target:"_blank",rel:"noopener noreferrer"},ee=e("br",null,null,-1),ne={href:"https://username.github.io",target:"_blank",rel:"noopener noreferrer"},te=e("br",null,null,-1);function ie(se,ae){const t=r("ExternalLinkIcon");return o(),d("div",null,[c,l("more"),u,_,b,e("p",null,[n("其 "),e("a",p,[n("文档"),i(t)]),n(" 很详细,但需要注意的是 git for windows 已经可以被 Github Desktop 代替"),g,n(" 与这个文档相比，下面写的过程比较简练，且发生在Windows系统下。")]),e("h3",v,[m,n(" 2.1. 安装前置 "),e("a",x,[n("Node.js"),i(t)])]),f,e("h3",k,[w,n(" 2.2. 安装前置 "),e("a",G,[n("Git"),i(t)])]),e("h3",H,[S,n(" 2.3. 推荐安装 "),e("a",j,[n("Github Desktop"),i(t)]),n(" 很方便的简单使用 Github")]),e("h3",P,[N,n(" 2.4. 安装本体 "),e("a",z,[n("Hexo"),i(t)])]),V,e("h2",C,[D,n(" 3. 去 "),e("a",y,[n("这里"),i(t)]),n(" 选择主题")]),B,e("h2",E,[M,n(" 5. "),e("a",I,[n("Github Pages"),i(t)]),n(" 的使用")]),e("p",null,[n("这当然需要你有一个 Github 账号，这一步之后你会得到一个名为 "),e("a",L,[n("username.github.io"),i(t)]),n(" 的仓库和与之对应的本地文件夹"),W,n(" 你的博客如果不绑定别的域名，访问地址就会是 "),e("a",R,[n("https://username.github.io"),i(t)]),T,n(" 其中的 username 是你自己的 Github 用户名"),q,n(" 比如我的用户名是 knightofbatons 博客就在 "),e("a",A,[n("https://knightofbatons.github.io/"),i(t)])]),F,e("p",null,[n("就在 \\blog\\source_posts 建立了文件 "),e("a",J,[n("Setting-up-a-Github-Pages-blog-with-Hexo.md"),i(t)]),K,n(" 用随便什么喜欢的编辑器打开，里面已经有了按照 post 规则生成的 title date tags 。用 Markdown 语法书写开始！"),O,n(" 如果你在此之前不熟悉 Markdown 那你大可不必担心，因为它是那么的易学、易用，让你可以专注于文字的同时拥有不错的样子"),Q,n(" 作为开始你大可 "),e("a",U,[n("在这里"),i(t)]),n(" 一点点尝试它的效果")]),X,e("p",null,[n("如果一切没问题，那么就是时候把他放上去了，如果你安装了 Github Desktop 那会是一件非常显而易见且简单的事情"),Y,n(" 当然你可以选择在 Hexo 做一些配置然后用命令行直接推上去，这个 Hexo 的文档有详细介绍"),Z,n(" 把 blog\\public 下的所有内容复制到与你的 "),e("a",$,[n("username.github.io"),i(t)]),n(" 关联的文件夹下，Github Desktop 会检查到它们"),ee,n(" 提交并推上去，等一会就到 "),e("a",ne,[n("https://username.github.io"),i(t)]),n(" 看看吧，你的博客已经在那里了"),te,n(" 第一次推上去到显示出来可能有延迟，并有可能高达10min以上，不要着急耐心等待")])])}const de=a(h,[["render",ie],["__file","Setting_up_a_Github_Pages_blog_with_Hexo.html.vue"]]);export{de as default};