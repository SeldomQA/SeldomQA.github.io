import{_ as t,r as p,o as e,c as o,a as n,b as s,d as i,e as c}from"./app-4d41401c.js";const u={},l=c(`<h1 id="appium-api" tabindex="-1"><a class="header-anchor" href="#appium-api" aria-hidden="true">#</a> appium API</h1><p>appium API继承 selenium API，所以，操作方法是通用的。在seldom 中，请参考web UI 中的seldom API。</p><h2 id="appium-定位" tabindex="-1"><a class="header-anchor" href="#appium-定位" aria-hidden="true">#</a> appium 定位</h2><ul><li>支持定位类型</li></ul><p>seldom 支持定位如下，包括selenium/appium。</p><table><thead><tr><th>类型</th><th>定位</th><th>**kwargs</th></tr></thead><tbody><tr><td>selenium/appium</td><td>id</td><td>id_=&quot;id&quot;</td></tr><tr><td>selenium</td><td>mame</td><td>name=&quot;name&quot;</td></tr><tr><td>selenium/appium</td><td>class</td><td>class_name=&quot;class&quot;</td></tr><tr><td>selenium</td><td>tag</td><td>tag=&quot;input&quot;</td></tr><tr><td>selenium</td><td>link_text</td><td>link_text=&quot;文字链接&quot;</td></tr><tr><td>selenium</td><td>partial_link_text</td><td>partial_link_text=&quot;文字链&quot;</td></tr><tr><td>selenium/appium</td><td>xpath</td><td>xpath=&quot;//*[@id=&#39;11&#39;]&quot;</td></tr><tr><td>selenium</td><td>css</td><td>cass=&quot;input#id&quot;</td></tr><tr><td>appium</td><td>ios_uiautomation</td><td>ios_uiautomation = &quot;xx&quot;</td></tr><tr><td>appium</td><td>ios_predicate</td><td>ios_predicate = &quot;xx&quot;</td></tr><tr><td>appium</td><td>ios_class_chain</td><td>ios_class_chain = &quot;xx&quot;</td></tr><tr><td>appium</td><td>android_uiautomator</td><td>android_uiautomator = &quot;xx&quot;</td></tr><tr><td>appium</td><td>android_viewtag</td><td>android_viewtag = &quot;xx&quot;</td></tr><tr><td>appium</td><td>android_data_matcher</td><td>android_data_matcher = &quot;xx&quot;</td></tr><tr><td>appium</td><td>android_view_matcher</td><td>android_view_matcher = &quot;xx&quot;</td></tr><tr><td>appium</td><td>windows_uiautomation</td><td>windows_uiautomation = &quot;xx&quot;</td></tr><tr><td>appium</td><td>accessibility_id</td><td>accessibility_id = &quot;xx&quot;</td></tr><tr><td>appium</td><td>image</td><td>image = &quot;xx&quot;</td></tr><tr><td>appium</td><td>custom</td><td>custom = &quot;xx&quot;</td></tr></tbody></table><ul><li>定位用法</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom<span class="token punctuation">.</span>appium_lab<span class="token punctuation">.</span>android <span class="token keyword">import</span> UiAutomator2Options


<span class="token keyword">class</span> <span class="token class-name">TestBBS</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_bbs</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;定位方法用法&quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>click<span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;com.meizu.flyme.flymebbs:id/nw&quot;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span>android_uiautomator<span class="token operator">=</span><span class="token string">&#39;new UiSelector().resourceId(&quot;com.meizu.flyme.flymebbs:id/nw&quot;)&#39;</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&quot;flyme&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    capabilities <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;automationName&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;UiAutomator2&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;platformName&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Android&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;appPackage&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;com.meizu.flyme.flymebbs&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;appActivity&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;com.meizu.myplus.ui.splash.SplashActivity&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;noReset&quot;</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    options <span class="token operator">=</span> UiAutomator2Options<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>load_capabilities<span class="token punctuation">(</span>capabilities<span class="token punctuation">)</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>app_server<span class="token operator">=</span><span class="token string">&quot;http://127.0.0.1:4723&quot;</span><span class="token punctuation">,</span> app_info<span class="token operator">=</span>options<span class="token punctuation">,</span> debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="appium-lab" tabindex="-1"><a class="header-anchor" href="#appium-lab" aria-hidden="true">#</a> appium lab</h2><p><code>appium_lab</code> 封装了常用App操作</p><ul><li>基本用法</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom<span class="token punctuation">.</span>appium_lab <span class="token keyword">import</span> AppiumLab


<span class="token keyword">class</span> <span class="token class-name">TestBBS</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">start</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 导入 AppiumLab</span>
        self<span class="token punctuation">.</span>appium_lab <span class="token operator">=</span> AppiumLab<span class="token punctuation">(</span>self<span class="token punctuation">.</span>driver<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">test_bbs</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 点击输入框</span>
        self<span class="token punctuation">.</span>click<span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;com.meizu.flyme.flymebbs:id/nw&quot;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token comment"># 判断当前虚拟键盘是否显示</span>
        keyboard <span class="token operator">=</span> self<span class="token punctuation">.</span>appium_lab<span class="token punctuation">.</span>is_keyboard_shown<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>keyboard<span class="token punctuation">)</span>
        <span class="token comment"># 收起当前键盘</span>
        self<span class="token punctuation">.</span>appium_lab<span class="token punctuation">.</span>hide_keyboard<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>AppiumLab</code> 类中分以下几类操作:</p><p><strong>Action</strong></p><p><code>Action</code>中提供基本滑动/触摸操作。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> seldom<span class="token punctuation">.</span>appium_lab <span class="token keyword">import</span> AppiumLab

appium_lab <span class="token operator">=</span> AppiumLab<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 触摸坐标位</span>
appium_lab<span class="token punctuation">.</span>tap<span class="token punctuation">(</span>x<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">,</span> y<span class="token operator">=</span><span class="token number">200</span><span class="token punctuation">)</span>
<span class="token comment"># 上划</span>
appium_lab<span class="token punctuation">.</span>swipe_up<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 下划</span>
appium_lab<span class="token punctuation">.</span>swipe_down<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 左划</span>
appium_lab<span class="token punctuation">.</span>swipe_left<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 右划</span>
appium_lab<span class="token punctuation">.</span>swipe_right<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Switch</strong></p><p><code>Switch</code>中提供基本上下文切换操作。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> seldom<span class="token punctuation">.</span>appium_lab <span class="token keyword">import</span> AppiumLab

appium_lab <span class="token operator">=</span> AppiumLab<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 返回当前上下文</span>
context <span class="token operator">=</span> appium_lab<span class="token punctuation">.</span>context<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 切换原生app</span>
appium_lab<span class="token punctuation">.</span>switch_to_app<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 切换webview</span>
appium_lab<span class="token punctuation">.</span>switch_to_web<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 切换flutter</span>
appium_lab<span class="token punctuation">.</span>switch_to_flutter<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 切换OCR</span>
appium_lab<span class="token punctuation">.</span>switch_to_ocr<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Find</strong></p><p><code>Find</code>中提供基于文本的查找，一个元素可以没有ID、name，但一定有显示的文本，这里提供了一组基于文本的查找。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> seldom<span class="token punctuation">.</span>appium_lab <span class="token keyword">import</span> AppiumLab

appium_lab <span class="token operator">=</span> AppiumLab<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># Android</span>
appium_lab<span class="token punctuation">.</span>find_view<span class="token punctuation">(</span>text<span class="token operator">=</span><span class="token string">&quot;xxx标题&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
appium_lab<span class="token punctuation">.</span>find_view<span class="token punctuation">(</span>content_desc<span class="token operator">=</span><span class="token string">&quot;xxx标题&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
appium_lab<span class="token punctuation">.</span>find_edit_text<span class="token punctuation">(</span>text<span class="token operator">=</span><span class="token string">&quot;xxx标题&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
appium_lab<span class="token punctuation">.</span>find_button<span class="token punctuation">(</span>text<span class="token operator">=</span><span class="token string">&quot;xxx标题&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
appium_lab<span class="token punctuation">.</span>find_button<span class="token punctuation">(</span>content_desc<span class="token operator">=</span><span class="token string">&quot;xxx标题&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
appium_lab<span class="token punctuation">.</span>find_text_view<span class="token punctuation">(</span>text<span class="token operator">=</span><span class="token string">&quot;xxx标题&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
appium_lab<span class="token punctuation">.</span>find_image_view<span class="token punctuation">(</span>text<span class="token operator">=</span><span class="token string">&quot;xxx标题&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
appium_lab<span class="token punctuation">.</span>find_check_box<span class="token punctuation">(</span>text<span class="token operator">=</span><span class="token string">&quot;xxx标题&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># iOS</span>
appium_lab<span class="token punctuation">.</span>find_static_text<span class="token punctuation">(</span>text<span class="token operator">=</span><span class="token string">&quot;xxx标题&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
appium_lab<span class="token punctuation">.</span>find_other<span class="token punctuation">(</span>text<span class="token operator">=</span><span class="token string">&quot;xxx标题&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
appium_lab<span class="token punctuation">.</span>find_text_field<span class="token punctuation">(</span>text<span class="token operator">=</span><span class="token string">&quot;xxx标题&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
appium_lab<span class="token punctuation">.</span>find_image<span class="token punctuation">(</span>text<span class="token operator">=</span><span class="token string">&quot;xxx标题&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
appium_lab<span class="token punctuation">.</span>find_ios_button<span class="token punctuation">(</span>text<span class="token operator">=</span><span class="token string">&quot;xxx标题&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>keyboard</strong></p><p><code>keyboard</code>中提供基于键盘的输入和操作。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> seldom<span class="token punctuation">.</span>appium_lab <span class="token keyword">import</span> AppiumLab

appium_lab <span class="token operator">=</span> AppiumLab<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 基于键盘输入（支持大小写）</span>
appium_lab<span class="token punctuation">.</span>key_text<span class="token punctuation">(</span><span class="token string">&quot;Hello123&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># 手机home键</span>
appium_lab<span class="token punctuation">.</span>home<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 手机返回键</span>
appium_lab<span class="token punctuation">.</span>back<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 判断当前虚拟键盘是否显示（True/False）</span>
ret <span class="token operator">=</span> appium_lab<span class="token punctuation">.</span>is_keyboard_shown<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span>
<span class="token comment"># 收起虚拟键盘</span>
appium_lab<span class="token punctuation">.</span>hide_keyboard<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 返回当前窗口尺寸</span>
size <span class="token operator">=</span> appium_lab<span class="token punctuation">.</span>size<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="appium-driver" tabindex="-1"><a class="header-anchor" href="#appium-driver" aria-hidden="true">#</a> appium driver</h2><p><code>AppDriver</code> 封装了App相关的操作。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom


<span class="token keyword">class</span> <span class="token class-name">TestApp</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    Test App
    &quot;&quot;&quot;</span>

    <span class="token keyword">def</span> <span class="token function">test_bbs_search</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        appium api
        &quot;&quot;&quot;</span>
        <span class="token comment"># app置于后台10s</span>
        self<span class="token punctuation">.</span>background_app<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
        <span class="token comment"># 检查设备上是否安装了应用程序</span>
        self<span class="token punctuation">.</span>is_app_installed<span class="token punctuation">(</span><span class="token string">&quot;bundle_id&quot;</span><span class="token punctuation">)</span>
        <span class="token comment"># 安装app</span>
        self<span class="token punctuation">.</span>install_app<span class="token punctuation">(</span><span class="token string">&quot;/app/path/xxx.apk&quot;</span><span class="token punctuation">)</span>
        <span class="token comment"># 删除app</span>
        self<span class="token punctuation">.</span>remove_app<span class="token punctuation">(</span><span class="token string">&quot;app_id&quot;</span><span class="token punctuation">)</span>
        <span class="token comment"># 启动app</span>
        self<span class="token punctuation">.</span>launch_app<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># 关闭app</span>
        self<span class="token punctuation">.</span>close_app<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># 如果app正在运行，终止运行</span>
        self<span class="token punctuation">.</span>terminate_app<span class="token punctuation">(</span><span class="token string">&quot;app_id&quot;</span><span class="token punctuation">)</span>
        <span class="token comment"># 如果app未运行，则激活它或者在后台运行</span>
        self<span class="token punctuation">.</span>activate_app<span class="token punctuation">(</span><span class="token string">&quot;app_id&quot;</span><span class="token punctuation">)</span>
        <span class="token comment"># 查询app 状态</span>
        state <span class="token operator">=</span> self<span class="token punctuation">.</span>query_app_state<span class="token punctuation">(</span><span class="token string">&quot;app_id&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
        <span class="token comment"># 从指定的设备返回应用程序字符串语言</span>
        language<span class="token punctuation">,</span> string <span class="token operator">=</span> self<span class="token punctuation">.</span>app_strings<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>language<span class="token punctuation">,</span> string<span class="token punctuation">)</span>
        <span class="token comment"># 启动起app</span>
        self<span class="token punctuation">.</span>reset<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># 点击图片</span>
        self<span class="token punctuation">.</span>click_image<span class="token punctuation">(</span><span class="token string">&quot;/you/path/xxx.png&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),d={href:"https://github.com/SeldomQA/seldom/issues",target:"_blank",rel:"noopener noreferrer"};function r(k,m){const a=p("ExternalLinkIcon");return e(),o("div",null,[l,n("blockquote",null,[n("p",null,[s("目前 seldom 集成的 appium API 并不完整，在使用过程中如有问题，欢迎提 "),n("a",d,[s("issues"),i(a)]),s("。")])])])}const b=t(u,[["render",r],["__file","appium_lab.html.vue"]]);export{b as default};
