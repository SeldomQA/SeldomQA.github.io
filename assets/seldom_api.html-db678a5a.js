import{_ as o,r as i,o as c,c as l,e as t,a as s,b as e,d as p}from"./app-148fbfef.js";const u={},d={href:"https://www.w3school.com.cn/cssref/css_selectors.asp",target:"_blank",rel:"noopener noreferrer"},r={href:"https://www.w3school.com.cn/xpath/xpath_syntax.asp",target:"_blank",rel:"noopener noreferrer"};function k(m,n){const a=i("ExternalLinkIcon");return c(),l("div",null,[n[2]||(n[2]=t(`<h1 id="seldom-api" tabindex="-1"><a class="header-anchor" href="#seldom-api" aria-hidden="true">#</a> Seldom API</h1><h3 id="查找元素" tabindex="-1"><a class="header-anchor" href="#查找元素" aria-hidden="true">#</a> 查找元素</h3><p>seldom 提供了8中定位方式，与Selenium保持一致。</p><ul><li>id_</li><li>name</li><li>class_name</li><li>tag</li><li>link_text</li><li>partial_link_text</li><li>css</li><li>xpath</li></ul><p><strong>使用方式</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># **kwargs</span>
self<span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;kw&quot;</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&quot;seldom&quot;</span><span class="token punctuation">)</span>
self<span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;wd&quot;</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&quot;seldom&quot;</span><span class="token punctuation">)</span>
self<span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span>class_name<span class="token operator">=</span><span class="token string">&quot;s_ipt&quot;</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&quot;seldom&quot;</span><span class="token punctuation">)</span>
self<span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span>tag<span class="token operator">=</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&quot;seldom&quot;</span><span class="token punctuation">)</span>
self<span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span>xpath<span class="token operator">=</span><span class="token string">&quot;//input[@id=&#39;kw&#39;]&quot;</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&quot;seldom&quot;</span><span class="token punctuation">)</span>
self<span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#kw&quot;</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&quot;seldom&quot;</span><span class="token punctuation">)</span>
self<span class="token punctuation">.</span>click<span class="token punctuation">(</span>link_text<span class="token operator">=</span><span class="token string">&quot;hao123&quot;</span><span class="token punctuation">)</span>
self<span class="token punctuation">.</span>click<span class="token punctuation">(</span>partial_link_text<span class="token operator">=</span><span class="token string">&quot;hao&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># selector</span>
self<span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span><span class="token string">&quot;id=kw&quot;</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&quot;seldom&quot;</span><span class="token punctuation">)</span>
self<span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span><span class="token string">&quot;name=wd&quot;</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&quot;seldom&quot;</span><span class="token punctuation">)</span>
self<span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span><span class="token string">&quot;class=s_ipt&quot;</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&quot;seldom&quot;</span><span class="token punctuation">)</span>
self<span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span><span class="token string">&quot;tag=input&quot;</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&quot;seldom&quot;</span><span class="token punctuation">)</span>
self<span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span><span class="token string">&quot;//input[@id=&#39;kw&#39;]&quot;</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&quot;seldom&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># xpath</span>
self<span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span><span class="token string">&quot;#kw&quot;</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&quot;seldom&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># css</span>
self<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token string">&quot;text=hao123&quot;</span><span class="token punctuation">)</span>
self<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token string">&quot;text*=hao&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>seldom 3.10.0 引入新的 selector 定位，弱化了selenium/appium 的定位类型方式。</p></blockquote><ul><li><code>**kwargs</code> 和 <code>selector</code> 定位对比。</li></ul><table><thead><tr><th>类型</th><th>定位</th><th>**kwargs</th><th>selector</th></tr></thead><tbody><tr><td>selenium/appium</td><td>id</td><td>id_=&quot;id&quot;</td><td>&quot;id=id&quot;</td></tr><tr><td>selenium</td><td>mame</td><td>name=&quot;name&quot;</td><td>&quot;name=name&quot;</td></tr><tr><td>selenium/appium</td><td>class</td><td>class_name=&quot;class&quot;</td><td>&quot;class=class&quot;</td></tr><tr><td>selenium</td><td>tag</td><td>tag=&quot;input&quot;</td><td>&quot;tag=input&quot;</td></tr><tr><td>selenium</td><td>link_text</td><td>link_text=&quot;文字链接&quot;</td><td>&quot;text=文字链接&quot;</td></tr><tr><td>selenium</td><td>partial_link_text</td><td>partial_link_text=&quot;文字链&quot;</td><td>&quot;text~=文字链&quot;</td></tr><tr><td>selenium/appium</td><td>xpath</td><td>xpath=&quot;//*[@id=&#39;11&#39;]&quot;</td><td>&quot;//*[@id=&#39;11&#39;]&quot;</td></tr><tr><td>selenium</td><td>css</td><td>cas=&quot;input#id&quot;</td><td>&quot;input#id&quot;</td></tr><tr><td>appium</td><td>ios_predicate</td><td>ios_predicate = &quot;xx&quot;</td><td>&quot;ios_predicate=xx&quot;</td></tr><tr><td>appium</td><td>ios_class_chain</td><td>ios_class_chain = &quot;xx&quot;</td><td>&quot;ios_predicate=xx&quot;</td></tr><tr><td>appium</td><td>android_uiautomator</td><td>android_uiautomator = &quot;xx&quot;</td><td>&quot;android_uiautomator=xx&quot;</td></tr><tr><td>appium</td><td>android_viewtag</td><td>android_viewtag = &quot;xx&quot;</td><td>&quot;android_viewtag=xx&quot;</td></tr><tr><td>appium</td><td>android_data_matcher</td><td>android_data_matcher = &quot;xx&quot;</td><td>&quot;android_data_matcher=xx&quot;</td></tr><tr><td>appium</td><td>android_view_matcher</td><td>android_view_matcher = &quot;xx&quot;</td><td>&quot;android_view_matcher=xx&quot;</td></tr><tr><td>appium</td><td>accessibility_id</td><td>accessibility_id = &quot;xx&quot;</td><td>&quot;accessibility_id=xx&quot;</td></tr><tr><td>appium</td><td>image</td><td>image = &quot;xx&quot;</td><td>&quot;image=xx&quot;</td></tr><tr><td>appium</td><td>custom</td><td>custom = &quot;xx&quot;</td><td>&quot;custom=xx&quot;</td></tr></tbody></table><p><strong>帮助信息</strong></p>`,10)),s("ul",null,[s("li",null,[s("a",d,[n[0]||(n[0]=e("CSS选择器")),p(a)])]),s("li",null,[s("a",r,[n[1]||(n[1]=e("xpath语法")),p(a)])])]),n[3]||(n[3]=t(`<p><strong>使用下标</strong></p><p>有时候无法通过一种定位找到单个元素，那么可以通过<code>index</code>指定一组元素中的第几个。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>self<span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span>tag<span class="token operator">=</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span> index<span class="token operator">=</span><span class="token number">7</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&quot;seldom&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过<code>tag=&quot;input&quot;</code>匹配出一组元素， <code>index=7</code> 指定这一组元素中的第8个，<code>index</code>默认下标为<code>0</code>。</p><h3 id="断言" tabindex="-1"><a class="header-anchor" href="#断言" aria-hidden="true">#</a> 断言</h3><p>seldom 提供了一组针对Web页面的断言方法。</p><p><strong>使用方法</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 断言标题是否等于&quot;title&quot;</span>
self<span class="token punctuation">.</span>assertTitle<span class="token punctuation">(</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 断言标题是否包含&quot;title&quot;</span>
self<span class="token punctuation">.</span>assertInTitle<span class="token punctuation">(</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 断言URL是否等于</span>
self<span class="token punctuation">.</span>assertUrl<span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 断言URL是否包含</span>
self<span class="token punctuation">.</span>assertInUrl<span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 断言页面包含“text”</span>
self<span class="token punctuation">.</span>assertText<span class="token punctuation">(</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 断言页面不包含“text”</span>
self<span class="token punctuation">.</span>assertNotText<span class="token punctuation">(</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 断言警告是否存在&quot;text&quot; 提示信息</span>
self<span class="token punctuation">.</span>assertAlertText<span class="token punctuation">(</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 断言元素是否存在</span>
self<span class="token punctuation">.</span>assertElement<span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#kw&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 断言元素是否不存在</span>
self<span class="token punctuation">.</span>assertNotElement<span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#kwasdfasdfa&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="webdriver-api" tabindex="-1"><a class="header-anchor" href="#webdriver-api" aria-hidden="true">#</a> WebDriver API</h3><p>seldom简化了selenium中的API，使操作Web页面更加简单。</p><p>大部分API都由<code>WebDriver</code>类提供：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom


<span class="token keyword">class</span> <span class="token class-name">TestCase</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_seldom_api</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># Accept warning box. -&gt;  Be removed in the future</span>
        self<span class="token punctuation">.</span>accept_alert<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># Adds a cookie to your current session.</span>
        self<span class="token punctuation">.</span>add_cookie<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token comment"># Adds a cookie to your current session.</span>
        cookie_list <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
        self<span class="token punctuation">.</span>add_cookies<span class="token punctuation">(</span>cookie_list<span class="token punctuation">)</span>

        <span class="token comment"># Clear the contents of the input box.</span>
        self<span class="token punctuation">.</span>clear<span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#el&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># It can click any text / image can be clicked</span>
        <span class="token comment"># Connection, check box, radio buttons, and even drop-down box etc..</span>
        self<span class="token punctuation">.</span>click<span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#el&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># Mouse over the element.</span>
        self<span class="token punctuation">.</span>move_to_element<span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#el&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># Click the element by the link text</span>
        self<span class="token punctuation">.</span>click_text<span class="token punctuation">(</span><span class="token string">&quot;新闻&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># Simulates the user clicking the &quot;close&quot; button in the titlebar of a popup window or tab.</span>
        self<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># Delete all cookies in the scope of the session.</span>
        self<span class="token punctuation">.</span>delete_all_cookies<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># Deletes a single cookie with the given name.</span>
        self<span class="token punctuation">.</span>delete_cookie<span class="token punctuation">(</span><span class="token string">&#39;my_cookie&#39;</span><span class="token punctuation">)</span>

        <span class="token comment"># Dismisses the alert available.  -&gt;  Be removed in the future</span>
        self<span class="token punctuation">.</span>dismiss_alert<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># Double click element.</span>
        self<span class="token punctuation">.</span>double_click<span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#el&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># Execute JavaScript scripts.</span>
        self<span class="token punctuation">.</span>execute_script<span class="token punctuation">(</span><span class="token string">&quot;window.scrollTo(200,1000);&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># Setting width and height of window scroll bar.</span>
        self<span class="token punctuation">.</span>window_scroll<span class="token punctuation">(</span>width<span class="token operator">=</span><span class="token number">300</span><span class="token punctuation">,</span> height<span class="token operator">=</span><span class="token number">500</span><span class="token punctuation">)</span>

        <span class="token comment"># Setting width and height of element scroll bar.</span>
        self<span class="token punctuation">.</span>element_scroll<span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;.class&quot;</span><span class="token punctuation">,</span> width<span class="token operator">=</span><span class="token number">300</span><span class="token punctuation">,</span> height<span class="token operator">=</span><span class="token number">500</span><span class="token punctuation">)</span>

        <span class="token comment"># open url.</span>
        self<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;https://www.baidu.com&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># Gets the text of the Alert.  -&gt;  Be removed in the future</span>
        alert_title <span class="token operator">=</span> self<span class="token punctuation">.</span>get_alert_text

        <span class="token comment"># Execute Chrome Devtools Protocol command and get returned result </span>
        self<span class="token punctuation">.</span>execute_cdp_cmd<span class="token punctuation">(</span><span class="token string">&#39;Runtime.evaluate&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;expression&#39;</span><span class="token punctuation">:</span> <span class="token string">&quot;alert(&#39;hello world&#39;)&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token comment"># Gets the value of an element attribute.</span>
        self<span class="token punctuation">.</span>get_attribute<span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#el&quot;</span><span class="token punctuation">,</span> attribute<span class="token operator">=</span><span class="token string">&quot;type&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># Returns information of cookie with \`\`name\`\` as an object.</span>
        self<span class="token punctuation">.</span>get_cookie<span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;kkk&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># Returns a set of dictionaries, corresponding to cookies visible in the current session.</span>
        self<span class="token punctuation">.</span>get_cookies<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># Gets the element to display,The return result is true or false.</span>
        self<span class="token punctuation">.</span>get_display<span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#el&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># Get a set of elements</span>
        self<span class="token punctuation">.</span>get_element<span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#el&quot;</span><span class="token punctuation">,</span> index<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>

        <span class="token comment"># Get element text information.</span>
        self<span class="token punctuation">.</span>get_text<span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#el&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># Get window title.</span>
        title <span class="token operator">=</span> self<span class="token punctuation">.</span>get_title

        <span class="token comment"># Get the URL address of the current page.</span>
        url <span class="token operator">=</span> self<span class="token punctuation">.</span>get_url

        <span class="token comment"># Gets the log for a given log type</span>
        logs <span class="token operator">=</span> self<span class="token punctuation">.</span>get_log<span class="token punctuation">(</span><span class="token string">&quot;browser&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># Set browser window maximized.</span>
        self<span class="token punctuation">.</span>max_window<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># open url.</span>
        self<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;https://www.baidu.com&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># Quit the driver and close all the windows.</span>
        self<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># Refresh the current page.</span>
        self<span class="token punctuation">.</span>refresh<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># Right click element.</span>
        self<span class="token punctuation">.</span>right_click<span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#el&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># Saves a screenshots of the current window to a PNG image file.</span>
        self<span class="token punctuation">.</span>screenshots<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># Save to HTML report</span>
        self<span class="token punctuation">.</span>screenshots<span class="token punctuation">(</span><span class="token string">&#39;/Screenshots/foo.png&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># Save to the specified directory</span>

        <span class="token comment"># Saves a element screenshot of the element to a PNG image file.</span>
        self<span class="token punctuation">.</span>element_screenshot<span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#id&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># Save to HTML report</span>
        self<span class="token punctuation">.</span>element_screenshot<span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#id&quot;</span><span class="token punctuation">,</span> file_path<span class="token operator">=</span><span class="token string">&#39;/Screenshots/foo.png&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># Save to the specified directory</span>

        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        Constructor. A check is made that the given element is, indeed, a SELECT tag. If it is not,
        then an UnexpectedTagNameException is thrown.
        &lt;select name=&quot;NR&quot; id=&quot;nr&quot;&gt;
            &lt;option value=&quot;10&quot; selected=&quot;&quot;&gt;每页显示10条&lt;/option&gt;
            &lt;option value=&quot;20&quot;&gt;每页显示20条&lt;/option&gt;
            &lt;option value=&quot;50&quot;&gt;每页显示50条&lt;/option&gt;
        &lt;/select&gt;
        &quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>select<span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#nr&quot;</span><span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token string">&#39;20&#39;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>select<span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#nr&quot;</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&#39;每页显示20条&#39;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>select<span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#nr&quot;</span><span class="token punctuation">,</span> index<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>

        <span class="token comment"># Set browser window wide and high.</span>
        self<span class="token punctuation">.</span>set_window<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>

        <span class="token comment"># Submit the specified form.</span>
        self<span class="token punctuation">.</span>submit<span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#el&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># Switch to the specified frame.</span>
        self<span class="token punctuation">.</span>switch_to_frame<span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#el&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># Switches focus to the parent context. If the current context is the top</span>
        <span class="token comment"># level browsing context, the context remains unchanged.</span>
        self<span class="token punctuation">.</span>switch_to_frame_parent<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># Returns the current form machine form at the next higher level.</span>
        <span class="token comment"># Corresponding relationship with switch_to_frame () method.</span>
        self<span class="token punctuation">.</span>switch_to_frame_out<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># Switches focus to the specified window.</span>
        <span class="token comment"># This switches to the new windows/tab (0 is the first one)</span>
        self<span class="token punctuation">.</span>switch_to_window<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

        <span class="token comment"># Operation input box.</span>
        self<span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#el&quot;</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&quot;selenium&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># Implicitly wait.All elements on the page.</span>
        self<span class="token punctuation">.</span>wait<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>

        <span class="token comment"># Setting width and height of window scroll bar.</span>
        self<span class="token punctuation">.</span>window_scroll<span class="token punctuation">(</span>width<span class="token operator">=</span><span class="token number">300</span><span class="token punctuation">,</span> height<span class="token operator">=</span><span class="token number">500</span><span class="token punctuation">)</span>

        <span class="token comment"># alert operation. (seldom&gt;=3.2.0)</span>
        text <span class="token operator">=</span> self<span class="token punctuation">.</span>alert<span class="token punctuation">.</span>text
        self<span class="token punctuation">.</span>alert<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>alert<span class="token punctuation">.</span>dismiss<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>alert<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="键盘操作" tabindex="-1"><a class="header-anchor" href="#键盘操作" aria-hidden="true">#</a> 键盘操作</h3><p>有时候我们需要用到键盘操作，比如<code>Enter</code>，<code>Backspace</code>，<code>TAB</code>，或者<code>ctrl/command + a</code>、<code>ctrl/command + c</code>组合键操作，seldom提供了一组键盘操作。</p><p><strong>使用方法</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom


<span class="token keyword">class</span> <span class="token class-name">Test</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_key</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;https://www.baidu.com&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># 输入 seldomm</span>
        self<span class="token punctuation">.</span>Keys<span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#kw&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;seldomm&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># 删除多输入的一个m</span>
        self<span class="token punctuation">.</span>Keys<span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;kw&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>backspace<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 输入“教程”</span>
        self<span class="token punctuation">.</span>Keys<span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;kw&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;教程&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># ctrl+a 全选输入框内容</span>
        self<span class="token punctuation">.</span>Keys<span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;kw&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>select_all<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># ctrl+x 剪切输入框内容</span>
        self<span class="token punctuation">.</span>Keys<span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;kw&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>cut<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># ctrl+v 粘贴内容到输入框</span>
        self<span class="token punctuation">.</span>Keys<span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;kw&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>paste<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 通过回车键来代替单击操作</span>
        self<span class="token punctuation">.</span>Keys<span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;kw&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>enter<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 支持组合操作</span>
        self<span class="token punctuation">.</span>Keys<span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;kw&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>select_all<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>cut<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 全选剪切</span>
        self<span class="token punctuation">.</span>Keys<span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;kw&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>select_all<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>delete<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 全选删除</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>browser<span class="token operator">=</span><span class="token string">&quot;firefox&quot;</span><span class="token punctuation">,</span> debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试electron应用" tabindex="-1"><a class="header-anchor" href="#测试electron应用" aria-hidden="true">#</a> 测试electron应用</h3><p>Electron是一个使用 JavaScript、HTML 和 CSS 构建桌面应用程序的框架。 嵌入 Chromium 和 Node.js 到 二进制的 Electron 允许您保持一个 JavaScript代码代码库并创建 在Windows、macOS和Linux上运行的跨平台应用。</p><p>https://www.electronjs.org/</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom


<span class="token keyword">class</span> <span class="token class-name">DataDriverTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">start</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># appium-desktop基于Electron开发的桌面应用</span>
        self<span class="token punctuation">.</span>app_path <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&quot;C:\\Program Files\\Appium Server GUI\\Appium Server GUI.exe&quot;</span></span>

    <span class="token keyword">def</span> <span class="token function">test_case</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        Used tuple test data
        &quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>open_electron<span class="token punctuation">(</span>app_path<span class="token operator">=</span>self<span class="token punctuation">.</span>app_path<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>switch_to_window<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>Keys<span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#simpleHostInput&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>select_all<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>delete<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#simpleHostInput&quot;</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>Keys<span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#simplePortInput&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>select_all<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>delete<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#simplePortInput&quot;</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&quot;4724&quot;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>click<span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#startServerBtn&quot;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20))])}const b=o(u,[["render",k],["__file","seldom_api.html.vue"]]);export{b as default};
