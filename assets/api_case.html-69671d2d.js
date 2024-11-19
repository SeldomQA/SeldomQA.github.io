import{_ as t,r as e,o,c as p,a as n,b as s,d as i,e as l}from"./app-a06a2d51.js";const c="/image/api_excel_report.png",u={},d=n("h1",{id:"支持excel测试用例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#支持excel测试用例","aria-hidden":"true"},"#"),s(" 支持Excel测试用例")],-1),r=n("blockquote",null,[n("p",null,"seldom > 3.8.0")],-1),k=n("p",null,[s("在编写接口测试用例的时候，有时候测试用例非常简单，比如单接口的测试，不需要登录token，不存在用例数据依赖，也不需要参数加密，此时，使用"),n("code",null,"Excel"),s(" 文件编写用例更为高效。")],-1),v=n("p",null,"seldom支持了这种用例的编写。",-1),m=n("h3",{id:"编写excel用例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#编写excel用例","aria-hidden":"true"},"#"),s(" 编写Excel用例")],-1),b={href:"https://github.com/SeldomQA/seldom/tree/master/api_case",target:"_blank",rel:"noopener noreferrer"},q=l(`<p>首先，创建一个Excel文件，格式如下。</p><table><thead><tr><th>name</th><th>api</th><th>method</th><th>headers</th><th>param_type</th><th>params</th><th>assert</th><th>exclude</th></tr></thead><tbody><tr><td>简单GET接口</td><td>/get</td><td>GET</td><td>{}</td><td>data</td><td>{}</td><td>{}</td><td>[]</td></tr><tr><td>简单POST接口-json参数</td><td>/post</td><td>POST</td><td>{}</td><td>json</td><td>{}</td><td>{}</td><td>[]</td></tr><tr><td>...</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table><p><strong>参数说明</strong></p><table><thead><tr><th>字段</th><th>说明</th><th>列子</th></tr></thead><tbody><tr><td><code>name</code></td><td>用例的名称，会在测试报告中展示。</td><td></td></tr><tr><td><code>api</code></td><td>接口的地址，可以写完整的URL地址, 也可以只定义路径，<code>base_url</code> 在 <code>confrun.py</code></td><td>例如：<code>http://www.httpbin.org/get</code> or <code>/get</code></td></tr><tr><td><code>method</code></td><td>接口的请求方法，必须大写，不允许为空</td><td>支持：<code>GET</code>、<code>POST</code>、<code>PUT</code>、<code>DELETE</code></td></tr><tr><td><code>headers</code></td><td>请求头，不允许为空，默认为 <code>{}</code>，字段必须双引号<code>&quot;</code>。</td><td>例如：<code>{&quot;user-agent&quot;: &quot;my-app/0.0.1&quot;}</code></td></tr><tr><td><code>param_type</code></td><td>接口参数类型，必须小写，不允许为空。</td><td>例如：<code>data</code>、 <code>json</code></td></tr><tr><td><code>params</code></td><td>接口参数，不允许为空，默认为 <code>{}</code>，字段必须双引号<code>&quot;</code>。</td><td>例如：<code>{&quot;id&quot;: 1, &quot;name&quot;: &quot;jack&quot;}</code></td></tr><tr><td><code>assert</code></td><td>断言接口返回，允许为空 或 <code>{}</code>，</td><td>例如：<code>{&quot;status&quot;: 200, &quot;success&quot;: True, &quot;data&quot;: [...]}</code></td></tr><tr><td><code>exclude</code></td><td>断言过滤字段，一些特殊的字段会导致断言失败，需要过滤掉。</td><td>例如：<code>[&quot;X-Amzn-Trace-Id&quot;, &quot;timestamp&quot;]</code></td></tr></tbody></table><p><strong>confrun.py配置</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">def</span> <span class="token function">base_url</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    http test
    api base url
    &quot;&quot;&quot;</span>
    <span class="token keyword">return</span> <span class="token string">&quot;http://www.httpbin.org&quot;</span>


<span class="token keyword">def</span> <span class="token function">debug</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    debug mod
    &quot;&quot;&quot;</span>
    <span class="token keyword">return</span> <span class="token boolean">False</span>


<span class="token keyword">def</span> <span class="token function">rerun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    error/failure rerun times
    &quot;&quot;&quot;</span>
    <span class="token keyword">return</span> <span class="token number">0</span>


<span class="token keyword">def</span> <span class="token function">report</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    setting report path
    Used:
    return &quot;d://mypro/result.html&quot; or &quot;d://mypro/result.xml&quot;
    &quot;&quot;&quot;</span>
    <span class="token keyword">return</span> <span class="token boolean">None</span>


<span class="token keyword">def</span> <span class="token function">timeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    setting timeout
    &quot;&quot;&quot;</span>
    <span class="token keyword">return</span> <span class="token number">10</span>


<span class="token keyword">def</span> <span class="token function">title</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    setting report title
    &quot;&quot;&quot;</span>
    <span class="token keyword">return</span> <span class="token string">&quot;seldom 执行 excel 接口用例&quot;</span>


<span class="token keyword">def</span> <span class="token function">tester</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    setting report tester
    &quot;&quot;&quot;</span>
    <span class="token keyword">return</span> <span class="token string">&quot;bugmaster&quot;</span>


<span class="token keyword">def</span> <span class="token function">description</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    setting report description
    &quot;&quot;&quot;</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">&quot;windows&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;api&quot;</span><span class="token punctuation">]</span>


<span class="token keyword">def</span> <span class="token function">language</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    setting report language
    return &quot;en&quot; or &quot;zh-CN&quot;
    &quot;&quot;&quot;</span>
    <span class="token keyword">return</span> <span class="token string">&quot;zh-CN&quot;</span>


<span class="token keyword">def</span> <span class="token function">failfast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    fail fast
    :return:
    &quot;&quot;&quot;</span>
    <span class="token keyword">return</span> <span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行测试用例" tabindex="-1"><a class="header-anchor" href="#运行测试用例" aria-hidden="true">#</a> 运行测试用例</h3><ul><li>目录结构</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mypro/
├── api_case.xlsx
└── confrun.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>运行测试</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> mypro
<span class="token operator">&gt;</span> seldom --api-excel api_case.xlsx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>运行日志</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
 seldom --api-excel .<span class="token punctuation">\\</span>api_case.xlsx
run .<span class="token punctuation">\\</span>api_case.xlsx file.

              __    __
   ________  / /___/ /___  ____ ____
  / ___/ _ <span class="token punctuation">\\</span>/ / __  / __ <span class="token punctuation">\\</span>/ __ \` ___/
 <span class="token punctuation">(</span>__  <span class="token punctuation">)</span>  __/ / /_/ / /_/ / / / / / /
/____/<span class="token punctuation">\\</span>___/_/<span class="token punctuation">\\</span>__,_/<span class="token punctuation">\\</span>____/_/ /_/ /_/  v3.x.x
-----------------------------------------
                             @itest.info

<span class="token number">2024</span>-07-06 <span class="token number">21</span>:00:35 <span class="token operator">|</span> INFO     <span class="token operator">|</span> runner.py <span class="token operator">|</span> TestLoader: <span class="token punctuation">..</span>.<span class="token punctuation">\\</span>Lib<span class="token punctuation">\\</span>site-packages<span class="token punctuation">\\</span>seldom<span class="token punctuation">\\</span>file_runner<span class="token punctuation">\\</span>api_excel.py
<span class="token number">2024</span>-07-06 <span class="token number">21</span>:00:35 <span class="token operator">|</span> INFO     <span class="token operator">|</span> parameterization.py <span class="token operator">|</span> <span class="token function">find</span> data file: .<span class="token punctuation">\\</span>api_case.xlsx

XTestRunner Running tests<span class="token punctuation">..</span>.

----------------------------------------------------------------------
<span class="token number">2024</span>-07-06 <span class="token number">21</span>:00:35 <span class="token operator">|</span> INFO     <span class="token operator">|</span> api_excel.py <span class="token operator">|</span> execute api case: <span class="token punctuation">[</span>简单GET接口<span class="token punctuation">]</span>
<span class="token number">2024</span>-07-06 <span class="token number">21</span>:00:35 <span class="token operator">|</span> INFO     <span class="token operator">|</span> request.py <span class="token operator">|</span> -------------- Request -----------------<span class="token punctuation">[</span>🚀<span class="token punctuation">]</span>
<span class="token number">2024</span>-07-06 <span class="token number">21</span>:00:35 <span class="token operator">|</span> INFO     <span class="token operator">|</span> request.py <span class="token operator">|</span> <span class="token punctuation">[</span>method<span class="token punctuation">]</span>: GET      <span class="token punctuation">[</span>url<span class="token punctuation">]</span>: http://www.httpbin.org/get
<span class="token number">2024</span>-07-06 <span class="token number">21</span>:00:35 <span class="token operator">|</span> DEBUG    <span class="token operator">|</span> request.py <span class="token operator">|</span> <span class="token punctuation">[</span>headers<span class="token punctuation">]</span>:
<span class="token punctuation">{</span>
  <span class="token string">&quot;user-agent&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;my-app/0.0.1&quot;</span>
<span class="token punctuation">}</span>
<span class="token number">2024</span>-07-06 <span class="token number">21</span>:00:35 <span class="token operator">|</span> DEBUG    <span class="token operator">|</span> request.py <span class="token operator">|</span> <span class="token punctuation">[</span>params<span class="token punctuation">]</span>:
<span class="token punctuation">{</span>
  <span class="token string">&quot;key&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;value&quot;</span>
<span class="token punctuation">}</span>
<span class="token number">2024</span>-07-06 <span class="token number">21</span>:00:35 <span class="token operator">|</span> INFO     <span class="token operator">|</span> request.py <span class="token operator">|</span> -------------- Response ----------------<span class="token punctuation">[</span>🛬️<span class="token punctuation">]</span>
<span class="token number">2024</span>-07-06 <span class="token number">21</span>:00:35 <span class="token operator">|</span> INFO     <span class="token operator">|</span> request.py <span class="token operator">|</span> successful with status <span class="token number">200</span>
<span class="token number">2024</span>-07-06 <span class="token number">21</span>:00:35 <span class="token operator">|</span> DEBUG    <span class="token operator">|</span> request.py <span class="token operator">|</span> <span class="token punctuation">[</span>type<span class="token punctuation">]</span>: json      <span class="token punctuation">[</span>time<span class="token punctuation">]</span>: <span class="token number">0.481752</span>
<span class="token number">2024</span>-07-06 <span class="token number">21</span>:00:35 <span class="token operator">|</span> DEBUG    <span class="token operator">|</span> request.py <span class="token operator">|</span> <span class="token punctuation">[</span>response<span class="token punctuation">]</span>:
 <span class="token punctuation">{</span>
  <span class="token string">&quot;args&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;key&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;value&quot;</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;headers&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;Accept&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;*/*&quot;</span>,
    <span class="token string">&quot;Accept-Encoding&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;gzip, deflate&quot;</span>,
    <span class="token string">&quot;Host&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;www.httpbin.org&quot;</span>,
    <span class="token string">&quot;User-Agent&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;my-app/0.0.1&quot;</span>,
    <span class="token string">&quot;X-Amzn-Trace-Id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Root=1-66893ff2-60ed7c5378ca01452917ea0c&quot;</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;origin&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;14.155.89.115&quot;</span>,
  <span class="token string">&quot;url&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;http://www.httpbin.org/get?key=value&quot;</span>
<span class="token punctuation">}</span>
<span class="token number">2024</span>-07-06 <span class="token number">21</span>:00:35 <span class="token operator">|</span> INFO     <span class="token operator">|</span> case.py <span class="token operator">|</span> 👀 assertJSON -<span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token string">&#39;args&#39;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">&#39;key&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">}</span>, <span class="token string">&#39;headers&#39;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">&#39;Accept&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;*/*&#39;</span>, <span class="token string">&#39;Accept-Encoding&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;gzip, deflate&#39;</span>, <span class="token string">&#39;Host&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;www.httpbin.org&#39;</span>, <span class="token string">&#39;User-Agent&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;my-app/0.0.1&#39;</span>, <span class="token string">&#39;X-Amzn-Trace-Id&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;Root=1-668906ef-2e2d8c4c3f36a228264da1ab&#39;</span><span class="token punctuation">}</span>, <span class="token string">&#39;origin&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;14.155.89.115&#39;</span>, <span class="token string">&#39;url&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;http://www.httpbin.org/get?key=value&#39;</span><span class="token punctuation">}</span>.

<span class="token punctuation">..</span>.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>生成测试报告</li></ul><p><img src="`+c+'" alt=""></p>',15);function g(_,h){const a=e("ExternalLinkIcon");return o(),p("div",null,[d,r,k,v,m,n("p",null,[n("a",b,[s("查看例子"),i(a)])]),q])}const f=t(u,[["render",g],["__file","api_case.html.vue"]]);export{f as default};
