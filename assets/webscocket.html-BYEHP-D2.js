import{_ as n,e as a,f as e,o as p}from"./app-6fE1y3uD.js";const l={};function t(i,s){return p(),a("div",null,s[0]||(s[0]=[e(`<h1 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket"><span>WebSocket</span></a></h1><blockquote><p>seldom &gt; 3.6.0 支持该功能</p></blockquote><p>有些时间我们需要通过<code>WebSocket</code>实现长连接，很高兴的告诉告诉你seldom支持<code>WebSocket</code>测试了。</p><h3 id="websocket-生命周期" tabindex="-1"><a class="header-anchor" href="#websocket-生命周期"><span>WebSocket 生命周期</span></a></h3><p>WebSocket 生命周期中包含几个关键的事件，这些事件允许开发人员在连接的不同阶段执行代码。以下是WebSocket API中定义的主要事件：</p><ul><li><p><code>open</code>: 当WebSocket连接成功建立时触发。这个事件表明客户端与服务器之间的连接已经打开，可以开始数据传输。</p></li><li><p><code>message</code>: 当客户端接收到服务器发送的消息时触发。这个事件用于处理从服务器接收到的所有消息。</p></li><li><p><code>error</code>: 当发生错误，导致WebSocket连接关闭之前或连接无法成功建立时触发。这个事件可以用来处理和响应WebSocket过程中出现的任何异常或错误情况。</p></li><li><p><code>close</code>: 当连接被关闭时触发，无论是客户端还是服务器端主动关闭连接，或是因为某种原因连接被迫关闭。这个事件表明WebSocket连接已经彻底关闭，可以进行清理和后续处理。</p></li></ul><h3 id="seldom测试websocket" tabindex="-1"><a class="header-anchor" href="#seldom测试websocket"><span>seldom测试WebSocket</span></a></h3><p>在seldom中测试WebSocket非常简单。</p><ul><li>首先，需要一个WebSocket服务。</li></ul><p>通过<code>aiohttp</code>实现<code>websocket_server.py</code>。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment"># websocket_server.py</span></span>
<span class="line">from aiohttp <span class="token function">import</span> web</span>
<span class="line"><span class="token function">import</span> aiohttp</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">async def websocket_handler<span class="token punctuation">(</span>request<span class="token punctuation">)</span>:</span>
<span class="line">    ws <span class="token operator">=</span> web.WebSocketResponse<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    await ws.prepare<span class="token punctuation">(</span>request<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    async <span class="token keyword">for</span> <span class="token for-or-select variable">msg</span> <span class="token keyword">in</span> ws:</span>
<span class="line">        <span class="token keyword">if</span> msg.type <span class="token operator">==</span> aiohttp.WSMsgType.TEXT:</span>
<span class="line">            print<span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span>, msg.data<span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">if</span> msg.data <span class="token operator">==</span> <span class="token string">&#39;close&#39;</span><span class="token builtin class-name">:</span></span>
<span class="line">                await ws.close<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">            else:</span>
<span class="line">                await ws.send_str<span class="token punctuation">(</span>f<span class="token string">&quot;Message text was: {msg.data}&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">elif</span> msg.type <span class="token operator">==</span> aiohttp.WSMsgType.ERROR:</span>
<span class="line">            print<span class="token punctuation">(</span><span class="token string">&#39;ws connection closed with exception %s&#39;</span> %</span>
<span class="line">                  ws.exception<span class="token punctuation">(</span><span class="token punctuation">))</span></span>
<span class="line"></span>
<span class="line">    print<span class="token punctuation">(</span><span class="token string">&#39;websocket connection closed&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token builtin class-name">return</span> ws</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">app <span class="token operator">=</span> web.Application<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">app.router.add_get<span class="token punctuation">(</span><span class="token string">&#39;/ws&#39;</span>, websocket_handler<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">web.run_app<span class="token punctuation">(</span>app, <span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">8765</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>然后，通过seldom编写WebSocket测试用例。</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">import</span> seldom</span>
<span class="line">from seldom.logging <span class="token function">import</span> log</span>
<span class="line">from seldom.websocket_client <span class="token function">import</span> WebSocketClient</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">class WebSocketTest<span class="token punctuation">(</span>seldom.TestCase<span class="token punctuation">)</span>:</span>
<span class="line"></span>
<span class="line">    def start<span class="token punctuation">(</span>self<span class="token punctuation">)</span>:</span>
<span class="line">        <span class="token comment"># 创建WebSocket客户端线程</span></span>
<span class="line">        self.client <span class="token operator">=</span> WebSocketClient<span class="token punctuation">(</span><span class="token string">&quot;ws://0.0.0.0:8765/ws&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        self.client.start<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token comment"># 等待客户端连接建立</span></span>
<span class="line">        self.sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment"># 这里假设服务器可以在1秒内响应连接</span></span>
<span class="line"></span>
<span class="line">    def tearDown<span class="token punctuation">(</span>self<span class="token punctuation">)</span>:</span>
<span class="line">        <span class="token comment"># 发送关闭消息</span></span>
<span class="line">        self.client.send_message<span class="token punctuation">(</span><span class="token string">&quot;close&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token comment"># 停止WebSocket客户端线程</span></span>
<span class="line">        self.client.stop<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        self.client.join<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    def test_send_and_receive_message<span class="token punctuation">(</span>self<span class="token punctuation">)</span>:</span>
<span class="line">        <span class="token comment"># 发送消息</span></span>
<span class="line">        self.client.send_message<span class="token punctuation">(</span><span class="token string">&quot;Hello, WebSocket!&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        self.client.join<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment"># 等待接收消息</span></span>
<span class="line">        self.client.send_message<span class="token punctuation">(</span><span class="token string">&quot;How are you?&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        self.client.join<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment"># 等待接收消息</span></span>
<span class="line">        <span class="token comment"># 验证是否收到消息</span></span>
<span class="line">        log.info<span class="token punctuation">(</span>self.client.received_messages<span class="token punctuation">)</span></span>
<span class="line">        self.assertEqual<span class="token punctuation">(</span>len<span class="token punctuation">(</span>self.client.received_messages<span class="token punctuation">)</span>, <span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line">        self.assertIn<span class="token punctuation">(</span><span class="token string">&quot;Hello, WebSocket!&quot;</span>, self.client.received_messages<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">        self.assertIn<span class="token punctuation">(</span><span class="token string">&quot;How are you?&quot;</span>, self.client.received_messages<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token builtin class-name">:</span></span>
<span class="line">    seldom.main<span class="token punctuation">(</span>debug<span class="token operator">=</span>True<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>运行日志</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token operator">&gt;</span> python test_websocket.py</span>
<span class="line"></span>
<span class="line">test_send_and_receive_message <span class="token punctuation">(</span>test_websocket.WebSocketTest.test_send_and_receive_message<span class="token punctuation">)</span> <span class="token punctuation">..</span>. </span>
<span class="line"><span class="token number">2024</span>-04-05 <span class="token number">23</span>:36:33 <span class="token operator">|</span> INFO     <span class="token operator">|</span> case.py <span class="token operator">|</span> 💤️ sleep: 1s.</span>
<span class="line"><span class="token number">2024</span>-04-05 <span class="token number">23</span>:36:33 <span class="token operator">|</span> INFO     <span class="token operator">|</span> websocket_client.py <span class="token operator">|</span> WebSocket connection opened.</span>
<span class="line"><span class="token number">2024</span>-04-05 <span class="token number">23</span>:36:36 <span class="token operator">|</span> INFO     <span class="token operator">|</span> test_websocket.py <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token string">&#39;Message text was: Hello, WebSocket!&#39;</span>, <span class="token string">&#39;Message text was: How are you?&#39;</span><span class="token punctuation">]</span></span>
<span class="line">ok</span>
<span class="line"></span>
<span class="line">----------------------------------------------------------------------</span>
<span class="line">Ran <span class="token number">1</span> <span class="token builtin class-name">test</span> <span class="token keyword">in</span> <span class="token number">3</span>.006s</span>
<span class="line"></span>
<span class="line">OK</span>
<span class="line"><span class="token number">2024</span>-04-05 <span class="token number">23</span>:36:36 <span class="token operator">|</span> SUCCESS  <span class="token operator">|</span> runner.py <span class="token operator">|</span> A run the <span class="token builtin class-name">test</span> <span class="token keyword">in</span> debug mode without generating HTML report<span class="token operator">!</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15)]))}const o=n(l,[["render",t],["__file","webscocket.html.vue"]]),u=JSON.parse('{"path":"/api-testing/webscocket.html","title":"WebSocket","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"WebSocket 生命周期","slug":"websocket-生命周期","link":"#websocket-生命周期","children":[]},{"level":3,"title":"seldom测试WebSocket","slug":"seldom测试websocket","link":"#seldom测试websocket","children":[]}],"git":{"updatedTime":1712331683000,"contributors":[{"name":"虫师","username":"虫师","email":"defnngj@gmail.com","commits":1,"url":"https://github.com/虫师"}],"changelog":[{"hash":"0a2ef38f8e7a7bb05c5647472b3d1db4a4062ed3","time":1712331683000,"email":"defnngj@gmail.com","author":"虫师","message":"📝️ websocket doc &amp; test."}]},"filePathRelative":"api-testing/webscocket.md"}');export{o as comp,u as data};
