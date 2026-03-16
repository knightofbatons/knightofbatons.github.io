import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import theme from "./theme.js";


export default defineUserConfig({
  bundler: viteBundler(),
  
  base: "/",

  lang: "zh-CN",
  title: "KnightOfBatons Blog",
  description: "KnightOfBatons 的博客",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});