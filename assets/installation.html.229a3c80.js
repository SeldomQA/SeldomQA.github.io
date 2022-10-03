import{_ as s,e as n}from"./app.608bbca0.js";const a={},e=n(`<h1 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h1><p>seldom\u7684\u5B89\u88C5\u975E\u5E38\u7B80\u5355\u3002</p><ul><li>\u5FEB\u901F\u5B89\u88C5</li></ul><p>\u76EE\u524D\u5DF2\u7ECF\u4E0A\u4F20 pypi.org ,\u53EF\u4EE5\u4F7F\u7528pip\u547D\u4EE4\u5B89\u88C5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> pip <span class="token function">install</span> seldom
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u4F53\u9A8C\u6700\u65B0\u4EE3\u7801</li></ul><p>\u5982\u679C\u4F60\u60F3\u968F\u65F6\u4F53\u9A8C\u6700\u65B0\u7684\u4EE3\u7801\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u7684\u547D\u4EE4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> pip <span class="token function">install</span> -U git+https://github.com/defnngj/seldom.git@master
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u5B89\u88C5\u4F9D\u8D56</li></ul><p>\u968F\u7740seldom \u52A0\u5165\u66F4\u591A\u7684\u529F\u80FD\uFF0Cseldom\u4E0D\u5F97\u4E0D\u4F9D\u8D56\u5176\u4ED6\u7684\u5F00\u6E90\u5E93\u3002\u4F60\u53EF\u4EE5\u5728 requirements.txt \u6587\u4EF6\u91CC\u9762\u770B\u5230\u8FD9\u4E9B\u4F9D\u8D56\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>selenium<span class="token operator">&gt;=</span><span class="token number">4.0</span>.0
XTestRunner<span class="token operator">&gt;=</span><span class="token number">1.4</span>.2
<span class="token assign-left variable">parameterized</span><span class="token operator">==</span><span class="token number">0.8</span>.1
<span class="token assign-left variable">loguru</span><span class="token operator">==</span><span class="token number">0.6</span>.0
openpyxl<span class="token operator">&gt;=</span><span class="token number">3.0</span>.3
pyyaml<span class="token operator">&gt;=</span><span class="token number">5.1</span>
requests<span class="token operator">&gt;=</span><span class="token number">2.22</span>.0
jsonschema<span class="token operator">&gt;=</span><span class="token number">3.2</span>.0
jmespath<span class="token operator">&gt;=</span><span class="token number">0.10</span>.0
webdriver-manager<span class="token operator">==</span><span class="token number">3.7</span>.0
pymysql<span class="token operator">&gt;=</span><span class="token number">1.0</span>.0
<span class="token assign-left variable">genson</span><span class="token operator">==</span><span class="token number">1.2</span>.2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u5148\u901A\u8FC7 <code>pip</code> \u547D\u4EE4\u5B89\u88C5\u8FD9\u4E9B\u4F9D\u8D56\u5E93\uFF0C\u53EF\u4EE5\u52A0\u5FEBseldom\u7684\u5B89\u88C5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> pip <span class="token function">install</span> -r requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u68C0\u67E5\u5B89\u88C5</li></ul><p>\u6700\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7<code>pip show seldom</code>\u547D\u4EE4\u68C0\u67E5\u5B89\u88C5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> pip show seldom

Name: seldom
Version: <span class="token number">2</span>.xx.xx
Summary: WebUI/HTTP automation testing framework based on unittest.
Home-page: https://github.com/seldomQA/seldom/
Author: bugmaster
Author-email: fnngj@126.com
License: BSD
Location: c:<span class="token punctuation">\\</span>python38<span class="token punctuation">\\</span>lib<span class="token punctuation">\\</span>site-packages
Requires: genson, jmespath, jsonschema, loguru, openpyxl, parameterized, pymysql, pyyaml, requests, selenium, webdriver-manager, XTestRunner
Required-by:

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,16);function p(l,r){return e}var o=s(a,[["render",p],["__file","installation.html.vue"]]);export{o as default};
