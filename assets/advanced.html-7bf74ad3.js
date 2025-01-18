import{_ as s,o as a,c as t,e}from"./app-29570897.js";const p={};function o(c,n){return a(),t("div",null,n[0]||(n[0]=[e(`<h1 id="高级用法" tabindex="-1"><a class="header-anchor" href="#高级用法" aria-hidden="true">#</a> 高级用法</h1><h3 id="fixture" tabindex="-1"><a class="header-anchor" href="#fixture" aria-hidden="true">#</a> fixture</h3><p>有时自动化测试用例的运行需要一些前置&amp;后置步骤，seldom提供了相应的方法。</p><p>seldom重写了unittest的<code>fixture</code>，所以，请使用seldom的<code>fixture</code>，对应表格。</p><table><thead><tr><th>unittest</th><th>seldom</th><th>说明</th></tr></thead><tbody><tr><td>setUpClass(cls)</td><td>start_class(cls)</td><td>测试类开始执行。</td></tr><tr><td>tearDownClass(cls)</td><td>end_class(cls)</td><td>测试类结束执行。</td></tr><tr><td>setUp(self)</td><td>start(self)</td><td>测试方法（用例）开始执行。</td></tr><tr><td>tearDown(self)</td><td>end(self)</td><td>测试方法（用例）结束执行。</td></tr><tr><td>-</td><td>start_run()</td><td><code>confrun.py</code>文件配置，整个用例开始前运行。</td></tr><tr><td>-</td><td>end_run()</td><td><code>confrun.py</code>文件配置，整个用例结束后运行。</td></tr></tbody></table><p><strong>示例1</strong></p><p>针对每条测试类/测试用例的fixture使用示例。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># test_fixture.py</span>
<span class="token keyword">import</span> seldom


<span class="token keyword">class</span> <span class="token class-name">TestCase</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">start_class</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;测试类开始执行&quot;</span><span class="token punctuation">)</span>

    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">end_class</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;测试类结束执行&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">start</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;一条测试用例开始&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">end</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;一条测试结果&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">test_case_one</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token keyword">def</span> <span class="token function">test_case_two</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>警告：不要把用例的操作步骤写到<code>start_class/end_class</code>中! 因为它不属于某条用例的一部分，一旦里面的操作步骤运行失败，会影响用例的执行。</p></blockquote><p><strong>运行结果</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> python test_fixture.py
<span class="token punctuation">..</span>.
测试类开始执行
test_case_one <span class="token punctuation">(</span>zzz_case.TestCase.test_case_one<span class="token punctuation">)</span> <span class="token punctuation">..</span>. 一条测试用例开始
一条测试结果
ok
test_case_two <span class="token punctuation">(</span>zzz_case.TestCase.test_case_two<span class="token punctuation">)</span> <span class="token punctuation">..</span>. 一条测试用例开始
一条测试结果
ok
测试类结束执行
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例2</strong></p><p>有时候我们需要整个测试<code>开始前</code>或<code>结束后</code>完成一些工作，可以通过下面的方式配置。</p><ul><li>目录结构</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mypro/
├── test_dir/
│   ├── __init__.py
│   ├── test_sample.py
├── confrun.py
└── run.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>confrun.py</code> 配置前后置动作</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> seldom<span class="token punctuation">.</span>logging <span class="token keyword">import</span> log
<span class="token keyword">from</span> seldom<span class="token punctuation">.</span>utils <span class="token keyword">import</span> cache


<span class="token keyword">def</span> <span class="token function">start_run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    Test the hook function before running
    &quot;&quot;&quot;</span>
    log<span class="token punctuation">.</span>info<span class="token punctuation">(</span><span class="token string">&quot;start_run&quot;</span><span class="token punctuation">)</span>
    cache<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;token123&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">end_run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    Test the hook function after running
    &quot;&quot;&quot;</span>
    log<span class="token punctuation">.</span>info<span class="token punctuation">(</span><span class="token string">&quot;end_run&quot;</span><span class="token punctuation">)</span>
    cache<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>示例中用于添加和清除 cache, 根据实际需求你可以加上任何动作。</p></blockquote><ul><li><code>run.py</code> 执行用例</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">&quot;./test_dir&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>运行结果</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> python run.py
<span class="token punctuation">..</span>.

<span class="token number">2024</span>-12-06 <span class="token number">17</span>:55:04 <span class="token operator">|</span> INFO     <span class="token operator">|</span> confrun.py <span class="token operator">|</span> MainThread <span class="token operator">|</span> start_run   <span class="token comment"># confrun.py 所有用例前的动作</span>
<span class="token number">2024</span>-12-06 <span class="token number">17</span>:55:04 <span class="token operator">|</span> INFO     <span class="token operator">|</span> cache.py <span class="token operator">|</span> MainThread <span class="token operator">|</span> 💾 Set cache data: token <span class="token operator">=</span> token123

<span class="token number">2024</span>-12-06 <span class="token number">17</span>:55:04 <span class="token operator">|</span> INFO     <span class="token operator">|</span> runner.py <span class="token operator">|</span> MainThread <span class="token operator">|</span> TestLoader: ./test_dir
XTestRunner Running tests<span class="token punctuation">..</span>.
----------------------------------------------------------------------
<span class="token number">2024</span>-12-06 <span class="token number">17</span>:55:04 <span class="token operator">|</span> INFO     <span class="token operator">|</span> cache.py <span class="token operator">|</span> MainThread <span class="token operator">|</span> 💾 Get cache data: token <span class="token operator">=</span> token123
Generating HTML reports<span class="token punctuation">..</span>.
.12024-12-06 <span class="token number">17</span>:55:04 <span class="token operator">|</span> SUCCESS  <span class="token operator">|</span> runner.py <span class="token operator">|</span> MainThread <span class="token operator">|</span> generated html file: file:///D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>seldomQA<span class="token punctuation">\\</span>seldom<span class="token punctuation">\\</span>reports<span class="token punctuation">\\</span>2024_12_06_17_55_03_result.html
<span class="token number">2024</span>-12-06 <span class="token number">17</span>:55:04 <span class="token operator">|</span> SUCCESS  <span class="token operator">|</span> runner.py <span class="token operator">|</span> MainThread <span class="token operator">|</span> generated log file: file:///D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>seldomQA<span class="token punctuation">\\</span>seldom<span class="token punctuation">\\</span>reports<span class="token punctuation">\\</span>seldom_log.log

<span class="token number">2024</span>-12-06 <span class="token number">17</span>:55:04 <span class="token operator">|</span> INFO     <span class="token operator">|</span> confrun.py <span class="token operator">|</span> MainThread <span class="token operator">|</span> end_run  <span class="token comment"># confrun.py 所有用例后的动作</span>
<span class="token number">2024</span>-12-06 <span class="token number">17</span>:55:04 <span class="token operator">|</span> INFO     <span class="token operator">|</span> cache.py <span class="token operator">|</span> MainThread <span class="token operator">|</span> 💾 Clear cache data: token
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="跳过测试" tabindex="-1"><a class="header-anchor" href="#跳过测试" aria-hidden="true">#</a> 跳过测试</h3><p>seldom 提供了跳过用例的装饰用于跳过暂时不执行的用例。</p><p><strong>装饰器</strong></p><ul><li><code>seldom.skip()</code>：无条件地跳过一个测试。</li><li><code>seldom.skip_if()</code>： 如果条件为真，则跳过测试。</li><li><code>seldom.skip_unless()</code>： 跳过一个测试，除非条件为真。</li><li><code>seldom.expected_failure()</code>： 预期测试用例会失败。</li><li><code>self.skipTest()</code>： 根据条件跳过测试。</li></ul><p><strong>使用方法</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># test_skip.py</span>
<span class="token keyword">import</span> seldom


<span class="token decorator annotation punctuation">@seldom<span class="token punctuation">.</span>skip</span><span class="token punctuation">(</span>reason<span class="token operator">=</span><span class="token string">&quot;跳过类&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">SkipTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_case</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>


<span class="token keyword">class</span> <span class="token class-name">YouTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token decorator annotation punctuation">@seldom<span class="token punctuation">.</span>skip</span><span class="token punctuation">(</span>reason<span class="token operator">=</span><span class="token string">&quot;跳过用例&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_skip_case</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token keyword">def</span> <span class="token function">test_if_skip</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        login <span class="token operator">=</span> <span class="token boolean">False</span>
        <span class="token keyword">if</span> login <span class="token keyword">is</span> <span class="token boolean">False</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>skipTest<span class="token punctuation">(</span>reason<span class="token operator">=</span><span class="token string">&quot;登录失败，跳过后续执行&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重复执行" tabindex="-1"><a class="header-anchor" href="#重复执行" aria-hidden="true">#</a> 重复执行</h3><p>当然某一段测试需要重复执行，使用<code>for</code>循环是常规的操作，seldom提供了<code>rerun()</code> 方法可以更优雅的完成这个工作。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom <span class="token keyword">import</span> rerun


<span class="token keyword">class</span> <span class="token class-name">TestCase</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token decorator annotation punctuation">@rerun</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_search_seldom</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;https://www.baidu.com&quot;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>type_enter<span class="token punctuation">(</span>id_<span class="token operator">=</span><span class="token string">&quot;kw&quot;</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&quot;seldom&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过<code>@rerun()</code> 装饰 <code>test_searchseldom()</code> 可以执行 100 次，统计结果仍为1条用例，如果想统计为 100 条用例，请使用<code>@data()</code> 装饰器。</p><h3 id="随机测试数据" tabindex="-1"><a class="header-anchor" href="#随机测试数据" aria-hidden="true">#</a> 随机测试数据</h3><p>测试数据是测试用例的重要部分，有时不能把测试数据写死在测试用例中，比如注册新用户，一旦执行过用例那么测试数据就已经存在了，所以每次执行注册新用户的数据不能是一样的，这就需要随机生成一些测试数据。</p><p>seldom 提供了随机获取测试数据的方法。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom <span class="token keyword">import</span> testdata


<span class="token keyword">class</span> <span class="token class-name">YouTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_case</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;a simple test case &quot;&quot;&quot;</span>
        word <span class="token operator">=</span> testdata<span class="token punctuation">.</span>get_word<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过<code>get_word()</code> 随机获取一个单词，然后对这个单词进行搜索。</p><p><strong>更多的方法</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> seldom<span class="token punctuation">.</span>testdata <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token comment"># 随机一个名字</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;名字：&quot;</span><span class="token punctuation">,</span> first_name<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;名字(男)：&quot;</span><span class="token punctuation">,</span> first_name<span class="token punctuation">(</span>gender<span class="token operator">=</span><span class="token string">&quot;male&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;名字(女)：&quot;</span><span class="token punctuation">,</span> first_name<span class="token punctuation">(</span>gender<span class="token operator">=</span><span class="token string">&quot;female&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;名字(中文男)：&quot;</span><span class="token punctuation">,</span> first_name<span class="token punctuation">(</span>gender<span class="token operator">=</span><span class="token string">&quot;male&quot;</span><span class="token punctuation">,</span> language<span class="token operator">=</span><span class="token string">&quot;zh&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;名字(中文女)：&quot;</span><span class="token punctuation">,</span> first_name<span class="token punctuation">(</span>gender<span class="token operator">=</span><span class="token string">&quot;female&quot;</span><span class="token punctuation">,</span> language<span class="token operator">=</span><span class="token string">&quot;zh&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 随机一个姓</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;姓:&quot;</span><span class="token punctuation">,</span> last_name<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;姓(中文):&quot;</span><span class="token punctuation">,</span> last_name<span class="token punctuation">(</span>language<span class="token operator">=</span><span class="token string">&quot;zh&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 随机一个姓名</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;姓名:&quot;</span><span class="token punctuation">,</span> username<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;姓名(中文):&quot;</span><span class="token punctuation">,</span> username<span class="token punctuation">(</span>language<span class="token operator">=</span><span class="token string">&quot;zh&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 随机一个生日</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;生日:&quot;</span><span class="token punctuation">,</span> get_birthday<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;生日字符串:&quot;</span><span class="token punctuation">,</span> get_birthday<span class="token punctuation">(</span>as_str<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;生日年龄范围:&quot;</span><span class="token punctuation">,</span> get_birthday<span class="token punctuation">(</span>start_age<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">,</span> stop_age<span class="token operator">=</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 日期</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;日期(当前):&quot;</span><span class="token punctuation">,</span> get_date<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;日期(昨天):&quot;</span><span class="token punctuation">,</span> get_date<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;日期(明天):&quot;</span><span class="token punctuation">,</span> get_date<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;当月：&quot;</span><span class="token punctuation">,</span> get_month<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;上个月：&quot;</span><span class="token punctuation">,</span> get_month<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;下个月：&quot;</span><span class="token punctuation">,</span> get_month<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;今年：&quot;</span><span class="token punctuation">,</span> get_year<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去年：&quot;</span><span class="token punctuation">,</span> get_year<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;明年：&quot;</span><span class="token punctuation">,</span> get_year<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 数字</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;数字(8位):&quot;</span><span class="token punctuation">,</span> get_digits<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 邮箱</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;邮箱:&quot;</span><span class="token punctuation">,</span> get_email<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 浮点数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;浮点数:&quot;</span><span class="token punctuation">,</span> get_float<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;浮点数范围:&quot;</span><span class="token punctuation">,</span> get_float<span class="token punctuation">(</span>min_size<span class="token operator">=</span><span class="token number">1.0</span><span class="token punctuation">,</span> max_size<span class="token operator">=</span><span class="token number">2.0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 随机时间</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;当前时间:&quot;</span><span class="token punctuation">,</span> get_now_datetime<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;当前时间(格式化字符串):&quot;</span><span class="token punctuation">,</span> get_now_datetime<span class="token punctuation">(</span>strftime<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;未来时间:&quot;</span><span class="token punctuation">,</span> get_future_datetime<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;未来时间(格式化字符串):&quot;</span><span class="token punctuation">,</span> get_future_datetime<span class="token punctuation">(</span>strftime<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;过去时间:&quot;</span><span class="token punctuation">,</span> get_past_datetime<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;过去时间(格式化字符串):&quot;</span><span class="token punctuation">,</span> get_past_datetime<span class="token punctuation">(</span>strftime<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 随机数据</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;整型:&quot;</span><span class="token punctuation">,</span> get_int<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;整型32位:&quot;</span><span class="token punctuation">,</span> get_int32<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;整型64位:&quot;</span><span class="token punctuation">,</span> get_int64<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;MD5:&quot;</span><span class="token punctuation">,</span> get_md5<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;UUID:&quot;</span><span class="token punctuation">,</span> get_uuid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;单词:&quot;</span><span class="token punctuation">,</span> get_word<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;单词组(3个):&quot;</span><span class="token punctuation">,</span> get_words<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;手机号:&quot;</span><span class="token punctuation">,</span> get_phone<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;手机号(移动):&quot;</span><span class="token punctuation">,</span> get_phone<span class="token punctuation">(</span>operator<span class="token operator">=</span><span class="token string">&quot;mobile&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;手机号(联通):&quot;</span><span class="token punctuation">,</span> get_phone<span class="token punctuation">(</span>operator<span class="token operator">=</span><span class="token string">&quot;unicom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;手机号(电信):&quot;</span><span class="token punctuation">,</span> get_phone<span class="token punctuation">(</span>operator<span class="token operator">=</span><span class="token string">&quot;telecom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 在线时间</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;当前时间戳:&quot;</span><span class="token punctuation">,</span> online_timestamp<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;当前日期时间:&quot;</span><span class="token punctuation">,</span> online_now_datetime<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>运行结果</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>名字： Hayden
名字（男）： Brantley
名字（女）： Julia
名字（中文男）： 觅儿
名字（中文女）： 若星
姓: Lee
姓（中文）: 白
姓名: Genesis
姓名（中文）: 廉高义
生日: 2000-03-11
生日字符串: 1994-11-12
生日年龄范围: 1996-01-12
日期（当前）: 2022-09-17
日期（昨天）: 2022-09-16
日期（明天）: 2022-09-18
数字(8位): 48285099
邮箱: melanie@yahoo.com
浮点数: 1.5315717275531858e+308
浮点数范围: 1.6682402084146244
当前时间: 2022-09-17 23:33:22.736031
当前时间(格式化字符串): 2022-09-17 23:33:22
未来时间: 2054-05-02 11:33:47.736031
未来时间(格式化字符串): 2070-08-28 16:38:45
过去时间: 2004-09-03 12:56:23.737031
过去时间(格式化字符串): 2006-12-06 07:58:37
整型: 7831034423589443450
整型32位: 1119927937
整型64位: 3509365234787490389
MD5: d0f6c6abbfe1cfeea60ecfdd1ef2f4b9
UUID: 5fd50475-2723-4a36-a769-1d4c9784223a
单词: habitasse
单词组（3个）: уж pede. metus.
手机号: 13171039843
手机号(移动): 15165746029
手机号(联通): 16672812525
手机号(电信): 17345142737

当前时间戳 1695137988672
当前日期时间 2023-09-19 23:39:48
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用例的依赖" tabindex="-1"><a class="header-anchor" href="#用例的依赖" aria-hidden="true">#</a> 用例的依赖</h3><blockquote><p>在 seldom 1.8.0 版本实现了该功能。</p></blockquote><p>在编写用例的时候不推荐你编写依赖的用例，但是，有些时候我们并不能完全消除这些依赖。seldom 增加了用例依赖的方法。</p><p><strong>depend</strong></p><p><code>depend</code> 装饰器用来设置依赖的用例。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom <span class="token keyword">import</span> depend


<span class="token keyword">class</span> <span class="token class-name">TestDepend</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_001</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;test_001&quot;</span><span class="token punctuation">)</span>

    <span class="token decorator annotation punctuation">@depend</span><span class="token punctuation">(</span><span class="token string">&quot;test_001&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_002</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;test_002&quot;</span><span class="token punctuation">)</span>

    <span class="token decorator annotation punctuation">@depend</span><span class="token punctuation">(</span><span class="token string">&quot;test_002&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_003</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;test_003&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>test_002</code> 依赖于 <code>test_001</code> , <code>test_003</code>又依赖于<code>test_002</code>。当被依赖的用例，错误、失败、跳过，那么依赖的用例自动跳过。</p><p><strong>if_depend</strong></p><p><code>if_depend</code> 装饰器不会依赖用例的执行状态，可以自己定义是否要跳过依赖的用例。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom <span class="token keyword">import</span> if_depend


<span class="token keyword">class</span> <span class="token class-name">TestIfDepend</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>
    Test001 <span class="token operator">=</span> <span class="token boolean">True</span>

    <span class="token keyword">def</span> <span class="token function">test_001</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        TestIfDepend<span class="token punctuation">.</span>Test001 <span class="token operator">=</span> <span class="token boolean">False</span>  <span class="token comment"># 修改Test001为 False</span>

    <span class="token decorator annotation punctuation">@if_depend</span><span class="token punctuation">(</span><span class="token string">&quot;Test001&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_002</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>首先，定义变量 <code>Test001</code>，默认值为<code>True</code>。</li><li>在<code>test_001</code>用例中，可以根据一些条件来选择是否修改<code>Test001</code>的值，如果改为<code>False</code>， 那么依赖的用例将被跳过。</li><li>在<code>test_002</code>用例中，通过<code>if_depend</code>装饰器来判断<code>Test001</code>的值，如果为为<code>False</code>， 那么装饰的用例跳过，否则执行。</li></ol><p><strong>@depend 和 @data()</strong></p><p><code>@depend()</code> 装饰器可以和 <code>@data()</code> 装饰器混合使用。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom <span class="token keyword">import</span> data<span class="token punctuation">,</span> depend


<span class="token keyword">class</span> <span class="token class-name">DataDriverTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_001</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

    <span class="token decorator annotation punctuation">@data</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">(</span><span class="token string">&quot;First&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;seldom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token string">&quot;Second&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;selenium&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token string">&quot;Third&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;unittest&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token decorator annotation punctuation">@depend</span><span class="token punctuation">(</span><span class="token string">&quot;test_001&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 依赖 test_001 的结果</span>
    <span class="token keyword">def</span> <span class="token function">test_002</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> keyword<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        Used tuple test data
        :param name: case desc
        :param keyword: case data
        &quot;&quot;&quot;</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string"> - test data: </span><span class="token interpolation"><span class="token punctuation">{</span>keyword<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用要求：</p><ol><li>被依赖的用例不能用 @data() 装饰器，否则就是一组用例了，只能指定单个用例。</li><li><code>@depend()</code> 要放到 <code>@data()</code> 下面使用。</li></ol><h3 id="用例分类标签" tabindex="-1"><a class="header-anchor" href="#用例分类标签" aria-hidden="true">#</a> 用例分类标签</h3><blockquote><p>在 seldom 2.4.0 版本实现了该功能。</p></blockquote><p><strong>使用方式</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># test_label.py</span>
<span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom <span class="token keyword">import</span> label


<span class="token keyword">class</span> <span class="token class-name">MyTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token decorator annotation punctuation">@label</span><span class="token punctuation">(</span><span class="token string">&quot;base&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_label_base</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

    <span class="token decorator annotation punctuation">@label</span><span class="token punctuation">(</span><span class="token string">&quot;slow&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">test_label_slow</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">test_no_label</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token comment"># seldom.main(debug=True, whitelist=[&quot;base&quot;])  # whitelist</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> blacklist<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;slow&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># blacklist</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果只运行标签为<code>base</code>的用例，设置白名单（whitelist）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> python test_label.py

test_label_base <span class="token punctuation">(</span>btest_label.MyTest<span class="token punctuation">)</span> <span class="token punctuation">..</span>. ok
test_label_slow <span class="token punctuation">(</span>btest_label.MyTest<span class="token punctuation">)</span> <span class="token punctuation">..</span>. skipped <span class="token string">&quot;label whitelist {&#39;base&#39;}&quot;</span>
test_no_label <span class="token punctuation">(</span>btest_label.MyTest<span class="token punctuation">)</span> <span class="token punctuation">..</span>. skipped <span class="token string">&quot;label whitelist {&#39;base&#39;}&quot;</span>

----------------------------------------------------------------------
Ran <span class="token number">3</span> tests <span class="token keyword">in</span> <span class="token number">0</span>.001s

OK <span class="token punctuation">(</span>skipped<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果只想屏蔽标签为<code>slow</code>的用例，设置黑名单（blacklist）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> python test_label.py

test_label_base <span class="token punctuation">(</span>btest_label.MyTest<span class="token punctuation">)</span> <span class="token punctuation">..</span>. ok
test_label_slow <span class="token punctuation">(</span>btest_label.MyTest<span class="token punctuation">)</span> <span class="token punctuation">..</span>. skipped <span class="token string">&quot;label blacklist {&#39;slow&#39;}&quot;</span>
test_no_label <span class="token punctuation">(</span>btest_label.MyTest<span class="token punctuation">)</span> <span class="token punctuation">..</span>. ok
----------------------------------------------------------------------
Ran <span class="token number">3</span> tests <span class="token keyword">in</span> <span class="token number">0</span>.001s

OK <span class="token punctuation">(</span>skipped<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="发送邮件" tabindex="-1"><a class="header-anchor" href="#发送邮件" aria-hidden="true">#</a> 发送邮件</h3><blockquote><p>在 seldom 1.2.4 版本实现了该功能。</p></blockquote><p>如果你想将测试完成的报告发送到指定邮箱，那么可以调用发邮件的方法实现。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom <span class="token keyword">import</span> SMTP

<span class="token comment"># ...</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    report_path <span class="token operator">=</span> <span class="token string">&quot;/you/path/report.html&quot;</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>report<span class="token operator">=</span>report_path<span class="token punctuation">)</span>
    smtp <span class="token operator">=</span> SMTP<span class="token punctuation">(</span>user<span class="token operator">=</span><span class="token string">&quot;send@126.com&quot;</span><span class="token punctuation">,</span> password<span class="token operator">=</span><span class="token string">&quot;abc123&quot;</span><span class="token punctuation">,</span> host<span class="token operator">=</span><span class="token string">&quot;smtp.126.com&quot;</span><span class="token punctuation">,</span> ssl<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    smtp<span class="token punctuation">.</span>sendmail<span class="token punctuation">(</span>to<span class="token operator">=</span><span class="token string">&quot;receive@mail.com&quot;</span><span class="token punctuation">,</span> subject<span class="token operator">=</span><span class="token string">&quot;Email title&quot;</span><span class="token punctuation">,</span> attachments<span class="token operator">=</span>report_path<span class="token punctuation">,</span> delete<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>SMTP()类</strong></p><ul><li><code>user</code>: 邮箱用户名。</li><li><code>password</code>: 邮箱密码。</li><li><code>host</code>: 邮箱服务地址。</li><li><code>ssl</code>: <code>True</code> 使用 <code>SMTP_SSL()</code>，<code>False</code> 使用 <code>SMTP()</code>，两种方式应对不同的邮箱服务。</li></ul><p><strong>sendmail()方法</strong></p><ul><li><code>subject</code>: 邮件标题，默认:<code>Seldom Test Report</code>。</li><li><code>to</code>: 添加收件人，支持多个收件人: <code>[&quot;aa@mail.com&quot;, &quot;bb@mail.com&quot;]</code>。</li><li><code>attachments</code>: 设置附件，默认发送 HTML 测试报告。</li><li><code>delete</code>: 是否删除报告&amp;日志。（在服务器上运行自动化，每次都会产生一份报告和日志，手动删除比较麻烦。）</li></ul><blockquote><p><code>debug</code>模式不会生成测试报告， 自动化发邮件不支持<code>debug</code> 模式，自然也无法将报告发送到指定邮箱了。</p></blockquote><h3 id="发送钉钉" tabindex="-1"><a class="header-anchor" href="#发送钉钉" aria-hidden="true">#</a> 发送钉钉</h3><blockquote><p>在 seldom 2.6.0 版本实现了该功能。</p></blockquote><p>seldom 还提供了发送钉钉的 API。</p><p>帮助文档: https://open.dingtalk.com/document/group/enterprise-created-chatbot</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom <span class="token keyword">import</span> DingTalk

<span class="token comment"># ...</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span>
    ding <span class="token operator">=</span> DingTalk<span class="token punctuation">(</span>
        access_token<span class="token operator">=</span><span class="token string">&quot;690900b5ce6d5d10bb1218b8e64a4e2b55f96a6d116aaf50&quot;</span><span class="token punctuation">,</span>
        key<span class="token operator">=</span><span class="token string">&quot;xxxx&quot;</span><span class="token punctuation">,</span>
        app_secret<span class="token operator">=</span><span class="token string">&quot;xxxxx&quot;</span><span class="token punctuation">,</span>
        at_mobiles<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">13700000000</span><span class="token punctuation">,</span> <span class="token number">13800000000</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        is_at_all<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    ding<span class="token punctuation">.</span>sender<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数说明:</strong></p><ul><li><code>access_token</code>: 钉钉机器人的 access_token</li><li><code>key</code>: 如果钉钉机器人安全设置了关键字，则需要传入对应的关键字。</li><li><code>app_secret</code>: 如果钉钉机器人安全设置了签名，则需要传入对应的密钥。</li><li><code>at_mobiles</code>: 发送通知钉钉中要@人的手机号列表，如：[137xxx, 188xxx]。</li><li><code>is_at_all</code>: 是否@所有人，默认为 False, 设为 True 则会@所有人。</li></ul><h3 id="seldom日志" tabindex="-1"><a class="header-anchor" href="#seldom日志" aria-hidden="true">#</a> seldom日志</h3><blockquote><p>在 seldom 2.9.0 版本提供了日志的配置能力。</p></blockquote><p>在项目中你可以使用seldom提供的<code>log</code> 打印日志。</p><ul><li>使用log</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> seldom<span class="token punctuation">.</span>logging <span class="token keyword">import</span> log

log<span class="token punctuation">.</span>trace<span class="token punctuation">(</span><span class="token string">&quot;this is trace info.&quot;</span><span class="token punctuation">)</span>
log<span class="token punctuation">.</span>info<span class="token punctuation">(</span><span class="token string">&quot;this is info.&quot;</span><span class="token punctuation">)</span>
log<span class="token punctuation">.</span>error<span class="token punctuation">(</span><span class="token string">&quot;this error info.&quot;</span><span class="token punctuation">)</span>
log<span class="token punctuation">.</span>debug<span class="token punctuation">(</span><span class="token string">&quot;this debug info.&quot;</span><span class="token punctuation">)</span>
log<span class="token punctuation">.</span>success<span class="token punctuation">(</span><span class="token string">&quot;this success info.&quot;</span><span class="token punctuation">)</span>
log<span class="token punctuation">.</span>warning<span class="token punctuation">(</span><span class="token string">&quot;this warning info.&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>运行日志</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token number">2022</span>-04-30 <span class="token number">16</span>:31:49 test_log.py <span class="token operator">|</span> TRACE <span class="token operator">|</span> this is trace info.
<span class="token number">2022</span>-04-30 <span class="token number">16</span>:31:49 test_log.py <span class="token operator">|</span> INFO <span class="token operator">|</span> this is info.
<span class="token number">2022</span>-04-30 <span class="token number">16</span>:31:49 test_log.py <span class="token operator">|</span> ERROR <span class="token operator">|</span> this error info.
<span class="token number">2022</span>-04-30 <span class="token number">16</span>:31:49 test_log.py <span class="token operator">|</span> DEBUG <span class="token operator">|</span> this debug info.
<span class="token number">2022</span>-04-30 <span class="token number">16</span>:31:49 test_log.py <span class="token operator">|</span> SUCCESS <span class="token operator">|</span> this success info.
<span class="token number">2022</span>-04-30 <span class="token number">16</span>:31:49 test_log.py <span class="token operator">|</span> WARNING <span class="token operator">|</span> this warning info.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>关闭日志颜色</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> seldom<span class="token punctuation">.</span>logging <span class="token keyword">import</span> log_cfg
<span class="token keyword">from</span> seldom<span class="token punctuation">.</span>logging <span class="token keyword">import</span> log

log_cfg<span class="token punctuation">.</span>set_level<span class="token punctuation">(</span>colorlog<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>  <span class="token comment"># 关闭日志颜色</span>
log<span class="token punctuation">.</span>trace<span class="token punctuation">(</span><span class="token string">&quot;this is trace info.&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>自定义日志格式</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> seldom<span class="token punctuation">.</span>logging <span class="token keyword">import</span> log_cfg
<span class="token keyword">from</span> seldom<span class="token punctuation">.</span>logging <span class="token keyword">import</span> log

<span class="token comment"># 定义日志格式</span>
<span class="token builtin">format</span> <span class="token operator">=</span> <span class="token string">&quot;&lt;green&gt;{time:YYYY-MM-DD HH:mm:ss}&lt;/&gt; {file} |&lt;level&gt; {level} | {message}&lt;/level&gt;&quot;</span>
log_cfg<span class="token punctuation">.</span>set_level<span class="token punctuation">(</span><span class="token builtin">format</span><span class="token operator">=</span><span class="token builtin">format</span><span class="token punctuation">)</span>
log<span class="token punctuation">.</span>trace<span class="token punctuation">(</span><span class="token string">&quot;this is trace info.&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>日志级别</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> seldom<span class="token punctuation">.</span>logging <span class="token keyword">import</span> log_cfg
<span class="token keyword">from</span> seldom<span class="token punctuation">.</span>logging <span class="token keyword">import</span> log

<span class="token comment"># 设置日志级别</span>
log_cfg<span class="token punctuation">.</span>set_level<span class="token punctuation">(</span>level<span class="token operator">=</span><span class="token string">&quot;DEBUG&quot;</span><span class="token punctuation">)</span>
log<span class="token punctuation">.</span>trace<span class="token punctuation">(</span><span class="token string">&quot;this is trace info.&quot;</span><span class="token punctuation">)</span>
log<span class="token punctuation">.</span>error<span class="token punctuation">(</span><span class="token string">&quot;this error info.&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>log level: TRACE &lt; DEBUG &lt; INFO &lt; SUCCESS &lt; WARNING &lt; ERROR</p></blockquote><h3 id="缓存-cache" tabindex="-1"><a class="header-anchor" href="#缓存-cache" aria-hidden="true">#</a> 缓存 cache</h3><blockquote><p>在 seldom 2.10.0 版本实现了该功能。</p></blockquote><p>实际测试过程中，往往需要需要通过cache去记录一些数据，从而减少不必要的操作。例如 登录token，很多条用例都会用到登录token，那么就可以借助缓存来暂存登录token，从而减少重复动作。</p><ul><li>cache</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> seldom<span class="token punctuation">.</span>utils <span class="token keyword">import</span> cache

<span class="token comment"># 清除指定缓存</span>
cache<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 获取指定缓存</span>
token <span class="token operator">=</span> cache<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;token: </span><span class="token interpolation"><span class="token punctuation">{</span>token<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>

<span class="token comment"># 判断为空写入缓存</span>
<span class="token keyword">if</span> token <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    cache<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment"># 设置存在的数据(相当于更新)</span>
cache<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;456&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment"># value复杂格式设置存在的数据</span>
cache<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;tom&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token number">11</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment"># 获取所有缓存</span>
all_token <span class="token operator">=</span> cache<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;all: </span><span class="token interpolation"><span class="token punctuation">{</span>all_token<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>

<span class="token comment"># 清除指定缓存</span>
cache<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注：seldom 提供的 <code>cache</code> 本质上是通过json文件来临时记录数据，没有失效时间。你需要在适当的位置做清除操作。例如，整个用例开始时清除。</p></blockquote><ul><li>memery_cache</li></ul><p>使用内存的实现的cache 装饰器。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom<span class="token punctuation">.</span>utils <span class="token keyword">import</span> memory_cache


<span class="token decorator annotation punctuation">@memory_cache</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;calculating: %s + %s&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    c <span class="token operator">=</span> x <span class="token operator">+</span> y
    <span class="token keyword">return</span> c


<span class="token keyword">class</span> <span class="token class-name">MyTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_case</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;test cache 1&quot;&quot;&quot;</span>
        r <span class="token operator">=</span> add<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span>r<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">test_case2</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;test cache 2&quot;&quot;&quot;</span>
        r <span class="token operator">=</span> add<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span>r<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">test_case3</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;test cache 3&quot;&quot;&quot;</span>
        r <span class="token operator">=</span> add<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span>r<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>disk_cache</li></ul><p>使用磁盘实现的cache 装饰器。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">import</span> seldom
<span class="token keyword">from</span> seldom<span class="token punctuation">.</span>utils <span class="token keyword">import</span> disk_cache


<span class="token decorator annotation punctuation">@disk_cache</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;calculating: %s + %s&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    c <span class="token operator">=</span> x <span class="token operator">+</span> y
    <span class="token keyword">return</span> c


<span class="token keyword">class</span> <span class="token class-name">MyTest</span><span class="token punctuation">(</span>seldom<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_case</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;test cache 1&quot;&quot;&quot;</span>
        r <span class="token operator">=</span> add<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span>r<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">test_case2</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;test cache 2&quot;&quot;&quot;</span>
        r <span class="token operator">=</span> add<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span>r<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">test_case3</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;test cache 3&quot;&quot;&quot;</span>
        r <span class="token operator">=</span> add<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span>r<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    dc <span class="token operator">=</span> disk_cache<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 清除所有函数缓存</span>
    <span class="token comment"># dc.clear()</span>
    <span class="token comment"># 清除 \`add()\` 函数缓存</span>
    dc<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token string">&quot;add&quot;</span><span class="token punctuation">)</span>
    seldom<span class="token punctuation">.</span>main<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,107)]))}const i=s(p,[["render",o],["__file","advanced.html.vue"]]);export{i as default};
