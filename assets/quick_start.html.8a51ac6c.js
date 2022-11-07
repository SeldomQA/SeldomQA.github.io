import{_ as e,r as p,o as t,c as o,a as s,b as l,F as c,d as n,e as r}from"./app.2e38da81.js";var u="/image/pycharm.png",i="/image/pycharm_run_case.png",m="/image/report.png";const b={},k=s("h1",{id:"\u5FEB\u901F\u5F00\u59CB",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5FEB\u901F\u5F00\u59CB","aria-hidden":"true"},"#"),n(" \u5FEB\u901F\u5F00\u59CB")],-1),d=s("h3",{id:"\u57FA\u672C\u89C4\u8303",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u57FA\u672C\u89C4\u8303","aria-hidden":"true"},"#"),n(" \u57FA\u672C\u89C4\u8303")],-1),_=s("code",null,"seldom",-1),g=n("\u7EE7\u627F"),h=s("code",null,"unittest",-1),q=n("\u5355\u5143\u6D4B\u8BD5\u6846\u67B6\uFF0C\u6240\u4EE5\u4ED6\u7684\u7F16\u5199\u89C4\u8303\u4E0E"),y={href:"https://docs.python.org/3/library/unittest.html",target:"_blank",rel:"noopener noreferrer"},v=n("unittest"),f=n("\u57FA\u672C\u4FDD\u6301\u4E00\u81F4\u3002"),w=r(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># test_sample.py</span>
<span class="token function">import</span> seldom


class YouTest<span class="token punctuation">(</span>seldom.TestCase<span class="token punctuation">)</span>:

    def test_case<span class="token punctuation">(</span>self<span class="token punctuation">)</span>:
        <span class="token string">&quot;&quot;</span>&quot;a simple <span class="token builtin class-name">test</span> <span class="token keyword">case</span> <span class="token string">&quot;&quot;</span>&quot;
        self.assertEqual<span class="token punctuation">(</span><span class="token number">1</span>+1, <span class="token number">2</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token builtin class-name">:</span>
    seldom.main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u57FA\u672C\u89C4\u8303\uFF1A</p><ol><li>\u521B\u5EFA\u6D4B\u8BD5\u7C7B<code>YouTest</code>\u5E76\u7EE7\u627F<code>seldom.TestCase</code>\u7C7B\u3002</li><li>\u521B\u5EFA\u6D4B\u8BD5\u65B9\u6CD5<code>test_case</code>, \u5FC5\u987B\u4EE5<code>test</code>\u5F00\u5934\u3002</li><li><code>seldom.mian()</code>\u662F\u6846\u67B6\u8FD0\u884C\u7684\u5165\u53E3\u65B9\u6CD5\uFF0C\u63A5\u4E0B\u6765\u8BE6\u7EC6\u4ECB\u7ECD\u3002</li></ol><h3 id="main-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#main-\u65B9\u6CD5" aria-hidden="true">#</a> <code>main()</code> \u65B9\u6CD5</h3><p><code>main()</code>\u65B9\u6CD5\u662Fseldom\u8FD0\u884C\u6D4B\u8BD5\u7684\u5165\u53E3, \u5B83\u63D0\u4F9B\u4E86\u4E00\u4E9B\u6700\u57FA\u672C\u4E5F\u662F\u6700\u91CD\u8981\u7684\u914D\u7F6E\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> seldom

<span class="token comment"># ...</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>

    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>
                browser<span class="token operator">=</span><span class="token string">&quot;chrome&quot;</span><span class="token punctuation">,</span>
                base_url<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
                app_info<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
                app_server<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
                report<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
                title<span class="token operator">=</span><span class="token string">&quot;\u767E\u5EA6\u6D4B\u8BD5\u7528\u4F8B&quot;</span><span class="token punctuation">,</span>
                tester<span class="token operator">=</span><span class="token string">&quot;\u866B\u5E08&quot;</span><span class="token punctuation">,</span>
                description<span class="token operator">=</span><span class="token string">&quot;\u6D4B\u8BD5\u73AF\u5883:chrome&quot;</span><span class="token punctuation">,</span>
                debug<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>
                rerun<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>
                save_last_run<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>
                language<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token punctuation">,</span>
                timeout<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
                whitelist<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                blacklist<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token builtin">open</span><span class="token operator">=</span><span class="token boolean">True</span>
    <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p><strong>\u53C2\u6570\u8BF4\u660E</strong></p><ul><li>path : \u6307\u5B9A\u6D4B\u8BD5\u76EE\u5F55\u6216\u6587\u4EF6\uFF0C \u4E0E<code>case</code>\u53C2\u6570\u4E92\u65A5\u3002</li><li>case : \u6307\u5B9A\u6D4B\u8BD5\u7528\u4F8B\uFF0C \u4E0E<code>path</code>\u53C2\u6570\u4E92\u65A5\u3002</li><li>browser : \u6307\u5B9A\u6D4F\u89C8\u5668\uFF08&quot;chrome&quot;\u3001&quot;firefox&quot; \u7B49\uFF09\uFF0C Web\u6D4B\u8BD5\u3002</li><li>base_url : \u8BBE\u7F6E\u5168\u5C40\u7684\u57FA\u672CURL\uFF0C HTTP\u6D4B\u8BD5\u3002</li><li>app_info : app \u542F\u52A8\u4FE1\u606F\uFF0C\u53C2\u8003<code>desired_capabilities</code>\u914D\u7F6E\uFF0C app\u6D4B\u8BD5\u3002</li><li>app_server : appium server \u542F\u52A8\u5730\u5740\uFF08\u9ED8\u8BA4 http://127.0.0.1:4723\uFF09\uFF0C app\u6D4B\u8BD5\u3002</li><li>report : \u81EA\u5B9A\u4E49\u6D4B\u8BD5\u62A5\u544A\u7684\u540D\u79F0\uFF0C\u9ED8\u8BA4\u683C\u5F0F\u4E3A<code>2020_04_04_11_55_20_result.html</code>\u3002</li><li>title : \u6307\u5B9A\u6D4B\u8BD5\u62A5\u544A\u6807\u9898\u3002</li><li>tester : \u6307\u5B9A\u6D4B\u8BD5\u4EBA\u5458, \u9ED8\u8BA4<code>Anonymous</code>\u3002</li><li>description : \u6307\u5B9A\u6D4B\u8BD5\u62A5\u544A\u63CF\u8FF0\u3002</li><li>debug : debug\u6A21\u5F0F\uFF0C\u8BBE\u7F6E\u4E3ATrue\u4E0D\u751F\u6210\u6D4B\u8BD5HTML\u6D4B\u8BD5\uFF0C\u9ED8\u8BA4\u4E3A<code>False</code>\u3002</li><li>rerun : \u8BBE\u7F6E\u5931\u8D25\u91CD\u65B0\u8FD0\u884C\u6B21\u6570\uFF0C\u9ED8\u8BA4\u4E3A <code>0</code>\u3002</li><li>save_last_run : \u8BBE\u7F6E\u53EA\u4FDD\u5B58\u6700\u540E\u4E00\u6B21\u7684\u7ED3\u679C\uFF0C\u9ED8\u8BA4\u4E3A<code>False</code>\u3002</li><li>language : \u8BBE\u7F6EHTML\u62A5\u544A\u4E2D\u82F1\u6587\uFF0C\u9ED8\u8BA4<code>en</code>, \u4E2D\u6587<code>zh-CN</code>\u3002</li><li>timeout : \u8BBE\u7F6E\u8D85\u65F6\u65F6\u95F4\uFF0C\u9ED8\u8BA4<code>10</code>\u79D2\u3002</li><li>whitelist : \u7528\u4F8B\u6807\u7B7E\uFF08label\uFF09\u8BBE\u7F6E\u767D\u540D\u5355\u3002</li><li>blacklist : \u7528\u4F8B\u6807\u7B7E\uFF08label\uFF09\u8BBE\u7F6E\u9ED1\u540D\u5355\u3002</li><li>open : \u662F\u5426\u4F7F\u7528\u6D4F\u89C8\u5668\u81EA\u52A8\u6253\u5F00\u6D4B\u8BD5\u62A5\u544A\uFF0C\u9ED8\u8BA4<code>True</code>\u3002</li></ul><h3 id="\u8FD0\u884C\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u6D4B\u8BD5" aria-hidden="true">#</a> \u8FD0\u884C\u6D4B\u8BD5</h3><blockquote><p>seldom \u5F3A\u70C8\u5EFA\u8BAE\u901A\u8FC7\u547D\u4EE4\u884C\u5DE5\u5177\u6267\u884C\u3002</p></blockquote><ol><li>\u8FD0\u884C\u5F53\u524D\u6587\u4EF6\u4E2D\u7684\u7528\u4F8B</li></ol><p>\u521B\u5EFA <code>test_sample.py</code> \u6587\u4EF6\uFF0C\u5728\u8981\u6587\u4EF6\u4E2D\u4F7F\u7528<code>main()</code>\u65B9\u6CD5\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># test_sample.py</span>
<span class="token keyword">import</span> seldom


<span class="token keyword">class</span> <span class="token class-name">YouTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_case</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;a simple test case &quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># \u9ED8\u8BA4\u8FD0\u884C\u5F53\u524D\u6587\u4EF6\u4E2D\u7684\u7528\u4F8B</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><code>main()</code>\u65B9\u6CD5\u9ED8\u8BA4\u8FD0\u884C\u5F53\u524D\u6587\u4EF6\u4E2D\u7684\u6240\u6709\u7528\u4F8B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> python test_sample.py      <span class="token comment"># \u901A\u8FC7python\u547D\u4EE4\u8FD0\u884C</span>
<span class="token operator">&gt;</span> seldom -r test_sample.py   <span class="token comment"># \u901A\u8FC7seldom\u547D\u4EE4\u8FD0\u884C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2"><li>\u6307\u5B9A\u8FD0\u884C\u76EE\u5F55\u3001\u6587\u4EF6</li></ol><p>\u53EF\u4EE5\u901A\u8FC7<code>path</code>\u53C2\u6570\u6307\u5B9A\u8981\u8FD0\u884C\u7684\u76EE\u5F55\u6216\u6587\u4EF6\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># run.py</span>
<span class="token keyword">import</span> seldom

seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">&quot;./&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># \u6307\u5B9A\u5F53\u524D\u6587\u4EF6\u6240\u5728\u76EE\u5F55\u4E0B\u9762\u7684\u7528\u4F8B\u3002</span>
seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">&quot;./test_dir/&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># \u6307\u5B9A\u5F53\u524D\u76EE\u5F55\u4E0B\u9762\u7684test_dir/ \u76EE\u5F55\u4E0B\u9762\u7684\u7528\u4F8B\u3002</span>
seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">&quot;./test_dir/test_sample.py&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># \u6307\u5B9A\u6D4B\u8BD5\u6587\u4EF6\u4E2D\u7684\u7528\u4F8B\u3002</span>
seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">&quot;D:/seldom_sample/test_dir/test_sample.py&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># \u6307\u5B9A\u6587\u4EF6\u7684\u7EDD\u5BF9\u8DEF\u5F84\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>\u8FD0\u884C\u6587\u4EF6</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> python run.py
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li>\u6307\u5B9A\u5355\u4E2A\u7C7B\u3001\u65B9\u6CD5\u6267\u884C</li></ol><p>\u53EF\u4EE5\u901A\u8FC7<code>case</code>\u53C2\u6570\u6307\u5B9A\u8981\u8FD0\u884C\u6587\u4EF6\u3001\u7C7B\u548C\u65B9\u6CD5\u3002</p><blockquote><p>\u6CE8\uFF1A\u5982\u679C\u6307\u5B9A\u4E86<code>case</code>\u53C2\u6570\uFF0C\u90A3\u4E48<code>path</code>\u53C2\u6570\u5C06\u65E0\u6548\u3002</p></blockquote><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># test_sample.py</span>
<span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom <span class="token keyword">import</span> data


<span class="token keyword">class</span> <span class="token class-name">TestCase</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_case</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot; sample case &quot;&quot;&quot;</span>
        <span class="token keyword">pass</span>

    <span class="token decorator annotation punctuation">@data</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">(</span><span class="token string">&quot;case1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;seldom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token string">&quot;case2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;XTestRunner&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_ddt</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> search<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot; ddt case &quot;&quot;&quot;</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;name: </span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">, search_key: </span><span class="token interpolation"><span class="token punctuation">{</span>search<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token keyword">case</span><span class="token operator">=</span><span class="token string">&quot;test_sample&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># \u6307\u5B9A\u5F53\u524D\u6587\u4EF6</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token keyword">case</span><span class="token operator">=</span><span class="token string">&quot;test_sample.TestCase&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># \u6307\u5B9A\u6D4B\u8BD5\u7C7B</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token keyword">case</span><span class="token operator">=</span><span class="token string">&quot;test_sample.TestCase.test_case&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># \u6307\u5B9A\u6D4B\u8BD5\u7528\u4F8B</span>

    <span class="token comment"># \u4F7F\u7528\u53C2\u6570\u5316\u7684\u7528\u4F8B</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token keyword">case</span><span class="token operator">=</span><span class="token string">&quot;test_sample.TestCase.test_ddt&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># \u9519\u8BEF\u7528\u6CD5</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token keyword">case</span><span class="token operator">=</span><span class="token string">&quot;test_sample.TestCase.test_ddt_0_case1&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># \u6B63\u786E\u7528\u4F8B</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><ul><li>\u8FD0\u884C\u6587\u4EF6</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> python test_sample.py
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="4"><li>seldom\u547D\u4EE4\u6307\u5B9A\u5355\u4E2A\u7C7B\u3001\u65B9\u6CD5</li></ol><p><code>seldom -m</code>\u547D\u4EE4\u53EF\u4EE5\u63D0\u4F9B\u66F4\u7EC6\u7C92\u5EA6\u7684\u8FD0\u884C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> seldom -m test_sample <span class="token comment"># \u8FD0\u884C test_sample.py \u6587\u4EF6</span>
<span class="token operator">&gt;</span> seldom -m test_sample.SampleTest <span class="token comment"># \u8FD0\u884C SampleTest \u6D4B\u8BD5\u7C7B</span>
<span class="token operator">&gt;</span> seldom -m test_sample.SampleTest.test_case <span class="token comment"># \u8FD0\u884C test_case \u6D4B\u8BD5\u65B9\u6CD5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p>seldom\u547D\u4EE4\u6307\u5B9A\u7C7B\u3001\u65B9\u6CD5\u6709\u4E24\u4E2A\u95EE\u9898\uFF1A</p><ol><li>\u4E0D\u652F\u6301poium\uFF0C\u5982\u679C\u8981\u4F7F\u7528\uFF0C\u5FC5\u987B\u624B\u52A8\u7ED9<code>Seldom.driver</code> \u8D4B\u503C\u6D4F\u89C8\u5668\u9A71\u52A8\u3002</li><li>\u5982\u679C\u662FWeb UI\u81EA\u52A8\u5316\u6D4B\u8BD5\uFF0C\u65E0\u6CD5\u81EA\u52A8\u5173\u95ED\u6D4F\u89C8\u5668\uFF0C\u9700\u8981\u624B\u52A8\u5173\u95ED\u6D4F\u89C8\u5668<code>self.close()</code></li></ol></blockquote><h3 id="\u5728pycharm\u4E2D\u8FD0\u884C\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u5728pycharm\u4E2D\u8FD0\u884C\u6D4B\u8BD5" aria-hidden="true">#</a> \u5728pycharm\u4E2D\u8FD0\u884C\u6D4B\u8BD5</h3><ol><li>\u914D\u7F6E\u6D4B\u8BD5\u7528\u4F8B\u901A\u8FC7 unittest \u8FD0\u884C\u3002</li></ol><p><img src="`+u+'" alt=""></p><ol start="2"><li>\u5728\u6587\u4EF6\u4E2D\u9009\u62E9\u6D4B\u8BD5\u7C7B\u6216\u7528\u4F8B\u6267\u884C\u3002</li></ol><p><img src="'+i+`" alt=""></p><blockquote><p>\u8B66\u544A\uFF1A\u8FD0\u884C\u7528\u4F8B\u6253\u5F00\u7684\u6D4F\u89C8\u5668\uFF0C\u9700\u8981\u624B\u52A8\u5173\u95ED\uFF0C seldom\u4E0D\u505A\u7528\u4F8B\u5173\u95ED\u64CD\u4F5C\u3002</p></blockquote><h3 id="\u5931\u8D25\u91CD\u8DD1" tabindex="-1"><a class="header-anchor" href="#\u5931\u8D25\u91CD\u8DD1" aria-hidden="true">#</a> \u5931\u8D25\u91CD\u8DD1</h3><p>Seldom\u652F\u6301<code>\u9519\u8BEF</code>&amp;<code>\u5931\u8D25</code>\u91CD\u8DD1\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># test_sample.py</span>
<span class="token keyword">import</span> seldom


<span class="token keyword">class</span> <span class="token class-name">YouTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

  
    <span class="token keyword">def</span> <span class="token function">test_error</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;error case&quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">test_fail</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;fail case &quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>rerun<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> save_last_run<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u53C2\u6570\u8BF4\u660E\uFF1A</p><ul><li>rerun: \u6307\u5B9A\u91CD\u8DD1\u7684\u6B21\u6570\uFF0C\u9ED8\u8BA4\u4E3A <code>0</code>\u3002</li><li>save_last_run: \u8BBE\u7F6E\u662F\u5426\u53EA\u4FDD\u5B58\u6700\u540E\u4E00\u6B21\u8FD0\u884C\u7ED3\u679C\uFF0C\u9ED8\u8BA4\u4E3A<code>False</code>\u3002</li></ul><p>\u8FD0\u884C\u65E5\u5FD7\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> python test_sample.py


              __    __
   ________  / /___/ /___  ____ ____
  / ___/ _ <span class="token punctuation">\\</span>/ / __  / __ <span class="token punctuation">\\</span>/ __ \` ___/
 <span class="token punctuation">(</span>__  <span class="token punctuation">)</span>  __/ / /_/ / /_/ / / / / / /
/____/<span class="token punctuation">\\</span>___/_/<span class="token punctuation">\\</span>__,_/<span class="token punctuation">\\</span>____/_/ /_/ /_/  v3.x.x
-----------------------------------------
                             @itest.info



.<span class="token punctuation">\\</span>test_sample.py

XTestRunner Running tests<span class="token punctuation">..</span>.

----------------------------------------------------------------------
ERetesting<span class="token punctuation">..</span>. test_error <span class="token punctuation">(</span>test_sample.YouTest<span class="token punctuation">)</span><span class="token punctuation">..</span><span class="token number">1</span>
ERetesting<span class="token punctuation">..</span>. test_error <span class="token punctuation">(</span>test_sample.YouTest<span class="token punctuation">)</span><span class="token punctuation">..</span><span class="token number">2</span>
ERetesting<span class="token punctuation">..</span>. test_error <span class="token punctuation">(</span>test_sample.YouTest<span class="token punctuation">)</span><span class="token punctuation">..</span><span class="token number">3</span>
EFRetesting<span class="token punctuation">..</span>. test_fail <span class="token punctuation">(</span>test_sample.YouTest<span class="token punctuation">)</span><span class="token punctuation">..</span><span class="token number">1</span>
FRetesting<span class="token punctuation">..</span>. test_fail <span class="token punctuation">(</span>test_sample.YouTest<span class="token punctuation">)</span><span class="token punctuation">..</span><span class="token number">2</span>
FRetesting<span class="token punctuation">..</span>. test_fail <span class="token punctuation">(</span>test_sample.YouTest<span class="token punctuation">)</span><span class="token punctuation">..</span><span class="token number">3</span>
Generating HTML reports<span class="token punctuation">..</span>.
F2022-07-12 00:22:52 log.py <span class="token operator">|</span> SUCCESS <span class="token operator">|</span> generated html file: file:///D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>seldom<span class="token punctuation">\\</span>reports<span class="token punctuation">\\</span>2022_07_12_00_22_51_result.html
<span class="token number">2022</span>-07-12 00:22:52 log.py <span class="token operator">|</span> SUCCESS <span class="token operator">|</span> generated log file: file:///D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>seldom<span class="token punctuation">\\</span>reports<span class="token punctuation">\\</span>seldom_log.log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="\u6D4B\u8BD5\u62A5\u544A" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u62A5\u544A" aria-hidden="true">#</a> \u6D4B\u8BD5\u62A5\u544A</h3><p>seldom \u9ED8\u8BA4\u751F\u6210HTML\u6D4B\u8BD5\u62A5\u544A\uFF0C\u5728\u8FD0\u884C\u6D4B\u8BD5\u6587\u4EF6\u4E0B\u81EA\u52A8\u521B\u5EFA<code>reports</code>\u76EE\u5F55\u3002</p><ul><li>\u8FD0\u884C\u6D4B\u8BD5\u7528\u4F8B\u524D</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mypro/
\u2514\u2500\u2500 test_sample.py
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u8FD0\u884C\u6D4B\u8BD5\u7528\u4F8B\u540E</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mypro/
\u251C\u2500\u2500 reports/
\u2502   \u251C\u2500\u2500 2020_01_01_11_20_33_result.html
\u2502   \u251C\u2500\u2500 seldom_log.log
\u2514\u2500\u2500 test_sample.py
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u901A\u8FC7\u6D4F\u89C8\u5668\u6253\u5F00 <code>2020_01_01_11_20_33_result.html</code> \u6D4B\u8BD5\u62A5\u544A\uFF0C\u67E5\u770B\u6D4B\u8BD5\u7ED3\u679C\u3002</p><p><img src="`+m+`" alt=""></p><p><strong>debug\u6A21\u5F0F</strong></p><p>\u5982\u679C\u4E0D\u60F3\u6BCF\u6B21\u8FD0\u884C\u90FD\u751F\u6210HTML\u62A5\u544A\uFF0C\u53EF\u4EE5\u6253\u5F00<code>debug</code>\u6A21\u5F0F\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> seldom

seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>\u5B9A\u4E49\u6D4B\u8BD5\u62A5\u544A</strong></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> seldom

seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>report<span class="token operator">=</span><span class="token string">&quot;./report.html&quot;</span><span class="token punctuation">,</span>
            title<span class="token operator">=</span><span class="token string">&quot;\u767E\u5EA6\u6D4B\u8BD5\u7528\u4F8B&quot;</span><span class="token punctuation">,</span>
            tester<span class="token operator">=</span><span class="token string">&quot;\u866B\u5E08&quot;</span><span class="token punctuation">,</span>
            description<span class="token operator">=</span><span class="token string">&quot;\u6D4B\u8BD5\u73AF\u5883\uFF1Awindows 10/ chrome&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>report: \u914D\u7F6E\u62A5\u544A\u540D\u79F0\u548C\u8DEF\u5F84\u3002</li><li>title: \u81EA\u5B9A\u4E49\u62A5\u544A\u7684\u6807\u9898\u3002</li><li>tester: \u6307\u5B9A\u81EA\u52A8\u5316\u6D4B\u8BD5\u5DE5\u7A0B\u5E08\u540D\u5B57\u3002</li><li>description: \u6DFB\u52A0\u62A5\u544A\u4FE1\u606F\uFF0C\u652F\u6301\u5217\u8868, \u4F8B\u5982\uFF1A[&quot;OS: windows&quot;,&quot;Browser: chrome&quot;]\u3002</li></ul><p><strong>XML\u6D4B\u8BD5\u62A5\u544A</strong></p><p>\u5982\u679C\u9700\u8981\u751F\u6210XML\u683C\u5F0F\u7684\u62A5\u544A\uFF0C\u53EA\u9700\u8981\u4FEE\u6539\u62A5\u544A\u7684\u540E\u7F00\u540D\u4E3A<code>.xml</code>\u5373\u53EF\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> seldom

seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>report<span class="token operator">=</span><span class="token string">&quot;report.xml&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,60);function T(x,C){const a=p("ExternalLinkIcon");return t(),o(c,null,[k,d,s("p",null,[_,g,h,q,s("a",y,[v,l(a)]),f]),w],64)}var S=e(b,[["render",T],["__file","quick_start.html.vue"]]);export{S as default};