# awesome-gfw
[![Jekyll site CI](https://github.com/wxh06/awesome-gfw/workflows/Jekyll%20site%20CI/badge.svg)](https://github.com/wxh06/awesome-gfw/actions?query=workflow%3A%22Jekyll+site+CI%22)
[![Node.js CI](https://github.com/wxh06/awesome-gfw/workflows/Node.js%20CI/badge.svg)](https://github.com/wxh06/awesome-gfw/actions?query=workflow%3A%22Node.js+CI%22)

突破网络审查（翻墙）软件技术的 Awesome List

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/css/all.min.css">
<link rel="stylesheet" href="{{ '/main.css?v=' | append: site.github.build_revision | relative_url }}">

## 前言
### [关于中国的互联网](https://github.com/kelthuzadx/hosts/wiki/%E5%85%B3%E4%BA%8E%E4%B8%AD%E5%9B%BD%E7%9A%84%E4%BA%92%E8%81%94%E7%BD%91)
网络审查在各个国家都普遍存在着，它并不仅存在于中国。在全球的局势对中国都不利的当下，当局会过滤掉影响、危害到中国长远发展的信息，此时国家安全的意义更加重大。
  
互联网上存在着大量不现实的、不客观的，甚至自相矛盾的抹黑当局政府言论，它们背后一般有西方政府或非政府组织资金支持。这些媒体包括但不限于一些港媒、境外网站。

我们希望您能在遇到此类言论和见解时，不要不加思考地、情绪一度被煽动而不能克制地、盲目地相信这些片面或者歪曲事实的东西，而是要事实求是地思考，要摆脱情绪绑架的怪诞思维去理解。

我们需要了解到，中国的发展总基调是“稳中求进”，中国社会的最核心问题就是稳定。失去稳定的中国将会是一盘散沙，面临分裂和肢解的危险。我们希望您了解当今中国发展的根本保证是什么，发展的过程中哪部分是主旋律，哪些
是噪音；哪些是进取的，哪些是会开历史倒车的。我们需要维新，而不是革命。

我们应该清醒和全面地认识问题，偏信西方媒体的言论、缺乏对国家的信任是不可取的。您的数据安全和隐私对您尤为重要。若这些信息不应当被西方掌握时，它对国家和民族的命运更为重要。出于此原因，当局可能会限制您的行为
，我们不会也无法干预当局的任何政策和决定。

所以，我们希望您在使用此服务时，不要盲目地攻击当局的做法。


## 软件技术

### hosts
> [`/etc/hosts`](https://zh.wikipedia.org/zh-cn/Hosts%E6%96%87%E4%BB%B6) 是操作系统文本配置文件，以表的形式存储**主机名**与 **IP 地址**的映射

- **[googlehosts/hosts](https://github.com/googlehosts/hosts)**
  - [CODING 镜像](https://scaffrey.coding.net/public/hosts/hosts/git)
  - ~~[QVQNetwork 镜像](https://git.qvq.network/googlehosts/hosts)~~


### SNI
> 以某些方式规避 GFW 的 SNI RST，避免使用代理服务器

- [URenko/Accesser: 🌏一个解决SNI RST导致维基百科、Pixiv等站点无法访问的工具 \| A tool for solving SNI RST](https://github.com/URenko/Accesser)



### VPN（反对）
> **[虛拟私人网络](https://zh.wikipedia.org/zh-cn/%E8%99%9B%E6%93%AC%E7%A7%81%E4%BA%BA%E7%B6%B2%E8%B7%AF)**（Virtual Private Network，缩写 VPN）

#### 常见协议
- [PPTP](https://zh.wikipedia.org/zh-cn/%E9%BB%9E%E5%B0%8D%E9%BB%9E%E9%9A%A7%E9%81%93%E5%8D%94%E8%AD%B0)
- [L2TP](https://zh.wikipedia.org/zh-cn/%E7%AC%AC%E4%BA%8C%E5%B1%82%E9%9A%A7%E9%81%93%E5%8D%8F%E8%AE%AE) / [IPSec](https://zh.wikipedia.org/zh-cn/IPsec)
- [SSL/TLS](https://zh.wikipedia.org/zh-cn/%E5%82%B3%E8%BC%B8%E5%B1%A4%E5%AE%89%E5%85%A8%E6%80%A7%E5%8D%94%E5%AE%9A)（[OpenVPN](https://zh.wikipedia.org/zh-cn/OpenVPN)）


### Shadowsocks
> **影梭**，[最初](https://github.com/clowwindy/shadowsocks/tree/master)由 [@clowwindy](https://github.com/clowwindy) 使用 [Python](https://www.python.org/) 开发，后迫于公安部门压力（“被请去喝茶”）[移除](https://github.com/shadowsocks/shadowsocks/blob/rm/README.md)。
> 其[基于 libev 的 C 语言官方实现](https://github.com/shadowsocks/shadowsocks-libev)现主要由 [@madeye (Max Lv)](https://github.com/madeye) 开发维护。

#### 外部链接
- [Shadowsocks 影梭 - 安全的 socks5 代理](https://shadowsocks.org/en/)
- [GitHub 仓库](https://github.com/shadowsocks)
- [服务器 - Shadowsocks](https://shadowsocks.org/en/download/servers.html)
- [客户端 - Shadowsocks](https://shadowsocks.org/en/download/clients.html)

#### Library
> 各语言的命令行界面实现，可以作为 **lib**（库）调用，同时包含**服务器**和**客户端**

- **[shadowsocks](https://github.com/shadowsocks/shadowsocks/tree/master)** ([@clowwindy](https://github.com/clowwindy)) - <i class="fab fa-python" title="Python">Python</i> 的原始实现，易于部署，功能较为**基础**，基本不再维护。
- **[shadowsocks-libev](https://github.com/shadowsocks/shadowsocks-libev)** ([Max Lv @madeye](https://github.com/madeye)) - 基于 libev 的 *C 语言*“轻量级”的**完整**官方实现
- **[shadowsocks-rust](https://github.com/shadowsocks/shadowsocks-rust)** ([ty @zonyitoo](https://github.com/zonyitoo)) - Shadowsocks 的 <i class="fab fa-rust" title="Rust">Rust</i> 实现
- **[go-shadowsocks2](https://github.com/riobard/go-shadowsocks2)** ([Rio @riobard](https://github.com/riobard)) - 其新的 *Go 语言*实现

#### 客户端
- <i class="fab fa-windows" title="Windows"> Windows</i> **[shadowsocks-windows](https://github.com/shadowsocks/shadowsocks-windows)** ([Allen Zhu @celeron533](https://github.com/celeron533))
- <i class="fab fa-apple" title="Apple"> macOS</i> **[ShadowsocksX-NG](https://github.com/shadowsocks/ShadowsocksX-NG)** ([Qiu Yuzhou @qiuyuzhou](https://github.com/qiuyuzhou))<br />
  ~~*iOS* & *Mac OS X* Original **[shadowsocks-iOS (ShadowsocksX)](https://github.com/shadowsocks/shadowsocks-iOS/tree/master)** by [@clowwindy](https://github.com/clowwindy)~~
- <i class="fab fa-android" title="Android"> Android</i> **[shadowsocks-android](https://github.com/shadowsocks/shadowsocks-android)** ([Max Lv @madeye](https://github.com/madeye))
- <i class="fab fa-android" title="Android"> Android</i> & <i class="fab fa-windows" title="Windows"> Windows</i> & <i class="fab fa-chrome" title="Chrome OS"> Chrome OS</i> & <i class="fab fa-apple" title="Apple"> iOS</i> & <i class="fab fa-apple" title="Apple"> macOS</i> & <i class="fab fa-linux" title="Linux"> Linux</i>
  **[Outline](https://getoutline.org/zh-CN/home)** [Jigsaw-Code/outline-client: Outline clients, developed by Jigsaw.](https://github.com/Jigsaw-Code/outline-client)


### HTTPS Based
> 伪装成普通网站，通过 **TLS** + **[WebSocket](https://zh.wikipedia.org/zh-cn/WebSocket)** 等 Web 常见协议传输数据

- **[Project V](https://www.v2ray.com/)** [v2ray/v2ray-core: A platform for building proxies to bypass network restrictions.](https://github.com/v2ray/v2ray-core)
- **[Trojan](https://trojan-gfw.github.io/trojan/)** [trojan-gfw/trojan: An unidentifiable mechanism that helps you bypass GFW.](https://github.com/trojan-gfw/trojan)


## [CC-BY-4.0 许可协议](CC-BY-4.0.html)
<a rel="license" href="https://i.creativecommons.org/l/by/4.0/88x31.png"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" align="right" /></a>
本作品采用<a rel="license" href="https://creativecommons.org/licenses/by/4.0/deed.zh-Hans">知识共享署名 4.0 国际许可协议</a>进行许可。
