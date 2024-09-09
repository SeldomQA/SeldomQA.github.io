import{_ as n,o as s,c as a,e as t}from"./app-4d41401c.js";const p={},e=t(`<h1 id="支持更多测试库" tabindex="-1"><a class="header-anchor" href="#支持更多测试库" aria-hidden="true">#</a> 支持更多测试库</h1><p>seldom 集成了<code>selenium</code>、<code>appium</code>、<code>requests</code>，他们都是非常优秀且成熟的库，这并不是说，你不能在seldom使用别的测试库。</p><p>seldom 作为一个测试框架，理论上可以与任何测试库一起使用。</p><h3 id="seldom-playwright" tabindex="-1"><a class="header-anchor" href="#seldom-playwright" aria-hidden="true">#</a> seldom + playwright</h3><p>playwright就微软推出的优秀的 web UI 自动化测试库。</p><p>官方地址: https://playwright.dev/</p><ul><li>pip 安装</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> pip <span class="token function">install</span> playwright
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>使用例子</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> playwright<span class="token punctuation">.</span>sync_api <span class="token keyword">import</span> sync_playwright
<span class="token keyword">from</span> playwright<span class="token punctuation">.</span>sync_api <span class="token keyword">import</span> expect


<span class="token keyword">class</span> <span class="token class-name">Playwright</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">start</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        p <span class="token operator">=</span> sync_playwright<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>browser <span class="token operator">=</span> p<span class="token punctuation">.</span>chromium<span class="token punctuation">.</span>launch<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>page <span class="token operator">=</span> self<span class="token punctuation">.</span>browser<span class="token punctuation">.</span>new_page<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">end</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>browser<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">test_start</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        page <span class="token operator">=</span> self<span class="token punctuation">.</span>page
        page<span class="token punctuation">.</span>goto<span class="token punctuation">(</span><span class="token string">&quot;http://playwright.dev&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        expect<span class="token punctuation">(</span>page<span class="token punctuation">)</span><span class="token punctuation">.</span>to_have_title<span class="token punctuation">(</span><span class="token string">&quot;Fast and reliable end-to-end testing for modern web apps | Playwright&quot;</span><span class="token punctuation">)</span>

        get_started <span class="token operator">=</span> page<span class="token punctuation">.</span>locator<span class="token punctuation">(</span><span class="token string">&#39;text=Get Started&#39;</span><span class="token punctuation">)</span>
        expect<span class="token punctuation">(</span>get_started<span class="token punctuation">)</span><span class="token punctuation">.</span>to_have_attribute<span class="token punctuation">(</span><span class="token string">&#39;href&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/docs/intro&#39;</span><span class="token punctuation">)</span>
        get_started<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

        expect<span class="token punctuation">(</span>page<span class="token punctuation">)</span><span class="token punctuation">.</span>to_have_url<span class="token punctuation">(</span><span class="token string">&#39;http://playwright.dev/docs/intro&#39;</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="seldom-uiautomator2" tabindex="-1"><a class="header-anchor" href="#seldom-uiautomator2" aria-hidden="true">#</a> seldom + uiautomator2</h3><p>uiautomator2是openatx推出的优秀的Android自动化测试工具，Api简单，同样得到广泛应用。</p><p>github地址: https://github.com/openatx/uiautomator2</p><ul><li>pip安装</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> uiautomator2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>使用例子</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">import</span> uiautomator2 <span class="token keyword">as</span> u2


<span class="token keyword">class</span> <span class="token class-name">MyAppTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">start</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 链接设备</span>
        self<span class="token punctuation">.</span>d <span class="token operator">=</span> u2<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">&#39;192.168.31.234&#39;</span><span class="token punctuation">)</span>
        <span class="token comment"># 启动App</span>
        self<span class="token punctuation">.</span>d<span class="token punctuation">.</span>app_start<span class="token punctuation">(</span><span class="token string">&quot;com.meizu.mzbbs&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">end</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 停止app</span>
        self<span class="token punctuation">.</span>d<span class="token punctuation">.</span>app_stop<span class="token punctuation">(</span><span class="token string">&quot;com.meizu.mzbbs&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">test_app</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> user<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot; 使用 uiautomator2 &quot;&quot;&quot;</span>
        <span class="token comment"># 搜索</span>
        self<span class="token punctuation">.</span>d<span class="token punctuation">(</span>resourceId<span class="token operator">=</span><span class="token string">&quot;com.meizu.flyme.flymebbs:id/nw&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># 输入关键字</span>
        self<span class="token punctuation">.</span>d<span class="token punctuation">(</span>resourceId<span class="token operator">=</span><span class="token string">&quot;com.meizu.flyme.flymebbs:id/nw&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>set_text<span class="token punctuation">(</span><span class="token string">&quot;flyme&quot;</span><span class="token punctuation">)</span>
        <span class="token comment"># 搜索按钮</span>
        self<span class="token punctuation">.</span>d<span class="token punctuation">(</span>resourceId<span class="token operator">=</span><span class="token string">&quot;com.meizu.flyme.flymebbs:id/o1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),o=[e];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","test_library.html.vue"]]);export{d as default};
