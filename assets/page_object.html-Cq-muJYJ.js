import{_ as n,e as a,f as e,o as p}from"./app-cOqhPLWY.js";const t={};function o(l,s){return p(),a("div",null,s[0]||(s[0]=[e(`<h1 id="page-object" tabindex="-1"><a class="header-anchor" href="#page-object"><span>Page Object</span></a></h1><p>在编写App自动化测试时，推荐使用<code>page object models</code>(简称 PO设计模式)。你可以看到seldom并没有完全封装appium的API，我们可以借助 poium 来实现基于元素的定位。</p><p>github: https://github.com/SeldomQA/poium</p><p><strong>pip 安装</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token operator">&gt;</span> pip <span class="token function">install</span> poium</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>使用poium</strong></p><p>在seldom中基于poium实现元素的定位和操作。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">import</span> seldom</span>
<span class="line"><span class="token keyword">from</span> seldom<span class="token punctuation">.</span>appium_lab<span class="token punctuation">.</span>android <span class="token keyword">import</span> UiAutomator2Options</span>
<span class="line"><span class="token keyword">from</span> poium <span class="token keyword">import</span> Page<span class="token punctuation">,</span> Element<span class="token punctuation">,</span> Elements</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">BBSPage</span><span class="token punctuation">(</span>Page<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    search_input <span class="token operator">=</span> Element<span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;com.meizu.flyme.flymebbs:id/nw&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    search_button <span class="token operator">=</span> Element<span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;com.meizu.flyme.flymebbs:id/o1&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    search_result <span class="token operator">=</span> Elements<span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;com.meizu.flyme.flymebbs:id/a29&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">TestBBS</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">start</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        self<span class="token punctuation">.</span>bbs_page <span class="token operator">=</span> BBSPage<span class="token punctuation">(</span>self<span class="token punctuation">.</span>driver<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">test_bbs</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        self<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span></span>
<span class="line">        self<span class="token punctuation">.</span>bbs_page<span class="token punctuation">.</span>search_input<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        self<span class="token punctuation">.</span>bbs_page<span class="token punctuation">.</span>search_input<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&quot;flyme&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        self<span class="token punctuation">.</span>bbs_page<span class="token punctuation">.</span>search_button<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        elems <span class="token operator">=</span> self<span class="token punctuation">.</span>bbs_page<span class="token punctuation">.</span>search_result</span>
<span class="line">        <span class="token keyword">for</span> title <span class="token keyword">in</span> elems<span class="token punctuation">:</span></span>
<span class="line">            self<span class="token punctuation">.</span>assertIn<span class="token punctuation">(</span><span class="token string">&quot;flyme&quot;</span><span class="token punctuation">,</span> title<span class="token punctuation">.</span>text<span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 定义运行App</span></span>
<span class="line">    capabilities <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&quot;automationName&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;UiAutomator2&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;platformName&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Android&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;appPackage&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;com.meizu.flyme.flymebbs&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;appActivity&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;com.meizu.myplus.ui.splash.SplashActivity&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;noReset&quot;</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    options <span class="token operator">=</span> UiAutomator2Options<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>load_capabilities<span class="token punctuation">(</span>capabilities<span class="token punctuation">)</span></span>
<span class="line">    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>app_server<span class="token operator">=</span><span class="token string">&quot;http://127.0.0.1:4723&quot;</span><span class="token punctuation">,</span> app_info<span class="token operator">=</span>options<span class="token punctuation">,</span> debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>定位方法</strong></p><p>poium 支持的定位方法。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment"># selenium</span></span>
<span class="line">css <span class="token operator">=</span> <span class="token string">&quot;xx&quot;</span></span>
<span class="line">id_ <span class="token operator">=</span> <span class="token string">&quot;xx&quot;</span></span>
<span class="line">name <span class="token operator">=</span> <span class="token string">&quot;xx&quot;</span></span>
<span class="line">xpath <span class="token operator">=</span> <span class="token string">&quot;xx&quot;</span></span>
<span class="line">link_text <span class="token operator">=</span> <span class="token string">&quot;xx&quot;</span></span>
<span class="line">partial_link_text <span class="token operator">=</span> <span class="token string">&quot;xx&quot;</span></span>
<span class="line">tag <span class="token operator">=</span> <span class="token string">&quot;xx&quot;</span></span>
<span class="line">class_name <span class="token operator">=</span> <span class="token string">&quot;xx&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># appium</span></span>
<span class="line">ios_uiautomation <span class="token operator">=</span> <span class="token string">&quot;xx&quot;</span></span>
<span class="line">ios_predicate <span class="token operator">=</span> <span class="token string">&quot;xx&quot;</span></span>
<span class="line">ios_class_chain <span class="token operator">=</span> <span class="token string">&quot;xx&quot;</span></span>
<span class="line">android_uiautomator <span class="token operator">=</span> <span class="token string">&quot;xx&quot;</span></span>
<span class="line">android_viewtag <span class="token operator">=</span> <span class="token string">&quot;xx&quot;</span></span>
<span class="line">android_data_matcher <span class="token operator">=</span> <span class="token string">&quot;xx&quot;</span></span>
<span class="line">android_view_matcher <span class="token operator">=</span> <span class="token string">&quot;xx&quot;</span></span>
<span class="line">windows_uiautomation <span class="token operator">=</span> <span class="token string">&quot;xx&quot;</span></span>
<span class="line">accessibility_id <span class="token operator">=</span> <span class="token string">&quot;xx&quot;</span></span>
<span class="line">image <span class="token operator">=</span> <span class="token string">&quot;xx&quot;</span></span>
<span class="line">custom <span class="token operator">=</span> <span class="token string">&quot;xx&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code>Element</code>类参数</strong></p><ul><li>timeout: 设置超时检查次数，默认为5。</li><li>index: 设置元素索引，当你的定位方式默认匹配到多个元素时，默认返回第1个，即为0.</li><li>describe: 设置元素描述，默认为undefined, 建议为每个元素增加描述。</li></ul>`,13)]))}const c=n(t,[["render",o],["__file","page_object.html.vue"]]),u=JSON.parse('{"path":"/app-testing/page_object.html","title":"Page Object","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1725890482000,"contributors":[{"name":"defnngj","username":"defnngj","email":"defnngj@gmail.com","commits":5,"url":"https://github.com/defnngj"}],"changelog":[{"hash":"8cfd81ad76b6cfd2b7efd0362467a291699f8aba","time":1725890482000,"email":"defnngj@gmail.com","author":"defnngj","message":"📝️ update docs"},{"hash":"ab7ef5eca132a64fa62c46a56b80afc024375388","time":1704214137000,"email":"defnngj@gmail.com","author":"defnngj","message":"📝️  appium 2.x doc"},{"hash":"87ec2675da6b946b123b229406380f9d0461577f","time":1678722287000,"email":"defnngj@gmail.com","author":"defnngj","message":"📝️ page object doc"},{"hash":"9e1a146a15aed812a1e4fa5a4e195733d76ae8ea","time":1667322855000,"email":"defnngj@gmail.com","author":"defnngj","message":"📝️ update doc(support seldom 3.0)"},{"hash":"8b4ffee3b1eb16b82011dcb7aa69eca700b291a6","time":1664795203000,"email":"defnngj@gmail.com","author":"defnngj","message":"📝️ app doc"}]},"filePathRelative":"app-testing/page_object.md"}');export{c as comp,u as data};
