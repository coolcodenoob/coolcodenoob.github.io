import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "coolcodenoob",
  description: "coolcodenoob 的笔记库",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
