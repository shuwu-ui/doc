import{_ as s,c as a,o as i,a2 as t}from"./chunks/framework.C94oF1kp.js";const g=JSON.parse('{"title":"提交Imagine任务","description":"","frontmatter":{},"headers":[],"relativePath":"imagine/midjourney/imagine.md","filePath":"imagine/midjourney/imagine.md"}'),e={name:"imagine/midjourney/imagine.md"},n=t(`<h1 id="提交imagine任务" tabindex="-1">提交Imagine任务 <a class="header-anchor" href="#提交imagine任务" aria-label="Permalink to &quot;提交Imagine任务&quot;">​</a></h1><blockquote><p>POST <code>https://api.gptoai.cc/mj/submit/imagine</code></p></blockquote><h2 id="header-请求参数" tabindex="-1">Header 请求参数 <a class="header-anchor" href="#header-请求参数" aria-label="Permalink to &quot;Header 请求参数&quot;">​</a></h2><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;Authorization&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Bearer YOUR_API_KEY&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //替换为自己的apikey</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="body-请求参数" tabindex="-1">Body 请求参数 <a class="header-anchor" href="#body-请求参数" aria-label="Permalink to &quot;Body 请求参数&quot;">​</a></h2><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;botType&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;MID_JOURNEY&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;prompt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Cat&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;base64Array&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;string&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;notifyHook&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;string&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="参数说明" tabindex="-1">参数说明 <a class="header-anchor" href="#参数说明" aria-label="Permalink to &quot;参数说明&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>类型</th><th>是否必需</th><th>描述</th></tr></thead><tbody><tr><td><code>botType</code></td><td><code>string</code></td><td>可选</td><td>Bot 类型，默认为 <code>mj</code>（Mid Journey）。可选值包括 <code>MID_JOURNEY</code> 或 <code>NIJI_JOURNEY</code>。</td></tr><tr><td><code>prompt</code></td><td><code>string</code></td><td>必需</td><td>用于生成图像的提示词。必须提供，描述你希望生成的图像内容。</td></tr><tr><td><code>base64Array</code></td><td><code>array[string]</code></td><td>可选</td><td>垫图的 Base64 编码数组。每个元素应为 Base64 编码的图片字符串。用于提供生成图像的背景或参考图。</td></tr><tr><td><code>notifyHook</code></td><td><code>string</code></td><td>可选</td><td>操作完成后的回调地址。如果未提供，则使用全局的 <code>notifyHook</code> 设置。</td></tr></tbody></table><h3 id="使用说明" tabindex="-1">使用说明： <a class="header-anchor" href="#使用说明" aria-label="Permalink to &quot;使用说明：&quot;">​</a></h3><h4 id="必需参数" tabindex="-1">必需参数： <a class="header-anchor" href="#必需参数" aria-label="Permalink to &quot;必需参数：&quot;">​</a></h4><ul><li><strong><code>prompt</code></strong>：这是一个必需参数，指定用于生成图像的文本提示词。输入的文本描述应该简洁且富有描述性，以帮助模型生成预期的图像。例如，使用 <code>&quot;Cat&quot;</code> 作为提示词，模型将尝试生成与猫相关的图像。</li></ul><h4 id="可选参数" tabindex="-1">可选参数： <a class="header-anchor" href="#可选参数" aria-label="Permalink to &quot;可选参数：&quot;">​</a></h4><ul><li><strong><code>botType</code></strong>：指定 Bot 的类型。默认值为 <code>MID_JOURNEY</code>（mj）。如果需要使用 <code>NIJI_JOURNEY</code>（niji），请在此参数中指定。</li><li><strong><code>base64Array</code></strong>：这是一个可选参数，用于提供图像生成的背景或参考图。可以传入 Base64 编码的图片数组。每个字符串都应该是一个有效的 Base64 编码的图像数据。</li><li><strong><code>notifyHook</code></strong>：指定操作完成后的回调地址，用于在操作完成后接收通知。如果为空，将使用全局的 <code>notifyHook</code>。</li></ul><h4 id="注意事项" tabindex="-1">注意事项： <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项：&quot;">​</a></h4><ul><li><strong>提示词质量</strong>：确保 <code>prompt</code> 提供了足够的细节和清晰的描述，以便模型能够准确地生成所需的图像。</li><li><strong>Base64 编码</strong>：如果使用 <code>base64Array</code>，确保所有图片的 Base64 字符串都是有效的，并包含适当的 MIME 类型前缀（如 <code>data:image/png;base64,</code>）。</li><li><strong>Bot 类型选择</strong>：<code>botType</code> 默认使用 <code>MID_JOURNEY</code>。根据需求选择适合的类型（<code>NIJI_JOURNEY</code>）。</li><li><strong>回调机制</strong>：<code>notifyHook</code> 提供灵活的回调处理，确保回调地址有效，并能正确处理返回的信息。</li></ul><h2 id="返回示例" tabindex="-1">返回示例 <a class="header-anchor" href="#返回示例" aria-label="Permalink to &quot;返回示例&quot;">​</a></h2><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;提交成功&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;properties&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {},</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;result&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1320098173412546</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,17),o=[n];function d(l,h,r,p,k,c){return i(),a("div",null,o)}const u=s(e,[["render",d]]);export{g as __pageData,u as default};
