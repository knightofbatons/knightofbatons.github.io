---
title: Mac mini m4 家庭媒体服务 & PT 新人感悟
cover: /assets/blog_images/mac_mini/Mac_mini_M4.jpg
date: 2024-12-25
category:
  - 软件工具
tag:
  - Mac mini
  - NAS
  - PT
---

Mac mini M4 运行功耗很低，且我的主要用途下基本不会关机，
顺便让它承担 “家庭媒体服务” 的任务，扮演一定 NAS 的角色就很合理（专门干这个性价比实在不高），
本记录用于自我备忘、发给朋友，仅供参考

文字使用 列表组织 是方便直接按级别跳跃查看，不可避免的造成内容过长，请使用目录功能跳转

<!--more-->

## 1.购买

- Mac mini M4
  - 京东 3400+ 购入（国家补贴）
  - 16GB 统一内存
  - 256GB 固态硬盘
  - 正面：两个 USB-C 端口，耳机插孔
  - 背面：三个雷雳 4 端口，HDMI 端口，千兆以太网端口
- WERO 雷电3 硬盘盒
  - 天猫 580+ 购入
  - JHL7440+JMS583 双控方案
- 致态 TiPlus7100 4TB NVMe M.2 SSD 固态硬盘
  - 京东 1700+ 购入

## 2.软件

一系列软件最基础的配置和，观影流程差不多是这样的：

- 安装 Homebrew 用于统一管理安装软件
- 安装媒体服务器 Jellyfin，并配置
  - 控制台/媒体库 规划好文件夹
    - 刮削使用 MP 存储的 NFO 文件就好，这边也有刮削功能可以不使用
  - 控制台/播放/转码 设定硬件加速 等选项
    - 硬件加速对于有在移动端播放需求的情况是很必要的
    - 设定备用字体文件路径并启用，可以解决外挂中文字幕编码显示为方块的问题
  - 控制台/我的插件 安装需要的插件如 DLNA 等
- 手机/电视/Pad 等需要观影的客户端安装 Jellyfin/Infuse/VidHub 等合适的观影客户端，并配置服务端
- 安装下载器 qBittorrent
- 准备好 PT 站
- Homebrew 安装 OrbStack 提供 Docker 环境
- 用 Docker Compose 安装 MP 并配置
  - 设定/系统 配置 媒体服务器 和 下载器
  - 设定/存储&目录 配置目录
    - 这边是把 媒体库 和 下载库 分开，下载后存储到 下载库 的文件 MP 自动整理 到 媒体库，媒体库无论是 硬链接、软连接 下载库 文件，都可以随便改名随便删，不会影响 下载库 里面文件的做种
  - 设定/站点 配置站点同步，配合 CookieCloud 插件同步浏览器中已登陆站点的 Cookie 以批量自动添加站点
  - 设定/搜索&站点 配置搜索站点
  - 设定/订阅 配置订阅站点
  - 设定/服务 有什么想及时运行的定时任务可以在这边直接点，比如“同步CookieCloud站点”马上同步站点到 MP
- 在 MP 通过推荐/主动搜索 查询媒体资源并下载/先行订阅
  - 静候 MP 根据配置整理好
  - 对于设置好的 MP 订阅有多好用，我举个例子：前些阵子的 《秘密关卡》 前后两部分是分开放送的，我手动搜索下载了前半部，订阅了下半部，后面出了包含后半部全集的种子，在满足我设定好的 订阅规则 和 优先级规则组 的前提下 它给我下好了 全集种子里面我没有的集数
- 媒体服务器里面应该就有了
- 客户端使用海报墙选取媒体，开始观看

### 2.0.客户端效果示例

#### Jellyfin

![Jellyfin 手机客户端示意](/assets/blog_images/mac_mini/Jellyfin.gif)

#### Infuse

![Infuse 手机客户端示意](/assets/blog_images/mac_mini/Infuse.gif)

下面详细列出软件详情

### 2.1.基础软件

- [Homebrew](https://brew.sh/)
  - 一个开源软件包管理器
  - 可以理解为一个命令行版本的、包含应用范围更广阔的应用商店
  - 使安装软件变得简单，轻松保持软件的更新。通过一致的、用户友好的命令行界面，来简化来自不同来源的软件包的安装过程
  - 首次使用 MacOS 最困扰我的一点就是非 App Store 软件安装与卸载，安装靠拖拽，卸载不干净
    - 想找个像 Windows 下 [Geek Uninstaller](https://geekuninstaller.com/) 那样优秀的卸载工具
    - 找到了类似的 [AppCleaner](https://freemacsoft.net/appcleaner/) 也很优秀但是还不够
    - 发现用 [Homebrew](https://brew.sh/) 统一安装管理更优雅，且绝大部分软件都可以

- [OrbStack](https://orbstack.dev/)
  - [Homebrew 安装 OrbStack](https://formulae.brew.sh/cask/orbstack)
  - 一个专门为 Docker 和容器化应用设计的 MacOS 容器运行时环境
  - 有了这个就能用 Docker 镜像的形式运行各种软件了
  - 它旨在提供比 [Docker Desktop](https://www.docker.com/products/docker-desktop/) 更加优化和高效的体验，特别是在 macOS 上运行 Linux 容器时。
  - 它有开箱即用的 [Host 网络模式](https://docs.orbstack.dev/docker/host-networking)
    - 在这种模式下，容器不会被分配独立的 IP 地址，而是直接使用宿主机的网络栈。这意味着容器中的服务将绑定到宿主机的接口，并且可以直接访问外部网络，就像它们是在宿主机上运行的一样。
    - 这对 Docker 安装的某些软件非常重要（比如 Nginx、Home Assistant），需要用到的时候就知道了，不支持的时候解决起来可是个麻烦事
      - 不支持的麻烦可以参考这篇文章：[Mac系统下docker容器无法使用--net host共享宿主机端口的解决方案](https://blog.csdn.net/qq_42937522/article/details/109052954)
  - 原因未知，用 Docker Desktop 的时候，我把 ExFAT 格式的移动移动硬盘挂载到镜像，遇到了各种权限问题，用 OrbStack 就没事

### 2.2.家庭媒体服务相关软件

- [Jellyfin](https://jellyfin.org/)
  - [Homebrew 安装 Jellyfin](https://formulae.brew.sh/cask/jellyfin#default)
  - 媒体服务解决方案
  - 开源，让您完全掌控自己的媒体。通过您自己的服务器将媒体流传输到任何设备，没有任何附加条件。您的媒体，您的服务器，尽在您的掌控之中。
  - 可以对比选择的媒体服务解决方案：
    - [Emby](https://emby.media/)
    - [Plex](https://www.plex.tv/)
  - 刮削插件 [MetaTube](https://metatube-community.github.io/README_ZH/)
    - [Docker Compose 安装 MetaTube 后端](https://github.com/metatube-community/metatube-sdk-go/blob/main/docker-compose.yaml)
    - [安装对应媒体库插件](https://metatube-community.github.io/wiki/plugin-installation/)
    - 搭配 Jellyfin、Emby、Plex 等媒体服务器使用的 XXX 🔞 特殊资源刮削工具
    - 单独部署后端
    - 媒体服务器安装对应插件，并配置好后端实用
  - DLNA 插件
    - 提供给不适合安装客户端的地方使用，比如 VR 眼镜 Quest3 上的播放器

- [qBittorrent](https://www.qbittorrent.org/)
  - [Homebrew 安装 qBittorrent](https://formulae.brew.sh/cask/qbittorrent)
  - PT 常用下载器

- [Transmission](https://transmissionbt.com/)
  - [Homebrew 安装 qBittorrent](https://formulae.brew.sh/cask/transmission)
  - PT 做种更好用的下载器

- [Thunder/迅雷](https://www.xunlei.com/)
  - [Homebrew 安装 Thunder/迅雷](https://formulae.brew.sh/cask/thunder)
  - BT 常用下载器
  - 有时下热门资源比 PT 还厉害（前提是有最高级会员）
  - 带一个迅雷网盘

- [tinyMediaManager](https://www.tinymediamanager.org/)
  - [Homebrew 安装 tinyMediaManager](https://formulae.brew.sh/cask/tinymediamanager)
  - 媒体管理工具
  - 它旨在为媒体服务器提供元数据（就是所谓的刮削，抓取海报墙用得到的图片和媒体信息）
  - 可以手动操作此软件，刮削一些自动刮削工具死活不行的

### 2.3.PT 相关软件

- 🌟[MP](https://wiki.movie-pilot.org/)
  - [Docker Compose 安装 MP](https://wiki.movie-pilot.org/zh/install)
  - 开源媒体库自动化管理工具
  - 媒体搜索、订阅下载
  - 媒体整理
    - 从下载库（下载器下载的媒体存储到的位置）
    - 整理到媒体库（媒体服服务器如 Jellyfin 设置的媒体库目录）
    - 可进行刮削
  - 统一管理支持的 PT 站
    - 额外通过插件可实现 数据统计、刷流、辅种（IYUU）、签到 等实用功能
    - 配合 Cookie 同步 浏览器插件 [CookieCloud](https://github.com/easychen/CookieCloud)
      - 可以用于把 PT 站 Cookie 同步到 MP，从而自动添加站点到 MP
  - 真的衷心感谢此工具作者的付出与贡献，超棒的软件 ❤️

- [PT 助手 Plus（简称 PTPP）](https://github.com/pt-plugins/PT-Plugin-Plus)
  - [浏览器插件安装](https://github.com/pt-plugins/PT-Plugin-Plus/releases)
  - 是一款浏览器插件（Web Extensions），一个可以提升 PT 站点使用效率的工具
  - 支持更多 PT 站的简单管理，数据统计等

- [IYUU](https://doc.iyuu.cn/)
  - [Docker Compose 安装 IYUU](https://doc.iyuu.cn/guide/install-docker-compose)
  - 辅种工具
  - 辅种的操作就是：很多一样的资源会被发布到不同的 PT 站点，只需要下载一次就可以用于多个种子做种
  - 还能用于转移种子，比如用 qBittorrent 下载之后转移到 Transmission 做种（因为 Tr 比起 qB 更适合做很多种，占用少，可以根据种子数量和机器性能决定用不用转移）
  - 可以单独安装，如无特殊需求其实可以用 MP 里面的插件

- [auto_feed](https://github.com/tomorrow505/auto_feed_js)
  - [Tampermonkey 安装 auto_feed](https://greasyfork.org/zh-CN/scripts/424132-auto-feed)
  - PT 站一键转载脚本
  - 将 A 站资源转到还没有此资源的 B 站，可以帮助资源流动
  - 需要依托于浏览器插件 [Tampermonkey](https://www.tampermonkey.net/)

- [CloudflareSpeedTest](https://github.com/XIU2/CloudflareSpeedTest)
  - CloudFlare 优选 ip 工具
  - 很多网站都在使用 Cloudflare CDN，但分配给中国内地访客的 IP 并不友好（延迟高、丢包多、速度慢）
  - 站点打不开、tracker 连不上等 可能就是因为这个，可以用此软件优选 IP 后添加 Host 解决
  - 顺便推荐 Host 管理工具 [SwitchHosts](https://github.com/oldj/SwitchHosts)

- [VERTEX](https://wiki.vertex-app.top/)
  - 适用于 PT 玩家的追剧刷流一体化综合管理工具
  - 主要用于刷流

- [Seedbox Installation Script](https://github.com/jerry048/Dedicated-Seedbox)
  - PT 盒子脚本
  - 租盒子部署刷流环境使用

### 2.4.可能会需要的软件推荐

- [Microsoft Edge](https://www.microsoft.com/en-us/edge?form=)
  - [Homebrew 安装 Microsoft Edge](https://formulae.brew.sh/cask/microsoft-edge)
  - 微软的网页浏览器
  - 同步收藏夹很方便
  - 基于 Chromium 内核允许用户使用广泛的 Chrome 扩展程序(如 Tampermonkey、PT-Plugin-Plus)

- [IINA](https://iina.io/)
  - [Homebrew 安装 IINA](https://formulae.brew.sh/cask/iina)
  - 适用于 macOS 的现代媒体播放器
  - 一个单独的挺好用的播放器

- [VS Code](https://code.visualstudio.com/)
  - [Homebrew 安装 VS Code](https://formulae.brew.sh/cask/visual-studio-code)
  - 微软的一款免费且开源的代码编辑器，支持多种编程语言，并具有丰富的扩展插件生态系统
  - VS Code 以其轻量级、高性能和高度可定制的特点而广受欢迎，适用于各种类型的开发工作，从简单的脚本编写到复杂的应用程序开发
  - 用来写写 配置文件 是很好用的，比如 Docker Compose 文件

- [The Unarchiver](https://theunarchiver.com/)
  - [Homebrew 安装 The Unarchiver](https://formulae.brew.sh/cask/the-unarchiver)
  - 解压软件
  - 在 Mac 上打开 RAR 文件所需的唯一应用程序。没有过多的存在感直接双击压缩包就可以用

- [Clash Verge Rev](https://clash-verge-rev.github.io/)
  - [Homebrew 安装 Clash Verge Rev](https://formulae.brew.sh/cask/clash-verge-rev)
  - 您好，我理解您可能对网络工具有所关注。但需要明确的是，在中国，使用未经批准的 VPN 或类似工具（如 Clash 及其变体）来绕过国家网络监管措施是违反相关法律法规的行为。

- [Suger](https://nssurge.com/)
  - [Homebrew 安装 Suger](https://formulae.brew.sh/cask/surge)
  - 同样是网络工具，好用就是有点贵，想便宜点可以考虑拼车，有试用

- [ddns-go](https://github.com/jeessy2/ddns-go)
  - [Homebrew 安装 ddns-go](https://formulae.brew.sh/formula/ddns-go)
  - 自动获得你的公网 IPv4 或 IPv6 地址，并解析到对应的域名服务
  - 配合公网 IP 和 DNS 服务商（如 Cloudflare），达到把自家服务通过域名暴露到公网的目的

- [Nginx](https://nginx.org/)
  - [Homebrew 安装 Nginx](https://formulae.brew.sh/formula/nginx)
  - 一个 HTTP Web 服务器、反向代理服务器、内容缓存、负载均衡器、TCP/UDP 代理服务器和邮件代理服务器
  - 这里主要用于反向代理
  - 也可以用 Docker compose 安装

  ``` shell
  # Nginx Docker Compose 示例
  services:
  nginx:
    image: nginx:latest
    container_name: nginx_proxy
    network_mode: "host"  # 使用宿主机网络模式
    volumes:
      - ./nginx.conf:/etc/nginx/conf.d/default.conf #挂载配置文件
      - ./certs:/etc/nginx/certs #挂载证书
      - ./log:/var/log/nginx #挂载日志
    environment:   
      - 'TZ=Asia/Shanghai' #设置时区
    restart: unless-stopped #设置ß重启
  ```

  - 想图形化界面使用 Nginx 可以看看 [Nginx Proxy Manager](https://nginxproxymanager.com/)

- [AList](https://alist.nn.ci/zh/)
  - 一个支持多种存储的文件列表程序
  - 可以用于挂载多种网盘（包括 阿里云、迅雷云盘、115 等）
  - 可以网盘转 [WebDAV](https://alist.nn.ci/zh/guide/webdav.html)

- [RCLONE](https://rclone.org/)
  - Rclone 是一个命令行程序，用于管理云端存储上的文件
  - 用户可以在本地系统中像使用普通磁盘一样访问云存储
  - 可以用于把 WebDAV 挂载到本地等
    - 进而可以添加到媒体服务器，当然这用法有点绕
      - 可能有更好的解决方案，比如 [CloudDrive](https://www.clouddrive2.com/download.html)

❤️ 感谢评论区大佬：[Yi](https://yi.gs/) 推荐的两个软件我试了一下也非常好用，详见评论

- [Pearcleaner](https://github.com/alienator88/Pearcleaner)
  - 一款免费、开源、好用的 Mac 应用程序清理器

- [Dockge](https://github.com/louislam/dockge)
  - Docker Compose 管理器
  - 可搭配 OrbStack 使用

## 3.对 BT/PT 下载的认识

BT/PT 下载的本意我理解是：人人为我，我为人人。自己下载的时候别人提供了上传，理所应当的自己也要做种，在别人下载的时候提供上传，这样形成一个良性循环大家都可以有的下，且速度足够高。

理想是丰满的，可惜现实是不如人意的。都不说无限制可以下完就跑的 BT，PT 现在也没有设想的那般美好

我觉得合理的路线：

- BT 迅雷充值最高级会员
- PT
  - 我判断，现在已经不是适合自己家宽刷上传的时代了
    - 大站都是盒子（租赁的有商业宽带的服务器专门用于刷数据）家宽上传小水管抢不过
    - 小站你倒是可以传，传多了宽带运营商（某些地区）要找你麻烦给你限速
      - 治理 PCDN 之名，节省跨省结算支出之实
  - 想慢慢玩
    - 慢慢收集小站 逐步走向大站
      - 小站会不定期开放注册，可以从 PT 贴吧/ 站点 Telegram ✈️ 群获取开放注册消息
      - 也可以从上述渠道求到站点邀请（PT 站普遍是邀请注册制）
      - 站点地址可以从 PTPP 里面找
      - 最近有一个导航可以参考：[PTHUb](https://pthub.cc/)
        - 严格意义上讲，不太适合聚集传播，所以不知道这个导航可以存在多久
    - 研究一下 IYUU 辅种（无论是用 MP 插件还是单独安装）
      - 如之前所说，不同站点有很多相同资源，只要下载过一次可以多处做种，换取魔力和可能的上传量，魔力一般也可以用于换取上传量
        - 所谓魔力是一种积分，魔力或茉莉是其普遍叫法
      - 上传量在 PT 的意义就是 分享率=上传量/下载量 有上传才可以下载，分享率太难看基本会被站点 BAN
    - 对于有考核的站点，先利用已有资源辅种，再下载免费资源（选择上传少下载多的资源更有利于做种的时候有上传量），保种赚魔力换上传
    - 刷上传量、辅种 MP 里面都有对应插件可以定时任务自动，不耗费什么精力
      - 前提是懂得这些操作的意义，并配置好，刷流配置失误的结果可能是走向速通
  - 花钱把 PT 当 BT 用
    - 可以研究一下 捐赠入大站 + 盒子刷上传
      - 自己租赁盒子用脚本搭建环境，或者直接咸鱼租配置好的盒子（代刷是不安全且不被允许的）
    - 示例：找准站免时间，捐一个月馒头，然后去租个盒子爆刷一个月，刷个几百 T ，好长一段时间都随便下载了

我推荐的新人友好站点：
  
- [大青虫🐛](https://cyanbug.net/)
  - 青虫娘，求下载
  - 青虫娘，求上传
  - 青虫娘，求彩虹ID
  - 青虫娘，求魔力
  - 青虫娘，求vip
  - 真的超爽的好吧
- [青蛙🐸](https://www.qingwapt.com/)
  - 蛙总，求上传
  - 蛙总，求下载
  - 此站捐赠为公益捐则，真正的践行 人人为我，我为人人 的公益站，真的是很有精神！希望此站长存
- [FSM🍜](https://fsm.name/)
  - XXX 🔞 资源站
  - 无新手考核
  - PT 站形式的新探索，从零开始的新架构，希望此站越办越好

请求邀请：有路过的 PT 大佬给我发发大站的邀请就太好了

![PTPP 数据统计](/assets/blog_images/mac_mini/PTPP.jpeg)

hotmail:

``` text
a25pZ2h0b2ZiYXRvbnNAaG90bWFpbC5jb20=
```

gmail:

``` text
a25pZ2h0b2ZiYXRvbnNAZ21haWwuY29t
```

## 4.硬盘盒的选择

- RTL9210/RTL9210b 主控方案
  - 10Gbps 普通硬盘盒，几十块就可以买到不错的
  - 追求 待机功耗低 发热小
  - 适合内置系统（无特殊需求内置系统完全够用，哪怕是 256GB 硬盘丐版）
  - 一直插着就存存数据，不需要多高速度

- ASM2464PD 主控方案
  - 标称 40Gbps 的 USB4 硬盘盒
  - 接口兼容性较好
  - 功耗高 发热量大，需要考察散热能力（主动散热风扇、大鳍片、金属外壳）
  - 适合需要频繁插拔拷贝文件，对速度有要求

- JHL7440 主控方案
  - 标称 40Gbps 的 雷电3（或译为 雷雳3） 硬盘盒
  - 适合外置系统（外置系统对速度有要求）
  - 追求速度 & 功耗 发热量 的平衡点

- JHL7440 + RTL9210/9210b/JMS583 双主控方案
  - 额外加的主控增加了接口的兼容性，也提高了售价，有需求可选

## 5.硬盘的选择

我的理解：外置硬盘盒里面的硬盘，选个原厂、便宜、无缓存的（发热相对低也更便宜）就可以了

最后纳入我的选择的是：铠侠 SD10 / 致态 Ti7100 ，可惜更便宜的 SD10 截止现在没有 4TB 版本最多到 2TB，而雷电接口支持多 SSD 阵列的设备价格普遍比较离谱

[一个不错的总结供参考](https://tieba.baidu.com/p/9190335174?see_lz=1)

![硬盘选择](/assets/blog_images/mac_mini/SSD.jpg)

## 6.电视的选择

- 我的 Mac mini 没直接接电视，鼠标操作真的没法算“家庭”媒体中心，家里除了折腾的我没人愿意用鼠标操作电视
- 电视选的 LG
  - OLED 体验好
  - WEBOS 系统比一堆广告的瀑布流好
  - 买工程遥控器（MKJ39170828）可以转外区装 APP
    - Jellyfin 客户端（其实 WEBOS 不装这个客户端也可以，因为支持 DLNA ，就是没海报墙）
    - Netflix 客户端
      - 等等主流流媒体客户端
  - 自带浏览器可以局域网直接访问 MP 和 qB 等软件的 WebUI 控制订阅和下载等操作
    - LG 的遥控器可以靠指向控制光标 比只能按上下左右的那种遥控器控制网页方便很多

![LG 遥控器指向控制光标示意](/assets/blog_images/mac_mini/LG_TV.gif)

## 7.FTTR 不桥接，公网设置

以联通普遍使用的华为 F30/F50 为例

![网络示意](/assets/blog_images/mac_mini/NET.jpeg)

- 桥接不是必要的，尤其对于 FTTR 还会损失功能（有的区域不给改桥接）
- 用机身上普通用户账号登陆光猫控制台
- 应用/高级 NAT 配置
  - DMZ 相当于把一个主机暴露到公网，除非你知道你在干什么否则不建议
  - IPv4 虚拟主机配置，这边可以设定端口转发，配置公网的什么外部端口可以通到内部的什么主机什么端口
  - IPv6 虚拟主机配置，这边也是设定端口转发
    - 需要特别注意的是 这里的内部主机地址如果选的是公网地址，而 IPv6 公网地址变动会比较频繁，就不用像 IPv4 那样配置内部主机地址（非必填），直接设置端口号的对应就好了，避免因为 IP 变化而失效
  - 除了要暴露的服务端口，记得把下载器端口也配置好，虽然有 UPnP 功能但是好像不太支持我们用的软件
- 多说一个我遇到的情况：使用同一个域名 不同的路由 domain:port/xxx1、domain:port/xxx2 进行反向代理的时候，部分 WebUI 会各种报错，于是改成了不同子域名代理到不同服务

![光猫控制台示意](/assets/blog_images/mac_mini/UNICOM.jpeg)
