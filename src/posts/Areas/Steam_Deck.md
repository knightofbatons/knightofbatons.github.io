---
title: SteamDeck
cover: /assets/blog_images/SteamDeck.jpeg
date: 2023-01-04
category:
  - 使用指南
tag:
  - 软件工具
  - SteamDeck
---

使用 SteamDeck 以来的一些经历，用于自我备忘、发给朋友
我并不熟悉 Linux，且操作上下连贯，所以单独操作可能不适用于所有情况，仅供参考

<!--more-->

## 1.购买

SteamDeck 出厂装在收纳包里，包的两个拉链被一次性卡扣固定，可以比较方便分辨是否全新（以后不一定）
SteamDeck 支持使用 Steam 余额购买，不少人通过「挂刀」或「充值卡」得到折扣余额，然后多买几个出掉多余的赚差价
现在转运时效性没法保证，汇率也不太好，且大概率交满额 13% 的税
综上我选择多花点钱，节省时间成本直接购买现货

## 2.到手以后了解到的事情、好用的工具

有人抱怨 SteamDeck 使用问题多、完成度较低
和 Switch PS XBOX 等传统游戏终端比那确实，但这样对比并不公平
因为 SteamDeck 的开放性是传统游戏终端没有的，足够开放的另一面也许就是没有那么稳定？
SteamDeck 有两个模式：SteamOS 的掌机模式、Linux 的桌面模式
桌面模式有一个叫 Discover 的图形界面工具可以安装软件，下面提到的软件大多数能在上面找到，但不一定会选择这个安装方式

小提示：桌面模式 Steam 开着时，STEAM 键 + X 建 可以呼出虚拟键盘

### 2.1.网络问题

在国内使用 SteamDeck 面临的第一个问题是网络，甚至到手刚开机就被更新卡住，后续使用中也会被坑
非要直连开机的话，建议尽量连手机热点，先不要修改语言和时区

我的解决方式是路由器挂加速，如果没有可以这么做的路由器，建议尽快换一个

需注意：电脑、手机上开 VPN、加速器，然后共享热点，是没法直接把效果共享出去的
如果应急给 SteamDeck 使用，可以参考 [利用 WIFI 热点分享 VPN 连接](https://www.10101.io/2018/12/16/share-vpn-connection-over-wifi) 
未必使用文章中的同款软件（因为某些并不好用）但思路没问题

一些加速器如 UU，有电脑、手机可用的加速 SteamDeck 的模式，按相应指引进行配置后可以通过热点加速

如果没有解决网络问题，在 Discover 安装软件会慢，甚至不可用，建议搜索关键词：SteamDeck、Discover、Flatpak、换源

### 2.2.检查 SteamDeck 游戏兼容性

购买 SteamDeck 前库里已经积攒不少游戏，可并不是所有都可以在 SteamDeck 完美运行
SteamDeck 端未验证的很多游戏其实也可以运行，同时被验证过的游戏体验未必好
建议使用兼容性查询网站 [protondb](https://www.protondb.com/)
里面有用户反馈的：兼容情况、使用体验、推荐设置等
如果浏览器逛 Steam 建议搜索关键词：ProtonDB for Steam、浏览器插件

### 2.3.使用 Steam 以外的其他游戏平台 EPIC、GOG 等

是的我也喜欢从 EPIC 白嫖游戏,这里推荐 Discover 搜索安装 [HeroicGamesLauncher](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher) 
我最喜欢的功能就是下载的游戏可以一键添加到 Steam 游戏封面也都是设置好的

小提示：如果登陆 EPIC 账号遇到问题，可以尝试里面的备用登陆方式

### 2.4.文件传输

下面的很多操作需要传输文件到 SteamDeck，小文件同网络无线传输我使用：
Windows 端安装 [winpinator](https://winpinator.swisz.cz/)
SteamDeck 端 Discover 搜索安装 [warpinator](https://github.com/linuxmint/warpinator)
在同一网络两端都打开软件，配对成功后可以互传文件

估计也可以使用 SMB 建议搜索关键词：资源管理器、Dolphin、SMB

大文件建议硬盘拷贝黏贴，SteamDeck 的 Type-C 充电口同时可以用于传输数据（这样快多了）
用 SteamDeck 上使的 TF 卡拷贝文件需要解决 Linux 和 Windows 文件格式不同无法读取的问题，建议搜索关键词：SteamDeck、TF卡、linux reader

小提示：SteamDeck 的 TF 卡读取速度至高 90 MB/S ，没必要买特别好的卡，当然 TF 卡会随着使用掉速度也别买太差

### 2.5.学习版游戏

叠个甲：本人不常玩学习版，因为习惯了方便的游戏获得方式，且取得方便的价格很划算（Steam 低价区、XGP、游戏机二手光盘 等）
但有一些学习版游戏很适合在 SteamDeck 上使用，我的需求是安装一些 R18 游戏（通常是 Windows 解压即用软件）
这种解压版游戏软件，只需要拷贝到 SteamDeck，在桌面模式的 Steam 左下角 添加非 Steam 游戏， 然后设置兼容层，一般都可以运行

设置兼容层：游戏 - 设置 - 属性 - 兼容性 - 勾选强制使用特定的 Steam Play 兼容性工具 - 选择需要的兼容层

### 2.6.第三方兼容层

上面的：其他平台、学习版游戏，使用官方兼容层可能无法运行，这时 Discover 搜索安装 [ProtonUp-Qt](https://github.com/DavidoTek/ProtonUp-Qt)
ProtonUp-Qt 可以用来安装第三方兼容层，安装后在 Steam 设置兼容层 时可供选择
安装 Proton GE 的最新版本，解决了我绝大多数问题

### 2.7.Switch 模拟器

YUZU Switch 模拟器 Discover 搜索安装 [yuzu](https://github.com/yuzu-emu/yuzu)
也可以使用 [emudeck](https://www.emudeck.com/) 安装，建议搜索关键词：SteamDeck、模拟器大全、emudeck
我下面的经验适用于 Discover 搜索安装的 Flatpak 版本，emudeck 安装的未验证，可能并不适用？

需要注意的是 YUZU 安装后需要添加「Switch 固件」和「key」后才能使用，获取方法查询关键词：YUZU、固件、key、路径 
固件、Key 需要放的路径在 YUZU 的设置里就可以看到，默认路径需要显示隐藏文件夹方可找到

ROM 下载我使用 [xxxxx520](https://xxxxx520.com/)

开模拟器再开游戏麻烦，所以我添加 YUZU 模拟器下的 ROM 到 Steam 直接运行（包含游戏封面），Discover 搜索安装 [SteamRomManager](https://github.com/SteamGridDB/steam-rom-manager)

具体使用方式：
 1. Parsers 中添加配置 
 2. Community Presets 设置类型为 Nintendo Switch - Yuzu(Flatpak)（emudeck 安装的也许是 Nintendo Switch - Yuzu）
 3. ROMs directory 设置你放 ROM 的路径 
 4. Preview 创建游戏列表 预览并挑选封面 保存游戏列表 
 5. 重启 Steam （也许需要） 
 6. 完成
  
小提示1：SteamRomManager 还可以用于添加多种封面（比如学习版 等非 Steam 软件），软件内文档丰富（英文）可以自行参考添加相应配置
小提示2：YUZU 模拟器加载 ROM 报错也有可能是 ROM 的问题，很多人第一次下载可能错把升级补丁当作主体 ROM

### 2.8.添加非 Steam 游戏封面

添加非 Steam 游戏封面我用 SGDBoop 而不是 SteamRomManager
这个工具可以给已添加到 Steam 的非 Steam 软件添加各种图片，需要分别选择不同位置的图片
Discover 搜索安装 [SGDBoop](https://www.steamgriddb.com/boop)
在 SteamDeck 访问他们的网站并跟随引导验证后使用
在你遇到问题时，注意引导页面下方关于 SteamDeck 的 Troubleshooting 
``` bash
systemctl restart --user xdg-desktop-portal
```

### 2.9.修改器（风灵月影类、CE）

ProtonUp-Qt 不仅能用来安装第三方兼容层，还可以用来安装一个神器 [SteamTinkerLaunch](https://github.com/sonic2kk/steamtinkerlaunch)
这里不选择用 Discover 搜索安装，详见 [说明](https://github.com/sonic2kk/steamtinkerlaunch/wiki/ProtonUp-Qt)
安装后 SteamTinkerLaunch 就像之前的第三方兼容层一样可以在「设置兼容层」选择
SteamTinkerLaunch 是一款多功能 Linux 工具，可与 Steam 客户端一起使用，让你可以图形化下简单设置很多种游戏工具

这里我暂时只用到了它众多强大炫酷功能中的一个 [自定义命令](https://github.com/sonic2kk/steamtinkerlaunch/wiki/Custom-Command)
自定义命令：在游戏本身之前、之后或代替游戏本身启动自定义程序。您可以运行 Windows 或 Linux 可执行文件
这也就意味着我们可以使用 风灵月影 还有 CE

具体使用方式：
1. 对于原生 Linux 游戏 在 启动命令 处添加
``` bash
$HOME/stl/prefix/steamtinkerlaunch
```
   对非原生 在 设置兼容层 选择 SteamTinkerLaunch 
2. 开始游戏 并等待 SteamTinkerLaunch 界面出现 在跳过倒数计时前（默认2秒） 点击 MAIN MENU
3. 跳转后点击 GAME MENU
4. 找到 Misc options - 勾选 Use custom command 以及 Fork custom command
5. custom command 选择自己准备好要用的「风灵月影」或者 CE.exe 文件
6. 点击 SAVE AND PLAY 就可以保存了，下次如果不需要改变设置就不需要到这里来了
7. 进入游戏后按 STEAM 键会发现多出一个你选择的应用的窗口
8. 控制器设置里面设置好鼠标 就可以使用了

小提示1：修改器使用报错很可能是版本过老
小提示2：CE 可以使用 Windows 的解压版，因为 SteamTinkerLaunch 在 12.0 版本以后删除了自带的 CE
小提示3：可能需要打开开发者选项才可以切换窗口
小提示4：网络问题可能会导致各种下载问题，最好全程科学

其他问题和相关视频建议搜索：B站：BV1od4y1r7bL、STL 风灵月影 CE

### 2.10.串流 PS5

使用 [chiaki4deck](https://streetpea.github.io/chiaki4deck/) 或者 Discover 搜索安装 [chiaki](https://git.sr.ht/~thestr4ng3r/chiaki)

chiaki4deck 算是针对 SteamDeck 在 chiaki 基础上修改而来，我对比了一下留下了 chiaki4deck

非常详尽的安装指导见 [chiaki4deck 官方安装文档](https://streetpea.github.io/chiaki4deck/setup/)

非常不推荐跳过 “自动化” 配置步骤，因为配置好以后的使用场景会舒服很多： 
PS5 处于待机状态 - SteamDeck 启动 chiaki4deck （添加到掌机模式的脚本） - PS5 被唤醒后串流成功 - 不想玩了 快捷键退出 chiaki4deck - PS5 进入待机状态

小问题： 我的电视有 ALLM 功能，其中一个功能点是可以让 电视 和 PS5 互相自动唤醒，这功能本来挺方便的，可在 SteamDeck 自动唤醒 PS5 串流的场景会有点问题，被 SteamDeck 唤醒的 PS5 会进一步唤醒 电视，目前还没找到两个功能同时使用的好办法。

## 3.一些建议

不少 SteamDeck 用户只是游戏玩家，也许使用 SteamDeck 是他们第一次接触 Linux 
你也许注意到了，上面提到的很多工具都是开源软件，我附在上面的很多链接都指向 GitHub

这些前提可能让你在使用 SteamDeck 和这些开源软件时遇到一些前所未有的挑战

这里我建议：
1. 除了观看 UP 分享的视频教程，多关注官方文档，一般有更详尽的指导和问题解决方案
2. 尝试学习使用 Linux 桌面，大多数时候只需要多搜索一次为什么、是什么，很多相关软件至少需要你有一些这方面的经验才会有更好的体验
3. 不要仅仅说它不起作用，尝试通过控制变量等方法缩小问题范围，很喜欢 STL 作者说的：“Help those that are also willing to help themselves”
4. 学会提问，尊重那些无私贡献的开源软件维护者和帮助你的热心老哥，如果想得到更好帮助，最好已经尽力尝试了，把遇到的问题和你所作的描述清楚，如果有问题反馈模板请尽量遵守，毕竟你如果只是说它不起作用，不起作用的原因可太多了，实在没法帮你。
5. 乐于分享，不经意间的留言可能帮助到后面很多人，这样做的人多了查询问题的可能解决办法就会很容易