import{_ as t,c as e,o as s,a2 as d}from"./chunks/framework.C94oF1kp.js";const u=JSON.parse('{"title":"执行动作","description":"","frontmatter":{},"headers":[],"relativePath":"imagine/midjourney/action.md","filePath":"imagine/midjourney/action.md"}'),a={name:"imagine/midjourney/action.md"},i=d(`<h1 id="执行动作" tabindex="-1">执行动作 <a class="header-anchor" href="#执行动作" aria-label="Permalink to &quot;执行动作&quot;">​</a></h1><blockquote><p>POST <code>https://api.gptoai.cc/mj/submit/action</code></p></blockquote><h2 id="header-请求参数" tabindex="-1">Header 请求参数 <a class="header-anchor" href="#header-请求参数" aria-label="Permalink to &quot;Header 请求参数&quot;">​</a></h2><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;Authorization&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Bearer YOUR_API_KEY&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //替换为自己的apikey</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="body-请求参数" tabindex="-1">Body 请求参数 <a class="header-anchor" href="#body-请求参数" aria-label="Permalink to &quot;Body 请求参数&quot;">​</a></h2><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;customId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;MJ::JOB::PromptAnalyzer::1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;taskId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1719252589390291&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="参数说明" tabindex="-1">参数说明 <a class="header-anchor" href="#参数说明" aria-label="Permalink to &quot;参数说明&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>类型</th><th>是否必需</th><th>描述</th></tr></thead><tbody><tr><td><code>chooseSameChannel</code></td><td><code>boolean</code></td><td>可选</td><td>是否选择同一频道下的账号。默认为 <code>false</code>，即只使用任务关联的账号。</td></tr><tr><td><code>customId</code></td><td><code>string</code></td><td>必需</td><td>动作标识，用于唯一标识一个特定的操作。</td></tr><tr><td><code>taskId</code></td><td><code>string</code></td><td>必需</td><td>任务的唯一 ID，用于标识当前任务。</td></tr><tr><td><code>accountFilter</code></td><td><code>object</code></td><td>可选</td><td>账号筛选条件，用于筛选符合条件的账号。</td></tr><tr><td><code>channelId</code></td><td><code>string</code></td><td>可选</td><td>指定要使用的频道 ID。</td></tr><tr><td><code>instanceId</code></td><td><code>string</code></td><td>可选</td><td>指定要使用的账号实例 ID。</td></tr><tr><td><code>modes</code></td><td><code>array[string]</code></td><td>可选</td><td>指定账号的工作模式。可选值包括：<code>RELAX</code>、<code>FAST</code>、<code>TURBO</code>。</td></tr><tr><td><code>remark</code></td><td><code>string</code></td><td>可选</td><td>备注信息，包含附加说明或注释。</td></tr><tr><td><code>remix</code></td><td><code>boolean</code></td><td>可选</td><td>指定账号是否支持 remix 功能。</td></tr><tr><td><code>remixAutoConsidered</code></td><td><code>boolean</code></td><td>可选</td><td>账号过滤时，如果 remix 自动提交，则视为账号的 remix 属性为 <code>false</code>。</td></tr><tr><td><code>notifyHook</code></td><td><code>string</code></td><td>可选</td><td>回调地址，用于处理操作完成后的通知。如果为空，则使用全局的 <code>notifyHook</code>。</td></tr><tr><td><code>state</code></td><td><code>string</code></td><td>可选</td><td>自定义参数，用于在请求中传递特定的状态信息。</td></tr></tbody></table><h3 id="使用说明" tabindex="-1">使用说明： <a class="header-anchor" href="#使用说明" aria-label="Permalink to &quot;使用说明：&quot;">​</a></h3><h4 id="必需参数" tabindex="-1">必需参数： <a class="header-anchor" href="#必需参数" aria-label="Permalink to &quot;必需参数：&quot;">​</a></h4><ul><li><strong><code>customId</code></strong>：这是一个必需参数，用于唯一标识某个特定操作。例如，在对任务进行处理时，每个操作应有独特的 <code>customId</code> 以避免混淆。</li><li><strong><code>taskId</code></strong>：用于唯一标识当前任务。每个任务都有其唯一的 <code>taskId</code>，确保操作能够正确关联到特定的任务。</li></ul><h4 id="可选参数" tabindex="-1">可选参数： <a class="header-anchor" href="#可选参数" aria-label="Permalink to &quot;可选参数：&quot;">​</a></h4><ul><li><strong><code>chooseSameChannel</code></strong>：指定是否选择同一频道下的账号。如果为 <code>true</code>，将选择同一频道内的账号；如果为 <code>false</code>（默认值），则只使用与任务关联的账号。</li><li><strong><code>accountFilter</code></strong>：用于指定筛选条件，以选择符合要求的账号。可用于复杂的账号筛选逻辑。</li><li><strong><code>channelId</code></strong>：选择特定的频道 ID。如果为空，则不限定频道。</li><li><strong><code>instanceId</code></strong>：指定要使用的账号实例 ID。如果为空，则不限定实例。</li><li><strong><code>modes</code></strong>：设定账号的工作模式，可以选择 <code>RELAX</code>（放松模式）、<code>FAST</code>（快速模式）、<code>TURBO</code>（极速模式）之一或多个。</li><li><strong><code>remark</code></strong>：提供额外的备注信息，以帮助描述操作或任务。</li><li><strong><code>remix</code></strong>：指示账号是否支持 remix 功能。可用于筛选或控制功能。</li><li><strong><code>remixAutoConsidered</code></strong>：在账号筛选时，如果 remix 是自动提交的，则视为 remix 属性为 <code>false</code>。</li><li><strong><code>notifyHook</code></strong>：设置回调地址，通知操作完成后的状态。如果未指定，系统将使用全局设置的 <code>notifyHook</code>。</li><li><strong><code>state</code></strong>：用于传递自定义的状态信息，便于在请求之间传递上下文。</li></ul><h4 id="注意事项" tabindex="-1">注意事项： <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项：&quot;">​</a></h4><ul><li><strong>唯一标识</strong>：<code>customId</code> 和 <code>taskId</code> 应确保唯一性，以防止任务和操作的混淆。</li><li><strong>模式选择</strong>：根据实际需要选择合适的 <code>modes</code>（工作模式），以最佳地匹配账号的性能要求。</li><li><strong>回调地址</strong>：<code>notifyHook</code> 参数可以动态设置，以灵活应对不同的通知需求。确保回调地址有效，并能够正确处理回调信息。</li><li><strong>筛选逻辑</strong>：使用 <code>accountFilter</code> 和其他相关参数进行精确的账号选择，以优化操作效果和效率。</li></ul><h2 id="返回示例" tabindex="-1">返回示例 <a class="header-anchor" href="#返回示例" aria-label="Permalink to &quot;返回示例&quot;">​</a></h2><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;提交成功&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;properties&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {},</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;result&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1320098173412546</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,17),o=[i];function n(c,l,r,h,p,k){return s(),e("div",null,o)}const E=t(a,[["render",n]]);export{u as __pageData,E as default};
