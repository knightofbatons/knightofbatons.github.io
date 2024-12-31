import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as s,c as a,a as u,b as l,d as e,e as t,f as r}from"./app-21dc2800.js";const _="/assets/blog_images/mac_mini/Jellyfin.gif",h="/assets/blog_images/mac_mini/30-12-2024.jpeg",c="/assets/blog_images/mac_mini/SSD.jpg",d="/assets/blog_images/mac_mini/LG_TV.gif",p="/assets/blog_images/mac_mini/NET.jpeg",m={},f=l("p",null,[e("Mac mini M4 运行功耗很低，且我的主要用途下基本不会关机，"),l("br"),e(" 顺便让它承担 “家庭媒体服务” 的任务，扮演一定 NAS 的角色就很合理（专门干这个性价比实在不高），"),l("br"),e(" 本记录用于自我备忘、发给朋友，仅供参考")],-1),b=l("p",null,"文字使用 列表组织 是方便直接按级别跳跃查看，不可避免的造成内容过长，请使用目录功能跳转",-1),g=r('<h2 id="_1-购买" tabindex="-1"><a class="header-anchor" href="#_1-购买" aria-hidden="true">#</a> 1.购买</h2><ul><li>Mac mini M4 <ul><li>京东 3400+ 购入（国家补贴）</li><li>16GB 统一内存</li><li>256GB 固态硬盘</li><li>正面：两个 USB-C 端口，耳机插孔</li><li>背面：三个雷雳 4 端口，HDMI 端口，千兆以太网端口</li></ul></li><li>WERO 雷电3 硬盘盒 <ul><li>天猫 580+ 购入</li><li>JHL7440+JMS583 双控方案</li></ul></li><li>致态 TiPlus7100 4TB NVMe M.2 SSD 固态硬盘 <ul><li>京东 1700+ 购入</li></ul></li></ul><h2 id="_2-软件" tabindex="-1"><a class="header-anchor" href="#_2-软件" aria-hidden="true">#</a> 2.软件</h2><p>一系列软件最基础的配置和，观影流程差不多是这样的：</p><ul><li>安装 Homebrew 用于统一管理安装软件</li><li>安装媒体服务器 Jellyfin，并配置 <ul><li>控制台/媒体库 规划好文件夹 <ul><li>刮削使用 MP 存储的 NFO 文件就好，这边也有刮削功能可以不使用</li></ul></li><li>控制台/播放/转码 设定硬件加速 等选项 <ul><li>硬件加速对于有在移动端播放需求的情况是很必要的</li><li>设定备用字体文件路径并启用，可以解决外挂中文字幕编码显示为方块的问题</li></ul></li><li>控制台/我的插件 安装需要的插件如 DLNA 等</li></ul></li><li>手机/电视/Pad 等需要观影的客户端安装 Jellyfin/Infuse/VidHub 等合适的观影客户端，并配置服务端</li><li>安装下载器 qBittorrent</li><li>准备好 PT 站</li><li>Homebrew 安装 OrbStack 提供 Docker 环境</li><li>用 Docker Compose 安装 MP 并配置 <ul><li>设定/系统 配置 媒体服务器 和 下载器</li><li>设定/存储&amp;目录 配置目录 <ul><li>这边是把 媒体库 和 下载库 分开，下载后存储到 下载库 的文件 MP 自动整理 到 媒体库，媒体库无论是 硬链接、软连接 下载库 文件，都可以随便改名随便删，不会影响 下载库 里面文件的做种</li></ul></li><li>设定/站点 配置站点同步，配合 CookieCloud 插件同步浏览器中已登陆站点的 Cookie 以批量自动添加站点</li><li>设定/搜索&amp;站点 配置搜索站点</li><li>设定/订阅 配置订阅站点</li><li>设定/服务 有什么想及时运行的定时任务可以在这边直接点，比如“同步CookieCloud站点”马上同步站点到 MP</li></ul></li><li>在 MP 通过推荐/主动搜索 查询媒体资源并下载/先行订阅 <ul><li>静候 MP 根据配置整理好</li><li>对于设置好的 MP 订阅有多好用，我举个例子：前些阵子的 《秘密关卡》 前后两部分是分开放送的，我手动搜索下载了前半部，订阅了下半部，后面出了包含后半部全集的种子，在满足我设定好的 订阅规则 和 优先级规则组 的前提下 它给我下好了 全集种子里面我没有的集数</li></ul></li><li>媒体服务器里面应该就有了</li><li>客户端使用海报墙选取媒体，开始观看<br><img src="'+_+'" alt="客户端" loading="lazy"><br> 下面详细列出软件详情</li></ul><h3 id="_2-1-基础软件" tabindex="-1"><a class="header-anchor" href="#_2-1-基础软件" aria-hidden="true">#</a> 2.1.基础软件</h3>',6),k={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},P=l("li",null,"一个开源软件包管理器",-1),v=l("li",null,"可以理解为一个命令行版本的、包含应用范围更广阔的应用商店",-1),T=l("li",null,"使安装软件变得简单，轻松保持软件的更新。通过一致的、用户友好的命令行界面，来简化来自不同来源的软件包的安装过程",-1),w={href:"https://geekuninstaller.com/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://freemacsoft.net/appcleaner/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://orbstack.dev/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://formulae.brew.sh/cask/orbstack",target:"_blank",rel:"noopener noreferrer"},S=l("li",null,"一个专门为 Docker 和容器化应用设计的 MacOS 容器运行时环境",-1),D=l("li",null,"有了这个就能用 Docker 镜像的形式运行各种软件了",-1),H={href:"https://www.docker.com/products/docker-desktop/",target:"_blank",rel:"noopener noreferrer"},N={href:"https://docs.orbstack.dev/docker/host-networking",target:"_blank",rel:"noopener noreferrer"},I=l("li",null,"在这种模式下，容器不会被分配独立的 IP 地址，而是直接使用宿主机的网络栈。这意味着容器中的服务将绑定到宿主机的接口，并且可以直接访问外部网络，就像它们是在宿主机上运行的一样。",-1),B={href:"https://blog.csdn.net/qq_42937522/article/details/109052954",target:"_blank",rel:"noopener noreferrer"},A=l("li",null,"原因未知，用 Docker Desktop 的时候，我把 ExFAT 格式的移动移动硬盘挂载到镜像，遇到了各种权限问题，用 OrbStack 就没事",-1),L=l("h3",{id:"_2-2-家庭媒体服务相关软件",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_2-2-家庭媒体服务相关软件","aria-hidden":"true"},"#"),e(" 2.2.家庭媒体服务相关软件")],-1),V={href:"https://jellyfin.org/",target:"_blank",rel:"noopener noreferrer"},E={href:"https://formulae.brew.sh/cask/jellyfin#default",target:"_blank",rel:"noopener noreferrer"},U=l("li",null,"媒体服务解决方案",-1),R=l("li",null,"开源，让您完全掌控自己的媒体。通过您自己的服务器将媒体流传输到任何设备，没有任何附加条件。您的媒体，您的服务器，尽在您的掌控之中。",-1),q={href:"https://emby.media/",target:"_blank",rel:"noopener noreferrer"},J={href:"https://www.plex.tv/",target:"_blank",rel:"noopener noreferrer"},O={href:"https://metatube-community.github.io/README_ZH/",target:"_blank",rel:"noopener noreferrer"},G={href:"https://github.com/metatube-community/metatube-sdk-go/blob/main/docker-compose.yaml",target:"_blank",rel:"noopener noreferrer"},z={href:"https://metatube-community.github.io/wiki/plugin-installation/",target:"_blank",rel:"noopener noreferrer"},F=l("li",null,"搭配 Jellyfin、Emby、Plex 等媒体服务器使用的 XXX 🔞 特殊资源刮削工具",-1),j=l("li",null,"单独部署后端",-1),W=l("li",null,"媒体服务器安装对应插件，并配置好后端实用",-1),X=l("li",null,[e("DLNA 插件 "),l("ul",null,[l("li",null,"提供给不适合安装客户端的地方使用，比如 VR 眼镜 Quest3 上的播放器")])],-1),Y={href:"https://www.qbittorrent.org/",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://formulae.brew.sh/cask/qbittorrent",target:"_blank",rel:"noopener noreferrer"},K=l("li",null,"PT 常用下载器",-1),Q={href:"https://transmissionbt.com/",target:"_blank",rel:"noopener noreferrer"},$={href:"https://formulae.brew.sh/cask/transmission",target:"_blank",rel:"noopener noreferrer"},ll=l("li",null,"PT 做种更好用的下载器",-1),el={href:"https://www.xunlei.com/",target:"_blank",rel:"noopener noreferrer"},nl={href:"https://formulae.brew.sh/cask/thunder",target:"_blank",rel:"noopener noreferrer"},tl=l("li",null,"BT 常用下载器",-1),rl=l("li",null,"有时下热门资源比 PT 还厉害（前提是有最高级会员）",-1),ol=l("li",null,"带一个迅雷网盘",-1),il={href:"https://www.tinymediamanager.org/",target:"_blank",rel:"noopener noreferrer"},sl={href:"https://formulae.brew.sh/cask/tinymediamanager",target:"_blank",rel:"noopener noreferrer"},al=l("li",null,"媒体管理工具",-1),ul=l("li",null,"它旨在为媒体服务器提供元数据（就是所谓的刮削，抓取海报墙用得到的图片和媒体信息）",-1),_l=l("li",null,"可以手动操作此软件，刮削一些自动刮削工具死活不行的",-1),hl={id:"_2-3-pt-相关软件",tabindex:"-1"},cl=l("a",{class:"header-anchor",href:"#_2-3-pt-相关软件","aria-hidden":"true"},"#",-1),dl={href:"http://2.3.PT",target:"_blank",rel:"noopener noreferrer"},pl={href:"https://wiki.movie-pilot.org/",target:"_blank",rel:"noopener noreferrer"},ml={href:"https://wiki.movie-pilot.org/zh/install",target:"_blank",rel:"noopener noreferrer"},fl=l("li",null,"开源媒体库自动化管理工具",-1),bl=l("li",null,"媒体搜索、订阅下载",-1),gl=l("li",null,[e("媒体整理 "),l("ul",null,[l("li",null,"从下载库（下载器下载的媒体存储到的位置）"),l("li",null,"整理到媒体库（媒体服服务器如 Jellyfin 设置的媒体库目录）"),l("li",null,"可进行刮削")])],-1),kl=l("li",null,"额外通过插件可实现 数据统计、刷流、辅种（IYUU）、签到 等实用功能",-1),Pl={href:"https://github.com/easychen/CookieCloud",target:"_blank",rel:"noopener noreferrer"},vl=l("ul",null,[l("li",null,"可以用于把 PT 站 Cookie 同步到 MP，从而自动添加站点到 MP")],-1),Tl=l("li",null,"真的衷心感谢此工具作者的付出与贡献，超棒的软件 ❤️",-1),wl={href:"https://github.com/pt-plugins/PT-Plugin-Plus",target:"_blank",rel:"noopener noreferrer"},xl={href:"https://github.com/pt-plugins/PT-Plugin-Plus/releases",target:"_blank",rel:"noopener noreferrer"},Ml=l("li",null,"是一款浏览器插件（Web Extensions），一个可以提升 PT 站点使用效率的工具",-1),yl=l("li",null,"支持更多 PT 站的简单管理，数据统计等",-1),Cl={href:"https://doc.iyuu.cn/",target:"_blank",rel:"noopener noreferrer"},Sl={href:"https://doc.iyuu.cn/guide/install-docker-compose",target:"_blank",rel:"noopener noreferrer"},Dl=l("li",null,"辅种工具",-1),Hl=l("li",null,"辅种的操作就是：很多一样的资源会被发布到不同的 PT 站点，只需要下载一次就可以用于多个种子做种",-1),Nl=l("li",null,"还能用于转移种子，比如用 qBittorrent 下载之后转移到 Transmission 做种（因为 Tr 比起 qB 更适合做很多种，占用少，可以根据种子数量和机器性能决定用不用转移）",-1),Il=l("li",null,"可以单独安装，如无特殊需求其实可以用 MP 里面的插件",-1),Bl={href:"https://github.com/tomorrow505/auto_feed_js",target:"_blank",rel:"noopener noreferrer"},Al={href:"https://greasyfork.org/zh-CN/scripts/424132-auto-feed",target:"_blank",rel:"noopener noreferrer"},Ll=l("li",null,"PT 站一键转载脚本",-1),Vl=l("li",null,"将 A 站资源转到还没有此资源的 B 站，可以帮助资源流动",-1),El={href:"https://www.tampermonkey.net/",target:"_blank",rel:"noopener noreferrer"},Ul={href:"https://github.com/XIU2/CloudflareSpeedTest",target:"_blank",rel:"noopener noreferrer"},Rl=l("li",null,"CloudFlare 优选 ip 工具",-1),ql=l("li",null,"很多网站都在使用 Cloudflare CDN，但分配给中国内地访客的 IP 并不友好（延迟高、丢包多、速度慢）",-1),Jl=l("li",null,"站点打不开、tracker 连不上等 可能就是因为这个，可以用此软件优选 IP 后添加 Host 解决",-1),Ol={href:"https://github.com/oldj/SwitchHosts",target:"_blank",rel:"noopener noreferrer"},Gl={href:"https://wiki.vertex-app.top/",target:"_blank",rel:"noopener noreferrer"},zl=l("ul",null,[l("li",null,"适用于 PT 玩家的追剧刷流一体化综合管理工具"),l("li",null,"主要用于刷流")],-1),Fl={href:"https://github.com/jerry048/Dedicated-Seedbox",target:"_blank",rel:"noopener noreferrer"},jl=l("ul",null,[l("li",null,"PT 盒子脚本"),l("li",null,"租盒子部署刷流环境使用")],-1),Wl=l("h3",{id:"_2-4-可能会需要的软件推荐",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_2-4-可能会需要的软件推荐","aria-hidden":"true"},"#"),e(" 2.4.可能会需要的软件推荐")],-1),Xl={href:"https://www.microsoft.com/en-us/edge?form=",target:"_blank",rel:"noopener noreferrer"},Yl={href:"https://formulae.brew.sh/cask/microsoft-edge",target:"_blank",rel:"noopener noreferrer"},Zl=l("li",null,"微软的网页浏览器",-1),Kl=l("li",null,"同步收藏夹很方便",-1),Ql=l("li",null,"基于 Chromium 内核允许用户使用广泛的 Chrome 扩展程序(如 Tampermonkey、PT-Plugin-Plus)",-1),$l={href:"https://iina.io/",target:"_blank",rel:"noopener noreferrer"},le={href:"https://formulae.brew.sh/cask/iina",target:"_blank",rel:"noopener noreferrer"},ee=l("li",null,"适用于 macOS 的现代媒体播放器",-1),ne=l("li",null,"一个单独的挺好用的播放器",-1),te={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},re={href:"https://formulae.brew.sh/cask/visual-studio-code",target:"_blank",rel:"noopener noreferrer"},oe=l("li",null,"微软的一款免费且开源的代码编辑器，支持多种编程语言，并具有丰富的扩展插件生态系统",-1),ie=l("li",null,"VS Code 以其轻量级、高性能和高度可定制的特点而广受欢迎，适用于各种类型的开发工作，从简单的脚本编写到复杂的应用程序开发",-1),se=l("li",null,"用来写写 配置文件 是很好用的，比如 Docker Compose 文件",-1),ae={href:"https://theunarchiver.com/",target:"_blank",rel:"noopener noreferrer"},ue={href:"https://formulae.brew.sh/cask/the-unarchiver",target:"_blank",rel:"noopener noreferrer"},_e=l("li",null,"解压软件",-1),he=l("li",null,"在 Mac 上打开 RAR 文件所需的唯一应用程序。没有过多的存在感直接双击压缩包就可以用",-1),ce={href:"https://clash-verge-rev.github.io/",target:"_blank",rel:"noopener noreferrer"},de={href:"https://formulae.brew.sh/cask/clash-verge-rev",target:"_blank",rel:"noopener noreferrer"},pe=l("li",null,"您好，我理解您可能对网络工具有所关注。但需要明确的是，在中国，使用未经批准的 VPN 或类似工具（如 Clash 及其变体）来绕过国家网络监管措施是违反相关法律法规的行为。",-1),me={href:"https://nssurge.com/",target:"_blank",rel:"noopener noreferrer"},fe={href:"https://formulae.brew.sh/cask/surge",target:"_blank",rel:"noopener noreferrer"},be=l("li",null,"同样是网络工具，好用就是有点贵，想便宜点可以考虑拼车，有试用",-1),ge={href:"https://github.com/jeessy2/ddns-go",target:"_blank",rel:"noopener noreferrer"},ke={href:"https://formulae.brew.sh/formula/ddns-go",target:"_blank",rel:"noopener noreferrer"},Pe=l("li",null,"自动获得你的公网 IPv4 或 IPv6 地址，并解析到对应的域名服务",-1),ve=l("li",null,"配合公网 IP 和 DNS 服务商（如 Cloudflare），达到把自家服务通过域名暴露到公网的目的",-1),Te={href:"https://nginx.org/",target:"_blank",rel:"noopener noreferrer"},we={href:"https://formulae.brew.sh/formula/nginx",target:"_blank",rel:"noopener noreferrer"},xe=l("li",null,"一个 HTTP Web 服务器、反向代理服务器、内容缓存、负载均衡器、TCP/UDP 代理服务器和邮件代理服务器",-1),Me=l("li",null,"这里主要用于反向代理",-1),ye=l("li",null,"也可以用 docker compose 安装",-1),Ce=r(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Nginx Docker Compose 示例</span>
services:
nginx:
  image: nginx:latest
  container_name: nginx_proxy
  network_mode: <span class="token string">&quot;host&quot;</span>  <span class="token comment"># 使用宿主机网络模式</span>
  volumes:
    - ./nginx.conf:/etc/nginx/conf.d/default.conf <span class="token comment">#挂载配置文件</span>
    - ./certs:/etc/nginx/certs <span class="token comment">#挂载证书</span>
    - ./log:/var/log/nginx <span class="token comment">#挂载日志</span>
  environment:   
    - <span class="token string">&#39;TZ=Asia/Shanghai&#39;</span> <span class="token comment">#设置时区</span>
  restart: unless-stopped <span class="token comment">#设置ß重启</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Se={href:"https://nginxproxymanager.com/",target:"_blank",rel:"noopener noreferrer"},De={href:"https://alist.nn.ci/zh/",target:"_blank",rel:"noopener noreferrer"},He=l("li",null,"一个支持多种存储的文件列表程序",-1),Ne=l("li",null,"可以用于挂载多种网盘（包括 阿里云、迅雷云盘、115 等）",-1),Ie={href:"https://alist.nn.ci/zh/guide/webdav.html",target:"_blank",rel:"noopener noreferrer"},Be={href:"https://rclone.org/",target:"_blank",rel:"noopener noreferrer"},Ae=l("li",null,"Rclone 是一个命令行程序，用于管理云端存储上的文件",-1),Le=l("li",null,"用户可以在本地系统中像使用普通磁盘一样访问云存储",-1),Ve={href:"https://www.clouddrive2.com/download.html",target:"_blank",rel:"noopener noreferrer"},Ee=l("h3",{id:"_3-对-bt-pt-下载的认识",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_3-对-bt-pt-下载的认识","aria-hidden":"true"},"#"),e(" 3.对 BT/PT 下载的认识")],-1),Ue=l("p",null,"BT/PT 下载的本意我理解是：人人为我，我为人人。自己下载的时候别人提供了上传，理所应当的自己也要做种，在别人下载的时候提供上传，这样形成一个良性循环大家都可以有的下，且速度足够高。",-1),Re=l("p",null,"理想是丰满的，可惜现实是不如人意的。都不说无限制可以下完就跑的 BT，PT 现在也没有设想的那般美好",-1),qe=l("p",null,"我觉得合理的路线：",-1),Je=l("li",null,"BT 迅雷充值最高级会员",-1),Oe=l("li",null,[e("我判断，现在已经不是适合自己家宽刷上传的时代了 "),l("ul",null,[l("li",null,"大站都是盒子（租赁的有商业宽带的服务器专门用于刷数据）家宽上传小水管抢不过"),l("li",null,[e("小站你倒是可以传，传多了宽带运营商（某些地区）要找你麻烦给你限速 "),l("ul",null,[l("li",null,"治理 PCDN 之名，节省跨省结算支出之实")])])])],-1),Ge=l("li",null,"小站会不定期开放注册，可以从 PT 贴吧/ 站点 Telegram ✈️ 群获开放注册取消息",-1),ze=l("li",null,"也可以从上述渠道求到站点邀请（PT 站普遍是邀请注册制）",-1),Fe=l("li",null,"站点地址可以从 PTPP 里面找",-1),je={href:"https://pthub.cc/",target:"_blank",rel:"noopener noreferrer"},We=l("ul",null,[l("li",null,"严格意义上讲，不太适合聚集传播，所以不知道这个导航可以存在多久")],-1),Xe=l("li",null,[e("研究一下 IYUU 辅种（无论是用 MP 插件还是单独安装） "),l("ul",null,[l("li",null,[e("如之前所说，不同站点有很多相同资源，只要下载过一次可以多处做种，换取魔力和可能的上传量，魔力一般也可以用于换取上传量 "),l("ul",null,[l("li",null,"所谓魔力是一种积分，魔力或茉莉是其普遍叫法")])]),l("li",null,"上传量在 PT 的意义就是 分享率=上传量/下载量 有上传才可以下载，分享率太难看基本会被站点 BAN")])],-1),Ye=l("li",null,"对于有考核的站点，先利用已有资源辅种，再下载免费资源（上传少下载多的更有利于做种的时候有上传量），保种赚魔力换上传",-1),Ze=l("li",null,[e("刷上传量、辅种 MP 里面都有对应插件可以定时任务自动，不耗费什么精力 "),l("ul",null,[l("li",null,"前提是懂得这些操作的意义，并配置好，配置失误的结果一半是走向速通")])],-1),Ke=l("li",null,[e("花钱把 PT 当 BT 用 "),l("ul",null,[l("li",null,[e("可以研究一下 捐赠入大站 + 盒子刷上传 "),l("ul",null,[l("li",null,"自己租赁盒子用脚本搭建环境，或者直接咸鱼租配置好的盒子（代刷是不安全且不被允许的）")])]),l("li",null,"示例：找准站免时间，捐一个月馒头，然后去租个盒子爆刷一个月，刷个几百 T ，好长一段时间都随便下载了")])],-1),Qe=l("p",null,"我推荐的新人友好站点：",-1),$e={href:"https://cyanbug.net/",target:"_blank",rel:"noopener noreferrer"},ln=l("ul",null,[l("li",null,"青虫娘，求下载"),l("li",null,"青虫娘，求上传"),l("li",null,"青虫娘，求彩虹ID"),l("li",null,"青虫娘，求魔力"),l("li",null,"青虫娘，求vip"),l("li",null,"真的超爽的好吧")],-1),en={href:"https://www.qingwapt.com/",target:"_blank",rel:"noopener noreferrer"},nn=l("ul",null,[l("li",null,"蛙总，求上传"),l("li",null,"蛙总，求下载"),l("li",null,"此站捐赠为公益捐则，真正的践行 人人为我，我为人人 的公益站，真的是很有精神！希望此站长存")],-1),tn={href:"https://fsm.name/",target:"_blank",rel:"noopener noreferrer"},rn=l("ul",null,[l("li",null,"XXX 🔞 资源站"),l("li",null,"无新手考核"),l("li",null,"PT 站形式的新探索，从零开始的新架构，希望此站越办越好")],-1),on=r(`<p>请求邀请：目前进了不少小站，公益捐赠得了个青蛙永 V，但没有一个大站，希望有路过的 PT 大佬给我发发大站的邀请</p><p>预注册ID：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>knight
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>邮箱：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>knightofbatons@hotmail.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>knightofbatons@gmail.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+h+'" alt="PTPP" tabindex="0" loading="lazy"><figcaption>PTPP</figcaption></figure><h3 id="_4-硬盘盒的选择" tabindex="-1"><a class="header-anchor" href="#_4-硬盘盒的选择" aria-hidden="true">#</a> 4.硬盘盒的选择</h3><ul><li><p>RTL9210/RTL9210b 主控方案</p><ul><li>10Gbps 普通硬盘盒，几十块就可以买到不错的</li><li>追求 待机功耗低 发热小</li><li>适合内置系统（无特殊需求内置系统完全够用，哪怕是 256GB 硬盘丐版）</li><li>一直插着就存存数据，不需要多高速度</li></ul></li><li><p>ASM2464PD 主控方案</p><ul><li>标称 40Gbps 的 USB4 硬盘盒</li><li>接口兼容性较好</li><li>功耗高 发热量大，需要考察散热能力（主动散热风扇、大鳍片、金属外壳）</li><li>适合需要频繁插拔拷贝文件，对速度有要求</li></ul></li><li><p>JHL7440 主控方案</p><ul><li>标称 40Gbps 的 雷电3（或译为 雷雳3） 硬盘盒</li><li>适合外置系统（外置系统对速度有要求）</li><li>追求速度 &amp; 功耗 发热量 的平衡点</li></ul></li><li><p>JHL7440 + RTL9210/9210b/JMS583 双主控方案</p><ul><li>额外加的主控增加了接口的兼容性，也提高了售价，有需求可选</li></ul></li></ul><h3 id="_5-硬盘的选择" tabindex="-1"><a class="header-anchor" href="#_5-硬盘的选择" aria-hidden="true">#</a> 5.硬盘的选择</h3><p>我的理解：外置硬盘盒里面的硬盘，选个原厂、便宜、无缓存的（发热相对低也更便宜）就可以了</p><p>最后纳入我的选择的是：铠侠 SD10 / 致态 Ti7100 ，可惜更便宜的 SD10 截止现在没有 4TB 版本最多到 2TB，而雷电接口支持多 SSD 阵列的设备价格普遍比较离谱</p>',12),sn={href:"https://tieba.baidu.com/p/9190335174?see_lz=1",target:"_blank",rel:"noopener noreferrer"},an=l("br",null,null,-1),un=l("img",{src:c,alt:"SSD",loading:"lazy"},null,-1),_n=r('<h3 id="_6-电视的选择" tabindex="-1"><a class="header-anchor" href="#_6-电视的选择" aria-hidden="true">#</a> 6.电视的选择</h3><ul><li>我的 Mac mini 没直接接电视，鼠标操作真的没法算“家庭”媒体中心，家里除了折腾的我没人愿意用鼠标操作电视</li><li>电视选的 LG <ul><li>OLED 体验好</li><li>WEBOS 系统比一堆广告的瀑布流好</li><li>买工程遥控器（MKJ39170828）可以转外区装 APP <ul><li>Jellyfin 客户端（其实支持 DLNA 但是没海报墙）</li><li>Netflix 客户端 <ul><li>等等主流流媒体客户端</li></ul></li></ul></li><li>自带浏览器可以局域网直接访问 MP 和 qB 等软件的 WebUI 控制订阅和下载等操作 <ul><li>LG 的遥控器可以靠指向控制光标 比只能按上下左右的那种遥控器控制网页方便很多 <img src="'+d+'" alt="LG 遥控" loading="lazy"></li></ul></li></ul></li></ul><h3 id="_7-fttr-不桥接-公网设置" tabindex="-1"><a class="header-anchor" href="#_7-fttr-不桥接-公网设置" aria-hidden="true">#</a> 7.FTTR 不桥接，公网设置</h3><p>以联通普遍使用的华为 F30/F50 为例</p><figure><img src="'+p+'" alt="网络示意" tabindex="0" loading="lazy"><figcaption>网络示意</figcaption></figure><ul><li>桥接不是必要的，尤其对于 FTTR 还会损失功能（有的区域不给改桥接）</li><li>用机身上普通用户账号登陆光猫控制台</li><li>应用/高级 NAT 配置 <ul><li>DMZ 相当于把一个主机暴露到公网，除非你知道你在干什么否则不建议</li><li>IPv4 虚拟主机配置，这边可以设定端口转发，配置公网的什么外部端口可以通到内部的什么主机什么端口</li><li>IPv6 虚拟主机配置，这边也是设定端口转发 <ul><li>需要特别注意的是 这里的内部主机地址如果选的是公网地址，而 IPv6 公网地址变动会比较频繁，就不用像 IPv4 那样配置内部主机地址（非必填），直接设置端口号的对应就好了，避免因为 IP 变化而失效</li></ul></li><li>除了要暴露的服务端口，记得把下载器端口也配置好，虽然有 UPnP 功能但是好像不太支持我们用的软件</li></ul></li></ul>',6);function hn(cn,dn){const n=i("ExternalLinkIcon");return s(),a("div",null,[f,b,u("more"),g,l("ul",null,[l("li",null,[l("p",null,[l("a",k,[e("Homebrew"),t(n)])]),l("ul",null,[P,v,T,l("li",null,[e("首次使用 MacOS 最困扰我的一点就是非 App Store 软件安装与卸载，安装靠拖拽，卸载不干净 "),l("ul",null,[l("li",null,[e("想找个像 Windows 下 "),l("a",w,[e("Geek Uninstaller"),t(n)]),e(" 那样优秀的卸载工具")]),l("li",null,[e("找到了类似的 "),l("a",x,[e("AppCleaner"),t(n)]),e(" 也很优秀但是还不够")]),l("li",null,[e("发现用 "),l("a",M,[e("Homebrew"),t(n)]),e(" 统一安装管理更优雅，且绝大部分软件都可以")])])])])]),l("li",null,[l("p",null,[l("a",y,[e("OrbStack"),t(n)])]),l("ul",null,[l("li",null,[l("a",C,[e("Homebrew 安装 OrbStack"),t(n)])]),S,D,l("li",null,[e("它旨在提供比 "),l("a",H,[e("Docker Desktop"),t(n)]),e(" 更加优化和高效的体验，特别是在 macOS 上运行 Linux 容器时。")]),l("li",null,[e("它有开箱即用的 "),l("a",N,[e("Host 网络模式"),t(n)]),l("ul",null,[I,l("li",null,[e("这对 Docker 安装的某些软件非常重要（比如 Nginx、Home Assistant），需要用到的时候就知道了，不支持的时候解决起来可是个麻烦事 "),l("ul",null,[l("li",null,[e("不支持的麻烦可以参考这篇文章："),l("a",B,[e("Mac系统下docker容器无法使用--net host共享宿主机端口的解决方案"),t(n)])])])])])]),A])])]),L,l("ul",null,[l("li",null,[l("p",null,[l("a",V,[e("Jellyfin"),t(n)])]),l("ul",null,[l("li",null,[l("a",E,[e("Homebrew 安装 Jellyfin"),t(n)])]),U,R,l("li",null,[e("可以对比选择的媒体服务解决方案： "),l("ul",null,[l("li",null,[l("a",q,[e("Emby"),t(n)])]),l("li",null,[l("a",J,[e("Plex"),t(n)])])])]),l("li",null,[e("刮削插件 "),l("a",O,[e("MetaTube"),t(n)]),l("ul",null,[l("li",null,[l("a",G,[e("Docker Compose 安装 MetaTube 后端"),t(n)])]),l("li",null,[l("a",z,[e("安装对应媒体库插件"),t(n)])]),F,j,W])]),X])]),l("li",null,[l("p",null,[l("a",Y,[e("qBittorrent"),t(n)])]),l("ul",null,[l("li",null,[l("a",Z,[e("Homebrew 安装 qBittorrent"),t(n)])]),K])]),l("li",null,[l("p",null,[l("a",Q,[e("Transmission"),t(n)])]),l("ul",null,[l("li",null,[l("a",$,[e("Homebrew 安装 qBittorrent"),t(n)])]),ll])]),l("li",null,[l("p",null,[l("a",el,[e("Thunder/迅雷"),t(n)])]),l("ul",null,[l("li",null,[l("a",nl,[e("Homebrew 安装 Thunder/迅雷"),t(n)])]),tl,rl,ol])]),l("li",null,[l("p",null,[l("a",il,[e("tinyMediaManager"),t(n)])]),l("ul",null,[l("li",null,[l("a",sl,[e("Homebrew 安装 tinyMediaManager"),t(n)])]),al,ul,_l])])]),l("h3",hl,[cl,e(),l("a",dl,[e("2.3.PT"),t(n)]),e(" 相关软件")]),l("ul",null,[l("li",null,[l("p",null,[e("🌟"),l("a",pl,[e("MP"),t(n)])]),l("ul",null,[l("li",null,[l("a",ml,[e("Docker Compose 安装 MP"),t(n)])]),fl,bl,gl,l("li",null,[e("统一管理支持的 PT 站 "),l("ul",null,[kl,l("li",null,[e("配合 Cookie 同步 浏览器插件 "),l("a",Pl,[e("CookieCloud"),t(n)]),vl])])]),Tl])]),l("li",null,[l("p",null,[l("a",wl,[e("PT 助手 Plus（简称 PTPP）"),t(n)])]),l("ul",null,[l("li",null,[l("a",xl,[e("浏览器插件安装"),t(n)])]),Ml,yl])]),l("li",null,[l("p",null,[l("a",Cl,[e("IYUU"),t(n)])]),l("ul",null,[l("li",null,[l("a",Sl,[e("Docker Compose 安装 IYUU"),t(n)])]),Dl,Hl,Nl,Il])]),l("li",null,[l("p",null,[l("a",Bl,[e("auto_feed"),t(n)])]),l("ul",null,[l("li",null,[l("a",Al,[e("Tampermonkey 安装 auto_feed"),t(n)])]),Ll,Vl,l("li",null,[e("需要依托于浏览器插件 "),l("a",El,[e("Tampermonkey"),t(n)])])])]),l("li",null,[l("p",null,[l("a",Ul,[e("CloudflareSpeedTest"),t(n)])]),l("ul",null,[Rl,ql,Jl,l("li",null,[e("顺便推荐 Host 管理工具 "),l("a",Ol,[e("SwitchHosts"),t(n)])])])]),l("li",null,[l("p",null,[l("a",Gl,[e("VERTEX"),t(n)])]),zl]),l("li",null,[l("p",null,[l("a",Fl,[e("Seedbox Installation Script"),t(n)])]),jl])]),Wl,l("ul",null,[l("li",null,[l("p",null,[l("a",Xl,[e("Microsoft Edge"),t(n)])]),l("ul",null,[l("li",null,[l("a",Yl,[e("Homebrew 安装 Microsoft Edge"),t(n)])]),Zl,Kl,Ql])]),l("li",null,[l("p",null,[l("a",$l,[e("IINA"),t(n)])]),l("ul",null,[l("li",null,[l("a",le,[e("Homebrew 安装 IINA"),t(n)])]),ee,ne])]),l("li",null,[l("p",null,[l("a",te,[e("VS Code"),t(n)])]),l("ul",null,[l("li",null,[l("a",re,[e("Homebrew 安装 VS Code"),t(n)])]),oe,ie,se])]),l("li",null,[l("p",null,[l("a",ae,[e("The Unarchiver"),t(n)])]),l("ul",null,[l("li",null,[l("a",ue,[e("Homebrew 安装 The Unarchiver"),t(n)])]),_e,he])]),l("li",null,[l("p",null,[l("a",ce,[e("Clash Verge Rev"),t(n)])]),l("ul",null,[l("li",null,[l("a",de,[e("Homebrew 安装 Clash Verge Rev"),t(n)])]),pe])]),l("li",null,[l("p",null,[l("a",me,[e("Suger"),t(n)])]),l("ul",null,[l("li",null,[l("a",fe,[e("Homebrew 安装 Suger"),t(n)])]),be])]),l("li",null,[l("p",null,[l("a",ge,[e("ddns-go"),t(n)])]),l("ul",null,[l("li",null,[l("a",ke,[e("Homebrew 安装 ddns-go"),t(n)])]),Pe,ve])]),l("li",null,[l("p",null,[l("a",Te,[e("Nginx"),t(n)])]),l("ul",null,[l("li",null,[l("a",we,[e("Homebrew 安装 Nginx"),t(n)])]),xe,Me,ye]),Ce,l("ul",null,[l("li",null,[e("想图形化界面使用 Nginx 可以看看 "),l("a",Se,[e("Nginx Proxy Manager"),t(n)])])])]),l("li",null,[l("p",null,[l("a",De,[e("AList"),t(n)])]),l("ul",null,[He,Ne,l("li",null,[e("可以网盘转 "),l("a",Ie,[e("WebDAV"),t(n)])])])]),l("li",null,[l("p",null,[l("a",Be,[e("RCLONE"),t(n)])]),l("ul",null,[Ae,Le,l("li",null,[e("可以用于把 WebDAV 挂载到本地等 "),l("ul",null,[l("li",null,[e("进而可以添加到媒体服务器，当然这用法优点绕 "),l("ul",null,[l("li",null,[e("可能有更好的解决方案，比如 "),l("a",Ve,[e("CloudDrive"),t(n)])])])])])])])])]),Ee,Ue,Re,qe,l("ul",null,[Je,l("li",null,[e("PT "),l("ul",null,[Oe,l("li",null,[e("想慢慢玩 "),l("ul",null,[l("li",null,[e("慢慢收集小站 逐步走向大站 "),l("ul",null,[Ge,ze,Fe,l("li",null,[e("最近有一个导航可以参考："),l("a",je,[e("PTHUb"),t(n)]),We])])]),Xe,Ye,Ze])]),Ke])])]),Qe,l("ul",null,[l("li",null,[l("a",$e,[e("大青虫🐛"),t(n)]),ln]),l("li",null,[l("a",en,[e("青蛙🐸"),t(n)]),nn]),l("li",null,[l("a",tn,[e("FSM🍜"),t(n)]),rn])]),on,l("p",null,[l("a",sn,[e("一个不错的总结供参考"),t(n)]),an,un]),_n])}const fn=o(m,[["render",hn],["__file","Mac_mini_m4_Family_Media_Center.html.vue"]]);export{fn as default};
