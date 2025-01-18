import{_ as s,o as a,c as t,e as p}from"./app-29570897.js";const e={};function o(c,n){return a(),t("div",null,n[0]||(n[0]=[p(`<h1 id="支持更多测试库" tabindex="-1"><a class="header-anchor" href="#支持更多测试库" aria-hidden="true">#</a> 支持更多测试库</h1><p>seldom 集成了<code>selenium</code>、<code>appium</code>、<code>requests</code>，他们都是非常优秀且成熟的库，这并不是说，你不能在seldom使用其他的测试库。</p><p>seldom 作为一个测试框架，理论上可以与任何测试库一起使用。seldom提供的基础能力（数据驱动、随机数、测试报告、缓存...等）同样可以提升这些测试库的使用效率。</p><h3 id="使用playwright" tabindex="-1"><a class="header-anchor" href="#使用playwright" aria-hidden="true">#</a> 使用playwright</h3><p>playwright就微软推出的优秀的 web UI 自动化测试库。</p><p>官方地址: https://playwright.dev/</p><ul><li>pip安装Playwright</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> pip <span class="token function">install</span> playwright
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>playwright 安装浏览器以及驱动</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> playwright <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>使用例子</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> playwright<span class="token punctuation">.</span>sync_api <span class="token keyword">import</span> sync_playwright
<span class="token keyword">from</span> playwright<span class="token punctuation">.</span>sync_api <span class="token keyword">import</span> expect


<span class="token keyword">class</span> <span class="token class-name">Playwright</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">start</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>p <span class="token operator">=</span> sync_playwright<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>chromium <span class="token operator">=</span> self<span class="token punctuation">.</span>p<span class="token punctuation">.</span>chromium<span class="token punctuation">.</span>launch<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>page <span class="token operator">=</span> self<span class="token punctuation">.</span>chromium<span class="token punctuation">.</span>new_page<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">end</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>chromium<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>p<span class="token punctuation">.</span>stop<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">test_playwright_start</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        test playwright index page
        &quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>page<span class="token punctuation">.</span>goto<span class="token punctuation">(</span><span class="token string">&quot;http://playwright.dev&quot;</span><span class="token punctuation">)</span>
        expect<span class="token punctuation">(</span>self<span class="token punctuation">.</span>page<span class="token punctuation">)</span><span class="token punctuation">.</span>to_have_title<span class="token punctuation">(</span><span class="token string">&quot;Fast and reliable end-to-end testing for modern web apps | Playwright&quot;</span><span class="token punctuation">)</span>

        get_started <span class="token operator">=</span> self<span class="token punctuation">.</span>page<span class="token punctuation">.</span>locator<span class="token punctuation">(</span><span class="token string">&#39;text=Get Started&#39;</span><span class="token punctuation">)</span>
        expect<span class="token punctuation">(</span>get_started<span class="token punctuation">)</span><span class="token punctuation">.</span>to_have_attribute<span class="token punctuation">(</span><span class="token string">&#39;href&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/docs/intro&#39;</span><span class="token punctuation">)</span>
        get_started<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>

        expect<span class="token punctuation">(</span>self<span class="token punctuation">.</span>page<span class="token punctuation">)</span><span class="token punctuation">.</span>to_have_url<span class="token punctuation">(</span><span class="token string">&#39;http://playwright.dev/docs/intro&#39;</span><span class="token punctuation">)</span>
        <span class="token comment"># 截图</span>
        screenshot_bytes <span class="token operator">=</span> self<span class="token punctuation">.</span>page<span class="token punctuation">.</span>screenshot<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>screenshots<span class="token punctuation">(</span>image<span class="token operator">=</span>screenshot_bytes<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">test_playwright_todo</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        test playwright todoMVC
        &quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>page<span class="token punctuation">.</span>goto<span class="token punctuation">(</span><span class="token string">&quot;https://demo.playwright.dev/todomvc/#/&quot;</span><span class="token punctuation">)</span>
        new_todo <span class="token operator">=</span> self<span class="token punctuation">.</span>page<span class="token punctuation">.</span>locator<span class="token punctuation">(</span><span class="token string">&quot;.new-todo&quot;</span><span class="token punctuation">)</span>
        new_todo<span class="token punctuation">.</span>fill<span class="token punctuation">(</span><span class="token string">&quot;sleep&quot;</span><span class="token punctuation">)</span>
        new_todo<span class="token punctuation">.</span>press<span class="token punctuation">(</span><span class="token string">&quot;Enter&quot;</span><span class="token punctuation">)</span>
        new_todo<span class="token punctuation">.</span>fill<span class="token punctuation">(</span><span class="token string">&quot;code&quot;</span><span class="token punctuation">)</span>
        new_todo<span class="token punctuation">.</span>press<span class="token punctuation">(</span><span class="token string">&quot;Enter&quot;</span><span class="token punctuation">)</span>
        new_todo<span class="token punctuation">.</span>fill<span class="token punctuation">(</span><span class="token string">&quot;eat&quot;</span><span class="token punctuation">)</span>
        new_todo<span class="token punctuation">.</span>press<span class="token punctuation">(</span><span class="token string">&quot;Enter&quot;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>page<span class="token punctuation">.</span>locator<span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span>has_text<span class="token operator">=</span><span class="token string">&#39;code&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get_by_label<span class="token punctuation">(</span><span class="token string">&#39;Toggle Todo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>check<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>page<span class="token punctuation">.</span>locator<span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span>has_text<span class="token operator">=</span><span class="token string">&#39;sleep&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get_by_label<span class="token punctuation">(</span><span class="token string">&#39;Toggle Todo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>check<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>page<span class="token punctuation">.</span>locator<span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span>has_text<span class="token operator">=</span><span class="token string">&#39;eat&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get_by_label<span class="token punctuation">(</span><span class="token string">&#39;Toggle Todo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>check<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># 截图</span>
        screenshot_bytes <span class="token operator">=</span> self<span class="token punctuation">.</span>page<span class="token punctuation">.</span>screenshot<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>screenshots<span class="token punctuation">(</span>image<span class="token operator">=</span>screenshot_bytes<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用uiautomator2" tabindex="-1"><a class="header-anchor" href="#使用uiautomator2" aria-hidden="true">#</a> 使用uiautomator2</h3><p>uiautomator2是openatx推出的优秀的Android自动化测试工具，Api简单，同样得到广泛应用。</p><p>github地址: https://github.com/openatx/uiautomator2</p><ul><li>pip安装</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> uiautomator2
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用pyautogui" tabindex="-1"><a class="header-anchor" href="#使用pyautogui" aria-hidden="true">#</a> 使用pyAutoGUI</h3><p>pyAutoGUI专注于模拟鼠标和键盘操作，实现GUI的自动化。 适用于需要在多个操作系统（Windows、macOS、Linux）上模拟用户输入（如点击、拖动、输入文本等）的场景，如自动化测试、数据录入、游戏辅助等。</p><p>官方地址: https://github.com/asweigart/pyautogui</p><ul><li>pip安装pyAutoGUI</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> pip <span class="token function">install</span> pyautogui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>使用例子</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">import</span> pyautogui
<span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom<span class="token punctuation">.</span>testdata <span class="token keyword">import</span> get_int


<span class="token keyword">class</span> <span class="token class-name">TestPyAutoGUINote</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">start</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 打开记事本（这里使用运行命令来打开，确保路径正确）</span>
        os<span class="token punctuation">.</span>system<span class="token punctuation">(</span><span class="token string">&#39;notepad.exe&#39;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">end</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 模拟按下 Alt+F4 关闭记事本</span>
        pyautogui<span class="token punctuation">.</span>hotkey<span class="token punctuation">(</span><span class="token string">&#39;alt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;f4&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">test_write_and_save</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        打开一个新的标签页写入内容并保存
        &quot;&quot;&quot;</span>
        <span class="token comment"># 模拟按下 Ctrl+t 创建一个新的标签页</span>
        pyautogui<span class="token punctuation">.</span>hotkey<span class="token punctuation">(</span><span class="token string">&#39;ctrl&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;t&#39;</span><span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token punctuation">)</span>
        pyautogui<span class="token punctuation">.</span>press<span class="token punctuation">(</span><span class="token string">&#39;shift&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 切换英文输入法</span>

        <span class="token comment"># 写入字符串到记事本</span>
        pyautogui<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&#39;Hello, this is a test string written by pyautogui.&#39;</span><span class="token punctuation">,</span> interval<span class="token operator">=</span><span class="token number">0.1</span><span class="token punctuation">)</span>  <span class="token comment"># interval 参数设置每个字符之间的延迟时间</span>

        <span class="token comment"># 模拟按下 Ctrl+S 保存文件</span>
        pyautogui<span class="token punctuation">.</span>hotkey<span class="token punctuation">(</span><span class="token string">&#39;ctrl&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;s&#39;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 切换英文输入法</span>
        pyautogui<span class="token punctuation">.</span>press<span class="token punctuation">(</span><span class="token string">&#39;shift&#39;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 输入文件名 + 回车确定</span>
        pyautogui<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;test_file</span><span class="token interpolation"><span class="token punctuation">{</span>get_int<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">.txt&#39;</span></span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token punctuation">)</span>
        pyautogui<span class="token punctuation">.</span>press<span class="token punctuation">(</span><span class="token string">&#39;enter&#39;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26)]))}const l=s(e,[["render",o],["__file","test_library.html.vue"]]);export{l as default};
