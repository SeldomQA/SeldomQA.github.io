import{_ as s,e as n}from"./app.5678a0b0.js";const a={},e=n(`<h1 id="\u521B\u5EFA\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a> \u521B\u5EFA\u9879\u76EE</h1><p>seldom\u5DF2\u7ECF\u5B89\u88C5\u5B8C\u6210\uFF0C\u90A3\u4E48\u73B0\u5728\u5DF2\u7ECF\u8FEB\u4E0D\u53CA\u5F85\u7684\u60F3\u4F53\u9A8Cseldom\u7684\u4F7F\u7528\u3002</p><h3 id="\u81EA\u52A8\u751F\u6210\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u751F\u6210\u9879\u76EE" aria-hidden="true">#</a> \u81EA\u52A8\u751F\u6210\u9879\u76EE</h3><p>seldom \u901A\u8FC7<code>seldom</code>\u547D\u4EE4\u63D0\u4F9B\u4E86\u811A\u624B\u67B6\uFF0C\u53EF\u4EE5\u5FEB\u901F\u7684\u5E2E\u6211\u4EEC\u521B\u5EFA\u81EA\u52A8\u5316\u6D4B\u8BD5\u9879\u76EE\u3002</p><ol><li>\u67E5\u770B\u5E2E\u52A9\uFF1A</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> seldom -h
usage: seldom <span class="token punctuation">[</span>-h<span class="token punctuation">]</span> <span class="token punctuation">[</span>-v<span class="token punctuation">]</span> <span class="token punctuation">[</span>-project PROJECT<span class="token punctuation">]</span> <span class="token punctuation">[</span>-r R<span class="token punctuation">]</span> <span class="token punctuation">[</span>-m M<span class="token punctuation">]</span> <span class="token punctuation">[</span>-install INSTALL<span class="token punctuation">]</span>

WebUI automation testing framework based on Selenium.

optional arguments:
  -h, --help        show this <span class="token builtin class-name">help</span> message and <span class="token builtin class-name">exit</span>
  -v, --version     show version
  -project PROJECT  Create an Seldom automation <span class="token builtin class-name">test</span> project.
  -h2c H2C          HAR <span class="token function">file</span> converts an interface <span class="token builtin class-name">test</span> case.
  -r R              run <span class="token builtin class-name">test</span> <span class="token keyword">case</span>
  -m M              run tests modules, classes or even individual <span class="token builtin class-name">test</span> methods
                    from the <span class="token builtin class-name">command</span> line
  -install INSTALL  Install the browser driver, For example, <span class="token string">&#39;chrome&#39;</span>,
                    <span class="token string">&#39;firefox&#39;</span><span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ol start="2"><li>\u521B\u5EFA\u9879\u76EE\uFF1A</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> seldom -project mypro
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u76EE\u5F55\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mypro/
\u251C\u2500\u2500 test_dir/
\u2502   \u251C\u2500\u2500 test_web_sample.py
\u2502   \u251C\u2500\u2500 test_api_sample.py
\u251C\u2500\u2500 test_data/
\u2502   \u251C\u2500\u2500 data.json
\u251C\u2500\u2500 reports/
\u2514\u2500\u2500 run.py
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li><code>test_dir/</code> \u6D4B\u8BD5\u7528\u4F8B\u76EE\u5F55\u3002</li><li><code>test_data/</code> \u6D4B\u8BD5\u6570\u636E\u6587\u4EF6\u76EE\u5F55\u3002</li><li><code>reports/</code> \u6D4B\u8BD5\u62A5\u544A\u76EE\u5F55\u3002</li><li><code>run.py</code> \u8FD0\u884C\u6D4B\u8BD5\u7528\u4F8B\u4E3B\u6587\u4EF6\u3002</li></ul><ol start="3"><li>\u514B\u9686\u9879\u76EE</li></ol><p>\u5982\u679C\u65E0\u6CD5\u4F7F\u7528<code>seldom</code>\u547D\u4EE4\uFF0C\u53EF\u4EE5\u901A\u8FC7git\u514B\u9686\u76F8\u5173\u9879\u76EE\u8FDB\u884C\u5B66\u4E60\u3002</p><ul><li>seldom-web-testing</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> clone https://github.com/SeldomQA/seldom-web-testing
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>seldom-api-testing</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> clone https://github.com/defnngj/seldom-api-testing
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u521B\u5EFA\u6D4B\u8BD5\u7528\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u6D4B\u8BD5\u7528\u4F8B" aria-hidden="true">#</a> \u521B\u5EFA\u6D4B\u8BD5\u7528\u4F8B</h3><p>\u6839\u636E\u4E0A\u9762\u7684\u521B\u5EFA\u7684\u9879\u76EE\uFF0C\u53EF\u4EE5\u5728<code>test_dir</code>\u76EE\u5F55\u4E0B\u7EE7\u7EED\u521B\u5EFA\u6D4B\u8BD5\u7528\u4F8B\uFF1A<code>test_sample.py</code>\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> seldom


<span class="token keyword">class</span> <span class="token class-name">YouTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_case</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;a simple test case &quot;&quot;&quot;</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u6839\u636E\u81EA\u5DF1\u7684\u9700\u6C42\u7F16\u5199<code>Web UI</code> or<code>HTTP\u63A5\u53E3</code>\u81EA\u52A8\u5316\u6D4B\u8BD5\u3002</p>`,21);function p(l,t){return e}var o=s(a,[["render",p],["__file","create_project.html.vue"]]);export{o as default};
