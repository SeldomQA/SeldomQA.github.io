import{_ as t,r as o,o as p,c as i,a as s,b as a,d as l,e as u}from"./app-148fbfef.js";const c={},r={href:"https://github.com/SeldomQA/poium",target:"_blank",rel:"noopener noreferrer"};function d(k,n){const e=o("ExternalLinkIcon");return p(),i("div",null,[n[4]||(n[4]=s("h1",{id:"page-object",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#page-object","aria-hidden":"true"},"#"),a(" Page Object")],-1)),n[5]||(n[5]=s("p",null,[a("seldom API 的设计理念是将元素操作和元素定位放到起，本身不太适合实现"),s("code",null,"Page object"),a("设计模式。")],-1)),s("p",null,[s("a",r,[n[0]||(n[0]=a("poium")),l(e)]),n[1]||(n[1]=a(" 是")),n[2]||(n[2]=s("code",null,"Page objects",-1)),n[3]||(n[3]=a("设计模式最佳实践。"))]),n[6]||(n[6]=u(`<ul><li>pip 安装</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> pip <span class="token function">install</span> poium
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将 seldom 与 poium 结合使用。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> poium <span class="token keyword">import</span> Page<span class="token punctuation">,</span> Element


<span class="token keyword">class</span> <span class="token class-name">BaiduPage</span><span class="token punctuation">(</span>Page<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;baidu page&quot;&quot;&quot;</span>
    search_input <span class="token operator">=</span> Element<span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;kw&quot;</span><span class="token punctuation">)</span>
    search_button <span class="token operator">=</span> Element<span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;su&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">BaiduTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;Baidu search test case&quot;&quot;&quot;</span>

    <span class="token keyword">def</span> <span class="token function">test_case</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        A simple test
        &quot;&quot;&quot;</span>
        page <span class="token operator">=</span> BaiduPage<span class="token punctuation">(</span>self<span class="token punctuation">.</span>driver<span class="token punctuation">,</span> print_log<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
        page<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;https://www.baidu.com&quot;</span><span class="token punctuation">)</span>
        page<span class="token punctuation">.</span>search_input<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&quot;seldom&quot;</span><span class="token punctuation">)</span>
        page<span class="token punctuation">.</span>search_button<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>assertTitle<span class="token punctuation">(</span><span class="token string">&quot;seldom_百度搜索&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>browser<span class="token operator">=</span><span class="token string">&quot;chrome&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4))])}const v=t(c,[["render",d],["__file","page_object.html.vue"]]);export{v as default};
