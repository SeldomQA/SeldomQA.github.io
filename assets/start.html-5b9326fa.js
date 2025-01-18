import{_ as p,r as o,o as l,c as i,e as a,a as t,b as n,d as c}from"./app-148fbfef.js";const u={},r={href:"https://docs.python-requests.org/en/master/",target:"_blank",rel:"noopener noreferrer"};function d(k,s){const e=o("ExternalLinkIcon");return l(),i("div",null,[s[3]||(s[3]=a('<h1 id="开始使用" tabindex="-1"><a class="header-anchor" href="#开始使用" aria-hidden="true">#</a> 开始使用</h1><h3 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h3><p>seldom 非常适合个人接口自动化项目，它有以下优势。</p><ul><li>可以写更少的代码</li><li>提供详细的运行日志</li><li>提供专门为接口设计的断言</li><li>强大的数据驱动</li><li>自动生成HTML/XML测试报告</li><li>支持生成随机数据</li><li>支持<code>har</code>/<code>swagger</code>文件转case</li><li>支持数据库操作</li></ul><p>这些是seldom支持的功能，我们只需要集成HTTP接口库，并提供强大的断言即可。<code>seldom 2.0</code> 加入了HTTP接口自动化测试支持。</p>',5)),t("p",null,[s[1]||(s[1]=n("Seldom 完全兼容 ")),t("a",r,[s[0]||(s[0]=n("Requests")),c(e)]),s[2]||(s[2]=n(" API 如下:"))]),s[4]||(s[4]=a(`<table><thead><tr><th>seldom</th><th>requests</th></tr></thead><tbody><tr><td>self.get()</td><td>requests.get()</td></tr><tr><td>self.post()</td><td>requests.post()</td></tr><tr><td>self.put()</td><td>requests.put()</td></tr><tr><td>self.delete()</td><td>requests.delete()</td></tr><tr><td>self.patch()</td><td>requests.patch()</td></tr><tr><td>self.session()</td><td>requests.session()</td></tr></tbody></table><h3 id="seldom-vs-request-unittest" tabindex="-1"><a class="header-anchor" href="#seldom-vs-request-unittest" aria-hidden="true">#</a> Seldom VS Request+unittest</h3><ul><li>unittest + requests 接口自动化示例：</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> unittest
<span class="token keyword">import</span> requests


<span class="token keyword">class</span> <span class="token class-name">TestAPI</span><span class="token punctuation">(</span>unittest<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_get_method</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        payload <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;key1&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;value1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;key2&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;value2&#39;</span><span class="token punctuation">}</span>
        r <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;http://httpbin.org/get&quot;</span><span class="token punctuation">,</span> params<span class="token operator">=</span>payload<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span>r<span class="token punctuation">.</span>status_code<span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    unittest<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>seldom 接口自动化测试示例：</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># test_req.py</span>
<span class="token keyword">import</span> seldom


<span class="token keyword">class</span> <span class="token class-name">TestAPI</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_get_method</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        payload <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;key1&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;value1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;key2&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;value2&#39;</span><span class="token punctuation">}</span>
        self<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;http://httpbin.org/get&quot;</span><span class="token punctuation">,</span> params<span class="token operator">=</span>payload<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>assertStatusCode<span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主要简化点在，接口的返回数据的处理。当然，seldom真正的优势在断言、日志和报告。</p><h3 id="运行测试" tabindex="-1"><a class="header-anchor" href="#运行测试" aria-hidden="true">#</a> 运行测试</h3><p>打开debug模式<code>seldom.run(debug=True)</code> 运行上面的用例。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token operator">&gt;</span> python test_req.py

              __    __
   ________  / /___/ /___  ____ ____
  / ___/ _ <span class="token punctuation">\\</span>/ / __  / __ <span class="token punctuation">\\</span>/ __ \` ___/
 <span class="token punctuation">(</span>__  <span class="token punctuation">)</span>  __/ / /_/ / /_/ / / / / / /
/____/<span class="token punctuation">\\</span>___/_/<span class="token punctuation">\\</span>__,_/<span class="token punctuation">\\</span>____/_/ /_/ /_/  v3.x.x
-----------------------------------------
                             @itest.info

test_get_method <span class="token punctuation">(</span>test_req.TestAPI<span class="token punctuation">)</span> <span class="token punctuation">..</span>. <span class="token number">2023</span>-02-14 <span class="token number">23</span>:37:07 request.py <span class="token operator">|</span> INFO <span class="token operator">|</span>
-------------- Request -----------------<span class="token punctuation">[</span>🚀<span class="token punctuation">]</span>
<span class="token number">2023</span>-02-14 <span class="token number">23</span>:37:07 request.py <span class="token operator">|</span> INFO <span class="token operator">|</span> <span class="token punctuation">[</span>method<span class="token punctuation">]</span>: GET      <span class="token punctuation">[</span>url<span class="token punctuation">]</span>: http://httpbin.org/get
<span class="token number">2023</span>-02-14 <span class="token number">23</span>:37:07 request.py <span class="token operator">|</span> DEBUG <span class="token operator">|</span> <span class="token punctuation">[</span>params<span class="token punctuation">]</span>:
 <span class="token punctuation">{</span>
  <span class="token string">&quot;key1&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;value1&quot;</span>,
  <span class="token string">&quot;key2&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;value2&quot;</span>
<span class="token punctuation">}</span>
<span class="token number">2023</span>-02-14 <span class="token number">23</span>:37:08 request.py <span class="token operator">|</span> INFO <span class="token operator">|</span> -------------- Response ----------------<span class="token punctuation">[</span>🛬️<span class="token punctuation">]</span>
<span class="token number">2023</span>-02-14 <span class="token number">23</span>:37:08 request.py <span class="token operator">|</span> INFO <span class="token operator">|</span> successful with status <span class="token number">200</span>
<span class="token number">2023</span>-02-14 <span class="token number">23</span>:37:08 request.py <span class="token operator">|</span> DEBUG <span class="token operator">|</span> <span class="token punctuation">[</span>type<span class="token punctuation">]</span>: json      <span class="token punctuation">[</span>time<span class="token punctuation">]</span>: <span class="token number">0.785683</span>
<span class="token number">2023</span>-02-14 <span class="token number">23</span>:37:08 request.py <span class="token operator">|</span> DEBUG <span class="token operator">|</span> <span class="token punctuation">[</span>response<span class="token punctuation">]</span>:
 <span class="token punctuation">{</span>
  <span class="token string">&quot;args&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;key1&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;value1&quot;</span>,
    <span class="token string">&quot;key2&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;value2&quot;</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;headers&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;Accept&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;*/*&quot;</span>,
    <span class="token string">&quot;Accept-Encoding&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;gzip, deflate&quot;</span>,
    <span class="token string">&quot;Host&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;httpbin.org&quot;</span>,
    <span class="token string">&quot;User-Agent&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;python-requests/2.28.1&quot;</span>,
    <span class="token string">&quot;X-Amzn-Trace-Id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Root=1-63ebaaa4-325e25be64b104e770c25f8f&quot;</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;origin&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;173.248.248.88&quot;</span>,
  <span class="token string">&quot;url&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;http://httpbin.org/get?key1=value1&amp;key2=value2&quot;</span>
<span class="token punctuation">}</span>
<span class="token number">2023</span>-02-14 <span class="token number">23</span>:37:08 case.py <span class="token operator">|</span> INFO <span class="token operator">|</span> 👀 assertStatusCode -<span class="token operator">&gt;</span> <span class="token number">200</span>.
ok

----------------------------------------------------------------------
Ran <span class="token number">1</span> <span class="token builtin class-name">test</span> <span class="token keyword">in</span> <span class="token number">0</span>.795s

OK
<span class="token number">2023</span>-02-14 <span class="token number">23</span>:37:08 runner.py <span class="token operator">|</span> SUCCESS <span class="token operator">|</span> A run the <span class="token builtin class-name">test</span> <span class="token keyword">in</span> debug mode without generating HTML report<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过日志/报告都可以看到详细的HTTP接口调用信息。</p>`,11))])}const m=p(u,[["render",d],["__file","start.html.vue"]]);export{m as default};
