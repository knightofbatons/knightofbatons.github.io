import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://blog.nerv.love",

  author: {
    name: "KnightOfBatons",
    url: "https://blog.nerv.love",
  },

  logo: "/logo.svg",

  repo: "knightofbatons/knightofbatons.github.io",
  repoDisplay: false,

  docsDir: "src",

  navbar,
  sidebar,

  footer: "这是一个页脚 ᕕ( ᐛ )ᕗ",
  displayFooter: true,

  blog: {
    description: "正在摸鱼🐟",
    intro: "/intro.html",
    medias: {
      Email: "mailto:knightofbatons@nerv.love",
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    math: true,
    mark: true,
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
  },

  plugins: {
    blog: true,
    comment: {
      provider: "Giscus",
      repo: "knightofbatons/knightofbatons.github.io",
      repoId: "R_kgDOJv3XMA",
      category: "Announcements",
      categoryId: "DIC_kwDOJv3XMM4C4h7R",
      mapping: "pathname",
      reactionsEnabled: true,
      inputPosition: "bottom",
      lightTheme: "light",
      darkTheme: "dark",
    },
    slimsearch: {
      indexContent: true,
      customFields: [
        {
          getter: (page) => page.frontmatter.category as string | string[] | null,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag as string | string[] | null,
          formatter: "标签：$content",
        },
      ],
    },
  },
});