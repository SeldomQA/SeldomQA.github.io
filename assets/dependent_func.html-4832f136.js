import{_ as t,r as o,o as p,c,a as n,b as s,d as i,e as a}from"./app-05b2f541.js";const l={},u=a('<h1 id="方法的依赖" tabindex="-1"><a class="header-anchor" href="#方法的依赖" aria-hidden="true">#</a> 方法的依赖</h1><blockquote><p>在 seldom 3.4.0 版本实现了该功能。</p></blockquote><p>在复杂的测试场景中，常常会存在用例依赖，以一个接口自动化平台为例，依赖关系：</p><p><code>创建用例</code> --&gt; <code>创建模块</code> --&gt; <code>创建项目</code> --&gt; <code>登录</code>。</p><p><strong>用例依赖的问题</strong></p><ul><li>用例的依赖对于的执行顺序有严格的要求，比如让被依赖的方法先执行。</li><li>一旦使用用例依赖，依赖的用例就无法单独执行了，按照用例的设计原则，每条用例都应该独立执行。</li></ul><p><strong>正确的做法</strong></p><p><code>我们应该将依赖的操作封装成方法调用</code>。如果能通过装饰器实现调用，那就很有趣了。</p>',8),d={href:"https://github.com/ae86sen/aomaker",target:"_blank",rel:"noopener noreferrer"},r=a(`<h3 id="类内部方法调用" tabindex="-1"><a class="header-anchor" href="#类内部方法调用" aria-hidden="true">#</a> 类内部方法调用</h3><p>我们可以在测试类下面，创建普通的方法。然后通过<code>@dependent_func()</code>装饰器调用他。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom<span class="token punctuation">.</span>testdata <span class="token keyword">import</span> get_md5
<span class="token keyword">from</span> seldom<span class="token punctuation">.</span>utils <span class="token keyword">import</span> cache<span class="token punctuation">,</span> dependent_func


<span class="token keyword">class</span> <span class="token class-name">DependentTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token decorator annotation punctuation">@staticmethod</span>
    <span class="token keyword">def</span> <span class="token function">user_login</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        模拟用户登录，获取登录token
        &quot;&quot;&quot;</span>
        <span class="token keyword">return</span> get_md5<span class="token punctuation">(</span>username<span class="token operator">+</span>password<span class="token punctuation">)</span>

    <span class="token decorator annotation punctuation">@dependent_func</span><span class="token punctuation">(</span>user_login<span class="token punctuation">,</span> username<span class="token operator">=</span><span class="token string">&quot;tom&quot;</span><span class="token punctuation">,</span> password<span class="token operator">=</span><span class="token string">&quot;t123&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_case</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        sample test case
        &quot;&quot;&quot;</span>
        token <span class="token operator">=</span> cache<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;user_login&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">,</span> token<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    cache<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>说明</strong></p><p>这个例子涉及到不少知识点。</p><ol><li><code>test_case()</code> 用例依赖 <code>user_login()</code> 方法，通过 <code>@dependent_func()</code> 装饰器调用 <code>user_login</code> 方法。</li><li><code>user_login()</code> 方法运行的时候需要参数（username、password），可以直接在 <code>@dependent_func()</code> 装饰器中设置参数：<code>username=&quot;tom&quot;</code>、 <code>password=&quot;t123&quot;</code>。</li><li><code>user_login()</code> 方法运行运行完会生成 token, 保存于 cache中，通过 <code> cache.get()</code> 可以获取到token, 默认通过方法名<code>user_login</code> 作为key获取。</li><li>为了简化代码，生成token 是通过 <code>get_md5()</code> 根据传入的参数生成的一个 md5 值。</li><li><code>cache.clear()</code> 用于清空缓存， 再次调用 <code>user_login()</code> 方法直接不执行，应为cache已经有上次的执行结果了。</li></ol><p><strong>执行日志</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python zzz_demo.py
<span class="token punctuation">..</span>.
test_case <span class="token punctuation">(</span>zzz_demo.DependentTest.test_case<span class="token punctuation">)</span>
sample <span class="token builtin class-name">test</span> <span class="token keyword">case</span> <span class="token punctuation">..</span>. <span class="token number">2023</span>-11-15 <span class="token number">23</span>:26:36 <span class="token operator">|</span> INFO     <span class="token operator">|</span> dependence.py <span class="token operator">|</span> 🔗 <span class="token operator">&lt;</span>test_case<span class="token operator">&gt;</span> depends on <span class="token operator">&lt;</span>user_login<span class="token operator">&gt;</span>, execute.
<span class="token number">2023</span>-11-15 <span class="token number">23</span>:26:36 <span class="token operator">|</span> INFO     <span class="token operator">|</span> cache.py <span class="token operator">|</span> 💾 Set cache data: user_login <span class="token operator">=</span> 35e0ff9c4cba89998dda8255d0eb5408
<span class="token number">2023</span>-11-15 <span class="token number">23</span>:26:36 <span class="token operator">|</span> INFO     <span class="token operator">|</span> cache.py <span class="token operator">|</span> 💾 Get cache data: user_login <span class="token operator">=</span> 35e0ff9c4cba89998dda8255d0eb5408
token 35e0ff9c4cba89998dda8255d0eb5408
ok

----------------------------------------------------------------------
Ran <span class="token number">1</span> <span class="token builtin class-name">test</span> <span class="token keyword">in</span> <span class="token number">0</span>.005s

OK
<span class="token number">2023</span>-11-15 <span class="token number">23</span>:26:36 <span class="token operator">|</span> SUCCESS  <span class="token operator">|</span> runner.py <span class="token operator">|</span> A run the <span class="token builtin class-name">test</span> <span class="token keyword">in</span> debug mode without generating HTML report<span class="token operator">!</span>
<span class="token number">2023</span>-11-15 <span class="token number">23</span>:26:36 <span class="token operator">|</span> INFO     <span class="token operator">|</span> cache.py <span class="token operator">|</span> 💾 Clear all cache data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="外部类方法依赖" tabindex="-1"><a class="header-anchor" href="#外部类方法依赖" aria-hidden="true">#</a> 外部类方法依赖</h3><ul><li>创建依赖方法</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># common.py</span>
<span class="token keyword">from</span> seldom<span class="token punctuation">.</span>testdata <span class="token keyword">import</span> get_md5


<span class="token keyword">class</span> <span class="token class-name">Login</span><span class="token punctuation">:</span>

    <span class="token decorator annotation punctuation">@staticmethod</span>
    <span class="token keyword">def</span> <span class="token function">account_login</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        模拟用户&amp;密码登录，获取登录token
        &quot;&quot;&quot;</span>
        <span class="token keyword">return</span> get_md5<span class="token punctuation">(</span>username<span class="token operator">+</span>password<span class="token punctuation">)</span>


login<span class="token operator">=</span>Login<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>用例引用依赖方法</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom<span class="token punctuation">.</span>utils <span class="token keyword">import</span> cache<span class="token punctuation">,</span> dependent_func
<span class="token keyword">from</span> common <span class="token keyword">import</span> Login <span class="token comment"># 方式1：引用依赖类</span>
<span class="token comment"># from common import login  # 方式2：引用初始化好的类对象</span>


<span class="token keyword">class</span> <span class="token class-name">DependentTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>


    <span class="token decorator annotation punctuation">@dependent_func</span><span class="token punctuation">(</span>Login<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>account_login<span class="token punctuation">,</span> key_name<span class="token operator">=</span><span class="token string">&quot;token1&quot;</span><span class="token punctuation">,</span> username<span class="token operator">=</span><span class="token string">&quot;tom&quot;</span><span class="token punctuation">,</span> password<span class="token operator">=</span><span class="token string">&quot;t123&quot;</span><span class="token punctuation">)</span>
    <span class="token comment"># @dependent_func(login.account_login, key_name=&quot;token1&quot;, username=&quot;tom&quot;, password=&quot;t123&quot;)</span>
    <span class="token keyword">def</span> <span class="token function">test_case</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        Used tuple test data
        &quot;&quot;&quot;</span>
        token <span class="token operator">=</span> cache<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;token1&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">,</span> token<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>说明</strong></p><ol><li><code>Common</code> 类的<code>account_login()</code>方法可以不设置为静态方法，导入时需要类需要加括号：<code>Common().user_login</code>。 或者先初始化类对象<code>login=Login()</code> 再调用。</li><li><code>key_name</code> 指定缓存的 <code>key</code>，如果指定为<code>token1</code>, 从缓存读取也使用这个<code>cache.get(&quot;token1&quot;)</code>。</li></ol><h3 id="多重方法依赖" tabindex="-1"><a class="header-anchor" href="#多重方法依赖" aria-hidden="true">#</a> 多重方法依赖</h3><p>复杂的场景当然是需要多重依赖的。</p><ol><li>被依赖的方法可以进一步使用 <code>dependent_func()</code>装饰器进行多重复依赖。</li></ol><p><code>查询模块</code> --&gt; <code>查询项目</code> --&gt; <code>登录</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># common.py</span>
<span class="token keyword">from</span> seldom<span class="token punctuation">.</span>testdata <span class="token keyword">import</span> get_md5<span class="token punctuation">,</span> get_int
<span class="token keyword">from</span> seldom<span class="token punctuation">.</span>utils <span class="token keyword">import</span> cache<span class="token punctuation">,</span> dependent_func

<span class="token keyword">class</span> <span class="token class-name">Login</span><span class="token punctuation">:</span>

    <span class="token decorator annotation punctuation">@staticmethod</span>
    <span class="token keyword">def</span> <span class="token function">account_login</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        模拟用户&amp;密码登录，获取登录token
        &quot;&quot;&quot;</span>
        <span class="token keyword">return</span> get_md5<span class="token punctuation">(</span>username<span class="token operator">+</span>password<span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">DepFunc</span><span class="token punctuation">:</span>

    <span class="token decorator annotation punctuation">@staticmethod</span>
    <span class="token decorator annotation punctuation">@dependent_func</span><span class="token punctuation">(</span>Login<span class="token punctuation">.</span>account_login<span class="token punctuation">,</span> key_name<span class="token operator">=</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">,</span> username<span class="token operator">=</span><span class="token string">&quot;jack&quot;</span><span class="token punctuation">,</span> password<span class="token operator">=</span><span class="token string">&quot;456&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">get_project_id</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        token <span class="token operator">=</span> cache<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;使用token:</span><span class="token interpolation"><span class="token punctuation">{</span>token<span class="token punctuation">}</span></span><span class="token string"> 查询项目, 返回项目ID&quot;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> get_int<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>


    <span class="token decorator annotation punctuation">@staticmethod</span>
    <span class="token decorator annotation punctuation">@dependent_func</span><span class="token punctuation">(</span>get_project_id<span class="token punctuation">,</span> key_name<span class="token operator">=</span><span class="token string">&quot;pid&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">get_module_id</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        pid <span class="token operator">=</span> cache<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;pid&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;使用项目ID:</span><span class="token interpolation"><span class="token punctuation">{</span>pid<span class="token punctuation">}</span></span><span class="token string"> 查询模块, 返回模块ID&quot;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> get_int<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在用例中直接调用 <code>DepFunc.get_module_id</code> 方法即可。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom<span class="token punctuation">.</span>utils <span class="token keyword">import</span> cache<span class="token punctuation">,</span> dependent_func
<span class="token keyword">from</span> common <span class="token keyword">import</span> DepFunc


<span class="token keyword">class</span> <span class="token class-name">DependentTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>


    <span class="token decorator annotation punctuation">@dependent_func</span><span class="token punctuation">(</span>DepFunc<span class="token punctuation">.</span>get_module_id<span class="token punctuation">,</span> key_name<span class="token operator">=</span><span class="token string">&quot;mid&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_case</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        sample test case
        &quot;&quot;&quot;</span>
        mid <span class="token operator">=</span> cache<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;mid&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;模块ID: </span><span class="token interpolation"><span class="token punctuation">{</span>mid<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    cache<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>测试用例也可以同时使用多个 <code>@dependent_func()</code> 装饰器依赖多个方法，顺序由上到下执行，这种方式主要用于被依赖的方法之间没有依赖关系。</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># common.py</span>
<span class="token keyword">from</span> seldom<span class="token punctuation">.</span>testdata <span class="token keyword">import</span> get_int<span class="token punctuation">,</span> username


<span class="token keyword">class</span> <span class="token class-name">DataFunc</span><span class="token punctuation">:</span>

    <span class="token decorator annotation punctuation">@staticmethod</span>
    <span class="token keyword">def</span> <span class="token function">get_name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> username<span class="token punctuation">(</span>language<span class="token operator">=</span><span class="token string">&quot;zh&quot;</span><span class="token punctuation">)</span>

    <span class="token decorator annotation punctuation">@staticmethod</span>
    <span class="token keyword">def</span> <span class="token function">get_age</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> get_int<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在用例中使用多个<code>@dependent_func()</code>依赖装饰器。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom<span class="token punctuation">.</span>utils <span class="token keyword">import</span> cache<span class="token punctuation">,</span> dependent_func
<span class="token keyword">from</span> common <span class="token keyword">import</span> DataFunc


<span class="token keyword">class</span> <span class="token class-name">DependentTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>


    <span class="token decorator annotation punctuation">@dependent_func</span><span class="token punctuation">(</span>DataFunc<span class="token punctuation">.</span>get_name<span class="token punctuation">,</span> key_name<span class="token operator">=</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span>
    <span class="token decorator annotation punctuation">@dependent_func</span><span class="token punctuation">(</span>DataFunc<span class="token punctuation">.</span>get_age<span class="token punctuation">,</span> key_name<span class="token operator">=</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_case</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        sample test case
        &quot;&quot;&quot;</span>
        name <span class="token operator">=</span> cache<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span>
        age <span class="token operator">=</span> cache<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;名字: </span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">, 年龄: </span><span class="token interpolation"><span class="token punctuation">{</span>age<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    cache<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数化使用" tabindex="-1"><a class="header-anchor" href="#参数化使用" aria-hidden="true">#</a> 参数化使用</h3><p>参数化 <code>@data()</code>、 <code>@file_data()</code> 是seldom最重要的功能之一，能否和 <code>@dependent_func()</code> 一起使用？ 当然可以。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom <span class="token keyword">import</span> data
<span class="token keyword">from</span> seldom<span class="token punctuation">.</span>testdata <span class="token keyword">import</span> get_md5
<span class="token keyword">from</span> seldom<span class="token punctuation">.</span>utils <span class="token keyword">import</span> cache<span class="token punctuation">,</span> dependent_func


<span class="token keyword">class</span> <span class="token class-name">DependentTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token decorator annotation punctuation">@staticmethod</span>
    <span class="token keyword">def</span> <span class="token function">user_login</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        模拟用户登录，获取登录token
        &quot;&quot;&quot;</span>
        <span class="token keyword">return</span> get_md5<span class="token punctuation">(</span>username<span class="token operator">+</span>password<span class="token punctuation">)</span>

    <span class="token decorator annotation punctuation">@data</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">(</span><span class="token string">&quot;case1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token string">&quot;case2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token decorator annotation punctuation">@dependent_func</span><span class="token punctuation">(</span>user_login<span class="token punctuation">,</span> username<span class="token operator">=</span><span class="token string">&quot;tom&quot;</span><span class="token punctuation">,</span> password<span class="token operator">=</span><span class="token string">&quot;t123&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_case</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> _<span class="token punctuation">,</span> keyword<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        Used tuple test data
        &quot;&quot;&quot;</span>
        token <span class="token operator">=</span> cache<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;user_login&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>keyword<span class="token punctuation">,</span> <span class="token string">&quot;token&quot;</span><span class="token punctuation">,</span> token<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    cache<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>说明</strong></p><ol><li><code>@data()</code> 装饰器必须写在 <code>@dependent_func()</code> 的上面。</li><li>运行两条用例，<code>user_login()</code> 被执行过一次后，第二次则不需要重复执行，直接返回结果。</li></ol>`,31);function k(m,v){const e=o("ExternalLinkIcon");return p(),c("div",null,[u,n("p",null,[n("a",d,[s("aomaker"),i(e)]),s(" 提供了这种装饰器的实现，seldom 进行了复刻，只是的定位和用法用有所不同。")]),r])}const g=t(l,[["render",k],["__file","dependent_func.html.vue"]]);export{g as default};
