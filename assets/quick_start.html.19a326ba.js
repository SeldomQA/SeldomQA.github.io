import{_ as p,r as e,o as t,c as o,a as n,b as l,F as c,d as s,e as u}from"./app.eb6903a4.js";var r="/image/pycharm.png",i="/image/pycharm_run_case.png",b="/image/report.png";const m={},k=n("h1",{id:"\u5FEB\u901F\u5F00\u59CB",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5FEB\u901F\u5F00\u59CB","aria-hidden":"true"},"#"),s(" \u5FEB\u901F\u5F00\u59CB")],-1),d=n("h3",{id:"\u57FA\u672C\u89C4\u8303",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u57FA\u672C\u89C4\u8303","aria-hidden":"true"},"#"),s(" \u57FA\u672C\u89C4\u8303")],-1),_=n("code",null,"seldom",-1),q=s("\u7EE7\u627F"),g=n("code",null,"unittest",-1),h=s("\u5355\u5143\u6D4B\u8BD5\u6846\u67B6\uFF0C\u6240\u4EE5\u4ED6\u7684\u7F16\u5199\u89C4\u8303\u4E0E"),y={href:"https://docs.python.org/3/library/unittest.html",target:"_blank",rel:"noopener noreferrer"},f=s("unittest"),v=s("\u57FA\u672C\u4FDD\u6301\u4E00\u81F4\u3002"),w=u(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># test_sample.py</span>
<span class="token function">import</span> seldom


class YouTest<span class="token punctuation">(</span>seldom.TestCase<span class="token punctuation">)</span>:

    def test_case<span class="token punctuation">(</span>self<span class="token punctuation">)</span>:
        <span class="token string">&quot;&quot;</span>&quot;a simple <span class="token builtin class-name">test</span> <span class="token keyword">case</span> <span class="token string">&quot;&quot;</span>&quot;
        self.assertEqual<span class="token punctuation">(</span><span class="token number">1</span>+1, <span class="token number">2</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token builtin class-name">:</span>
    seldom.main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u57FA\u672C\u89C4\u8303\uFF1A</p><ol><li>\u521B\u5EFA\u6D4B\u8BD5\u7C7B<code>YouTest</code>\u5E76\u7EE7\u627F<code>seldom.TestCase</code>\u7C7B\u3002</li><li>\u521B\u5EFA\u6D4B\u8BD5\u65B9\u6CD5<code>test_case</code>, \u5FC5\u987B\u4EE5<code>test</code>\u5F00\u5934\u3002</li><li><code>seldom.mian()</code>\u662F\u6846\u67B6\u8FD0\u884C\u7684\u5165\u53E3\u65B9\u6CD5\uFF0C\u63A5\u4E0B\u6765\u8BE6\u7EC6\u4ECB\u7ECD\u3002</li></ol><h3 id="main-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#main-\u65B9\u6CD5" aria-hidden="true">#</a> <code>main()</code> \u65B9\u6CD5</h3><p><code>main()</code>\u65B9\u6CD5\u662Fseldom\u8FD0\u884C\u6D4B\u8BD5\u7684\u5165\u53E3, \u5B83\u63D0\u4F9B\u4E86\u4E00\u4E9B\u6700\u57FA\u672C\u4E5F\u662F\u6700\u91CD\u8981\u7684\u914D\u7F6E\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> seldom

<span class="token comment"># ...</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>

    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>
                browser<span class="token operator">=</span><span class="token string">&quot;chrome&quot;</span><span class="token punctuation">,</span>
                base_url<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
                app_info<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
                app_server<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
                report<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
                title<span class="token operator">=</span><span class="token string">&quot;\u767E\u5EA6\u6D4B\u8BD5\u7528\u4F8B&quot;</span><span class="token punctuation">,</span>
                tester<span class="token operator">=</span><span class="token string">&quot;\u866B\u5E08&quot;</span><span class="token punctuation">,</span>
                description<span class="token operator">=</span><span class="token string">&quot;\u6D4B\u8BD5\u73AF\u5883:chrome&quot;</span><span class="token punctuation">,</span>
                debug<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>
                rerun<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>
                save_last_run<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>
                language<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token punctuation">,</span>
                timeout<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span>
                whitelist<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                blacklist<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token builtin">open</span><span class="token operator">=</span><span class="token boolean">True</span>
    <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p><strong>\u53C2\u6570\u8BF4\u660E</strong></p><ul><li>path : \u6307\u5B9A\u6D4B\u8BD5\u76EE\u5F55\u6216\u6587\u4EF6\uFF0C \u4E0E<code>case</code>\u53C2\u6570\u4E92\u65A5\u3002</li><li>case : \u6307\u5B9A\u6D4B\u8BD5\u7528\u4F8B\uFF0C \u4E0E<code>path</code>\u53C2\u6570\u4E92\u65A5\u3002</li><li>browser : \u6307\u5B9A\u6D4F\u89C8\u5668\uFF08&quot;chrome&quot;\u3001&quot;firefox&quot; \u7B49\uFF09\uFF0C Web\u6D4B\u8BD5\u3002</li><li>base_url : \u8BBE\u7F6E\u5168\u5C40\u7684\u57FA\u672CURL\uFF0C HTTP\u6D4B\u8BD5\u3002</li><li>app_info : app \u542F\u52A8\u4FE1\u606F\uFF0C\u53C2\u8003<code>desired_capabilities</code>\u914D\u7F6E\uFF0C app\u6D4B\u8BD5\u3002</li><li>app_server : appium server \u542F\u52A8\u5730\u5740\uFF08\u9ED8\u8BA4 http://127.0.0.1:4723\uFF09\uFF0C app\u6D4B\u8BD5\u3002</li><li>report : \u81EA\u5B9A\u4E49\u6D4B\u8BD5\u62A5\u544A\u7684\u540D\u79F0\uFF0C\u9ED8\u8BA4\u683C\u5F0F\u4E3A<code>2020_04_04_11_55_20_result.html</code>\u3002</li><li>title : \u6307\u5B9A\u6D4B\u8BD5\u62A5\u544A\u6807\u9898\u3002</li><li>tester : \u6307\u5B9A\u6D4B\u8BD5\u4EBA\u5458, \u9ED8\u8BA4<code>Anonymous</code>\u3002</li><li>description : \u6307\u5B9A\u6D4B\u8BD5\u62A5\u544A\u63CF\u8FF0\u3002</li><li>debug : debug\u6A21\u5F0F\uFF0C\u8BBE\u7F6E\u4E3ATrue\u4E0D\u751F\u6210\u6D4B\u8BD5HTML\u6D4B\u8BD5\uFF0C\u9ED8\u8BA4\u4E3A<code>False</code>\u3002</li><li>rerun : \u8BBE\u7F6E\u5931\u8D25\u91CD\u65B0\u8FD0\u884C\u6B21\u6570\uFF0C\u9ED8\u8BA4\u4E3A <code>0</code>\u3002</li><li>save_last_run : \u8BBE\u7F6E\u53EA\u4FDD\u5B58\u6700\u540E\u4E00\u6B21\u7684\u7ED3\u679C\uFF0C\u9ED8\u8BA4\u4E3A<code>False</code>\u3002</li><li>language : \u8BBE\u7F6EHTML\u62A5\u544A\u4E2D\u82F1\u6587\uFF0C\u9ED8\u8BA4<code>en</code>, \u4E2D\u6587<code>zh-CN</code>\u3002</li><li>timeout : \u8BBE\u7F6E\u8D85\u65F6\u65F6\u95F4\uFF0C\u9ED8\u8BA4<code>10</code>\u79D2\u3002</li><li>whitelist : \u7528\u4F8B\u6807\u7B7E\uFF08label\uFF09\u8BBE\u7F6E\u767D\u540D\u5355\u3002</li><li>blacklist : \u7528\u4F8B\u6807\u7B7E\uFF08label\uFF09\u8BBE\u7F6E\u9ED1\u540D\u5355\u3002</li><li>open : \u662F\u5426\u4F7F\u7528\u6D4F\u89C8\u5668\u81EA\u52A8\u6253\u5F00\u6D4B\u8BD5\u62A5\u544A\uFF0C\u9ED8\u8BA4<code>True</code>\u3002</li></ul><h3 id="confrun-py-\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#confrun-py-\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> <code>confrun.py</code> \u914D\u7F6E\u6587\u4EF6</h3><blockquote><p>seldom 3.1.0 \u63D0\u4F9B\u8FC7\u4E86 <code>confrun.py</code> \u7528\u4E8E\u914D\u7F6E\u8FD0\u884C\u73AF\u5883\u3002</p></blockquote><p>\u5728\u8FD9\u4E2A\u6587\u4EF6\u4E2D\u53EF\u4EE5\u5B9A\u4E49\u8FD0\u884C\u76F8\u5173\u7684\u94A9\u5B50\u51FD\u6570\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
seldom confrun.py hooks function
&quot;&quot;&quot;</span>

<span class="token keyword">def</span> <span class="token function">start_run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    Test the hook function before running
    &quot;&quot;&quot;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>


<span class="token keyword">def</span> <span class="token function">end_run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    Test the hook function after running
    &quot;&quot;&quot;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>


<span class="token keyword">def</span> <span class="token function">browser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    Web UI test:
    browser: gc(google chrome)/ff(firefox)/edge/ie/safari
    &quot;&quot;&quot;</span>
    <span class="token keyword">return</span> <span class="token string">&quot;gc&quot;</span>


<span class="token keyword">def</span> <span class="token function">base_url</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    http test
    api base url
    &quot;&quot;&quot;</span>
    <span class="token keyword">return</span> <span class="token string">&quot;http://httpbin.org&quot;</span>


<span class="token keyword">def</span> <span class="token function">app_info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    app UI test
    appium app config
    &quot;&quot;&quot;</span>
    desired_caps <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;deviceName&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;JEF_AN20&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;automationName&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;UiAutomator2&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;platformName&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Android&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;platformVersion&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;10.0&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;appPackage&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;com.meizu.flyme.flymebbs&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;appActivity&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;.ui.LoadingActivity&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;noReset&#39;</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> desired_caps


<span class="token keyword">def</span> <span class="token function">app_server</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    app UI test
    appium server/desktop address
    &quot;&quot;&quot;</span>
    <span class="token keyword">return</span> <span class="token string">&quot;http://127.0.0.1:4723&quot;</span>

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
    return &quot;d://mypro/result.html&quot;
    return &quot;d://mypro/result.xml&quot;
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
    <span class="token keyword">return</span> <span class="token string">&quot;seldom test report&quot;</span>


<span class="token keyword">def</span> <span class="token function">tester</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    setting report tester
    &quot;&quot;&quot;</span>
    <span class="token keyword">return</span> <span class="token string">&quot;bugmaster&quot;</span>


<span class="token keyword">def</span> <span class="token function">description</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    setting report description
    &quot;&quot;&quot;</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">&quot;windows&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jenkins&quot;</span><span class="token punctuation">]</span>


<span class="token keyword">def</span> <span class="token function">language</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    setting report language
    return &quot;en&quot;
    return &quot;zh-CN&quot;
    &quot;&quot;&quot;</span>
    <span class="token keyword">return</span> <span class="token string">&quot;en&quot;</span>


<span class="token keyword">def</span> <span class="token function">whitelist</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;test label white list&quot;&quot;&quot;</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>


<span class="token keyword">def</span> <span class="token function">blacklist</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;test label black list&quot;&quot;&quot;</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br></div></div><p>\u4EE5\u4E0A\u914D\u7F6E\u6839\u636E\u9700\u6C42\u81EA\u52A8\u5316\u9879\u76EE\u7C7B\u578B\u914D\u7F6E\uFF0C\u76F8\u4E92\u53EF\u80FD\u51B2\u7A81\u7684\u94A9\u5B50\u51FD\u6570\uFF1A</p><ul><li>Web UI\u6D4B\u8BD5: <code>browser()</code></li><li>http \u63A5\u53E3\u6D4B\u8BD5: <code>base_url()</code></li><li>app UI\u6D4B\u8BD5: <code>app_info()</code>, <code>app_server()</code></li></ul><h3 id="\u8FD0\u884C\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u6D4B\u8BD5" aria-hidden="true">#</a> \u8FD0\u884C\u6D4B\u8BD5</h3><p>seldom \u7684\u8FD0\u884C\u6709\u4E09\u79CD\u65B9\u5F0F\uFF1A</p><ul><li><code>main()</code> \u65B9\u6CD5\uFF1A\u5728<code>.py</code> \u6587\u4EF6\u4E2D\u4F7F\u7528<code>seldom.main()</code> \u65B9\u6CD5\u3002</li><li><code>seldom</code> \u547D\u4EE4\uFF1A\u901A\u8FC7<code>sedom</code> \u547D\u4EE4\u6307\u5B9A\u8981\u8FD0\u884C\u7684\u76EE\u5F55&amp;\u6587\u4EF6&amp;\u7C7B&amp;\u65B9\u6CD5\u3002</li><li><s><code>pycharm</code>\u53F3\u952E\u6267\u884C\uFF1A\u8FD9\u79CD\u65B9\u5F0F\u65E0\u6CD5\u8BFB\u53D6\u5230\u914D\u7F6E\uFF0C\u6709\u4E25\u91CD\u7F3A\u9677\u3002</s></li></ul><blockquote><p>\u5F3A\u70C8\u5EFA\u8BAE\u4F7F\u7528\u524D\u4E24\u79CD\uFF01\uFF01</p></blockquote><p><strong>1. <code>main()</code>\u65B9\u6CD5\u8FD0\u884C\u6D4B\u8BD5</strong></p><p>\u521B\u5EFA <code>test_sample.py</code> \u6587\u4EF6\uFF0C\u5728\u6D4B\u8BD5\u6587\u4EF6\u4E2D\u4F7F\u7528<code>main()</code>\u65B9\u6CD5\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># test_sample.py</span>
<span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom <span class="token keyword">import</span> data


<span class="token keyword">class</span> <span class="token class-name">YouTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_case</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;a simple test case &quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

    <span class="token decorator annotation punctuation">@data</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">(</span><span class="token string">&quot;case1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;seldom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token string">&quot;case2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;XTestRunner&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_ddt</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> search<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot; ddt case &quot;&quot;&quot;</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;name: </span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">, search_key: </span><span class="token interpolation"><span class="token punctuation">{</span>search<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token comment"># \u6307\u5B9A\u8FD0\u884C\u5176\u4ED6\u76EE\u5F55&amp;\u6587\u4EF6</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">&quot;./&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># \u6307\u5B9A\u5F53\u524D\u6587\u4EF6\u6240\u5728\u76EE\u5F55\u4E0B\u9762\u7684\u7528\u4F8B\u3002</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">&quot;./test_dir/&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># \u6307\u5B9A\u5F53\u524D\u76EE\u5F55\u4E0B\u9762\u7684test_dir/ \u76EE\u5F55\u4E0B\u9762\u7684\u7528\u4F8B\u3002</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">&quot;./test_dir/test_sample.py&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># \u6307\u5B9A\u6D4B\u8BD5\u6587\u4EF6\u4E2D\u7684\u7528\u4F8B\u3002</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">&quot;D:/seldom_sample/test_dir/test_sample.py&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># \u6307\u5B9A\u6587\u4EF6\u7684\u7EDD\u5BF9\u8DEF\u5F84\u3002</span>
    
    <span class="token comment"># \u8FD0\u884C\u5F53\u524D\u6587\u4EF6\u4E2D\u7684\u7528\u4F8B</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># \u9ED8\u8BA4\u8FD0\u884C\u5F53\u524D\u6587\u4EF6\u4E2D\u6240\u6709\u7528\u4F8B</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token keyword">case</span><span class="token operator">=</span><span class="token string">&quot;test_sample&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># \u6307\u5B9A\u5F53\u524D\u6587\u4EF6</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token keyword">case</span><span class="token operator">=</span><span class="token string">&quot;test_sample.TestCase&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># \u6307\u5B9A\u6D4B\u8BD5\u7C7B</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token keyword">case</span><span class="token operator">=</span><span class="token string">&quot;test_sample.TestCase.test_case&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># \u6307\u5B9A\u6D4B\u8BD5\u7528\u4F8B</span>

    <span class="token comment"># \u4F7F\u7528\u53C2\u6570\u5316\u7684\u7528\u4F8B</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token keyword">case</span><span class="token operator">=</span><span class="token string">&quot;test_sample.TestCase.test_ddt&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># \u9519\u8BEF\u7528\u6CD5</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token keyword">case</span><span class="token operator">=</span><span class="token string">&quot;test_sample.TestCase.test_ddt_0_case1&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># \u6B63\u786E\u7528\u4F8B</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p><code>seldom.main()</code> \u63D0\u4F9B\u54EA\u4E9B\u53C2\u6570\uFF0C\u8BF7\u53C2\u8003\u524D\u9762\u7684\u6587\u6863\u3002</p><ul><li>\u8FD0\u884C\u6D4B\u8BD5\u6587\u4EF6</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> python test_sample.py      <span class="token comment"># \u901A\u8FC7python\u547D\u4EE4\u8FD0\u884C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>2. seldom\u547D\u4EE4\u6267\u884C</strong></p><ul><li>\u76EE\u5F55\u7ED3\u6784</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mypro/
\u251C\u2500\u2500 test_dir/
\u2502   \u251C\u2500\u2500 __init__.py
\u2502   \u251C\u2500\u2500 test_sample.py
\u2514\u2500\u2500 confrun.py  # \u8FD0\u884C\u914D\u7F6E\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>seldom -p</code>\u547D\u4EE4\u6307\u5B9A\u76EE\u5F55\u548C\u6587\u4EF6\u3002</p><p><code>seldom -m</code>\u547D\u4EE4\u53EF\u4EE5\u63D0\u4F9B\u66F4\u7EC6\u7C92\u5EA6\u7684\u8FD0\u884C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> mypro/  <span class="token comment"># \u8FDB\u5165\u9879\u76EE\u6839\u76EE\u5F55</span>
<span class="token operator">&gt;</span> seldom -p test_dir  <span class="token comment"># \u8FD0\u884C\u76EE\u5F55</span>
<span class="token operator">&gt;</span> seldom -p test_dir/test_sample.py  <span class="token comment"># \u8FD0\u884C\u6587\u4EF6</span>
<span class="token operator">&gt;</span> seldom -m test_dir.test_sample       <span class="token comment"># \u8FD0\u884C\u6587\u4EF6</span>
<span class="token operator">&gt;</span> seldom -m test_dir.test_sample.SampleTest <span class="token comment"># \u8FD0\u884C SampleTest \u6D4B\u8BD5\u7C7B</span>
<span class="token operator">&gt;</span> seldom -m test_dir.test_sample.SampleTest.test_case <span class="token comment"># \u8FD0\u884C test_case \u6D4B\u8BD5\u65B9\u6CD5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u8FD0\u884C\u76F8\u5173\u7684\u914D\u7F6E\uFF0C\u53EF\u4EE5\u5728<code>confrun.py</code> \u6587\u4EF6\u4E2D\u914D\u7F6E\u3002</p><p><strong>3. \u5728pyCharm\u4E2D\u8FD0\u884C\u6D4B\u8BD5</strong></p><blockquote><p>\u5F3A\u70C8\u4E0D\u5EFA\u8BAE\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u9664\u975E\u4F60\u7684\u6D4B\u8BD5\u7528\u4F8B\u6CA1\u6709\u4EFB\u4F55\u4F9D\u8D56\u3002</p></blockquote><p>\u6B65\u9AA4\u4E00\uFF1A\u914D\u7F6E\u6D4B\u8BD5\u7528\u4F8B\u901A\u8FC7 unittest \u8FD0\u884C\u3002</p><p><img src="`+r+'" alt=""></p><p>\u6B65\u9AA4\u4E8C\uFF1A\u5728\u6587\u4EF6\u4E2D\u9009\u62E9\u6D4B\u8BD5\u7C7B\u6216\u7528\u4F8B\u6267\u884C\u3002</p><p><img src="'+i+`" alt=""></p><blockquote><p>\u8B66\u544A\uFF1A\u8FD0\u884C\u7528\u4F8B\u6253\u5F00\u7684\u6D4F\u89C8\u5668\uFF0C\u9700\u8981\u624B\u52A8\u5173\u95ED\uFF0C seldom\u4E0D\u505A\u7528\u4F8B\u5173\u95ED\u64CD\u4F5C\u3002</p></blockquote><h3 id="\u5931\u8D25\u91CD\u8DD1" tabindex="-1"><a class="header-anchor" href="#\u5931\u8D25\u91CD\u8DD1" aria-hidden="true">#</a> \u5931\u8D25\u91CD\u8DD1</h3><p>Seldom\u652F\u6301<code>\u9519\u8BEF</code>&amp;<code>\u5931\u8D25</code>\u91CD\u8DD1\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># test_sample.py</span>
<span class="token keyword">import</span> seldom


<span class="token keyword">class</span> <span class="token class-name">YouTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

  
    <span class="token keyword">def</span> <span class="token function">test_error</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;error case&quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">test_fail</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;fail case &quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>rerun<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u53C2\u6570\u8BF4\u660E\uFF1A</p><ul><li>rerun: \u6307\u5B9A\u91CD\u8DD1\u7684\u6B21\u6570\uFF0C\u9ED8\u8BA4\u4E3A <code>0</code>\u3002</li><li>save_last_run: \u8BBE\u7F6E\u662F\u5426\u53EA\u4FDD\u5B58\u6700\u540E\u4E00\u6B21\u8FD0\u884C\u7ED3\u679C\uFF0C\u9ED8\u8BA4\u4E3A<code>False</code>\u3002</li></ul><p>\u8FD0\u884C\u65E5\u5FD7\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> python test_sample.py


              __    __
   ________  / /___/ /___  ____ ____
  / ___/ _ <span class="token punctuation">\\</span>/ / __  / __ <span class="token punctuation">\\</span>/ __ \` ___/
 <span class="token punctuation">(</span>__  <span class="token punctuation">)</span>  __/ / /_/ / /_/ / / / / / /
/____/<span class="token punctuation">\\</span>___/_/<span class="token punctuation">\\</span>__,_/<span class="token punctuation">\\</span>____/_/ /_/ /_/  v3.x.x
-----------------------------------------
                             @itest.info




XTestRunner Running tests<span class="token punctuation">..</span>.

----------------------------------------------------------------------
ERetesting<span class="token punctuation">..</span>. test_error <span class="token punctuation">(</span>test_sample.YouTest<span class="token punctuation">)</span><span class="token punctuation">..</span><span class="token number">1</span>
ERetesting<span class="token punctuation">..</span>. test_error <span class="token punctuation">(</span>test_sample.YouTest<span class="token punctuation">)</span><span class="token punctuation">..</span><span class="token number">2</span>
ERetesting<span class="token punctuation">..</span>. test_error <span class="token punctuation">(</span>test_sample.YouTest<span class="token punctuation">)</span><span class="token punctuation">..</span><span class="token number">3</span>
EFRetesting<span class="token punctuation">..</span>. test_fail <span class="token punctuation">(</span>test_sample.YouTest<span class="token punctuation">)</span><span class="token punctuation">..</span><span class="token number">1</span>
FRetesting<span class="token punctuation">..</span>. test_fail <span class="token punctuation">(</span>test_sample.YouTest<span class="token punctuation">)</span><span class="token punctuation">..</span><span class="token number">2</span>
FRetesting<span class="token punctuation">..</span>. test_fail <span class="token punctuation">(</span>test_sample.YouTest<span class="token punctuation">)</span><span class="token punctuation">..</span><span class="token number">3</span>
Generating HTML reports<span class="token punctuation">..</span>.
F2022-07-12 00:22:52 log.py <span class="token operator">|</span> SUCCESS <span class="token operator">|</span> generated html file: file:///D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>seldom<span class="token punctuation">\\</span>reports<span class="token punctuation">\\</span>2022_07_12_00_22_51_result.html
<span class="token number">2022</span>-07-12 00:22:52 log.py <span class="token operator">|</span> SUCCESS <span class="token operator">|</span> generated log file: file:///D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>seldom<span class="token punctuation">\\</span>reports<span class="token punctuation">\\</span>seldom_log.log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="\u6D4B\u8BD5\u62A5\u544A" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u62A5\u544A" aria-hidden="true">#</a> \u6D4B\u8BD5\u62A5\u544A</h3><p>seldom \u9ED8\u8BA4\u751F\u6210HTML\u6D4B\u8BD5\u62A5\u544A\uFF0C\u5728\u8FD0\u884C\u6D4B\u8BD5\u6587\u4EF6\u4E0B\u81EA\u52A8\u521B\u5EFA<code>reports</code>\u76EE\u5F55\u3002</p><ul><li>\u8FD0\u884C\u6D4B\u8BD5\u7528\u4F8B\u524D</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mypro/
\u2514\u2500\u2500 test_sample.py
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u8FD0\u884C\u6D4B\u8BD5\u7528\u4F8B\u540E</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mypro/
\u251C\u2500\u2500 reports/
\u2502   \u251C\u2500\u2500 2020_01_01_11_20_33_result.html
\u2502   \u251C\u2500\u2500 seldom_log.log
\u2514\u2500\u2500 test_sample.py
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u901A\u8FC7\u6D4F\u89C8\u5668\u6253\u5F00 <code>2020_01_01_11_20_33_result.html</code> \u6D4B\u8BD5\u62A5\u544A\uFF0C\u67E5\u770B\u6D4B\u8BD5\u7ED3\u679C\u3002</p><p><img src="`+b+`" alt=""></p><p><strong>debug\u6A21\u5F0F</strong></p><p>\u5982\u679C\u4E0D\u60F3\u6BCF\u6B21\u8FD0\u884C\u90FD\u751F\u6210HTML\u62A5\u544A\uFF0C\u53EF\u4EE5\u6253\u5F00<code>debug</code>\u6A21\u5F0F\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> seldom

seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>\u5B9A\u4E49\u6D4B\u8BD5\u62A5\u544A</strong></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> seldom

seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>report<span class="token operator">=</span><span class="token string">&quot;./report.html&quot;</span><span class="token punctuation">,</span>
            title<span class="token operator">=</span><span class="token string">&quot;\u767E\u5EA6\u6D4B\u8BD5\u7528\u4F8B&quot;</span><span class="token punctuation">,</span>
            tester<span class="token operator">=</span><span class="token string">&quot;\u866B\u5E08&quot;</span><span class="token punctuation">,</span>
            description<span class="token operator">=</span><span class="token string">&quot;\u6D4B\u8BD5\u73AF\u5883\uFF1Awindows 10/ chrome&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>report: \u914D\u7F6E\u62A5\u544A\u540D\u79F0\u548C\u8DEF\u5F84\u3002</li><li>title: \u81EA\u5B9A\u4E49\u62A5\u544A\u7684\u6807\u9898\u3002</li><li>tester: \u6307\u5B9A\u81EA\u52A8\u5316\u6D4B\u8BD5\u5DE5\u7A0B\u5E08\u540D\u5B57\u3002</li><li>description: \u6DFB\u52A0\u62A5\u544A\u4FE1\u606F\uFF0C\u652F\u6301\u5217\u8868, \u4F8B\u5982\uFF1A[&quot;OS: windows&quot;,&quot;Browser: chrome&quot;]\u3002</li></ul><p><strong>XML\u6D4B\u8BD5\u62A5\u544A</strong></p><p>\u5982\u679C\u9700\u8981\u751F\u6210XML\u683C\u5F0F\u7684\u62A5\u544A\uFF0C\u53EA\u9700\u8981\u4FEE\u6539\u62A5\u544A\u7684\u540E\u7F00\u540D\u4E3A<code>.xml</code>\u5373\u53EF\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> seldom

seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>report<span class="token operator">=</span><span class="token string">&quot;report.xml&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,62);function T(x,C){const a=e("ExternalLinkIcon");return t(),o(c,null,[k,d,n("p",null,[_,q,g,h,n("a",y,[f,l(a)]),v]),w],64)}var E=p(m,[["render",T],["__file","quick_start.html.vue"]]);export{E as default};
