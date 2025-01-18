import{_ as s,o as a,c as e,e as t}from"./app-148fbfef.js";const o={};function p(i,n){return a(),e("div",null,n[0]||(n[0]=[t(`<h1 id="平台化支持" tabindex="-1"><a class="header-anchor" href="#平台化支持" aria-hidden="true">#</a> 平台化支持</h1><p>为了更好的支持测试用例平台化，Seldom 提供了API用于获取用例列表，以及根据传入的用例信息运行测试用例。</p><h2 id="接入平台方式" tabindex="-1"><a class="header-anchor" href="#接入平台方式" aria-hidden="true">#</a> 接入平台方式</h2><p>seldom-platform项目: https://github.com/SeldomQA/seldom-platform</p><p>目录结构如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mypro/
├── test_dir/
│   ├── module_api/
│   │   ├── test_http_demo.py
│   ├── module_web/
│   │   ├── test_first_demo.py
│   │   ├── test_ddt_demo.py
└── run.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取用例信息" tabindex="-1"><a class="header-anchor" href="#获取用例信息" aria-hidden="true">#</a> 获取用例信息</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># run.py</span>
<span class="token keyword">from</span> seldom <span class="token keyword">import</span> SeldomTestLoader
<span class="token keyword">from</span> seldom <span class="token keyword">import</span> TestMainExtend

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    SeldomTestLoader<span class="token punctuation">.</span>collectCaseInfo <span class="token operator">=</span> <span class="token boolean">True</span>
    main_extend <span class="token operator">=</span> TestMainExtend<span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">&quot;./test_dir/&quot;</span><span class="token punctuation">)</span>
    case_info <span class="token operator">=</span> main_extend<span class="token punctuation">.</span>collect_cases<span class="token punctuation">(</span>json<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>case_info<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>说明</strong></p><p>返回的用例信息列表：</p><ul><li><code>collectCaseInfo</code> ：<code>collectCaseInfo</code>设置为<code>True</code> 说明需要收集用例信息。</li><li><code>TestMainExtend(path=&quot;./test_dir/&quot;)</code> ： <code>TestMainExtend</code>类是<code>TestMain</code>类的扩展，<code>path</code>设置收集用例的目录，不能为空。</li><li><code>collect_cases(json=False, level=&quot;data&quot;, warning=False)</code>：返回收集的用例信息。 <ul><li><code>json=False</code>：默认为<code>list</code>格式；设置为<code>True</code>返回<code>json</code>格式。</li><li><code>level=&quot;data&quot;</code> ：默认为<code>data</code>，数据驱动的每条数据被解析为一条用例。如果设置为 <code>method</code> 数据驱动的方法被解析为一条用例。</li><li><code>warning=False</code>: 默认为<code>False</code>, 在收集用例的过程中，因为缺少依赖库，或导包错误会导致部分用例收集报错，是否要将这些错误保存下来。开启（True）后，默认保存在<code>reports/collect_warning.log</code> 文件中。</li></ul></li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module_api.test_http_demo&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TestRequest&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;doc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\n    http api test demo\\n    doc: https://requests.readthedocs.io/en/master/\\n    &quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_get_method&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;doc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\n        test get request\\n        &quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module_api.test_http_demo&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TestRequest&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;doc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\n    http api test demo\\n    doc: https://requests.readthedocs.io/en/master/\\n    &quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_post_method&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;doc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\n        test post request\\n        &quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module_web.test_ddt_demo&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BaiduTest&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;doc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Baidu search test case&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_baidu_0&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;doc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;used parameterized test [with name=1, search_key=&#39;seldom&#39;]\\n        :param name: case name\\n        :param search_key: search keyword\\n        &quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module_web.test_ddt_demo&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BaiduTest&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;doc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Baidu search test case&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_baidu_1&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;doc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;used parameterized test [with name=2, search_key=&#39;selenium&#39;]\\n        :param name: case name\\n        :param search_key: search keyword\\n        &quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module_web.test_ddt_demo&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BaiduTest&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;doc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Baidu search test case&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_baidu_2&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;doc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;used parameterized test [with name=3, search_key=&#39;unittest&#39;]\\n        :param name: case name\\n        :param search_key: search keyword\\n        &quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module_web.test_first_demo&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BaiduTest&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;doc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Baidu search test case&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_case&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;doc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;a simple test case &quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数据结构说明：</p><ul><li>file: 获取类的文件名，包含目录名。</li><li>class: 测试类的名字<code>name</code> 和 描述<code>doc</code>。</li><li>method: 测试方法的名字<code>name</code> 和 描述<code>doc</code>, <code>label</code>。</li></ul><blockquote><p>注明：seldom==3.11.0 版本测试方法增加<code>label</code>字段。</p></blockquote><h3 id="执行用例信息" tabindex="-1"><a class="header-anchor" href="#执行用例信息" aria-hidden="true">#</a> 执行用例信息</h3><p>当获取用例信息之后，可以进行自定义，例如 挑选出需要执行的用例，重新传给Seldom 执行。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># run.py</span>
<span class="token keyword">from</span> seldom <span class="token keyword">import</span> TestMainExtend

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token comment"># 自定义要执行的用例</span>
    cases <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;file&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;module_web.test_first_demo&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;class&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;BaiduTest&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;doc&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Baidu search test case&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token string">&quot;method&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;test_case&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;doc&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;a simple test case &quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;label&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
    main_extend <span class="token operator">=</span> TestMainExtend<span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">&quot;./test_dir&quot;</span><span class="token punctuation">)</span>
    main_extend<span class="token punctuation">.</span>run_cases<span class="token punctuation">(</span>cases<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><ul><li><code>cases</code> 定义要执行的用例信息， <code>doc</code> 非必填字段。</li><li><code>TestMainExtend(path=&quot;./test_dir&quot;)</code> : 其中<code>path</code>指定从哪个目录查找用例集合。</li><li><code>run_cases(cases)</code>: 运行用例。</li></ul><h2 id="接入平台必读" tabindex="-1"><a class="header-anchor" href="#接入平台必读" aria-hidden="true">#</a> 接入平台必读</h2><p>如果你只是使用seldom框架编写用例，那么代码只要框架能运行即可，如果要接入seldom-platform平台，那么需要注意一下几点。</p><h4 id="🚧-测试每个子目录必须包含-init-py文件。" tabindex="-1"><a class="header-anchor" href="#🚧-测试每个子目录必须包含-init-py文件。" aria-hidden="true">#</a> 🚧 测试每个子目录必须包含<code>__init__.py</code>文件。</h4><ul><li>目录结构</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>├───reports
├───test_data
├───test_dir
│   ├───api_case
│   │   └───__init__.py
│   ├───app_case
│   │   └───__init__.py
│   ├───web_case
│   │   └───__init__.py
│   └───__init__.py
└───run.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如果子目录不添加 <strong>init</strong>.py 文件会导致目录下面的用例无法解析。</p></blockquote><h4 id="🚧-用例的前置动作" tabindex="-1"><a class="header-anchor" href="#🚧-用例的前置动作" aria-hidden="true">#</a> 🚧 用例的前置动作</h4><p>在用 seldom框架写用例的时候需要执行一些<code>前置/后置</code>动作。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom<span class="token punctuation">.</span>utils <span class="token keyword">import</span> cache

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token comment"># 前置动作</span>
    cache<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;token123&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment"># 执行用例</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token string">&quot;./test_dir&quot;</span><span class="token punctuation">)</span>
    <span class="token comment"># 后置动作</span>
    cache<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，平台执行的时候，不会执行 <code>前置/后置</code>动作。 那么，为了使平台可以执行前置动作，需要使用<code>confrun.py</code>文件进行配置。</p><ul><li>目录结构</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>├───reports
├───test_data
├───test_dir
│   ├───<span class="token punctuation">..</span>.
├───confrun.py
└───run.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>confrun.py配置</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
seldom confrun.py  hooks function
&quot;&quot;&quot;</span>
<span class="token keyword">from</span> seldom<span class="token punctuation">.</span>utils <span class="token keyword">import</span> cache


<span class="token keyword">def</span> <span class="token function">start_run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;前置动作&quot;&quot;&quot;</span>
    cache<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;token123&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">end_run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;后置动作&quot;&quot;&quot;</span>
    cache<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>run.py文件</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token comment"># 执行用例</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token string">&quot;./test_dir&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的配置，<code>前置、后置</code>动作就可以在平台上运行，当然，这样设置本地也可正常运行。</p>`,37)]))}const c=s(o,[["render",p],["__file","platform.html.vue"]]);export{c as default};
