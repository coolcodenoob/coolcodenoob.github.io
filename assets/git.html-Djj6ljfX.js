import{_ as t,r as l,o as i,c as o,a as n,d as e,b as s,e as r}from"./app-0GxK2oTu.js";const c={},p=n("h1",{id:"git详解",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#git详解"},[n("span",null,"git详解")])],-1),d=n("blockquote",null,[n("p",null,"本文将描述常用的git常用操作命令。")],-1),h=n("h2",{id:"必读",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#必读"},[n("span",null,"必读")])],-1),u=n("blockquote",null,[n("p",null,"推荐阅读《Pro Git》第二版")],-1),m={href:"https://git-scm.com/book/en/v2",target:"_blank",rel:"noopener noreferrer"},g={href:"https://git-scm.com/book/zh/v2",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/progit/progit2",target:"_blank",rel:"noopener noreferrer"},v={href:"https://learngitbranching.js.org/",target:"_blank",rel:"noopener noreferrer"},k=r(`<h2 id="git常用操作命令" tabindex="-1"><a class="header-anchor" href="#git常用操作命令"><span>Git常用操作命令</span></a></h2><h3 id="代码提交和同步代码" tabindex="-1"><a class="header-anchor" href="#代码提交和同步代码"><span>代码提交和同步代码</span></a></h3><p>第零步: 工作区与仓库保持一致</p><p>第一步: 文件增删改，变为已修改状态</p><p>第二步: git add ，变为已暂存状态</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> status
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">--all</span> <span class="token comment"># 当前项目下的所有更改</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>  <span class="token comment"># 当前目录下的所有更改</span>
$ <span class="token function">git</span> <span class="token function">add</span> xx/xx.py xx/xx2.py  <span class="token comment"># 添加某几个文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三步: git commit，变为已提交状态</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> commit -m<span class="token string">&quot;&lt;这里写commit的描述&gt;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第四步: git push，变为已推送状态</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master <span class="token comment"># 第一次需要关联上</span>
$ <span class="token function">git</span> push <span class="token comment"># 之后再推送就不用指明应该推送的远程分支了</span>
$ <span class="token function">git</span> branch <span class="token comment"># 可以查看本地仓库的分支</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-a</span> <span class="token comment"># 可以查看本地仓库和本地远程仓库(远程仓库的本地镜像)的所有分支</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2>`,11),_={href:"https://pdai.tech/md/devops/tool/tool-git.html",target:"_blank",rel:"noopener noreferrer"};function f(x,$){const a=l("ExternalLinkIcon");return i(),o("div",null,[p,d,h,u,n("ul",null,[n("li",null,[e("《Pro Git》第二版 "),n("ul",null,[n("li",null,[n("a",m,[e("《Pro Git》第二版英文版"),s(a)])]),n("li",null,[n("a",g,[e("《Pro Git》第二版中文版"),s(a)])]),n("li",null,[n("a",b,[e("《Pro Git》github仓库"),s(a)])])])]),n("li",null,[e("在线学习 "),n("ul",null,[n("li",null,[n("a",v,[e("learngitbranching网站"),s(a)])])])])]),k,n("ul",null,[n("li",null,[n("a",_,[e("https://pdai.tech/md/devops/tool/tool-git.html"),s(a)])])])])}const N=t(c,[["render",f],["__file","git.html.vue"]]),P=JSON.parse('{"path":"/md/tools/git.html","title":"git详解","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"必读","slug":"必读","link":"#必读","children":[]},{"level":2,"title":"Git常用操作命令","slug":"git常用操作命令","link":"#git常用操作命令","children":[{"level":3,"title":"代码提交和同步代码","slug":"代码提交和同步代码","link":"#代码提交和同步代码","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{},"filePathRelative":"md/tools/git.md"}');export{N as comp,P as data};