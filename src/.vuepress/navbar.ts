import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "工具",
    children: [
      "/tools/docker/",
      "/tools/git/",
    ],
  },
]);
