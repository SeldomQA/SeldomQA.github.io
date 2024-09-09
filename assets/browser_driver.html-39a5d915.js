import{_ as n,o as s,c as a,e}from"./app-4d41401c.js";const t={},p=e(`<h1 id="浏览器与驱动" tabindex="-1"><a class="header-anchor" href="#浏览器与驱动" aria-hidden="true">#</a> 浏览器与驱动</h1><h3 id="管理浏览器驱动" tabindex="-1"><a class="header-anchor" href="#管理浏览器驱动" aria-hidden="true">#</a> 管理浏览器驱动</h3><blockquote><p>seldom 2.3.0 版本集成webdriver_manager管理浏览器驱动。</p><p>seldom 3.3.0 版本移除了webdriver_manager，selenium 4.6 之后内置了 selenium-manager 可以自动管理浏览器驱动。</p></blockquote><h4 id="自动下载" tabindex="-1"><a class="header-anchor" href="#自动下载" aria-hidden="true">#</a> 自动下载</h4><p>如果你不配置浏览器驱动也没关系，seldom(selenium)会根据你使用的浏览器版本，自动化下载对应的驱动文件。</p><ul><li>编写简单的用例</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom


<span class="token keyword">class</span> <span class="token class-name">BingTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_bing_search</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;selenium api&quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;http://www.bing.com&quot;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;sb_form_q&quot;</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&quot;seldom&quot;</span><span class="token punctuation">,</span> enter<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>assertTitle<span class="token punctuation">(</span><span class="token string">&quot;seldom - 搜索&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>browser<span class="token operator">=</span><span class="token string">&quot;edge&quot;</span><span class="token punctuation">,</span> debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>selenium驱动检查逻辑:</p><ol><li>首先判断 环境变量 <code>PATH</code> 是否配置了浏览器驱动。 通过<code>where</code> 查找命令位置，如果可以找到说明，已配置了，环境变量<code>PATH</code>。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> where msedgedriver
D:<span class="token punctuation">\\</span>webdriver<span class="token punctuation">\\</span>msedgedriver.exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>如果没有找到浏览器驱动，会根据当前浏览器版本，查找对应驱动文件下载。 <code>selenium-manager</code> 可以查看浏览器驱动的默认安装路径。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> selenium-manager <span class="token parameter variable">--driver</span> msedgedriver
INFO    Driver path: C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>xxx<span class="token punctuation">\\</span>.cache<span class="token punctuation">\\</span>selenium<span class="token punctuation">\\</span>msedgedriver<span class="token punctuation">\\</span>win64<span class="token punctuation">\\</span><span class="token number">116.0</span>.1938.76<span class="token punctuation">\\</span>msedgedriver.exe
INFO    Browser path: C:<span class="token punctuation">\\</span>Program Files <span class="token punctuation">(</span>x86<span class="token punctuation">)</span><span class="token punctuation">\\</span>Microsoft<span class="token punctuation">\\</span>Edge<span class="token punctuation">\\</span>Application<span class="token punctuation">\\</span>msedge.exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="手动下载" tabindex="-1"><a class="header-anchor" href="#手动下载" aria-hidden="true">#</a> 手动下载</h4><p>通过 <code>selenium-manager</code> 命令下载浏览器驱动，需要知道每个浏览器驱动的名字。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> selenium-manager <span class="token parameter variable">--driver</span> chromedriver  <span class="token comment"># chrome</span>
<span class="token operator">&gt;</span> selenium-manager <span class="token parameter variable">--driver</span> msedgedriver  <span class="token comment"># edge</span>
<span class="token operator">&gt;</span> selenium-manager <span class="token parameter variable">--driver</span> geckodriver   <span class="token comment"># firefox</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="指定浏览器驱动" tabindex="-1"><a class="header-anchor" href="#指定浏览器驱动" aria-hidden="true">#</a> 指定浏览器驱动</h3><p>虽然，<code>selenium-manager</code>可以方便的管理浏览器驱动，但<code>selenium-manager</code>自动下载浏览器驱动很慢，有些环境也不是方便。</p><blockquote><p>seldom 3.7 版本重新支持 <code>executable_path</code> 参数，指定浏览器驱动。</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom

<span class="token comment"># ……</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    browser <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;browser&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;chrome&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;executable_path&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;D:\\webdriver\\chromedriver.exe&quot;</span><span class="token punctuation">,</span>  <span class="token comment"># 设置chrome浏览器驱动位置，其他浏览器类似。</span>
    <span class="token punctuation">}</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>browser<span class="token operator">=</span>browser<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="指定不同的浏览器" tabindex="-1"><a class="header-anchor" href="#指定不同的浏览器" aria-hidden="true">#</a> 指定不同的浏览器</h3><p>我们运行的自动化测试不可能只在一个浏览器下运行，我们分别需要在chrome、firefox浏览器下运行。在seldom中需要只需要修改一个配置即可。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom

<span class="token comment"># ……</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>browser<span class="token operator">=</span><span class="token string">&quot;chrome&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># chrome浏览器,默认值</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>browser<span class="token operator">=</span><span class="token string">&quot;gc&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># google chrome简写</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>browser<span class="token operator">=</span><span class="token string">&quot;firefox&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># firefox浏览器</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>browser<span class="token operator">=</span><span class="token string">&quot;ff&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># firefox简写</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>browser<span class="token operator">=</span><span class="token string">&quot;edge&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># edge浏览器</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>browser<span class="token operator">=</span><span class="token string">&quot;safari&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># safari浏览器</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>browser<span class="token operator">=</span><span class="token string">&quot;ie&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># internet explore浏览器</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>main()</code>方法中通过<code>browser</code>参数设置不同的浏览器，默认为<code>Chrome</code>浏览器。</p><h3 id="控制浏览器启动和关闭" tabindex="-1"><a class="header-anchor" href="#控制浏览器启动和关闭" aria-hidden="true">#</a> 控制浏览器启动和关闭</h3><p>seldom 默认通过<code>seldom.main(browser=&quot;edge&quot;)</code>全局设置浏览器的启动和关闭，一般我们不需要关心浏览器的启动和关闭。</p><blockquote><p>seldom 3.9.0 支持手动控制浏览器的驱动和关闭。</p></blockquote><ul><li>每个用例启动和关闭浏览器。</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom


<span class="token keyword">class</span> <span class="token class-name">WebTestOne</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;case lunch browser&quot;&quot;&quot;</span>

    <span class="token keyword">def</span> <span class="token function">start</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>browser<span class="token punctuation">(</span><span class="token string">&quot;edge&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">end</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">test_baidu</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;http://www.baidu.com&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token keyword">def</span> <span class="token function">test_bing</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;http://cn.bing.com&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>每个类启动和关闭浏览器。</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom


<span class="token keyword">class</span> <span class="token class-name">WebTestTwo</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;class lunch browser&quot;&quot;&quot;</span>

    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">start_class</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
        cls<span class="token punctuation">.</span>browser<span class="token punctuation">(</span>cls<span class="token punctuation">,</span> <span class="token string">&quot;gc&quot;</span><span class="token punctuation">)</span>

    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">end_class</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
        cls<span class="token punctuation">.</span>quit<span class="token punctuation">(</span>cls<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">test_baidu</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;http://www.baidu.com&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token keyword">def</span> <span class="token function">test_bing</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;http://cn.bing.com&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>打开一个新的浏览器</li></ul><p>seldom 默认会启动一个浏览器，在运行的过程中需要打开一个新的浏览器执行其他操作，可以使用<code>new_browser()</code>方法。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom


<span class="token keyword">class</span> <span class="token class-name">WebTestNew</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;Web search test case&quot;&quot;&quot;</span>

    <span class="token keyword">def</span> <span class="token function">test_new_browser</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># default browser</span>
        self<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;http://www.baidu.com&quot;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>Keys<span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#kw&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;seldom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>enter<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>screenshots<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>assertInTitle<span class="token punctuation">(</span><span class="token string">&quot;seldom&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># open new browser</span>
        browser <span class="token operator">=</span> self<span class="token punctuation">.</span>new_browser<span class="token punctuation">(</span><span class="token punctuation">)</span>
        browser<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;http://cn.bing.com&quot;</span><span class="token punctuation">)</span>
        browser<span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;sb_form_q&quot;</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&quot;seldom&quot;</span><span class="token punctuation">,</span> enter<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
        browser<span class="token punctuation">.</span>screenshots<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>browser<span class="token operator">=</span><span class="token string">&quot;edge&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","browser_driver.html.vue"]]);export{r as default};