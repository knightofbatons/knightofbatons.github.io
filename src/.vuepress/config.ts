import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";


export default defineUserConfig({
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
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
    }),
  ],
  
  base: "/",

  lang: "zh-CN",
  title: "KnightOfBatons Blog",
  description: "KnightOfBatons 的博客",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
