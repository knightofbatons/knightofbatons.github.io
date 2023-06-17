const e=JSON.parse('{"key":"v-6e1f0d48","path":"/posts/Archives/Setting_up_a_Github_Pages_blog_with_Hexo.html","title":"Setting-up-a-Github-Pages-blog-with-Hexo","lang":"zh-CN","frontmatter":{"title":"Setting-up-a-Github-Pages-blog-with-Hexo","date":"2017-09-28T00:00:00.000Z","category":["记录"],"tag":["GithubPages","Hexo"],"description":"关于如何用博客框架 Hexo 快速简单的搭建个人博客，并使用 GithubPages 托管 1. 写出来的目的 本来这个东西是简单的，可是介绍给别人的时候贴上 4 到 5 个链接有时候并不能说明问题，所以写在一起 2. Hexo 的安装 其 文档 很详细,但需要注意的是 git for windows 已经可以被 Github Desktop 代替 与这个文档相比，下面写的过程比较简练，且发生在Windows系统下。","head":[["meta",{"property":"og:url","content":"https://blog.nerv.love/posts/Archives/Setting_up_a_Github_Pages_blog_with_Hexo.html"}],["meta",{"property":"og:site_name","content":"KnightOfBatons Blog"}],["meta",{"property":"og:title","content":"Setting-up-a-Github-Pages-blog-with-Hexo"}],["meta",{"property":"og:description","content":"关于如何用博客框架 Hexo 快速简单的搭建个人博客，并使用 GithubPages 托管 1. 写出来的目的 本来这个东西是简单的，可是介绍给别人的时候贴上 4 到 5 个链接有时候并不能说明问题，所以写在一起 2. Hexo 的安装 其 文档 很详细,但需要注意的是 git for windows 已经可以被 Github Desktop 代替 与这个文档相比，下面写的过程比较简练，且发生在Windows系统下。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-17T15:10:27.000Z"}],["meta",{"property":"article:author","content":"KnightOfBatons"}],["meta",{"property":"article:tag","content":"GithubPages"}],["meta",{"property":"article:tag","content":"Hexo"}],["meta",{"property":"article:published_time","content":"2017-09-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-17T15:10:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Setting-up-a-Github-Pages-blog-with-Hexo\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2017-09-28T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-17T15:10:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"KnightOfBatons\\",\\"url\\":\\"https://blog.nerv.love\\"}]}"]]},"headers":[{"level":2,"title":"1. 写出来的目的","slug":"_1-写出来的目的","link":"#_1-写出来的目的","children":[]},{"level":2,"title":"2. Hexo 的安装","slug":"_2-hexo-的安装","link":"#_2-hexo-的安装","children":[{"level":3,"title":"2.1. 安装前置 Node.js","slug":"_2-1-安装前置-node-js","link":"#_2-1-安装前置-node-js","children":[]},{"level":3,"title":"2.2. 安装前置 Git","slug":"_2-2-安装前置-git","link":"#_2-2-安装前置-git","children":[]},{"level":3,"title":"2.3. 推荐安装 Github Desktop 很方便的简单使用 Github","slug":"_2-3-推荐安装-github-desktop-很方便的简单使用-github","link":"#_2-3-推荐安装-github-desktop-很方便的简单使用-github","children":[]},{"level":3,"title":"2.4. 安装本体 Hexo","slug":"_2-4-安装本体-hexo","link":"#_2-4-安装本体-hexo","children":[]}]},{"level":2,"title":"3. 去 这里 选择主题","slug":"_3-去-这里-选择主题","link":"#_3-去-这里-选择主题","children":[]},{"level":2,"title":"4. 试一下 Hexo 和你刚刚选好的主题","slug":"_4-试一下-hexo-和你刚刚选好的主题","link":"#_4-试一下-hexo-和你刚刚选好的主题","children":[]},{"level":2,"title":"5. Github Pages 的使用","slug":"_5-github-pages-的使用","link":"#_5-github-pages-的使用","children":[]},{"level":2,"title":"6. 简例出一个流程","slug":"_6-简例出一个流程","link":"#_6-简例出一个流程","children":[{"level":3,"title":"6.1. 新建文章","slug":"_6-1-新建文章","link":"#_6-1-新建文章","children":[]},{"level":3,"title":"6.2. 生成静态文件","slug":"_6-2-生成静态文件","link":"#_6-2-生成静态文件","children":[]},{"level":3,"title":"6.3. 查看效果","slug":"_6-3-查看效果","link":"#_6-3-查看效果","children":[]}]},{"level":2,"title":"7. 推送到 Github","slug":"_7-推送到-github","link":"#_7-推送到-github","children":[]}],"git":{"createdTime":1687014627000,"updatedTime":1687014627000,"contributors":[{"name":"Yu Chen","email":"knightofbatons@hotmail.com","commits":1}]},"readingTime":{"minutes":3.85,"words":1155},"filePathRelative":"posts/Archives/Setting_up_a_Github_Pages_blog_with_Hexo.md","localizedDate":"2017年9月28日","excerpt":"<p>关于如何用博客框架 Hexo 快速简单的搭建个人博客，并使用 GithubPages 托管</p>\\n<!--more-->\\n<h2> 1. 写出来的目的</h2>\\n<p>本来这个东西是简单的，可是介绍给别人的时候贴上 4 到 5 个链接有时候并不能说明问题，所以写在一起</p>\\n<h2> 2. Hexo 的安装</h2>\\n<p>其 <a href=\\"https://hexo.io/zh-cn/docs/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">文档</a> 很详细,但需要注意的是 git for windows 已经可以被 Github Desktop 代替<br>\\n与这个文档相比，下面写的过程比较简练，且发生在Windows系统下。</p>","autoDesc":true}');export{e as data};
