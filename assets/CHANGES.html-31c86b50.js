import{_ as n,r as d,o as c,c as r,a as e,b as l,d as o,e as t}from"./app-05b2f541.js";const u={},p=e("h1",{id:"版本更新",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#版本更新","aria-hidden":"true"},"#"),l(" 版本更新")],-1),a={id:"seldom-3-x",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#seldom-3-x","aria-hidden":"true"},"#",-1),h=e("p",null,[e("strong",null,"3.4.0(2023-11-18)")],-1),g=t("<li>新增：<code>dependent_func()</code>装饰器，支持用例方法依赖调用，具体使用参考文档。</li><li>api测试 <ul><li>修复：har2case 请求头参数类型判断不准的问题。</li></ul></li><li>web测试 <ul><li>增加<code>open_electron()</code> 方法，支持启动桌面electron应用。</li><li>键盘操作<code>Key()</code>支持链式调用，例如: <code>self.Keys(id_=&quot;kw&quot;).select_all().cut()</code> 全选并删除。</li></ul></li><li>cache操作日志增加 emoji。</li>",4),m=e("code",null,"diff_json()",-1),f={href:"https://github.com/SeldomQA/seldom/issues/197",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,"__3.3.0(2023-09-26)",-1),S=t("<li>web测试 <ul><li>浏览器驱动<code>webdriver-manager</code> 替换为<code>selenium-manager</code>。</li><li>增加<code>execute_cdp_cmd()</code> 方法。</li></ul></li><li>随机数据 <ul><li><code>online_timestamp()</code> 在线获取时间戳。</li><li><code>online_now_datetime()</code> 在线获取当前时间，格式为：<code>%Y-%m-%d %H:%M:%S</code>。</li></ul></li><li>增加运行时内嵌（built-in）方法：<code>base_url()</code>、<code>driver()</code> - 无需导入，可以在自动化程序任意位置使用这两个方法。</li><li>移除<code>parameterized</code> 库的依赖，改为内置。</li>",4),k=e("code",null,"diff_json()",-1),A=e("code",null,"[{}]",-1),x={href:"https://github.com/SeldomQA/seldom/issues/197",target:"_blank",rel:"noopener noreferrer"},y=e("p",null,[e("strong",null,"3.2.3(2023-07-30)")],-1),w=t("<li>HTTP自动化 <ul><li><code>confrun.py</code> 支持 <code>mock_url</code> hook 钩子函数。</li><li>增加 <code>self.base_url</code> 获取 <code>base_url</code>。</li></ul></li><li>Web自动化 <ul><li>更新：<code>get_elements()</code> 增加<code>empty</code>参数，设置为<code>True</code>, 允许返回空列表 <code>[]</code></li><li>更新： <code>debug=True</code> 模式，移除操作元素边框高亮，提高用例执行速度。</li></ul></li><li>App测试 <ul><li>修复：<code>key_text()</code> 无法输入点号<code>.</code>的问题。</li></ul></li><li>优化：<code>seldom_log.log</code> 文件只记录一次运行结果，减少文件大小。</li>",4),v=e("code",null,"webdriver_manager==4.0.0",-1),T={href:"https://github.com/SeldomQA/seldom/issues/189",target:"_blank",rel:"noopener noreferrer"},Q=e("li",null,[l("其他： 添加 "),e("code",null,"pyproject.toml"),l(" 支持。")],-1),M=e("li",null,"文档：增加其他库的使用例子。",-1),j=t("<p><strong>3.2.2(2023-05-10)</strong></p><ul><li>功能：增加<code>@threads()</code>支持多线程运行用例。</li><li>功能：增加<code>@rerun()</code> 重复执行某个测试方法。</li><li>功能：数据库操作 <ul><li><code>MySQLDB()</code>、<code>MSSQLDB()</code> 支持<code>charset</code> 参数设置字符集。</li><li><code>init_table()</code> 批量插入数据库增加<code>clear</code> 参数，可以选择是否删除表再插入。</li></ul></li><li>功能：Web自动化 <ul><li>新增<code>save_screenshot()</code> 截图保存本地。</li><li>修改<code>screenshots()</code> 自动截图保存到HTML报告，移除<code>file_path</code> 参数。</li><li>修改<code>element_screenshot()</code> 元素截图保存到HTML报告，移除<code>file_path</code> 参数。</li><li><code>type()</code> 方法增加 <code>click</code> 参数，针对app元素优化，app的输入框往往需要点击以下锁定光标再输入。</li></ul></li><li>修复：浏览器配置参数 <code>option</code> 更名为 <code>options</code>。</li><li>其他：增加 python3.11 支持。</li></ul><p><strong>3.2.1(2023-04-14)</strong></p><ul><li>功能：增加<code>@disk_cache()</code>、<code>@memory_cache()</code> 缓存装饰器。</li><li>功能：app测试，seldom支持本身API支持appium定位。</li><li>功能：db操作，增加<code>insert_get_last_id()</code> 方法，插入数据并返回id。</li><li>修复：<code>@data_class()</code> 必传<code>input_values</code> 参数问题。</li><li>修复：设置log等级，HTML报告无法根据等级打印日志问题。</li></ul><p><strong>3.2.0(2023-03-14)</strong></p><ul><li>Web UI测试，增加一组新的警告框 alert 操作。 <ul><li><code>self.alert.text</code></li><li><code>self.alert.accept()</code></li><li><code>self.alert.dismiss()</code></li><li><code>self.alert.send_keys(&quot;text&quot;)</code></li></ul></li><li>App UI测试。 <ul><li><code>AppiumLab()</code> 类增加 <code>context()</code> 方法获取当前上下文。</li><li><code>AppiumLab()</code> 类增加 <code>size()</code> 当前窗口尺寸。</li></ul></li><li>API 测试。 <ul><li>增加<code>self.patch()</code> 请求方法。</li><li>增加<code>self.json_to_dict()</code> 支持单引号JSON格式转字典。</li></ul></li><li>cache 增加文件锁，防止多线程读写错误（Windows不支持 fcntl）</li><li>支持 <code>XTestRunner=&gt;1.6.2</code> 版本 <ul><li>XML格式的报告支持 rerun 重跑参数。</li><li>HTML 报告skip用例样式微调。</li><li>HTML 重跑只显示最后一次结果。</li><li>SMTP 发送报告增加 <code>ssl</code> 参数。</li></ul></li><li><code>seldom.main()</code> 方法 ⚠ 不兼容更新 <ul><li>移除 <code>save_last_run</code> 参数。</li><li><code>browser</code> 参数支持<code>dict</code> 格式, 所有和浏览器配置相关的有发生修改。 包括 <ul><li>设置浏览器驱动地址。</li><li>设置 headless 模式。</li><li>设置 options 参数。</li><li>设置 selenium grid 地址。</li></ul></li></ul></li></ul><p><strong>3.1.3(2023-02-15)</strong></p>",7),q=e("code",null,"file_data()",-1),L=e("code",null,"end_line",-1),H={href:"https://github.com/SeldomQA/seldom/issues/163",target:"_blank",rel:"noopener noreferrer"},I=e("li",null,[l("优化："),e("code",null,"self.assertElement()"),l(" 断言元素时间过长的问题。")],-1),N=e("li",null,[l("优化："),e("code",null,"self.assertJSON()"),l(" 断言日志，区分告警和错误。")],-1),R=e("li",null,[l("移除："),e("code",null,"self.jresponse()"),l(" 方法。")],-1),P=t("<p><strong>3.1.2（internal）</strong></p><blockquote><p>内部版本：移除了日志打印的 emoji 表情。</p></blockquote><ul><li>功能：<code>seldom.main()</code> 方法 path 参数支持斜杠路径<code>\\</code>（windows系统用<code>\\</code> 表示路径）。</li></ul><p><strong>3.1.1(2023-01-03)</strong></p><ul><li>功能：<code>confrun.py</code> 增加<code>start_run()/end_run()</code> 钩子函数，用于运行前/后相关配置。</li><li>优化：<code>@api_data()</code> 装饰器增加 <code>headers</code> 参数。</li><li>优化：<code>assertJSON()</code> 断言增加 <code>exclude</code> 参数，屏蔽检查的字段，例如 <code>[&quot;start_time&quot;, &quot;token&quot;]</code>。</li><li>修复：<code>rediscover()</code> 查找用例bug。</li><li>依赖：升级<code>XTestRunner==1.5.0</code> 支持飞书/微信发送消息。</li></ul><p><strong>3.1.0(2022-12-15)</strong></p>",6),E=e("li",null,[l("功能：提供 "),e("code",null,"confrun.py"),l(" 运行配置文件，配合 "),e("code",null,"seldom"),l(" 命令使用。")],-1),C=e("li",null,[l("功能：Web测试，增加 "),e("code",null,"self.get_log()"),l(" 方法。")],-1),B=e("code",null,"webdriver_manager==3.8.5",-1),W={href:"https://github.com/SeldomQA/seldom/issues/159",target:"_blank",rel:"noopener noreferrer"},O={href:"https://github.com/SeldomQA/seldom/issues/158",target:"_blank",rel:"noopener noreferrer"},U=e("li",null,[l("修复：Web测试， "),e("code",null,"self.close()"),l(" 关闭浏览器Bug。")],-1),D=t("<p><strong>3.0.1(2022-11-5)</strong></p><ul><li>功能：支持 <code>SQL Server</code> 数据库支持，需要单独安装<code>pymssql</code>库。</li><li>功能：http接口测试增加<code>curl()</code>方法，支持请求转 <code>cURL</code>。</li><li>功能：<code>seldom</code> 命令增加<code>--log-level</code> 参数，log类型：<code>TRACE</code>, <code>DEBUG</code>, <code>INFO</code>, <code>SUCCESS</code>, <code>WARNING</code>, <code>ERROR</code> 等。</li></ul><p><strong>3.0.0(2022-10-31)</strong></p><ul><li><code>seldom 3.0</code> 的核心是支持app测试，并且相关API已稳定，目的已达到，接下来将会在<code>3.0</code>基础上继续开发。</li><li>功能：<code>collect_cases()</code> 支持 <code>warning</code> 参数。</li></ul><p><strong>3.0.0beta2(2022-10-26)</strong></p>",5),X=e("code",null,"r.text",-1),z={href:"https://github.com/SeldomQA/seldom/issues/146",target:"_blank",rel:"noopener noreferrer"},J=e("li",null,[l("app测试：感谢 @986379041 "),e("ul",null,[e("li",null,[e("code",null,"install_app()"),l(" 错误")]),e("li",null,[e("code",null,"close_app()"),l(" 错误")])])],-1),G=e("code",null,"TestMainExtend",-1),V=e("code",null,"tester",-1),K={href:"https://github.com/SeldomQA/seldom/issues/149",target:"_blank",rel:"noopener noreferrer"},Y=e("code",null,"get_month()",-1),F=e("code",null,"get_year()",-1),Z={href:"https://github.com/SeldomQA/seldom/issues/152",target:"_blank",rel:"noopener noreferrer"},$=e("code",null,"> seldom --clear-cache true",-1),ee={href:"https://github.com/SeldomQA/seldom/issues/153",target:"_blank",rel:"noopener noreferrer"},le=e("li",null,[l("其他: "),e("ul",null,[e("li",null,"seldom 运行用例，优化内存使用。")])],-1),oe=t("<p><strong>3.0.0beta1(2022-10-03)</strong></p><ul><li>支持App测试 <ul><li>依赖<code>Appium-Python-Client</code>库。</li><li><code>main()</code> 增加 <code>app_info</code>, <code>app_server</code> 参数。</li><li>增加<code>appium_lab</code> 模块。</li><li>增加<code>AppDriver</code> 类。</li></ul></li><li>优化：基于pylint检查分析工具 优化代码。</li><li>其他： <ul><li>生成随机数，增加<code>get_timestamp()</code> 获取当前时间戳。</li><li>数据库查询，增加<code>query_one()</code> 查询一条数据。</li></ul></li></ul>",2),ie={id:"seldom-2-x",tabindex:"-1"},te=e("a",{class:"header-anchor",href:"#seldom-2-x","aria-hidden":"true"},"#",-1),se=t("<p><strong>2.10.6/7(2022-09-07)</strong></p><ul><li>功能：<code>seldom</code>命令重大更新，支持更多参数和功能。</li><li>功能：<code>@file_data()</code> 当设置<code>Seldom.env</code>时支持更深一级遍历。</li><li>修复：<code>diff_json()</code> 对比数据错误。</li></ul><p><strong>2.10.4/5(2022-08-17)</strong></p><ul><li>重构log日志打印。 @Yongchin <ul><li>彻底修复日志重复打印的问题。</li><li>移除<code>log.printf()</code> 非标准日志类型。</li></ul></li><li>修复: <ul><li><code>sender()</code> 发送完邮件，<code>seldom_log.log</code> 文件无法删除的问题。</li><li><code>TestMainExtend</code> 类<code>run_cases()</code>按照用例的顺序执行。@luna-CY</li><li>修复<code>request</code> 带上<code>url=</code> 参数时异常。 @986379041@qq.com</li></ul></li><li>依赖：<code>webdriver_manager</code>依赖升级到<code>3.8.2</code></li><li>移除：<code>Opera</code> 浏览器的支持，selenium 4 已经移除了对opera的单独驱动支持。</li></ul><p><strong>2.10.3(2022-07-17)</strong></p><ul><li>数据驱动：<code>@data()</code> 和 <code>@file_data()</code> 优化用例名称和描述。</li><li>增加<code>Seldom.env</code>环境配置变量，<code>@file_data()</code> 数据驱动装饰器支持环境变量。</li><li>修复：<code>Edge</code>浏览器启动错误。</li><li>修复：HTTP接口测试<code>self.post()</code>方法 <code>data</code>参数不是dict类型错误。</li><li>平台化支持：优化用例收集，具体查看文档。</li></ul><p><strong>2.10.2(2022-06-25)</strong></p>",7),de={href:"https://github.com/SeldomQA/seldom/blob/master/docs/vpdocs/other/other.md",target:"_blank",rel:"noopener noreferrer"},ne=e("li",null,"功能：测试报告显示断言信息。",-1),ce=e("li",null,[l("功能："),e("code",null,"main()"),l(" 通过"),e("code",null,"open=False"),l("可以控制运行完测试 不自动化打开测试报告。")],-1),re=e("li",null,[l("增加"),e("code",null,"self.new_browser()"),l(" 可以打开新的浏览器，但只能使用"),e("code",null,"selenium"),l(" 的 API")],-1),ue=e("code",null,"switch_to_frame_parent",-1),pe={href:"https://github.com/SeldomQA/seldom/issues/118",target:"_blank",rel:"noopener noreferrer"},ae=e("code",null,"assertNotElement",-1),_e={href:"https://github.com/SeldomQA/seldom/issues/120",target:"_blank",rel:"noopener noreferrer"},he=e("li",null,[l("HTTP 测试： "),e("ul",null,[e("li",null,"优化：JSON日志进行格式化打印。")])],-1),ge=e("p",null,[e("strong",null,"2.10.1(2022-05-30)")],-1),me=e("ul",null,[e("li",null,"修复：seldom log 问题引起，错误信息无法在控制台打印。")],-1),fe={href:"https://github.com/SeldomQA/seldom/issues/107",target:"_blank",rel:"noopener noreferrer"},be=e("p",null,[e("strong",null,"2.10.0(2022-05-25)")],-1),Se={href:"https://github.com/SeldomQA/seldom/issues/107",target:"_blank",rel:"noopener noreferrer"},ke=e("li",null,[l("log方法变更："),e("code",null,"log.warn()"),l(" -> "),e("code",null,"log.warning()"),l("。")],-1),Ae=t("<li>功能：提供了<code>cache</code> 类来模拟缓存。</li><li>功能：<code>@data()</code> 装饰器支持 <code>dict</code> 格式。</li><li>功能：<code>self.jresponse()</code> 方法设计不合理，给以废弃提示；可以使用<code>self.jsonpath()</code>/<code>self.jmespath()</code> 替代。</li><li>优化：断言方法<code>assertSchema()</code>、<code>assertJSON()</code>支持<code>response</code>传参。</li><li>优化：<code>@check_response()</code> check检查失败打印<code>response</code>。</li><li>修复：<code>webdriver_manager</code> 没有设置上限版本，导致<code>webdriver_manager&gt;=3.6.x</code> 报错; 如果使用的 <code>seldom&lt;=2.9</code> 请重新安装<code>webdriver_manager==3.5.2</code>。</li>",6),xe=e("p",null,[e("strong",null,"2.9.0(2022-04-30)")],-1),ye=t("<li>seldom log功能： <ul><li>开放seldom 的<code>log</code>能力，可以配置<code>颜色（colorlog）</code>、<code>格式(format)</code>、<code>等级(level)</code> 等。</li><li>重新定义了seldom打印日志的格式。</li><li>所有log统一记录到<code>/reports/seldom_log.log</code>文件，不再每次生成单独文件。</li></ul></li><li>功能：提供了<code>@check_response()</code> 装饰器，为接口封装提供强大的支持。</li>",2),we=e("code",null,"genson",-1),ve={href:"https://github.com/SeldomQA/seldom/issues/100",target:"_blank",rel:"noopener noreferrer"},Te=t("<li>功能：增加<code>assertInPath()</code> 断言方法。</li><li>功能：增加<code>jmespath()</code>方法，方便提取测试数据。</li><li>优化：<code>jresponse()</code> 增加对<code>jmespath</code> 语法的支持。</li><li>优化：支持<code>self.get()/self.post()/self.put()/self.delete()</code> 返回response对象。</li>",4),Qe=e("p",null,[e("strong",null,"2.8.0(2022-04-16)")],-1),Me={href:"https://github.com/SeldomQA/seldom/issues/93",target:"_blank",rel:"noopener noreferrer"},je={href:"https://github.com/SeldomQA/seldom/issues/94",target:"_blank",rel:"noopener noreferrer"},qe=e("code",null,"sendmail()",-1),Le=e("code",null,"delete",-1),He=e("code",null,"reports/",-1),Ie={href:"https://github.com/SeldomQA/seldom/issues/95",target:"_blank",rel:"noopener noreferrer"},Ne=e("code",null,"jsonpath",-1),Re=e("code",null,"jresponse()",-1),Pe={href:"https://github.com/SeldomQA/seldom/issues/96",target:"_blank",rel:"noopener noreferrer"},Ee=e("li",null,[l("功能：创建项目脚手架增加api测试例子："),e("code",null,"seldom -project mypro"),l(" 。")],-1),Ce=e("li",null,"其他： 全新的seldom在线文档：https://seldomqa.github.io/ ，感谢 @nickliya",-1),Be=t("<p><strong>2.7.0(2022-03-26)</strong></p><ul><li>功能：引入<code>loguru</code> 库用于打印日志（之前使用python默认logging总有一些重复打印或不打印的问题）。</li><li>功能：web自动化增加一套方法链（method chaining）的API。</li><li>功能：支持手动指定浏览器驱动路径。</li></ul><p><strong>2.6.0(2022-03-18)</strong></p><ul><li>移除：自带的<code>HTMLTestRunner</code>，HTML报告采用<code>XTestRunner</code>。</li><li>移除：对<code>unittest-xml-reporting</code>库的依赖，XML报告使用<code>XTestRunner</code>。</li><li>修改：<code>SMTP</code>类发送邮件方法 <code>sender()</code> -&gt; <code>sendmail()</code>， 发送邮件样式采用<code>XTestRunner</code>。</li><li>增加：<code>seldom.main()</code>方法增加<code>tester</code> 参数，用于设置测试人员名字，默认<code>Anonymous</code>。</li><li>增加：<code>seldom.main()</code>方法增加<code>language</code> 参数，用于设置报告中英文<code>en/zh-CN</code>，默认<code>en</code>。</li><li>增加：发送钉钉功能。</li><li>修改：接口测试 <code>self.session</code> -&gt; <code>self.Session()</code>。</li><li>移除：接口测试 <code>self.request()</code> 方法移除（注：该方法原本不可用）。</li></ul><p><strong>2.5.1(2022-02-19)</strong></p>",5),We=e("li",null,"功能：Http接口测试使用日志打印接口信息",-1),Oe=e("code",null,"json",-1),Ue={href:"https://github.com/SeldomQA/seldom/issues/83",target:"_blank",rel:"noopener noreferrer"},De=e("li",null,[l("修复：Web UI测试"),e("code",null,"self.Key()"),l(" 无法定位元素的问题")],-1),Xe=t("<p><strong>2.5.0(2022-01-30)</strong></p><ul><li>功能：支持测试平台化。</li><li>功能：utils 增加<code>file</code>类，获取当前文件目录更方便。</li><li>修复：<code>self.select()</code> 操作下拉选择错误。</li><li>修复：<code>diff_json()</code> 对比json文件错误。</li></ul><p><strong>2.4.2(2022-01-18)</strong></p><ul><li>功能：增强<code>@file_data</code>使用方式，json/yaml支持内嵌<code>dict</code>数据。</li></ul><p><strong>2.4.1(2022-01-17)</strong></p><ul><li>优化：HTTP接口测试增加<code>cookies</code>信息打印。</li><li>优化：<code>@file_data()</code> 使用，支持指定目录。</li><li>修复：<code>visit()</code> 方法默认浏览器没有自动安装浏览器驱动的问题。</li><li>修复：<code>query_sql()</code> 执行SQL没有提交的问题。</li></ul><p><strong>2.4.0(2022-01-02)</strong></p>",7),ze=e("li",null,"适配selenium 4.0+ ，适配相关依赖库新版本。",-1),Je=e("li",null,[l("测试用例支持"),e("code",null,"label"),l("标签分类。")],-1),Ge={href:"https://github.com/SeldomQA/seldom/issues/79",target:"_blank",rel:"noopener noreferrer"},Ve=e("li",null,[l("EdgeChromium浏览器支持"),e("code",null,"headless"),l("模式。")],-1),Ke=e("li",null,[l("Web自动化测试增加元素截图"),e("code",null,"self.element_screenshot()")],-1),Ye=e("li",null,"优化HTML测试报告样式。",-1),Fe=e("li",null,"优化邮件模板样式。",-1),Ze=e("p",null,[e("strong",null,"2.3.3(2021-11-12)")],-1),$e=e("code",null,"assertNotText()",-1),el={href:"https://github.com/SeldomQA/seldom/issues/75",target:"_blank",rel:"noopener noreferrer"},ll=e("code",null,"main()",-1),ol=e("code",null,"rerun",-1),il=e("code",null,"save_last_run",-1),tl={href:"https://github.com/SeldomQA/seldom/issues/76",target:"_blank",rel:"noopener noreferrer"},sl=t("<p><strong>2.3.2(2021-11-08)</strong></p><ul><li>接口调用如果是图片类型，不在打印内容。</li><li>增加<code>screenshot</code> 针对定位的元素截图, 用法<code>self.screenshot(id=&quot;xx&quot;)</code>。</li><li>测试报告：优化截图的样式。</li><li>发邮件功能，默认增加附件为测试报告。</li></ul><p><strong>2.3.1(2021-11-02)</strong></p><ul><li>修复<code>assertUrl()</code>、<code>assertInUrl()</code> 断言中文编码错误。</li><li>增加文件路径操作。 <ul><li><code>file_path()</code> 获取当前文件路径。</li><li><code>file_dir()</code> 获取当前文件目录。</li><li><code>file_dir_dir()</code> 获取当前文件目录的目录。</li><li><code>file_dir_dir_dir()</code> 获取当前文件目录的目录的目录。</li><li><code>init_env_path()</code> 添加路径到环境变量。</li></ul></li><li>优化<code>main()</code> 方法中代码的执行顺序。</li></ul><p><strong>2.3.0(2021-10-18)</strong></p><ul><li>集成 <code>webdriver-manager</code>，不需要再单独安装浏览器驱动。</li><li>seldom logo 显示版本号。</li><li>固定<code>selenium</code>版本号，暂没做<code>4.0.0</code>适配。</li></ul><p><strong>2.2.4(2021-09-21)</strong></p>",7),dl=e("code",null,"url",-1),nl={href:"https://github.com/SeldomQA/seldom/issues/71",target:"_blank",rel:"noopener noreferrer"},cl={href:"https://github.com/SeldomQA/seldom/issues/72",target:"_blank",rel:"noopener noreferrer"},rl=e("li",null,"优化HTMLTestRunner, 重跑次数不记录为用例数。",-1),ul=e("li",null,[l("修复pip安装缺少"),e("code",null,"description.rst"),l(" 问题。")],-1),pl=e("p",null,[e("strong",null,"2.2.3(2021-08-27)")],-1),al={href:"https://github.com/SeldomQA/seldom/issues/42",target:"_blank",rel:"noopener noreferrer"},_l=e("code",null,"get_elements()",-1),hl={href:"https://github.com/SeldomQA/seldom/issues/69",target:"_blank",rel:"noopener noreferrer"},gl=e("code",null,"colorama",-1),ml=e("code",null,"emoji",-1),fl={href:"https://github.com/SeldomQA/seldom/issues/70",target:"_blank",rel:"noopener noreferrer"},bl=t("<p><strong>2.2.2(2021-08-13)</strong></p><ul><li>优化db操作方法。</li><li>打印<code>logs</code>合并到 <code>reports</code> 目录。</li></ul><p><strong>2.2.1(2021-06-30)</strong></p><ul><li>webdriver文件增加类型。</li><li>删除utils 错误代码。</li><li>修复：<code>diff_json()</code> 函数处理复杂数据报错 #66</li><li>修复：运行接口测试用例报 driver 错误 #68</li><li>修复：测试报告<code>popper.min.js</code> CDN 太慢的问题</li></ul><p><strong>2.2.0(2021-06-15)</strong></p><ul><li>增加接口测试方法<code>session</code>、<code>request</code>。</li><li>增加<code>seldom -h2c</code>参数，用于将har文件转成测试用例。</li></ul><p><strong>2.1.1(2021-05-28)</strong></p><ul><li>增加随机生成时间方法<code>get_past_time()</code>、<code>get_future_time()</code></li><li>优化：截图方法<code>screenshots()</code>，可以在任意位置使用该方法生成截图，并显示在HTML测试报告中。</li><li>修复：接口测试<code>main()</code>中base_url 和 方法中的 url 同时存在的问题。</li><li>修复：优化MySQL数据库连接的问题。</li><li>修复：发送邮件时的错误。</li><li>修复：当<code>main()</code>中的timeout设置为1时，断言失败的问题。</li></ul><p><strong>2.1.0(2021-05-19)</strong></p><ul><li>增加数据库操作，同时支持<code>sqlite3</code>、<code>mysql</code>。</li><li>优化<code>file_data()</code>，兼容2.0.0用法。</li></ul><p><strong>2.0.1(2021-05-07)</strong></p><ul><li>优化 <code>file_data()</code>, 自动查找数据文件。</li><li>优化脚手架，创建项目例子更新。</li></ul><p><strong>2.0.0(2021-04-24)</strong></p><ul><li>webdriver API 修改 <ul><li>移除 <code>self.get()</code></li><li>增加 <code>self.visit()</code></li><li>移除 <code>self.open_new_window()</code></li><li>移除 <code>self.current_window_handle()</code></li><li>移除 <code>self.new_window_handle()</code></li><li>移除 <code>self.window_handles()</code></li><li>修改 <code>self.switch_to_window()</code> 用法</li><li>优化打印日志，为每种操作加上 emoji</li></ul></li><li>增加<code>expected_failure</code>用例装饰器，用于标记一条用例失败</li><li>增加 <code>file_dir（）</code>, 返回当前文件所在目录的绝对路径。</li><li>运行完成自动通过浏览器打开HTML报告</li><li><code>main()</code>方法修改 <ul><li>修复<code>debug</code>参数类型错误异常提示</li><li>控制台更换字符logo*</li></ul></li><li>整合 webdriver/request</li><li>上线 readthedocs 文档</li></ul><p><strong>2.0.0.beta(2021-03-24)</strong></p><ul><li>支持 HTTP接口测试</li></ul>",16),Sl={id:"seldom-1-x",tabindex:"-1"},kl=e("a",{class:"header-anchor",href:"#seldom-1-x","aria-hidden":"true"},"#",-1),Al=t('<p><strong>1.10.3(2021-03-23)</strong></p><p>...</p><p><strong>1.10.2(2021-03-13)</strong></p><ul><li>HTMLTestRunner代码优化</li><li>修复bug</li></ul><p><strong>1.10.1(2021-03-04)</strong></p><ul><li>webdriver代码重构</li><li>修复严重bug</li></ul><p><strong>1.10.0(2021-01-29)</strong></p><ul><li>增加断言元素方法：<code>assertElement</code>、<code>assertNotElement</code></li><li>增加单个测试类、用例执行的方法</li><li>修复报告样式bug</li><li>命令行工具优化</li></ul><p><strong>1.9.0(2020-12-19)</strong></p><ul><li>测试报告重构 <ul><li>用例描述单独一列</li><li>增加单个用例运行时间</li><li>新的报告样式</li></ul></li><li>脚手架工具创建项目更新</li><li>增加随机生成手机号方法</li></ul><p><strong>1.8.0(2020-11-17)</strong></p><ul><li>增加用例依赖装饰器</li></ul><p><strong>1.7.2(2020-10-10)</strong></p><ul><li>bug修复版本</li></ul><p><strong>1.7.0(2020-09-21)</strong></p><ul><li>重构浏览器驱动，开放浏览器可配置能力。</li></ul><p><strong>1.6.0(2020-08-24)</strong></p><ul><li>浏览器增加简写</li><li>支持 logs 日志</li><li>支持 XML 测试报告</li><li>增加 file_data 方法实现参数化。</li><li>修复一些bug</li></ul><p><strong>1.5.6(2020-07-24)</strong></p><ul><li>封装test fixture方法</li></ul><p><strong>1.5.5(2020-06-29)</strong></p><ul><li>修改HTMLTestRunner 错误日志的展示</li><li>增加mobile web的支持</li></ul><p><strong>1.5.4(2020-06-04)</strong></p><ul><li>增加keys键盘操作</li><li>元素操作增加聚焦</li><li>debug 模式增加慢操作</li></ul><p><strong>1.5.3(2020-05-31)</strong></p><ul><li>修复bug</li><li>增加 yaml_to_list()方法</li></ul><p><strong>1.5.2(202x-05-16)</strong></p><ul><li>修复bug</li></ul><p><strong>1.5.1 (2020-05-14)</strong></p><ul><li>修复日志重复打印问题</li><li>修复测试报告不截图问题</li><li>日志增加emoji表情</li></ul><p><strong>1.5.0(2020-04-29)</strong></p><ul><li>自动化运行过程中，对操作的元素加边框，使其更醒目。</li><li>去掉对 <code>setUpClass()</code>方法的占用，代码做了较大重构。</li><li>在使用poium时，驱动的获取方式改变，这一点不向下兼容。</li></ul><p><strong>1.2.6 (2020-04-22)</strong></p><ul><li>完善自动化发邮件功能</li><li>增加 type_enter() 方法</li><li>优化项目的代码的调用</li><li>修复 seldom + poium 日志问题</li></ul><p><strong>1.2.5(2020-04-13)</strong></p><ul><li>重新定制测试报告样式</li><li>seldom.main()增加timeout参数</li></ul><p><strong>1.2.4(2020-03-19)</strong></p><ul><li>增加数据解析相关操作方法</li><li>增加跳过测试相关方法</li><li>增加发邮件功能</li><li>修复bug, 优化代码</li></ul><p><strong>1.2.3(2020-03-11)</strong></p><ul><li>增加 slow_click() 方法。</li><li>seldom.main() 默认运行当前文件不需要传参。</li><li>seldom.main(report=&quot;report-name.html&quot;) 允许自定义报告名称。</li></ul><p><strong>1.2.2(2020-03-03)</strong></p><ul><li>fix bug</li><li>add function: csv_to_list()/ excel_to_list()</li></ul><p><strong>1.2.0(2020-02-01)</strong></p><p>Global launch browser</p><p><strong>1.1.0(2020-01-19)</strong></p><p>selenium grid support Added safari support</p><p><strong>1.0.0(2020-01-04)</strong></p><p>The framework function has been basically improved. I&#39;m glad to release version 1.0</p><h3 id="seldom-0-x" tabindex="-1"><a class="header-anchor" href="#seldom-0-x" aria-hidden="true">#</a> seldom 0.x</h3><p><strong>0.3.6(2019-12-23)</strong></p><p>Add cookie manipulation APIs Optimized element wait</p><p><strong>0.3.5(2019-12-06)</strong></p><p>Added chrome/firefox browser driver download command Driver file path Settings are supported</p><p><strong>0.3.3(2019-11-30)</strong></p><p>add skip case</p><p><strong>0.3.2(2019-11-27)</strong></p><p>Added a switch to display the last rerun result Optimized assertion method</p><p><strong>0.3.0(2019-11-21)</strong></p><p>Update element positioning</p><p><strong>0.2.0(2019-11-17)</strong></p><p>Change the project name to seldom Introducing the poium test library,</p><h3 id="pyse" tabindex="-1"><a class="header-anchor" href="#pyse" aria-hidden="true">#</a> pyse</h3><p><strong>0.1.5(2019-11-15)</strong></p><ul><li>Increased test case failure rerun</li><li>Add use case failure screenshots</li></ul><p><strong>0.0.9(2018-03-29)</strong></p><p>Simplifying API calls</p><p><strong>0.0.8(2017-11-23)</strong></p><p>add parameterized Beautification test report</p><p><strong>0.0.7(2016-11-09)</strong></p><p>Re based on unittest.</p><p><strong>0.0.6(2016-04-29)</strong></p><p>add setup.py file, Specification of the installation process, a time to install all dependencies. Delete unnecessary files</p><p><strong>0.0.5</strong></p><p>Increase the support of multiple positioning methods</p><p><strong>0.0.4</strong></p><p>Method to add default to wait. Modify the realization of the individual methods</p><p><strong>0.0.3.1 version update</strong></p><ul><li>Repair part bug.</li></ul><p><strong>0.0.3 version update(2015-09-08)</strong></p><ul><li>With the nose instead of unittest.</li><li>Discard HTMLTestRunner,Integrated nose-html-reporting.</li><li>modify the examples under demo.</li></ul><p><strong>0.0.2 version update(2015-09-08)</strong></p><ul><li>all the elements of the operation selector xpath replaced by css, css syntax because more concise.</li><li>when you run the test case no longer need to specify the directory, the default directory for the current test.</li><li>modify the examples under demo.</li></ul>',82);function xl(yl,wl){const s=d("Badge"),i=d("ExternalLinkIcon");return c(),r("div",null,[p,e("h3",a,[_,l(" seldom 3.x "),o(s,{type:"tip",text:"v3",vertical:"top"})]),h,e("ul",null,[g,e("li",null,[l("修复："),m,l(" 优化，支持dict深度排序。 "),e("a",f,[l("#197"),o(i)])])]),b,e("ul",null,[S,e("li",null,[l("修复："),k,l(" 对比 "),A,l(" 数据时报错。 "),e("a",x,[l("#197"),o(i)])])]),y,e("ul",null,[w,e("li",null,[l("升级："),v,l(),e("a",T,[l("#189"),o(i)])]),Q,M]),j,e("ul",null,[e("li",null,[l("功能："),q,l(" 增加"),L,l(" 参数，对于csv/excel文件支持读取到第几行结束。"),e("a",H,[l("#163"),o(i)])]),I,N,R]),P,e("ul",null,[E,C,e("li",null,[l("升级："),B,l(" ，支持Mac M1芯片的浏览器驱动。"),e("a",W,[l("#159"),o(i)])]),e("li",null,[l("修复：seldom-platform平台同步多个项目引起的Bug。"),e("a",O,[l("#158"),o(i)])]),U]),D,e("ul",null,[e("li",null,[l("修复： "),e("ul",null,[e("li",null,[l("接口测试: 接口返回文本"),X,l(" 中文乱码问题。"),e("a",z,[l("#146"),o(i)])]),J])]),e("li",null,[l("功能： "),e("ul",null,[e("li",null,[G,l(" 类增加 "),V,l("参数。 "),e("a",K,[l("#149"),o(i)])]),e("li",null,[l("生成随机数，增加"),Y,l(" 和 "),F,l("方法。 "),e("a",Z,[l("#152"),o(i)])]),e("li",null,[l("seldom命令增加清除所有缓存。"),$,l("。 "),e("a",ee,[l("#153"),o(i)])])])]),le]),oe,e("h3",ie,[te,l(" seldom 2.x "),o(s,{type:"tip",text:"v2",vertical:"top"})]),se,e("ul",null,[e("li",null,[l("更新：移动模式列表更新，去掉旧设备，增加新设备 "),e("a",de,[l("link"),o(i)])]),ne,ce,e("li",null,[l("Web 测试： "),e("ul",null,[re,e("li",null,[l("增加"),ue,l(" 切换到上一级表单，"),e("a",pe,[l("#118"),o(i)]),l("。")]),e("li",null,[l("优化"),ae,l(" 执行慢的情况 "),e("a",_e,[l("#120"),o(i)])])])]),he]),ge,me,e("blockquote",null,[e("p",null,[l("2.10.0 为了解决"),e("a",fe,[l("107"),o(i)]),l(" 问题，我们经过反复的讨论和优化，甚至对相关库XTestRunner做了修改；以为完美解决了这个问题，没想到还是引起了一些严重的错误。为此，我们感到非常沮丧，退回到2.9.0的实现方案。请升级到2.10.1版本。")])]),be,e("ul",null,[e("li",null,[l("seldom log功能： "),e("ul",null,[e("li",null,[l("修复打印日志显示固定文件的问题 "),e("a",Se,[l("107"),o(i)]),l("。")]),ke])]),Ae]),xe,e("ul",null,[ye,e("li",null,[l("功能：集成"),we,l("库，生成JsonSchema模板 "),e("a",ve,[l("100"),o(i)]),l(" 。")]),Te]),Qe,e("ul",null,[e("li",null,[l("功能：增加MongoDB 数据库操作 "),e("a",Me,[l("93"),o(i)]),l(" 。")]),e("li",null,[l("功能：支持单个用例执行 "),e("a",je,[l("94"),o(i)]),l(" 。")]),e("li",null,[l("功能："),qe,l(" 增加"),Le,l("参数，发送完邮件删除"),He,l(" 目录下面的报告和日志文件 "),e("a",Ie,[l("95"),o(i)]),l(" 。")]),e("li",null,[l("功能：增加"),Ne,l(" 和 "),Re,l(" ，更容易查找json数据 "),e("a",Pe,[l("96"),o(i)]),l(" 。")]),Ee,Ce]),Be,e("ul",null,[We,e("li",null,[l("功能：Http接口测试打印"),Oe,l("参数 "),e("a",Ue,[l("83"),o(i)])]),De]),Xe,e("ul",null,[ze,Je,e("li",null,[l("接口测试增加打印入参信息 "),e("a",Ge,[l("79"),o(i)]),l(" 。")]),Ve,Ke,Ye,Fe]),Ze,e("ul",null,[e("li",null,[l("增加 "),$e,l(" 断言方法 "),e("a",el,[l("75"),o(i)]),l(" 。")]),e("li",null,[l("修复"),ll,l("设置"),ol,l(" 和 "),il,l("参数，导致用例统计错误 "),e("a",tl,[l("76"),o(i)]),l(" 。")])]),sl,e("ul",null,[e("li",null,[l("修复HTTP接口测试，指定"),dl,l("参数错误的问题。"),e("a",nl,[l("71"),o(i)])]),e("li",null,[l("支持发送多人邮件。"),e("a",cl,[l("72"),o(i)])]),rl,ul]),pl,e("ul",null,[e("li",null,[l("支持控制台操作步骤显示在HTML报告中。"),e("a",al,[l("42"),o(i)])]),e("li",null,[l("修改"),_l,l("返回空列表。"),e("a",hl,[l("69"),o(i)])]),e("li",null,[l("修复因为"),gl,l("/"),ml,l("导致的编码错误。"),e("a",fl,[l("70"),o(i)])])]),bl,e("h3",Sl,[kl,l(" seldom 1.x "),o(s,{type:"tip",text:"v1",vertical:"top"})]),Al])}const Tl=n(u,[["render",xl],["__file","CHANGES.html.vue"]]);export{Tl as default};