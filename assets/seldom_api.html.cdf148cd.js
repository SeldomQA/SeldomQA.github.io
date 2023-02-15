import{_ as e,r as o,o as c,c as l,a as n,b as a,F as u,e as p,d as t}from"./app.eb6903a4.js";const i={},r=p(`<h1 id="seldom-api" tabindex="-1"><a class="header-anchor" href="#seldom-api" aria-hidden="true">#</a> Seldom API</h1><h3 id="\u67E5\u627E\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u67E5\u627E\u5143\u7D20" aria-hidden="true">#</a> \u67E5\u627E\u5143\u7D20</h3><p>seldom \u63D0\u4F9B\u4E868\u4E2D\u5B9A\u4F4D\u65B9\u5F0F\uFF0C\u4E0ESelenium\u4FDD\u6301\u4E00\u81F4\u3002</p><ul><li>id_</li><li>name</li><li>class_name</li><li>tag</li><li>link_text</li><li>partial_link_text</li><li>css</li><li>xpath</li></ul><p><strong>\u4F7F\u7528\u65B9\u5F0F</strong></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>self<span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;kw&quot;</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&quot;seldom&quot;</span><span class="token punctuation">)</span>
self<span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;wd&quot;</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&quot;seldom&quot;</span><span class="token punctuation">)</span>
self<span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span>class_name<span class="token operator">=</span><span class="token string">&quot;s_ipt&quot;</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&quot;seldom&quot;</span><span class="token punctuation">)</span>
self<span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span>tag<span class="token operator">=</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&quot;seldom&quot;</span><span class="token punctuation">)</span>
self<span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span>xpath<span class="token operator">=</span><span class="token string">&quot;//input[@id=&#39;kw&#39;]&quot;</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&quot;seldom&quot;</span><span class="token punctuation">)</span>
self<span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#kw&quot;</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&quot;seldom&quot;</span><span class="token punctuation">)</span>
self<span class="token punctuation">.</span>click<span class="token punctuation">(</span>link_text<span class="token operator">=</span><span class="token string">&quot;hao123&quot;</span><span class="token punctuation">)</span>
self<span class="token punctuation">.</span>click<span class="token punctuation">(</span>partial_link_text<span class="token operator">=</span><span class="token string">&quot;hao&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong>\u5E2E\u52A9\u4FE1\u606F</strong></p>`,7),k={href:"https://www.w3school.com.cn/cssref/css_selectors.asp",target:"_blank",rel:"noopener noreferrer"},b=t("CSS\u9009\u62E9\u5668"),m={href:"https://www.w3school.com.cn/xpath/xpath_syntax.asp",target:"_blank",rel:"noopener noreferrer"},d=t("xpath\u8BED\u6CD5"),g=p(`<p><strong>\u4F7F\u7528\u4E0B\u6807</strong></p><p>\u6709\u65F6\u5019\u65E0\u6CD5\u901A\u8FC7\u4E00\u79CD\u5B9A\u4F4D\u627E\u5230\u5355\u4E2A\u5143\u7D20\uFF0C\u90A3\u4E48\u53EF\u4EE5\u901A\u8FC7<code>index</code>\u6307\u5B9A\u4E00\u7EC4\u5143\u7D20\u4E2D\u7684\u7B2C\u51E0\u4E2A\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>self<span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span>tag<span class="token operator">=</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span> index<span class="token operator">=</span><span class="token number">7</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&quot;seldom&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u901A\u8FC7<code>tag=&quot;input&quot;</code>\u5339\u914D\u51FA\u4E00\u7EC4\u5143\u7D20\uFF0C <code>index=7</code> \u6307\u5B9A\u8FD9\u4E00\u7EC4\u5143\u7D20\u4E2D\u7684\u7B2C8\u4E2A\uFF0C<code>index</code>\u9ED8\u8BA4\u4E0B\u6807\u4E3A<code>0</code>\u3002</p><h3 id="\u65AD\u8A00" tabindex="-1"><a class="header-anchor" href="#\u65AD\u8A00" aria-hidden="true">#</a> \u65AD\u8A00</h3><p>seldom \u63D0\u4F9B\u4E86\u4E00\u7EC4\u9488\u5BF9Web\u9875\u9762\u7684\u65AD\u8A00\u65B9\u6CD5\u3002</p><p><strong>\u4F7F\u7528\u65B9\u6CD5</strong></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u65AD\u8A00\u6807\u9898\u662F\u5426\u7B49\u4E8E&quot;title&quot;</span>
self<span class="token punctuation">.</span>assertTitle<span class="token punctuation">(</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># \u65AD\u8A00\u6807\u9898\u662F\u5426\u5305\u542B&quot;title&quot;</span>
self<span class="token punctuation">.</span>assertInTitle<span class="token punctuation">(</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># \u65AD\u8A00URL\u662F\u5426\u7B49\u4E8E</span>
self<span class="token punctuation">.</span>assertUrl<span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># \u65AD\u8A00URL\u662F\u5426\u5305\u542B</span>
self<span class="token punctuation">.</span>assertInUrl<span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># \u65AD\u8A00\u9875\u9762\u5305\u542B\u201Ctext\u201D</span>
self<span class="token punctuation">.</span>assertText<span class="token punctuation">(</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># \u65AD\u8A00\u9875\u9762\u4E0D\u5305\u542B\u201Ctext\u201D</span>
self<span class="token punctuation">.</span>assertNotText<span class="token punctuation">(</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># \u65AD\u8A00\u8B66\u544A\u662F\u5426\u5B58\u5728&quot;text&quot; \u63D0\u793A\u4FE1\u606F</span>
self<span class="token punctuation">.</span>assertAlertText<span class="token punctuation">(</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># \u65AD\u8A00\u5143\u7D20\u662F\u5426\u5B58\u5728</span>
self<span class="token punctuation">.</span>assertElement<span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#kw&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># \u65AD\u8A00\u5143\u7D20\u662F\u5426\u4E0D\u5B58\u5728</span>
self<span class="token punctuation">.</span>assertNotElement<span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#kwasdfasdfa&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="webdriver-api" tabindex="-1"><a class="header-anchor" href="#webdriver-api" aria-hidden="true">#</a> WebDriver API</h3><p>seldom\u7B80\u5316\u4E86selenium\u4E2D\u7684API\uFF0C\u4F7F\u64CD\u4F5CWeb\u9875\u9762\u66F4\u52A0\u7B80\u5355\u3002</p><p>\u5927\u90E8\u5206API\u90FD\u7531<code>WebDriver</code>\u7C7B\u63D0\u4F9B\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> seldom

<span class="token keyword">class</span> <span class="token class-name">TestCase</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_seldom_api</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># Accept warning box.</span>
        self<span class="token punctuation">.</span>accept_alert<span class="token punctuation">(</span><span class="token punctuation">)</span>
        
        <span class="token comment"># Adds a cookie to your current session.</span>
        self<span class="token punctuation">.</span>add_cookie<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span> <span class="token punctuation">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span> <span class="token punctuation">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
        
        <span class="token comment"># Adds a cookie to your current session.</span>
        cookie_list <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span> <span class="token punctuation">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span> <span class="token punctuation">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span> <span class="token punctuation">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span> <span class="token punctuation">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">}</span>
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
        self<span class="token punctuation">.</span>click_text<span class="token punctuation">(</span><span class="token string">&quot;\u65B0\u95FB&quot;</span><span class="token punctuation">)</span>
        
        <span class="token comment"># Simulates the user clicking the &quot;close&quot; button in the titlebar of a popup window or tab.</span>
        self<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
        
        <span class="token comment"># Delete all cookies in the scope of the session.</span>
        self<span class="token punctuation">.</span>delete_all_cookies<span class="token punctuation">(</span><span class="token punctuation">)</span>
        
        <span class="token comment"># Deletes a single cookie with the given name.</span>
        self<span class="token punctuation">.</span>delete_cookie<span class="token punctuation">(</span><span class="token string">&#39;my_cookie&#39;</span><span class="token punctuation">)</span>
        
        <span class="token comment"># Dismisses the alert available.</span>
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
        
        <span class="token comment"># Gets the text of the Alert.</span>
        alert_title <span class="token operator">=</span> self<span class="token punctuation">.</span>get_alert_text
        
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
        self<span class="token punctuation">.</span>screenshots<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># Save to HTML report</span>
        self<span class="token punctuation">.</span>screenshots<span class="token punctuation">(</span><span class="token string">&#39;/Screenshots/foo.png&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># Save to the specified directory</span>
        
        <span class="token comment"># Saves a element screenshot of the element to a PNG image file.</span>
        self<span class="token punctuation">.</span>element_screenshot<span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#id&quot;</span><span class="token punctuation">)</span> <span class="token comment"># Save to HTML report</span>
        self<span class="token punctuation">.</span>element_screenshot<span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#id&quot;</span><span class="token punctuation">,</span> file_path<span class="token operator">=</span><span class="token string">&#39;/Screenshots/foo.png&#39;</span><span class="token punctuation">)</span> <span class="token comment"># Save to the specified directory</span>
        
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        Constructor. A check is made that the given element is, indeed, a SELECT tag. If it is not,
        then an UnexpectedTagNameException is thrown.
        &lt;select name=&quot;NR&quot; id=&quot;nr&quot;&gt;
            &lt;option value=&quot;10&quot; selected=&quot;&quot;&gt;\u6BCF\u9875\u663E\u793A10\u6761&lt;/option&gt;
            &lt;option value=&quot;20&quot;&gt;\u6BCF\u9875\u663E\u793A20\u6761&lt;/option&gt;
            &lt;option value=&quot;50&quot;&gt;\u6BCF\u9875\u663E\u793A50\u6761&lt;/option&gt;
        &lt;/select&gt;
        &quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>select<span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#nr&quot;</span><span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token string">&#39;20&#39;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>select<span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#nr&quot;</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&#39;\u6BCF\u9875\u663E\u793A20\u6761&#39;</span><span class="token punctuation">)</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br></div></div><h3 id="\u952E\u76D8\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u952E\u76D8\u64CD\u4F5C" aria-hidden="true">#</a> \u952E\u76D8\u64CD\u4F5C</h3><p>\u6709\u65F6\u5019\u6211\u4EEC\u9700\u8981\u7528\u5230\u952E\u76D8\u64CD\u4F5C\uFF0C\u6BD4\u5982<code>Enter</code>\uFF0C<code>Backspace</code>\uFF0C<code>TAB</code>\uFF0C\u6216\u8005<code>ctrl/command + a</code>\u3001<code>ctrl/command + c</code>\u7EC4\u5408\u952E\u64CD\u4F5C\uFF0Cseldom\u63D0\u4F9B\u4E86\u4E00\u7EC4\u952E\u76D8\u64CD\u4F5C\u3002</p><p><strong>\u4F7F\u7528\u65B9\u6CD5</strong></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> seldom


<span class="token keyword">class</span> <span class="token class-name">Test</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_key</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;https://www.baidu.com&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># \u8F93\u5165 seldomm</span>
        self<span class="token punctuation">.</span>Keys<span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#kw&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;seldomm&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># \u5220\u9664\u591A\u8F93\u5165\u7684\u4E00\u4E2Am</span>
        self<span class="token punctuation">.</span>Keys<span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;kw&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>backspace<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># \u8F93\u5165\u201C\u6559\u7A0B\u201D</span>
        self<span class="token punctuation">.</span>Keys<span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;kw&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;\u6559\u7A0B&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># ctrl+a \u5168\u9009\u8F93\u5165\u6846\u5185\u5BB9</span>
        self<span class="token punctuation">.</span>Keys<span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;kw&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>select_all<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># ctrl+x \u526A\u5207\u8F93\u5165\u6846\u5185\u5BB9</span>
        self<span class="token punctuation">.</span>Keys<span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;kw&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>cut<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># ctrl+v \u7C98\u8D34\u5185\u5BB9\u5230\u8F93\u5165\u6846</span>
        self<span class="token punctuation">.</span>Keys<span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;kw&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>paste<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># \u901A\u8FC7\u56DE\u8F66\u952E\u6765\u4EE3\u66FF\u5355\u51FB\u64CD\u4F5C</span>
        self<span class="token punctuation">.</span>Keys<span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;kw&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>enter<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>browser<span class="token operator">=</span><span class="token string">&quot;firefox&quot;</span><span class="token punctuation">,</span> debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div>`,16);function h(q,f){const s=o("ExternalLinkIcon");return c(),l(u,null,[r,n("ul",null,[n("li",null,[n("a",k,[b,a(s)])]),n("li",null,[n("a",m,[d,a(s)])])]),g],64)}var w=e(i,[["render",h],["__file","seldom_api.html.vue"]]);export{w as default};
