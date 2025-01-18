import{_ as e,r as o,o as p,c as i,a as s,b as a,d as l,e as c}from"./app-148fbfef.js";const u="/image/pycharm.png",d="/image/pycharm_run_case.png",r="/image/report.png",k={},v={href:"https://docs.python.org/3/library/unittest.html",target:"_blank",rel:"noopener noreferrer"};function m(b,n){const t=o("ExternalLinkIcon");return p(),i("div",null,[n[6]||(n[6]=s("h1",{id:"快速开始",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#快速开始","aria-hidden":"true"},"#"),a(" 快速开始")],-1)),n[7]||(n[7]=s("h3",{id:"基本规范",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#基本规范","aria-hidden":"true"},"#"),a(" 基本规范")],-1)),s("p",null,[n[1]||(n[1]=s("code",null,"seldom",-1)),n[2]||(n[2]=a("继承")),n[3]||(n[3]=s("code",null,"unittest",-1)),n[4]||(n[4]=a("单元测试框架，所以他的编写规范与")),s("a",v,[n[0]||(n[0]=a("unittest")),l(t)]),n[5]||(n[5]=a("基本保持一致。"))]),n[8]||(n[8]=c(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># test_sample.py</span>
<span class="token function">import</span> seldom


class YouTest<span class="token punctuation">(</span>seldom.TestCase<span class="token punctuation">)</span>:

    def test_case<span class="token punctuation">(</span>self<span class="token punctuation">)</span>:
        <span class="token string">&quot;&quot;</span>&quot;a simple <span class="token builtin class-name">test</span> <span class="token keyword">case</span> <span class="token string">&quot;&quot;</span>&quot;
        self.assertEqual<span class="token punctuation">(</span><span class="token number">1</span>+1, <span class="token number">2</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token builtin class-name">:</span>
    seldom.main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基本规范：</p><ol><li>创建测试类<code>YouTest</code>并继承<code>seldom.TestCase</code>类。</li><li>创建测试方法<code>test_case</code>, 必须以<code>test</code>开头。</li><li><code>seldom.main()</code>是框架运行的入口方法，接下来详细介绍。</li></ol><h3 id="main-方法" tabindex="-1"><a class="header-anchor" href="#main-方法" aria-hidden="true">#</a> <code>main()</code> 方法</h3><p><code>main()</code>方法是seldom运行测试的入口, 它提供了一些最基本也是最重要的配置。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom

<span class="token comment"># ...</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>
                <span class="token keyword">case</span><span class="token operator">=</span><span class="token string">&quot;test_file.MyClassTest.test_case&quot;</span><span class="token punctuation">,</span>
                browser<span class="token operator">=</span><span class="token string">&quot;chrome&quot;</span><span class="token punctuation">,</span>
                base_url<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
                debug<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>
                timeout<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span>
                app_server<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
                app_info<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
                report<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
                title<span class="token operator">=</span><span class="token string">&quot;百度测试用例&quot;</span><span class="token punctuation">,</span>
                tester<span class="token operator">=</span><span class="token string">&quot;虫师&quot;</span><span class="token punctuation">,</span>
                description<span class="token operator">=</span><span class="token string">&quot;测试环境:chrome&quot;</span><span class="token punctuation">,</span>
                rerun<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>
                language<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token punctuation">,</span>
                whitelist<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                blacklist<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token builtin">open</span><span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
                extensions<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
                failfast<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>
                env<span class="token operator">=</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
                benchmark<span class="token operator">=</span><span class="token boolean">False</span>
                <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数说明</strong></p><ul><li><code>path</code> : 指定测试目录或文件， 与<code>case</code>参数互斥。<code>seldom &gt; 3.7.0 支持 list 传多个目录或文件</code>。</li><li><code>case</code> : 指定测试用例， 与<code>path</code>参数互斥。</li><li><code>browser</code> : 指定浏览器（&quot;chrome&quot;、&quot;firefox&quot; 等）， Web测试。</li><li><code>base_url</code> : 设置全局的基本URL， HTTP测试。</li><li><code>app_info</code> : app 启动信息，参考<code>desired_capabilities</code>配置， app测试。</li><li><code>app_server</code> : appium server 启动地址（默认 http://127.0.0.1:4723）， app测试。</li><li><code>report</code> : 自定义测试报告的名称，默认格式为<code>2020_04_04_11_55_20_result.html</code>。</li><li><code>title</code> : 指定测试报告标题。</li><li><code>tester</code> : 指定测试人员, 默认<code>Anonymous</code>。</li><li><code>description</code> : 指定测试报告描述。</li><li><code>debug</code> : debug模式，设置为True不生成测试HTML测试，默认为<code>False</code>。</li><li><code>rerun</code> : 设置失败重新运行次数，默认为 <code>0</code>。</li><li><code>language</code> : 设置HTML报告中英文，默认<code>en</code>, 中文<code>zh-CN</code>。</li><li><code>timeout</code> : 设置超时时间，默认<code>10</code>秒。</li><li><code>whitelist</code> : 用例标签（label）设置白名单。</li><li><code>blacklist</code> : 用例标签（label）设置黑名单。</li><li><code>open</code> : 是否使用浏览器自动打开测试报告，默认<code>True</code>。</li><li><code>extensions</code>: 加载扩展，appium使用。</li><li><code>failfast</code>: 当执行到失败的用例时，停止执行，仅在 <code>debug=True</code>时有效。</li><li><code>env</code>: 设置运行环境变量。</li><li><code>benchmark</code>: 是否进行基准测试。</li></ul><h3 id="confrun-py-配置文件" tabindex="-1"><a class="header-anchor" href="#confrun-py-配置文件" aria-hidden="true">#</a> <code>confrun.py</code> 配置文件</h3><blockquote><p>seldom 3.1.0 提供过了 <code>confrun.py</code> 用于配置运行环境。 配置函数与 <code>seldom.main()</code> 的参数一致。</p></blockquote><p>在这个文件中可以定义运行相关的钩子函数。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
seldom confrun.py hooks function
&quot;&quot;&quot;</span>
<span class="token keyword">from</span> seldom<span class="token punctuation">.</span>appium_lab<span class="token punctuation">.</span>android <span class="token keyword">import</span> UiAutomator2Options


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
    capabilities <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;automationName&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;UiAutomator2&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;platformName&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Android&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;appPackage&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;com.meizu.flyme.flymebbs&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;appActivity&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;com.meizu.myplus.ui.splash.SplashActivity&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;noReset&quot;</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    options <span class="token operator">=</span> UiAutomator2Options<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>load_capabilities<span class="token punctuation">(</span>capabilities<span class="token punctuation">)</span>
    <span class="token keyword">return</span> options


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


<span class="token keyword">def</span> <span class="token function">mock_url</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    Replace the fixed url with the mock url
    :return:
    &quot;&quot;&quot;</span>
    config <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;http://httpbin.org/get&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;http://127.0.0.1:8000/api/data&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> config


<span class="token keyword">def</span> <span class="token function">failfast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;Use case exe failed to stop, only support debug=True&quot;&quot;&quot;</span>
    <span class="token keyword">return</span> <span class="token boolean">False</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上配置根据需求自动化项目类型配置，相互可能冲突的钩子函数：</p><ul><li>Web UI测试: <code>browser()</code></li><li>http 接口测试: <code>base_url()</code></li><li>app UI测试: <code>app_info()</code>, <code>app_server()</code></li></ul><p>参数表格：</p><table><thead><tr><th>seldom.main() （参数）</th><th>confrun.py (函数)</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>path</td><td>-</td><td>通用</td><td>指定测试目录或文件， 与<code>case</code>参数互斥。</td></tr><tr><td>case</td><td>-</td><td>通用</td><td>指定测试用例， 与<code>path</code>参数互斥。</td></tr><tr><td>browser</td><td>browser()</td><td>Web</td><td>指定web测试运行的浏览器。</td></tr><tr><td>base_url</td><td>base_url()</td><td>HTTP</td><td>指定HTTP接口测试的基本URL。</td></tr><tr><td>-</td><td>mock_url()</td><td>HTTP</td><td>配置HTTP接口 mock URL。</td></tr><tr><td>-</td><td>proxies()</td><td>HTTP</td><td>配置HTTP接口proxies代理。</td></tr><tr><td>app_info</td><td>app_info()</td><td>App</td><td>app 启动信息，参考appium <code>desired_capabilities</code>配置， app测试。</td></tr><tr><td>app_server</td><td>app_server()</td><td>App</td><td>appium server 启动地址（默认 http://127.0.0.1:4723）， app测试。</td></tr><tr><td>report</td><td>report()</td><td>通用</td><td>自定义测试报告的名称，例如<code>result.html/result.xml</code>。</td></tr><tr><td>title</td><td>title()</td><td>通用</td><td>指定HTML报告标题。</td></tr><tr><td>tester</td><td>tester()</td><td>通用</td><td>指定HTML报告测试人员。</td></tr><tr><td>description</td><td>description()</td><td>通用</td><td>指定HTML报告描述。</td></tr><tr><td>language</td><td>language()</td><td>通用</td><td>设置HTML报告中英文，默认<code>en</code>, 中文<code>zh-CN</code>。</td></tr><tr><td>debug</td><td>debug()</td><td>通用</td><td>debug模式，设置为True不生成测试HTML测试，默认为<code>False</code>。</td></tr><tr><td>rerun</td><td>rerun()</td><td>通用</td><td>设置失败重新运行次数。</td></tr><tr><td>timeout</td><td>timeout()</td><td>通用</td><td>设置自动化全局超时时间，默认<code>10</code>秒。作用于元素定位、断言等。</td></tr><tr><td>whitelist</td><td>whitelist()</td><td>通用</td><td>用例标签（label）设置白名单。</td></tr><tr><td>blacklist</td><td>blacklist()</td><td>通用</td><td>用例标签（label）设置黑名单。</td></tr><tr><td>open</td><td>-</td><td>通用</td><td>是否使用浏览器自动打开测试报告，默认<code>True</code>。</td></tr><tr><td>extensions</td><td>-</td><td>App</td><td>加载扩展，appium使用。</td></tr><tr><td>failfast</td><td>-</td><td>通用</td><td>当执行到失败的用例时，停止执行，仅在 <code>debug=True</code>时有效。</td></tr><tr><td>env</td><td>-</td><td>通用</td><td>设置运行环境变量。</td></tr><tr><td>benchmark</td><td>-</td><td>通用</td><td>是否进行基准测试。</td></tr></tbody></table><h3 id="运行测试" tabindex="-1"><a class="header-anchor" href="#运行测试" aria-hidden="true">#</a> 运行测试</h3><p>seldom 的运行有三种方式：</p><ul><li><code>main()</code> 方法：在<code>.py</code> 文件中使用<code>seldom.main()</code> 方法。</li><li><code>seldom</code> 命令：通过<code>sedom</code> 命令指定要运行的目录&amp;文件&amp;类&amp;方法。</li><li><s><code>pycharm</code>右键执行：这种方式无法读取到配置，有严重缺陷。</s></li></ul><blockquote><p>强烈建议使用前两种！！</p></blockquote><p><strong>1. <code>main()</code>方法运行测试</strong></p><ul><li>目录结构</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mypro/
├── test_dir/
│   ├── __init__.py
│   ├── test_sample.py
└── run.py  # 运行配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建 <code>test_sample.py</code> 文件，在测试文件中使用<code>main()</code>方法，如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># test_sample.py</span>
<span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom <span class="token keyword">import</span> data


<span class="token keyword">class</span> <span class="token class-name">YouTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_case</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;a simple test case &quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

    <span class="token decorator annotation punctuation">@data</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">(</span><span class="token string">&quot;case1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;seldom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token string">&quot;case2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;XTestRunner&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_ddt</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> search<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot; ddt case &quot;&quot;&quot;</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;name: </span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">, search_key: </span><span class="token interpolation"><span class="token punctuation">{</span>search<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token comment"># 运行当前文件中的用例</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 默认运行当前文件中所有用例</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token keyword">case</span><span class="token operator">=</span><span class="token string">&quot;test_sample&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 指定当前文件</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token keyword">case</span><span class="token operator">=</span><span class="token string">&quot;test_sample.YouTest&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 指定测试类</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token keyword">case</span><span class="token operator">=</span><span class="token string">&quot;test_sample.YouTest.test_case&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 指定测试用例</span>

    <span class="token comment"># 使用参数化的用例</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token keyword">case</span><span class="token operator">=</span><span class="token string">&quot;test_sample.YouTest.test_ddt&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 错误用法</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token keyword">case</span><span class="token operator">=</span><span class="token string">&quot;test_sample.YouTest.test_ddt_0&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 正确用法，0表示第一条数据用例</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建 <code>run.py</code> 文件，用于全局的指定要运行的用例。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token comment"># 指定运行其他目录&amp;文件</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">&quot;./&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 指定当前文件所在目录下面的用例。</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">&quot;./test_dir/&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 指定当前目录下面的test_dir/ 目录下面的用例。</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">&quot;./test_dir/test_sample.py&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 指定测试文件中的用例。</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">&quot;D:/seldom_sample/test_dir/test_sample.py&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 指定文件的绝对路径。</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>seldom.main()</code> 提供哪些参数，请参考前面的文档。</p><ul><li>运行测试文件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> mypro/  <span class="token comment"># 进入项目根目录</span>
<span class="token operator">&gt;</span> python ./test_dir/test_sample.py      <span class="token comment"># 运行指定测试文件</span>
<span class="token operator">&gt;</span> python run.py      <span class="token comment"># 运行run.py文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. seldom命令执行</strong></p><ul><li>目录结构</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mypro/
├── test_dir/
│   ├── __init__.py
│   ├── test_sample.py
└── confrun.py  # 运行配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>seldom -p</code>命令指定目录和文件。</p><p><code>seldom -m</code>命令可以提供更细粒度的运行。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> mypro/  <span class="token comment"># 进入项目根目录</span>
<span class="token operator">&gt;</span> seldom <span class="token parameter variable">-p</span> test_dir  <span class="token comment"># 运行目录</span>
<span class="token operator">&gt;</span> seldom <span class="token parameter variable">-p</span> test_dir/test_sample.py  <span class="token comment"># 运行文件</span>
<span class="token operator">&gt;</span> seldom <span class="token parameter variable">-m</span> test_dir.test_sample       <span class="token comment"># 运行文件</span>
<span class="token operator">&gt;</span> seldom <span class="token parameter variable">-m</span> test_dir.test_sample.YouTest <span class="token comment"># 运行 SampleTest 测试类</span>
<span class="token operator">&gt;</span> seldom <span class="token parameter variable">-m</span> test_dir.test_sample.YouTest.test_case <span class="token comment"># 运行 test_case 测试方法</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行相关的配置，可以在<code>confrun.py</code> 文件中配置。</p><p><strong>3. 在pyCharm中运行测试</strong></p><blockquote><p>强烈不建议这种方式，除非你的测试用例没有任何依赖。</p></blockquote><p>步骤一：配置测试用例通过 unittest 运行。</p><p><img src="`+u+'" alt=""></p><p>步骤二：在文件中选择测试类或用例执行。</p><p><img src="'+d+`" alt=""></p><blockquote><p>警告：运行用例打开的浏览器，需要手动关闭， seldom不做用例关闭操作。</p></blockquote><h3 id="失败重跑" tabindex="-1"><a class="header-anchor" href="#失败重跑" aria-hidden="true">#</a> 失败重跑</h3><p>Seldom支持<code>错误</code>&amp;<code>失败</code>重跑。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># test_sample.py</span>
<span class="token keyword">import</span> seldom


<span class="token keyword">class</span> <span class="token class-name">YouTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_error</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;error case&quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">test_fail</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;fail case &quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>rerun<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明：</p><ul><li>rerun: 指定重跑的次数，默认为 <code>0</code>。</li></ul><p>运行日志：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> python test_sample.py


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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试报告" tabindex="-1"><a class="header-anchor" href="#测试报告" aria-hidden="true">#</a> 测试报告</h3><p>seldom 默认生成HTML测试报告，在运行测试文件下自动创建<code>reports</code>目录。</p><ul><li>运行测试用例前</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mypro/
└── test_sample.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>运行测试用例后</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mypro/
├── reports/
│   ├── 2020_01_01_11_20_33_result.html
│   ├── seldom_log.log
└── test_sample.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过浏览器打开 <code>2020_01_01_11_20_33_result.html</code> 测试报告，查看测试结果。</p><p><img src="`+r+`" alt=""></p><p><strong>debug模式</strong></p><p>如果不想每次运行都生成HTML报告，可以打开<code>debug</code>模式。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom

seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>定义测试报告</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom

seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>report<span class="token operator">=</span><span class="token string">&quot;./report.html&quot;</span><span class="token punctuation">,</span>
            title<span class="token operator">=</span><span class="token string">&quot;百度测试用例&quot;</span><span class="token punctuation">,</span>
            tester<span class="token operator">=</span><span class="token string">&quot;虫师&quot;</span><span class="token punctuation">,</span>
            description<span class="token operator">=</span><span class="token string">&quot;测试环境：windows 10/ chrome&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>report: 配置报告名称和路径。</li><li>title: 自定义报告的标题。</li><li>tester: 指定自动化测试工程师名字。</li><li>description: 添加报告信息，支持列表, 例如：[&quot;OS: windows&quot;,&quot;Browser: chrome&quot;]。</li></ul><p><strong>XML测试报告</strong></p><p>如果需要生成XML格式的报告，只需要修改报告的后缀名为<code>.xml</code>即可。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom

seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>report<span class="token operator">=</span><span class="token string">&quot;report.xml&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多线程运行" tabindex="-1"><a class="header-anchor" href="#多线程运行" aria-hidden="true">#</a> 多线程运行</h3><p>多线程无疑可以缩短用例的运行时间，一般由两种方式实现。</p><ol><li>设置线程数，交由框架去分配用例，或按照测试用例、测试类、测试模块分配给线程执行。</li></ol><ul><li>优点：简单，例如 pytest-xdist ，只需要指定 <code>线程数</code> 即可。</li><li>缺点：无法控制用例的拆分粒度，如果在设计用例时，不同的用例有依赖，刚好被分到的不同的线程，那么必定导致用例失败。</li></ul><ol start="2"><li>自己分好线程，分别调用框架执行。</li></ol><ul><li>优点：手动划分线程，可以按照目录、文件、甚至测试类或方法 拆分线程。</li><li>缺点：首先会比较麻烦，而且多个线程的执行结果无法很好的合并到一起。</li></ul><p>seldom 推荐第二种方法，把线程的划分方式交给用户，无疑是更灵活的方法。至于报告的合并统计就每有什么好办法了。</p><ul><li>用例维度使用多线程。</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom<span class="token punctuation">.</span>extend_lib <span class="token keyword">import</span> threads


<span class="token keyword">class</span> <span class="token class-name">MyTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_baidu</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;https://www.baidu.com&quot;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">test_bing</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;https://www.bing.com&quot;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@threads</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment"># !!!核心!!!! 设置线程数</span>
<span class="token keyword">def</span> <span class="token function">run_case</span><span class="token punctuation">(</span><span class="token keyword">case</span><span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> browser<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    根据传入的case执行用例
    &quot;&quot;&quot;</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token keyword">case</span><span class="token operator">=</span><span class="token keyword">case</span><span class="token punctuation">,</span> browser<span class="token operator">=</span>browser<span class="token punctuation">,</span> debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    <span class="token comment"># 将两条用例拆分，分别用不同的浏览器执行</span>
    cases <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;test_thread_case.MyTest.test_baidu&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;chrome&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;test_thread_case.MyTest.test_bing&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;edge&quot;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token keyword">in</span> cases<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        run_case<span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>目录或文件维度使用多线程。</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom<span class="token punctuation">.</span>extend_lib <span class="token keyword">import</span> threads


<span class="token decorator annotation punctuation">@threads</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>  <span class="token comment"># !!!核心!!!! 设置线程数</span>
<span class="token keyword">def</span> <span class="token function">run_case</span><span class="token punctuation">(</span>path<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    根据传入的path执行用例
    &quot;&quot;&quot;</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>path<span class="token operator">=</span>path<span class="token punctuation">,</span> debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    <span class="token comment"># 定义3个测试文件，分别丢给3个线程执行。</span>
    paths <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;./test_dir/more_case/test_case1.py&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;./test_dir/more_case/test_case2.py&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;./test_dir/more_case/test_case3.py&quot;</span>
    <span class="token punctuation">]</span>
    <span class="token keyword">for</span> p <span class="token keyword">in</span> paths<span class="token punctuation">:</span>
        run_case<span class="token punctuation">(</span>p<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,79))])}const g=e(k,[["render",m],["__file","quick_start.html.vue"]]);export{g as default};
