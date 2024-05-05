import{_ as n,o as s,c as a,e as t}from"./app-33df68bc.js";const e={},p=t(`<h1 id="api-object" tabindex="-1"><a class="header-anchor" href="#api-object" aria-hidden="true">#</a> API Object</h1><p>API Object Models，简称AOM，AOM是一种设计模式，它围绕着将API、路由或功能交互及其相关行为封装在结构良好的对象中。AOM旨在增强API测试和集成的直观性和弹性。在实践中，AOM需要精心设计专门的API对象，以有效地保护用户免受与API 请求、响应、端点交互和身份验证过程相关的复杂性的影响。</p><p>seldom 支持AOM, 并且提供了一些好用的功能，辅助你使用AOM.</p><ul><li>目录结构如下</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mypro/
├── api/
│   ├── __init__.py
│   ├── auth_object.py
│   └── xxx_object.py
├── test_dir/
│   ├── test_auth.py
│   └── test_xxx.py
│  <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建 API Object</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># api/auth_object.py</span>
<span class="token keyword">from</span> seldom<span class="token punctuation">.</span>testdata <span class="token keyword">import</span> get_int
<span class="token keyword">from</span> seldom<span class="token punctuation">.</span>request <span class="token keyword">import</span> HttpRequest
<span class="token keyword">from</span> seldom<span class="token punctuation">.</span>request <span class="token keyword">import</span> check_response


<span class="token keyword">class</span> <span class="token class-name">AuthAPIObject</span><span class="token punctuation">(</span>HttpRequest<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> api_key<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>api_key <span class="token operator">=</span> api_key

    <span class="token decorator annotation punctuation">@check_response</span><span class="token punctuation">(</span>ret<span class="token operator">=</span><span class="token string">&quot;form.token&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">get_token</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> user_id<span class="token punctuation">:</span><span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        模拟：根据用户ID生成登录token
        :param user_id:
        :return:
        &quot;&quot;&quot;</span>
        data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;user_id&quot;</span><span class="token punctuation">:</span> user_id<span class="token punctuation">,</span> <span class="token string">&quot;token&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;t&quot;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>get_int<span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">,</span> <span class="token number">99999</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        r <span class="token operator">=</span> self<span class="token punctuation">.</span>post<span class="token punctuation">(</span><span class="token string">&quot;/post?key=&quot;</span> <span class="token operator">+</span> self<span class="token punctuation">.</span>api_key<span class="token punctuation">,</span> data<span class="token operator">=</span>data<span class="token punctuation">)</span>
        <span class="token keyword">return</span> r
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义API接口，根据<code>get_token()</code>用于生成token，这里我们通过随机数模拟的生成的token。<code>check_response()</code>装饰器用于装饰接口，<code>form.token</code> 用于提取API的返回值。</p><ul><li>创建测试用例</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># test_dir/test_auth.py</span>
<span class="token keyword">import</span> seldom
<span class="token keyword">from</span> api<span class="token punctuation">.</span>auth_object <span class="token keyword">import</span> AuthAPIObject


<span class="token keyword">class</span> <span class="token class-name">TestAPI</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_case</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        auth_object <span class="token operator">=</span> AuthAPIObject<span class="token punctuation">(</span>api_key<span class="token operator">=</span><span class="token string">&quot;abc123&quot;</span><span class="token punctuation">)</span>
        token <span class="token operator">=</span> auth_object<span class="token punctuation">.</span>get_token<span class="token punctuation">(</span>user_id<span class="token operator">=</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">,</span> token<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> base_url<span class="token operator">=</span><span class="token string">&quot;https://httpbin.org&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在用例层调用<code>AuthAPIObject</code>类下面的对象，测试API。</p><ul><li>AOM 原则</li></ul><p>首先，API只允许通过的APIObject进行封装，那么在封装之前可以检索一下是否有封装了，如果有，进一步确认是否满足自己的调用需求，我们一般在测试API的时候一般各种参数验证，当API作为依赖接口调用的时候，一般参数比较少且固定，所以，API在封装的时候要兼顾到这两种情况。</p><p>其次，用例层只能通过APIObject的封装调用API，像登录token这种大部分API会用到的信息，可以通过类初始化时传入，后续调用类下面方法的时候就不需要关心的。如果是多个API组成一个场景，也可以再进行一层业务层的封装。</p>`,14),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","api_object.html.vue"]]);export{r as default};
