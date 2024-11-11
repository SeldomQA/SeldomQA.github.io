import{_ as l,r as t,o,c as r,a as e,b as n,d as a,e as i}from"./app-72107ff1.js";const d={},c=e("h2",{id:"☘️introduction",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#☘️introduction","aria-hidden":"true"},"#"),n(" ☘️Introduction")],-1),p={href:"https://seldomqa.github.io/",target:"_blank",rel:"noopener noreferrer"},u=i(`<p>你可以使用 Markdown 书写文档，并通过 VuePress 部署为可预览的页面。</p><h2 id="📖使用说明" tabindex="-1"><a class="header-anchor" href="#📖使用说明" aria-hidden="true">#</a> 📖使用说明</h2><h3 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装" aria-hidden="true">#</a> 1. 安装</h3><ol><li>clone本项目并安装依赖</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/SeldomQA/seldom.git
<span class="token builtin class-name">cd</span> docs
<span class="token function">yarn</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-开发" tabindex="-1"><a class="header-anchor" href="#_2-开发" aria-hidden="true">#</a> 2. 开发</h3>`,6),h={href:"https://v2.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},v=i(`<p>在<code>docs/vpdocs</code>文件夹内，修改你想修改的<code>.md</code>文档并保存。</p><p>然后执行以下命令进行预览或打包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> run dev <span class="token comment"># 预览</span>
<span class="token function">yarn</span> run build <span class="token comment"># 生成静态页面</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2><p><strong>Github-Pages手动本地部署部署说明：</strong></p><p>本地进入项目中执行<code>deploy.sh</code>即可自动部署到github pages。</p><p>deploy.sh 的详情如下（<strong>请自行判断启用注释掉的命令</strong>）:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>
<span class="token comment"># 确保脚本抛出遇到的错误</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># 生成静态文件</span>
<span class="token function">npm</span> run build

<span class="token comment"># 进入生成的文件夹</span>
<span class="token builtin class-name">cd</span> vpdocs/.vuepress/dist

<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;deploy&#39;</span>

<span class="token comment"># 如果发布到 https://SeldomQA.github.io</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> git@github.com:SeldomQA/SeldomQA.github.io.git master

<span class="token builtin class-name">cd</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),m={href:"https://v1.vuepress.vuejs.org/guide/deploy.html",target:"_blank",rel:"noopener noreferrer"},b=e("hr",null,null,-1),g={href:"https://github.com/nickliya",target:"_blank",rel:"noopener noreferrer"};function _(k,f){const s=t("ExternalLinkIcon");return o(),r("div",null,[c,e("p",null,[n("基于 vuepress2.0+ 的 "),e("strong",null,[n("seldom "),e("a",p,[n("操作文档"),a(s)])])]),u,e("p",null,[n("正式开发前，可以先阅读 "),e("a",h,[n("VuePress官方文档"),a(s)]),n("。")]),v,e("p",null,[n("更多部署方式可以参阅 "),e("a",m,[n("VuePress文档|部署"),a(s)]),n("。")]),b,e("p",null,[n("Author："),e("a",g,[n("@Yongchin"),a(s)])])])}const y=l(d,[["render",_],["__file","develop.html.vue"]]);export{y as default};
