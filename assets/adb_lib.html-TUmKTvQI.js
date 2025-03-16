import{_ as s,e as a,f as e,o as p}from"./app-cOqhPLWY.js";const t={};function i(l,n){return p(),a("div",null,n[0]||(n[0]=[e(`<h1 id="adb-操作" tabindex="-1"><a class="header-anchor" href="#adb-操作"><span>ADB 操作</span></a></h1><p>App（Android)测试必然需要用到adb命令， seldom根据需要封装了几个常用的操作。</p><ul><li>获取设备信息</li></ul><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">from</span> seldom<span class="token punctuation">.</span>extend_lib<span class="token punctuation">.</span>adb <span class="token keyword">import</span> get_devices</span>
<span class="line"></span>
<span class="line">devices <span class="token operator">=</span> get_devices<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>devices<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>启动&amp;关闭app</li></ul><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">import</span> time</span>
<span class="line"><span class="token keyword">from</span> seldom<span class="token punctuation">.</span>extend_lib<span class="token punctuation">.</span>adb <span class="token keyword">import</span> launch_app<span class="token punctuation">,</span> close_app</span>
<span class="line"></span>
<span class="line">launch_app<span class="token punctuation">(</span><span class="token string">&quot;com.microsoft.bing&quot;</span><span class="token punctuation">)</span></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line">close_app<span class="token punctuation">(</span><span class="token string">&quot;com.microsoft.bing&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)]))}const o=s(t,[["render",i],["__file","adb_lib.html.vue"]]),d=JSON.parse('{"path":"/app-testing/adb_lib.html","title":"ADB 操作","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1742121997000,"contributors":[{"name":"defnngj","username":"defnngj","email":"defnngj@gmail.com","commits":1,"url":"https://github.com/defnngj"}],"changelog":[{"hash":"ee7baed8f0cfa8c864d38c5c4149c1151a357c5e","time":1742121997000,"email":"defnngj@gmail.com","author":"defnngj","message":"📝 update doc"}]},"filePathRelative":"app-testing/adb_lib.md"}');export{o as comp,d as data};
