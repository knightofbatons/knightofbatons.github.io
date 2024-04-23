import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

const MR_HOPE_AVATAR =
  '<svg t="1686829879525" class="icon" viewBox="0 0 1035 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12510" width="64" height="64"><path d="M424 291.84L384 250.88v636.64l31.2 31.2 7.04 7.04a3.84 3.84 0 0 0 2.56-3.52V306.72zM352.32 220l-40.8-40.8v636.48l40.8 40.96V220zM242.24 110.08a3.84 3.84 0 0 0-2.24 3.52v630.4l40.8 40.8V148.32l-31.36-31.2zM753.12 345.6a3.52 3.52 0 0 0-4.96 0L579.68 514.08a3.52 3.52 0 0 0 0 4.96l23.84 23.84 137.76 137.76a3.52 3.52 0 0 0 4.8 0l24-24a3.52 3.52 0 0 0 0-4.8l-135.68-135.68 141.92-141.92a3.52 3.52 0 0 0 0-4.96z" fill="#B40A1F" p-id="12511"></path><path d="M519.84 516.32l199.2-199.2a4 4 0 0 0 0-5.6L695.68 288a4 4 0 0 0-5.6 0L464.8 513.44a4 4 0 0 0 0 5.6l23.2 23.36 195.84 195.68a4 4 0 0 0 5.6 0l23.36-23.36a4 4 0 0 0 0-5.6z" fill="#B40A1F" p-id="12512"></path></svg>'
export default hopeTheme({
  hostname: "https://blog.nerv.love",

  author: {
    name: "KnightOfBatons",
    url: "https://blog.nerv.love",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "knightofbatons/knightofbatons.github.io",
  // 是否在导航栏内显示仓库链接，默认为 `true`
  repoDisplay: false,

  docsDir: "src",

  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: "这是一个页脚 ᕕ( ᐛ )ᕗ",

  displayFooter: true,
  blog: {
    description: "正在摸鱼🐟",
    intro: "/intro.html",
    medias: {
      // Baidu: "https://example.com",
      // BiliBili: "https://example.com",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      Email: "mailto:knightofbatons@nerv.love",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitee: "https://example.com",
      // GitHub: "https://github.com/knightofbatons",
      // Gitlab: "https://example.com",
      // Gmail: "mailto:info@example.com",
      // Instagram: "https://example.com",
      // Lark: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
      Blog: ["https://blog.nerv.love", MR_HOPE_AVATAR],
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  plugins: {
    blog: true,
    comment: {
      // You should generate and use your own comment service
      provider: "Waline",
      serverURL: "https://waline.nerv.love",
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
    
    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
