import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as a,c as t,d as e,e as n,f as l,b as s}from"./app-94b1e6df.js";const c={},o=e("h2",{id:"大的方向上",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#大的方向上","aria-hidden":"true"},"#"),n(" 大的方向上")],-1),u={href:"https://baijiahao.baidu.com/s?id=1712306698362265893&wfr=spider&for=pc",target:"_blank",rel:"noopener noreferrer"},v=s('<h3 id="不要事无巨细地请教老同学-要有-owner-的心态" tabindex="-1"><a class="header-anchor" href="#不要事无巨细地请教老同学-要有-owner-的心态" aria-hidden="true">#</a> 不要事无巨细地请教老同学，要有 Owner 的心态</h3><ul><li>熟悉业务 <ul><li>用户是谁、提供的核心功能是什么、系统在上下游的地位是什么。不涉及具体的实现细节，通过核心功能产品层面的熟悉，能够对项目有一个全局性把握。</li></ul></li><li>熟悉部署结构 <ul><li>最新的代码在哪，测试环境如何搭建，监控告警有哪些，线上如何部署，线上机器分布情况等等，通过自己亲自发布一次代码，观察哪些指标，了解整体的发布流程以及部署情况。</li></ul></li><li>从问题中学习 <ul><li>系统较为复杂时，实现细节太多，直接上手看代码熟悉链路的实现细节效率较低，比较好的方式是通过实际问题，<strong>了解一个问题的来龙去脉，通过具体问题的修复过程中，逐步熟悉整个系统，但需要把熟悉的部分整理到整体的认识当中。</strong></li></ul></li><li>Owner 的心态 <ul><li>接手一个系统，就需要以 Owner 心态对待。有些同学习惯性的事无巨细都请教老同学，心底有所依赖，缺少了一份独立思考，成长起来就相对较慢。<strong>遇到疑问要首先要自己做一个判断，不论判断的是否正确，经过一次思考后，对系统的理解将会上一个台阶。</strong></li></ul></li></ul><h3 id="认识各类大中型项目演进历程-有助于你真正理解一个项目" tabindex="-1"><a class="header-anchor" href="#认识各类大中型项目演进历程-有助于你真正理解一个项目" aria-hidden="true">#</a> 认识各类大中型项目演进历程，有助于你真正理解一个项目</h3><ul><li>部分中大型项目是慢慢演进而来的<br> - 这类项目因时间周期长，迭代次数多，需求文档和设计文档一般都会存在缺失，一般都是文档落后于实现，且这类项目一般都有一些坑或者历史包袱，很难直接通过文档就直接将项目做到了然于心。</li><li>另一部分中大型项目则是近期设计开发完成 <ul><li>因为在设计之初就定位为中大型的项目，需求和设计一般在一开始就想的比较清楚了才会进行开发，初期功能上线后，后面的迭代升级一般不会在技术上进行大改，一般都是要么按照需求文档，将功能分期上线，要么就是一些小问题的修复，<strong>所以这类项目一般通过文档就能对项目进行一个整体的把控。</strong></li></ul></li><li><strong>好的设计可以直接从工程的目录结构上了解到应用的模块分类，从命名上知道模块大致的作用</strong>，其次我们可以从pom文件、打包脚本、接口类等对应用模块以及提供的服务能力进行初步了解（这里以Java工程为例）</li><li>可以将应用以及应用内模块的功能进行了一个整理，形成一个文档；这样当我们需要实现一个需求或者需要修Bug的时候，我们可以快速知道这个功能可能需要涉及哪些应用以及模块。</li></ul><h2 id="实践细节" tabindex="-1"><a class="header-anchor" href="#实践细节" aria-hidden="true">#</a> 实践细节</h2>',5),h={href:"https://blog.csdn.net/Andrewniu/article/details/78932028",target:"_blank",rel:"noopener noreferrer"},b=e("br",null,null,-1),m=e("br",null,null,-1),_=e("br",null,null,-1),f=e("br",null,null,-1),g=e("br",null,null,-1),p=s(`<h2 id="模板" tabindex="-1"><a class="header-anchor" href="#模板" aria-hidden="true">#</a> 模板</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#接触新项目

&gt; 
创建时间：{{date}} {{time}} 
&lt;!--more--&gt;

### 业务背景
- 用户是谁
- 提供的核心功能是什么
- 系统上下游地位
- 系统发展类型
	- 整体设计
	- 演进
- 文档

### 部署结构
- 代码托管位置
- 测试环境如何搭建
- 线上如何部署

### 功能模块与目录结构
- UML 类图

### 关键业务具体流程
- 可打断点查看
- 时序图
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function x(w,k){const i=d("ExternalLinkIcon");return a(),t("div",null,[o,e("p",null,[e("a",u,[n("程序员如何快速上手一个新项目？"),l(i)])]),v,e("p",null,[e("a",h,[n("程序员如何快速上手一个自己不太熟悉的新项目？有什么技巧？"),l(i)]),b,n(" 对于一个新工程，可以用像下面这样的方法来快速上手："),m,n(" 　　1. 搭好编译环境，并让它跑起来。"),_,n(" 　　2. 在一个简单的功能入口设置一个断点，看看程序运行到这里，它的堆栈是怎么样的，然后去分析程序的结构、层次关系（ＭＶＣ什么的）。"),f,n(" 　　3. 在你觉得重要的类的构造函数、析构函数（如果有的话）处设置断点，看看它们的生命周期是如何管理的。"),g,n(" 　　4. 如果对于2、3都了解的话，就跟进工程的底层，了解程序的框架。框架都是简单的，当了解了框架后，程序的功能的添加、删除也就是加减法了。")]),p])}const V=r(c,[["render",x],["__file","如何熟悉新项目.html.vue"]]);export{V as default};
