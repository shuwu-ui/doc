import{_ as s,c as a,o as t,a2 as i}from"./chunks/framework.C94oF1kp.js";const E=JSON.parse('{"title":"提交swap_face任务","description":"","frontmatter":{},"headers":[],"relativePath":"imagine/midjourney/swap_face.md","filePath":"imagine/midjourney/swap_face.md"}'),e={name:"imagine/midjourney/swap_face.md"},n=i(`<h1 id="提交swap-face任务" tabindex="-1">提交swap_face任务 <a class="header-anchor" href="#提交swap-face任务" aria-label="Permalink to &quot;提交swap_face任务&quot;">​</a></h1><blockquote><p>POST <code>https://api.gptoai.cc/mj/insight-face/swap</code></p></blockquote><h2 id="header-请求参数" tabindex="-1">Header 请求参数 <a class="header-anchor" href="#header-请求参数" aria-label="Permalink to &quot;Header 请求参数&quot;">​</a></h2><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;Authorization&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Bearer YOUR_API_KEY&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //替换为自己的apikey</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="body-请求参数" tabindex="-1">Body 请求参数 <a class="header-anchor" href="#body-请求参数" aria-label="Permalink to &quot;Body 请求参数&quot;">​</a></h2><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;sourceBase64&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;data:image/png;base64,xxx1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;targetBase64&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;data:image/png;base64,xxx2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;accountFilter&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;instanceId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;string&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;notifyHook&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;string&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;state&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;string&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="参数说明" tabindex="-1">参数说明 <a class="header-anchor" href="#参数说明" aria-label="Permalink to &quot;参数说明&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>类型</th><th>是否必需</th><th>描述</th></tr></thead><tbody><tr><td><code>sourceBase64</code></td><td><code>string</code></td><td>必需</td><td>人脸源图片的 Base64 编码字符串。必须包含数据类型前缀（例如 <code>data:image/png;base64,</code>）。</td></tr><tr><td><code>targetBase64</code></td><td><code>string</code></td><td>必需</td><td>目标图片的 Base64 编码字符串。必须包含数据类型前缀（例如 <code>data:image/png;base64,</code>）。</td></tr><tr><td><code>accountFilter</code></td><td><code>object (Filter)</code></td><td>可选</td><td>用于筛选账户的过滤器对象。</td></tr><tr><td><code>instanceId</code></td><td><code>string</code></td><td>可选</td><td>账号实例 ID，指定使用哪个账号的实例。</td></tr><tr><td><code>notifyHook</code></td><td><code>string</code></td><td>可选</td><td>回调地址，用于处理操作完成后的通知。如果为空，将使用全局的 <code>notifyHook</code>。</td></tr><tr><td><code>state</code></td><td><code>string</code></td><td>可选</td><td>自定义参数，可以在请求中传递特定的状态信息。</td></tr></tbody></table><h3 id="使用说明" tabindex="-1">使用说明： <a class="header-anchor" href="#使用说明" aria-label="Permalink to &quot;使用说明：&quot;">​</a></h3><h4 id="必需参数" tabindex="-1">必需参数： <a class="header-anchor" href="#必需参数" aria-label="Permalink to &quot;必需参数：&quot;">​</a></h4><ul><li><p><strong><code>sourceBase64</code></strong>: 这是源图片的 Base64 编码，包含人脸信息。Base64 字符串应当包含数据类型前缀，例如 <code>data:image/png;base64,</code>。</p></li><li><p><strong><code>targetBase64</code></strong>: 这是目标图片的 Base64 编码，代表将人脸合成或处理的目标图片。也必须包含数据类型前缀，例如 <code>data:image/png;base64,</code>。</p></li></ul><h4 id="可选参数" tabindex="-1">可选参数： <a class="header-anchor" href="#可选参数" aria-label="Permalink to &quot;可选参数：&quot;">​</a></h4><ul><li><p><strong><code>accountFilter</code></strong>: 这是一个对象类型参数，用于指定过滤条件，以选择特定账户进行操作。</p></li><li><p><strong><code>instanceId</code></strong>: 这是一个字符串类型参数，表示使用特定账户实例进行操作。适用于需要指定不同账号实例的场景。</p></li><li><p><strong><code>notifyHook</code></strong>: 指定操作完成后的回调地址，用于通知客户端操作结果。如果没有提供此参数，则使用全局的 <code>notifyHook</code> 设置。</p></li><li><p><strong><code>state</code></strong>: 这是一个可选的自定义参数，用于在请求中传递任意状态信息。可用于客户端和服务器端之间传递自定义数据。</p></li></ul><h4 id="注意事项" tabindex="-1">注意事项： <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项：&quot;">​</a></h4><ul><li><strong>Base64 编码</strong>：<code>sourceBase64</code> 和 <code>targetBase64</code> 参数都要求 Base64 编码的图片字符串，并且需要包含适当的 MIME 类型前缀（如 <code>data:image/png;base64,</code>）。</li><li><strong>回调机制</strong>：如果没有指定 <code>notifyHook</code>，系统将使用全局回调地址来处理操作完成后的通知。确保回调地址是正确的，并且可以处理所需的事件。</li></ul><h2 id="返回示例" tabindex="-1">返回示例 <a class="header-anchor" href="#返回示例" aria-label="Permalink to &quot;返回示例&quot;">​</a></h2><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;string&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;result&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;string&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,17),d=[n];function o(l,h,p,r,c,k){return t(),a("div",null,d)}const u=s(e,[["render",o]]);export{E as __pageData,u as default};
