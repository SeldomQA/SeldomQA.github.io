import{_ as a,o as n,c as e,e as l}from"./app-29570897.js";const i={};function t(p,s){return n(),e("div",null,s[0]||(s[0]=[l(`<h1 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h1><p>seldom已经安装完成，那么现在已经迫不及待的想体验seldom的使用。</p><h3 id="自动生成项目" tabindex="-1"><a class="header-anchor" href="#自动生成项目" aria-hidden="true">#</a> 自动生成项目</h3><p>seldom 通过<code>seldom</code>命令提供了脚手架，可以快速的帮我们创建自动化测试项目。</p><ol><li>查看帮助：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> seldom <span class="token parameter variable">--help</span>
Usage: seldom <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span>

  seldom CLI.

Options:
  <span class="token parameter variable">--version</span>                       Show version.
  --project-api TEXT              Create an API automation <span class="token builtin class-name">test</span> project.
  --project-app TEXT              Create an App automation <span class="token builtin class-name">test</span> project.
  --project-web TEXT              Create an Web automation <span class="token builtin class-name">test</span> project.
  -cc, --clear-cache BOOLEAN      Clear all caches of seldom.
  -p, <span class="token parameter variable">--path</span> TEXT                 Run <span class="token builtin class-name">test</span> <span class="token keyword">case</span> <span class="token function">file</span> path.
  -c, <span class="token parameter variable">--collect</span> / -nc, --no-collect
                                  Collect project <span class="token builtin class-name">test</span> cases. Need the
                                  <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--path</span><span class="token variable">\`</span></span><span class="token builtin class-name">.</span>
  -l, <span class="token parameter variable">--level</span> <span class="token punctuation">[</span>data<span class="token operator">|</span>method<span class="token punctuation">]</span>       Parse the level of use cases. Need the
                                  --path.
  -j, --case-json TEXT            Test <span class="token keyword">case</span> files. Need the <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--path</span><span class="token variable">\`</span></span><span class="token builtin class-name">.</span>
  -e, <span class="token parameter variable">--env</span> TEXT                  Set the Seldom run environment <span class="token variable"><span class="token variable">\`</span>Seldom.env<span class="token variable">\`</span></span><span class="token builtin class-name">.</span>
  -b, <span class="token parameter variable">--browser</span> <span class="token punctuation">[</span>chrome<span class="token operator">|</span>firefox<span class="token operator">|</span>ie<span class="token operator">|</span>edge<span class="token operator">|</span>safari<span class="token punctuation">]</span>
                                  The browser that runs the Web UI automation
                                  tests. Need the <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--path</span><span class="token variable">\`</span></span><span class="token builtin class-name">.</span>
  -u, --base-url TEXT             The base-url that runs the HTTP automation
                                  tests. Need the <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--path</span><span class="token variable">\`</span></span><span class="token builtin class-name">.</span>
  -d, <span class="token parameter variable">--debug</span> / -nd, --no-debug   Debug mode. Need the <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--path</span><span class="token variable">\`</span></span><span class="token builtin class-name">.</span>
  -rr, <span class="token parameter variable">--rerun</span> INTEGER            The number of <span class="token builtin class-name">times</span> a use <span class="token keyword">case</span> failed to run
                                  again. Need the <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--path</span><span class="token variable">\`</span></span><span class="token builtin class-name">.</span>
  -r, <span class="token parameter variable">--report</span> TEXT               Set the <span class="token builtin class-name">test</span> report <span class="token keyword">for</span> output. Need the
                                  <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--path</span><span class="token variable">\`</span></span><span class="token builtin class-name">.</span>
  -m, <span class="token parameter variable">--mod</span> TEXT                  Run tests modules, classes or even
                                  individual <span class="token builtin class-name">test</span> methods from the <span class="token builtin class-name">command</span>
                                  line.
  -ll, --log-level <span class="token punctuation">[</span>TRACE<span class="token operator">|</span>DEBUG<span class="token operator">|</span>INFO<span class="token operator">|</span>SUCCESS<span class="token operator">|</span>WARNING<span class="token operator">|</span>ERROR<span class="token punctuation">]</span>
                                  Set the log level.
  -h2c, <span class="token parameter variable">--har2case</span> TEXT           HAR <span class="token function">file</span> converts an seldom <span class="token builtin class-name">test</span> case.
  -s2c, <span class="token parameter variable">--swagger2case</span> TEXT       Swagger <span class="token function">file</span> converts an seldom <span class="token builtin class-name">test</span> case.
  --api-excel TEXT                Run the api <span class="token builtin class-name">test</span> cases <span class="token keyword">in</span> the excel file.
  <span class="token parameter variable">--help</span>                          Show this message and exit.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>创建项目：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> seldom <span class="token parameter variable">-P</span> mypro
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>目录结构如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mypro/
├── test_dir/
│   ├── __init__.py
│   ├── test_web_sample.py
│   ├── test_api_sample.py
├── test_data/
│   ├── data.json
├── reports/
└── confrun.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>test_dir/</code> 测试用例目录。</li><li><code>test_data/</code> 测试数据文件目录。</li><li><code>reports/</code> 测试报告目录。</li><li><code>confrun.py</code> 运行测试用例配置文件。</li></ul><ol start="3"><li>克隆项目</li></ol><p>如果无法使用<code>seldom</code>命令，可以通过git克隆相关项目进行学习。</p><ul><li>seldom-web-testing</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> clone https://github.com/SeldomQA/seldom-web-testing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>seldom-api-testing</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> clone https://github.com/defnngj/seldom-api-testing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建测试用例" tabindex="-1"><a class="header-anchor" href="#创建测试用例" aria-hidden="true">#</a> 创建测试用例</h3><p>根据上面的创建的项目，可以在<code>test_dir</code>目录下继续创建测试用例：<code>test_sample.py</code>。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom


<span class="token keyword">class</span> <span class="token class-name">YouTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_case</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;a simple test case &quot;&quot;&quot;</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据自己的需求编写<code>Web UI</code>、<code>App UI</code>或<code>HTTP接口</code>自动化测试。</p>`,21)]))}const o=a(i,[["render",t],["__file","create_project.html.vue"]]);export{o as default};
