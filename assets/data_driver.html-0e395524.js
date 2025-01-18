import{_ as p,r as o,o as i,c,e as a,a as t,b as s,d as l}from"./app-148fbfef.js";const u={},d={href:"https://github.com/datadriventests/ddt",target:"_blank",rel:"noopener noreferrer"};function r(k,n){const e=o("ExternalLinkIcon");return i(),c("div",null,[n[3]||(n[3]=a(`<h1 id="数据驱动" tabindex="-1"><a class="header-anchor" href="#数据驱动" aria-hidden="true">#</a> 数据驱动</h1><p>数据驱动是测试框架非常重要的功能之一，它可以有效的节约大量重复的测试代码。seldom针对该功能做强大的支持。</p><h3 id="class-data-方法" tabindex="-1"><a class="header-anchor" href="#class-data-方法" aria-hidden="true">#</a> @class_data() 方法</h3><p><code>class_data()</code> 装饰测试类，测试类下面的任何方法可以共用 <code>class_data()</code> 中定义的变量。</p><ul><li>用法一</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom <span class="token keyword">import</span> data_class


<span class="token decorator annotation punctuation">@data_class</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;user_1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;abc123&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;user_2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;abc456&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">DDTTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_data_func</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot; data driver case &quot;&quot;&quot;</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;username-&gt;&quot;</span><span class="token punctuation">,</span> self<span class="token punctuation">.</span>username<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;password-&gt;&quot;</span><span class="token punctuation">,</span> self<span class="token punctuation">.</span>password<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>用法二</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom <span class="token keyword">import</span> data_class


<span class="token decorator annotation punctuation">@data_class</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token punctuation">(</span><span class="token string">&quot;user_1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;abc123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token string">&quot;user_1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;abc456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">DDTTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_data_func</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot; data driver case &quot;&quot;&quot;</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;username-&gt;&quot;</span><span class="token punctuation">,</span> self<span class="token punctuation">.</span>username<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;password-&gt;&quot;</span><span class="token punctuation">,</span> self<span class="token punctuation">.</span>password<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="data-方法" tabindex="-1"><a class="header-anchor" href="#data-方法" aria-hidden="true">#</a> @data()方法</h3><p>当测试数据量比较少的情况下，可以通过<code>@data()</code>管理测试数据。</p><p><strong>参数化测试用例</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom <span class="token keyword">import</span> data


<span class="token keyword">class</span> <span class="token class-name">DataDriverTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token decorator annotation punctuation">@data</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">(</span><span class="token string">&quot;First case&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;seldom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token string">&quot;Second case&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;selenium&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token string">&quot;Third case&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;unittest&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_tuple_data</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> keyword<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        Used tuple test data
        :param name: case desc
        :param keyword: case data
        &quot;&quot;&quot;</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;test data: </span><span class="token interpolation"><span class="token punctuation">{</span>keyword<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>

    <span class="token decorator annotation punctuation">@data</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">[</span><span class="token string">&quot;First case&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;seldom&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;Second case&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;selenium&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string">&quot;Third case&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;unittest&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_list_data</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> keyword<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        Used list test data
        &quot;&quot;&quot;</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;test data: </span><span class="token interpolation"><span class="token punctuation">{</span>keyword<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>

    <span class="token decorator annotation punctuation">@data</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span><span class="token string">&quot;scene&quot;</span><span class="token punctuation">:</span> <span class="token string">&#39;First case&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;keyword&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;seldom&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token string">&quot;scene&quot;</span><span class="token punctuation">:</span> <span class="token string">&#39;Second case&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;keyword&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;selenium&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token string">&quot;scene&quot;</span><span class="token punctuation">:</span> <span class="token string">&#39;Third case&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;keyword&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;unittest&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_dict_data</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> scene<span class="token punctuation">,</span> keyword<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        used dict test data
        &quot;&quot;&quot;</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;case desc: </span><span class="token interpolation"><span class="token punctuation">{</span>scene<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;test data: </span><span class="token interpolation"><span class="token punctuation">{</span>keyword<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>

    <span class="token decorator annotation punctuation">@data</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
        cartesian<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_cartesian_product</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> one<span class="token punctuation">,</span> two<span class="token punctuation">,</span> three<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        cartesian product
        &quot;&quot;&quot;</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;test data: </span><span class="token interpolation"><span class="token punctuation">{</span>one<span class="token punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token punctuation">{</span>two<span class="token punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token punctuation">{</span>three<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过<code>@data()</code> 装饰器来参数化测试用例。</p><p><strong>动态生成测试数据</strong></p><p>除了使用固定的数据外，也可以动态生成一些测试数据用于自动化测试。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom <span class="token keyword">import</span> data
<span class="token keyword">from</span> seldom <span class="token keyword">import</span> testdata


<span class="token keyword">def</span> <span class="token function">test_data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">list</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    自动生成测试数据
    return [{},{}]
    &quot;&quot;&quot;</span>
    login_data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        login_data<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token string">&quot;scene&quot;</span><span class="token punctuation">:</span> <span class="token string-interpolation"><span class="token string">f&quot;login</span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">,</span>
            <span class="token string">&quot;username&quot;</span><span class="token punctuation">:</span> testdata<span class="token punctuation">.</span>get_email<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token string">&quot;password&quot;</span><span class="token punctuation">:</span> testdata<span class="token punctuation">.</span>get_int<span class="token punctuation">(</span><span class="token number">100000</span><span class="token punctuation">,</span> <span class="token number">999999</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> login_data


<span class="token keyword">class</span> <span class="token class-name">MyTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token decorator annotation punctuation">@data</span><span class="token punctuation">(</span>test_data<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_login</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> _<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;test login&quot;&quot;&quot;</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;test username: </span><span class="token interpolation"><span class="token punctuation">{</span>username<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;test password: </span><span class="token interpolation"><span class="token punctuation">{</span>password<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="file-data-方法" tabindex="-1"><a class="header-anchor" href="#file-data-方法" aria-hidden="true">#</a> @file_data() 方法</h3><p>当测试数据量比较大的情况下，可以通过<code>@file_data()</code>管理测试数据。</p><p><strong>CSV 文件参数化</strong></p><p>seldom 支持将<code>csv</code>文件的参数化。</p><p>表格内容如下（data.csv）：</p><table><thead><tr><th>username</th><th>password</th></tr></thead><tbody><tr><td>admin</td><td>admin123</td></tr><tr><td>guest</td><td>guest123</td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom <span class="token keyword">import</span> file_data


<span class="token keyword">class</span> <span class="token class-name">YouTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token decorator annotation punctuation">@file_data</span><span class="token punctuation">(</span><span class="token string">&quot;data.csv&quot;</span><span class="token punctuation">,</span> line<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> end_line<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_login</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;a simple test case &quot;&quot;&quot;</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span>
        <span class="token comment"># ...</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>file: 指定 csv 文件的路径。</li><li>line: 指定从第几行开始读取，默认第 1 行。</li><li>end_line: 指定读取到第几行的数据，默认None, 最后一行。</li></ul><p><strong>excel 文件参数化</strong></p><p>seldom 支持将<code>excel</code>文件的参数化。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom <span class="token keyword">import</span> file_data


<span class="token keyword">class</span> <span class="token class-name">YouTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token decorator annotation punctuation">@file_data</span><span class="token punctuation">(</span><span class="token string">&quot;data.xlsx&quot;</span><span class="token punctuation">,</span> sheet<span class="token operator">=</span><span class="token string">&quot;Sheet1&quot;</span><span class="token punctuation">,</span> line<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> end_line<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_login</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;a simple test case &quot;&quot;&quot;</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span>
        <span class="token comment"># ...</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>file : 指定 excel 文件的路径。</li><li>sheet: 指定 excel 的标签页，默认名称为 Sheet1。</li><li>line : 指定从第几行开始读取，默认第 1 行。</li><li>end_line: 指定读取到第几行的数据，默认None, 最后一行。</li></ul><p><strong>JSON 文件参数化</strong></p><p>seldom 支持将<code>JSON</code>文件的参数化。</p><p>json 文件：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;login1&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;admin123&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;guest&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;guest123&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;login2&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tom123&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Jerry&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jerry123&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注：<code>login1</code> 和 <code>login2</code> 的调用方法一样。 区别是前者更简洁，后者更易读。</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom <span class="token keyword">import</span> file_data


<span class="token keyword">class</span> <span class="token class-name">YouTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token decorator annotation punctuation">@file_data</span><span class="token punctuation">(</span><span class="token string">&quot;data.json&quot;</span><span class="token punctuation">,</span> key<span class="token operator">=</span><span class="token string">&quot;login1&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_login</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;a simple test case &quot;&quot;&quot;</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span>
        <span class="token comment"># ...</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>file : 指定 JSON 文件的路径。</li><li>key: 指定字典的 key，默认不指定解析整个 JSON 文件。</li></ul><p><strong>YAML 文件参数化</strong></p><p>seldom 支持<code>YAML</code>文件的参数化。</p><p>data.yaml 文件：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">login1</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token punctuation">-</span> admin
    <span class="token punctuation">-</span> admin123
  <span class="token punctuation">-</span> <span class="token punctuation">-</span> guest
    <span class="token punctuation">-</span> guest123
<span class="token key atrule">login2</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">username</span><span class="token punctuation">:</span> Tom
    <span class="token key atrule">password</span><span class="token punctuation">:</span> tom123
  <span class="token punctuation">-</span> <span class="token key atrule">username</span><span class="token punctuation">:</span> Jerry
    <span class="token key atrule">password</span><span class="token punctuation">:</span> jerry123
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同<code>JSON</code>用法一样，<code>YAML</code>书写更加简洁。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom <span class="token keyword">import</span> file_data


<span class="token keyword">class</span> <span class="token class-name">YouTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token decorator annotation punctuation">@file_data</span><span class="token punctuation">(</span><span class="token string">&quot;data.yaml&quot;</span><span class="token punctuation">,</span> key<span class="token operator">=</span><span class="token string">&quot;login1&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_login</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;a simple test case &quot;&quot;&quot;</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span>
        <span class="token comment"># ...</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>file : 指定 YAML 文件的路径。</li><li>key: 指定字典的 key，默认不指定解析整个 YAML 文件。</li></ul><p><strong>解释： <code>@file_data()</code>是如何查找测试数据文件的？</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mypro/
├── test_dir/
│   ├── module/
│   │   ├── case/
│   │   │   ├── test_sample.py <span class="token punctuation">(</span>使用@file_data<span class="token punctuation">)</span>
├── test_data/
│   ├── module_data/
│   │   ├── data.csv <span class="token punctuation">(</span>测试数据文件所以位置<span class="token punctuation">)</span>
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>test_sample.py</code> 中使用<code>@file_data(&quot;data.csv&quot;)</code>默认只能向上查找两级目录，即到<code>module</code>目录下遍历查找<code>data.csv</code> 文件。显然这中情况下是无法找到<code>data.csv</code> 文件的。</p><p>如果用例层级比较深，只需要指定文件目录的<code>“相对路径”</code>即可，使用方式：<code>@file_data(&quot;test_data/module_data/data.csv&quot;)</code> ，不要加<code>./</code>的前缀。</p><p><strong>支持配置测试环境</strong></p><p>在自动化测试过程中，我们往往需要一套代码在不同的环境下运行，seldom支持根据环境使用不同的数据文件。</p><ul><li>数据文件目录结构（一）</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
└── test_data
    ├── develop
    │   └── test_data.json
    ├── product
    │   └── test_data.json
    └── <span class="token builtin class-name">test</span>
        └── test_data.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>数据文件目录结构（二）</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
├── develop
│   └── test_data
│       └── test_data.json
├── product
│       └── test_data
│         └── test_data.json
└── <span class="token builtin class-name">test</span>
    └── test_data
        └── test_data.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置测试环境</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom <span class="token keyword">import</span> file_data


<span class="token keyword">class</span> <span class="token class-name">MyTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token comment"># 数据文件目录结构（一）</span>
    <span class="token decorator annotation punctuation">@file_data</span><span class="token punctuation">(</span><span class="token string">&quot;test_data.json&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_case</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> req<span class="token punctuation">,</span> resp<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token string-interpolation"><span class="token string">f&quot;&quot;&quot;a simple test case&quot;&quot;&quot;</span></span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token comment"># 数据文件目录结构（二）</span>
    <span class="token decorator annotation punctuation">@file_data</span><span class="token punctuation">(</span><span class="token string">&quot;test_data/test_data.json&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_case</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> req<span class="token punctuation">,</span> resp<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token string-interpolation"><span class="token string">f&quot;&quot;&quot;a simple test case&quot;&quot;&quot;</span></span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token comment"># test/develop/product 设置当前环境</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> env<span class="token operator">=</span><span class="token string">&quot;product&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>env</code> 默认为<code>None</code>，当设置了<code>环境变量</code>，<code>@file_data()</code>会带上<code>环境变量</code>的目录名，例如:</p><ul><li><code>test_data.json</code> 查找的文件为 <code>product/test_data.json</code></li><li><code>test_data/test_data.json</code> 查找的文件为 <code>product/test_data/test_data.json</code></li></ul><blockquote><ul><li><code>env</code> 可以随意命名，但最好遵循一定的规范，例如<code>test/develop/product</code>用于区分不同的环境。</li><li>我们还可以利用<code>env</code>环境变量实现更多的配置，下面的示例。</li></ul></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom <span class="token keyword">import</span> Seldom


<span class="token keyword">class</span> <span class="token class-name">MyTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_env</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> Seldom<span class="token punctuation">.</span>env <span class="token operator">==</span> <span class="token string">&quot;product&quot;</span><span class="token punctuation">:</span>
            username <span class="token operator">=</span> <span class="token string">&quot;admin&quot;</span>
        <span class="token keyword">elif</span> Seldom<span class="token punctuation">.</span>env <span class="token operator">==</span> <span class="token string">&quot;develop&quot;</span><span class="token punctuation">:</span>
            username <span class="token operator">=</span> <span class="token string">&quot;guest&quot;</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            username <span class="token operator">=</span> <span class="token string">&quot;tom&quot;</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> env<span class="token operator">=</span><span class="token string">&quot;product&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="api-data-方法" tabindex="-1"><a class="header-anchor" href="#api-data-方法" aria-hidden="true">#</a> @api_data()方法</h3><p>越来越多的公司落地 数据工厂，通过造数平台/数据工厂 来创建管理测试数据；<code>@api_data()</code> 装饰器支持通过URL获取驱动数据。</p><ul><li>接口数据</li></ul><p><code>http://127.0.0.1:8080/v1/public/data_service/get_case_data?data_id=1</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;success&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;error&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;scene&quot;</span><span class="token operator">:</span> <span class="token string">&quot;测试1&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;li123@126.com&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;abc123&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;scene&quot;</span><span class="token operator">:</span> <span class="token string">&quot;测试2&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;li456@126.com&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;abc456&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>调用接口数据</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom <span class="token keyword">import</span> api_data


<span class="token keyword">class</span> <span class="token class-name">TestApi</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token decorator annotation punctuation">@api_data</span><span class="token punctuation">(</span>url<span class="token operator">=</span><span class="token string">&quot;http://127.0.0.1:8080/v1/public/data_service/get_case_data&quot;</span><span class="token punctuation">,</span>
              params<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;data_id&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
              headers<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;X-Account-Email&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;li.li@gmail.com&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
              ret<span class="token operator">=</span><span class="token string">&quot;result&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_case</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> scene<span class="token punctuation">,</span> email<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        test get request
        &quot;&quot;&quot;</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;name:&quot;</span><span class="token punctuation">,</span> scene<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;email:&quot;</span><span class="token punctuation">,</span> email<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;password:&quot;</span><span class="token punctuation">,</span> password<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code>api_data()</code>参数说明</strong></p><ul><li>url: 返回数据的接口url地址；默认仅支持<code>GET</code> 接口。</li><li>params: 请求参数。</li><li>header: 请求头。</li><li>ret: 提取接口返回的数据，默认仅支持 list 类型。</li></ul><h3 id="使用函数构造数据" tabindex="-1"><a class="header-anchor" href="#使用函数构造数据" aria-hidden="true">#</a> 使用函数构造数据</h3><p>如果数据驱动使用的数据比较简单其有规律，可以通过自定义函数生成，并且把函数传给 <code>@data()</code> 装饰器即可。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom <span class="token keyword">import</span> data


<span class="token keyword">def</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;生成注册账号信息&quot;&quot;&quot;</span>
    users <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        users<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token string">&quot;username&quot;</span><span class="token punctuation">:</span> <span class="token string-interpolation"><span class="token string">f&quot;user</span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">,</span>
            <span class="token string">&quot;password&quot;</span><span class="token punctuation">:</span> <span class="token string-interpolation"><span class="token string">f&quot;abc123</span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">,</span>
            <span class="token string">&quot;password2&quot;</span><span class="token punctuation">:</span> <span class="token string-interpolation"><span class="token string">f&quot;abc123</span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">}</span>
        <span class="token punctuation">)</span>

    <span class="token keyword">return</span> users


<span class="token keyword">class</span> <span class="token class-name">DDTTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token decorator annotation punctuation">@data</span><span class="token punctuation">(</span>register<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_data_func</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">,</span> password2<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot; data driver case &quot;&quot;&quot;</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;username-&gt;&quot;</span><span class="token punctuation">,</span> username<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;password-&gt;&quot;</span><span class="token punctuation">,</span> password<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;password2-&gt;&quot;</span><span class="token punctuation">,</span> password2<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="支持第三方-ddt-库" tabindex="-1"><a class="header-anchor" href="#支持第三方-ddt-库" aria-hidden="true">#</a> 支持第三方 ddt 库</h3>`,71)),t("p",null,[n[1]||(n[1]=s("seldom 仍然允许你使用第三方参数化库，例如：")),t("a",d,[n[0]||(n[0]=s("ddt")),l(e)]),n[2]||(n[2]=s("。"))]),n[4]||(n[4]=a(`<p>安装：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> pip <span class="token function">install</span> ddt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建测试文件<code>test_data.json</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;test_data_1&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;word&quot;</span><span class="token operator">:</span> <span class="token string">&quot;seldom&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;test_data_2&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;word&quot;</span><span class="token operator">:</span> <span class="token string">&quot;unittest&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;test_data_3&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;word&quot;</span><span class="token operator">:</span> <span class="token string">&quot;selenium&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 seldom 使用<code>ddt</code>。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> ddt <span class="token keyword">import</span> ddt<span class="token punctuation">,</span> file_data


<span class="token decorator annotation punctuation">@ddt</span>
<span class="token keyword">class</span> <span class="token class-name">YouTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token decorator annotation punctuation">@file_data</span><span class="token punctuation">(</span><span class="token string">&quot;test_data.json&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_case</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> word<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;a simple test case &quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;https://www.baidu.com&quot;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;kw&quot;</span><span class="token punctuation">,</span> text<span class="token operator">=</span>word<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>click<span class="token punctuation">(</span>css<span class="token operator">=</span><span class="token string">&quot;#su&quot;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>assertTitle<span class="token punctuation">(</span>word <span class="token operator">+</span> <span class="token string">&quot;_百度搜索&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多的用法请查看 ddt 文档：https://ddt.readthedocs.io/en/latest/example.html</p>`,7))])}const m=p(u,[["render",r],["__file","data_driver.html.vue"]]);export{m as default};
