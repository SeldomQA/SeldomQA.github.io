import{_ as n,o as s,c as a,e}from"./app-9fb6f1b5.js";const p={},t=e(`<h1 id="app-测试" tabindex="-1"><a class="header-anchor" href="#app-测试" aria-hidden="true">#</a> app 测试</h1><p><code>seldom 3.0</code> 基于appium支持APP测试。</p><p>appium 官方网站：https://appium.io/</p><h2 id="环境安装" tabindex="-1"><a class="header-anchor" href="#环境安装" aria-hidden="true">#</a> 环境安装</h2><p>app 的自动化测试环境相比较 web 要复杂一些，请参考appium官方。</p><ol><li>安装node</li></ol><p>https://nodejs.org/en/</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">node</span> <span class="token parameter variable">--version</span>
v16.17.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>安装appium</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">npm</span> i <span class="token parameter variable">--location</span><span class="token operator">=</span>global appium  <span class="token comment"># appium 2.x</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>启动appium</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> appium server <span class="token parameter variable">--address</span> <span class="token string">&#39;127.0.0.1&#39;</span> <span class="token parameter variable">-p</span> <span class="token number">4723</span>

<span class="token punctuation">[</span>Appium<span class="token punctuation">]</span> Welcome to Appium v2.2.2
<span class="token punctuation">[</span>Appium<span class="token punctuation">]</span> Non-default server args:
<span class="token punctuation">[</span>Appium<span class="token punctuation">]</span> <span class="token punctuation">{</span>
<span class="token punctuation">[</span>Appium<span class="token punctuation">]</span>   address: <span class="token string">&#39;127.0.0.1&#39;</span>
<span class="token punctuation">[</span>Appium<span class="token punctuation">]</span> <span class="token punctuation">}</span>
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>移动设备</li></ol><p>准备一台设备（Android/iOS手机）通过USB数据线连接电脑。通过以下工具确认手机与电脑是否连接。</p><ul><li>adb</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> adb devices 
List of devices attached
UMXDU000000000000       device
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>taobao-iphone-device</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> tidevice list
List of apple devices attached
00008030-00000000000000 xxx的iPhoneSE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编写测试" tabindex="-1"><a class="header-anchor" href="#编写测试" aria-hidden="true">#</a> 编写测试</h2><p>基于seldom编写app自动化测试, 由于appium 继承自selenium，所以，部分API共用。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom<span class="token punctuation">.</span>appium_lab<span class="token punctuation">.</span>android <span class="token keyword">import</span> UiAutomator2Options


<span class="token keyword">class</span> <span class="token class-name">TestBBS</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_bbs_search</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>click<span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;com.meizu.flyme.flymebbs:id/nw&quot;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;com.meizu.flyme.flymebbs:id/nw&quot;</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&quot;flyme&quot;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>click<span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;com.meizu.flyme.flymebbs:id/o1&quot;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
        elems <span class="token operator">=</span> self<span class="token punctuation">.</span>get_elements<span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;com.meizu.flyme.flymebbs:id/a29&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> title <span class="token keyword">in</span> elems<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>title<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
            self<span class="token punctuation">.</span>assertIn<span class="token punctuation">(</span><span class="token string">&quot;lyme&quot;</span><span class="token punctuation">,</span> title<span class="token punctuation">.</span>text<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    capabilities <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;automationName&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;UiAutomator2&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;platformName&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Android&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;appPackage&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;com.meizu.flyme.flymebbs&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;appActivity&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;com.meizu.myplus.ui.splash.SplashActivity&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;noReset&quot;</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    options <span class="token operator">=</span> UiAutomator2Options<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>load_capabilities<span class="token punctuation">(</span>capabilities<span class="token punctuation">)</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>app_server<span class="token operator">=</span><span class="token string">&quot;http://127.0.0.1:4723&quot;</span><span class="token punctuation">,</span> app_info<span class="token operator">=</span>options<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注：上面的测试用例隐含了appium的一些知识点，你需要对appium有足够的了解。</p></blockquote><ul><li>运行日志</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python test_app.py

              __    __
   ________  / /___/ /___  ____ ____
  / ___/ _ <span class="token punctuation">\\</span>/ / __  / __ <span class="token punctuation">\\</span>/ __ \` ___/
 <span class="token punctuation">(</span>__  <span class="token punctuation">)</span>  __/ / /_/ / /_/ / / / / / /
/____/<span class="token punctuation">\\</span>___/_/<span class="token punctuation">\\</span>__,_/<span class="token punctuation">\\</span>____/_/ /_/ /_/  v3.0.0
-----------------------------------------
                             @itest.info


XTestRunner Running tests<span class="token punctuation">..</span>.

----------------------------------------------------------------------
<span class="token number">2022</span>-10-03 00:01:30 webdriver.py <span class="token operator">|</span> INFO <span class="token operator">|</span> 💤️ sleep: 5s.
<span class="token number">2022</span>-10-03 00:01:35 webdriver.py <span class="token operator">|</span> INFO <span class="token operator">|</span> ✅ Find <span class="token number">1</span> element: <span class="token assign-left variable">id</span><span class="token operator">=</span>com.meizu.flyme.flymebbs:id/nw  -<span class="token operator">&gt;</span> click.
<span class="token number">2022</span>-10-03 00:01:36 webdriver.py <span class="token operator">|</span> INFO <span class="token operator">|</span> ✅ Find <span class="token number">1</span> element: <span class="token assign-left variable">id</span><span class="token operator">=</span>com.meizu.flyme.flymebbs:id/nw  -<span class="token operator">&gt;</span> input <span class="token string">&#39;flyme&#39;</span><span class="token builtin class-name">.</span>
<span class="token number">2022</span>-10-03 00:01:37 webdriver.py <span class="token operator">|</span> INFO <span class="token operator">|</span> ✅ Find <span class="token number">1</span> element: <span class="token assign-left variable">id</span><span class="token operator">=</span>com.meizu.flyme.flymebbs:id/o1  -<span class="token operator">&gt;</span> click.
<span class="token number">2022</span>-10-03 00:01:37 webdriver.py <span class="token operator">|</span> INFO <span class="token operator">|</span> 💤️ sleep: 2s.
<span class="token number">2022</span>-10-03 00:01:39 webdriver.py <span class="token operator">|</span> INFO <span class="token operator">|</span> ✅ Find <span class="token number">5</span> element: <span class="token assign-left variable">id</span><span class="token operator">=</span>com.meizu.flyme.flymebbs:id/a29 <span class="token builtin class-name">.</span>
flyme的屏幕色彩显示应该是比较差的

魅族17的Flyme9状态栏下拉问题。

flyme9.3连上耳机来电话还是会外放

flyme自带录屏功能吗？

关于Flyme <span class="token number">8.18</span>.0A稳定版


Generating HTML reports<span class="token punctuation">..</span>.
.12022-10-03 00:01:40 runner.py <span class="token operator">|</span> SUCCESS <span class="token operator">|</span> generated html file: file:///D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>seldom<span class="token punctuation">\\</span>reports<span class="token punctuation">\\</span>2022_10_03_00_01_23_result.html
<span class="token number">2022</span>-10-03 00:01:40 runner.py <span class="token operator">|</span> SUCCESS <span class="token operator">|</span> generated log file: file:///D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>seldom<span class="token punctuation">\\</span>reports<span class="token punctuation">\\</span>seldom_log.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),i=[t];function l(o,c){return s(),a("div",null,i)}const r=n(p,[["render",l],["__file","start.html.vue"]]);export{r as default};
