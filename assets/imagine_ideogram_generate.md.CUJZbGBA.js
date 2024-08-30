import{_ as s,c as t,o as e,a2 as i}from"./chunks/framework.C94oF1kp.js";const E=JSON.parse('{"title":"Generate（文生图）","description":"","frontmatter":{},"headers":[],"relativePath":"imagine/ideogram/generate.md","filePath":"imagine/ideogram/generate.md"}'),a={name:"imagine/ideogram/generate.md"},d=i(`<h1 id="generate-文生图" tabindex="-1">Generate（文生图） <a class="header-anchor" href="#generate-文生图" aria-label="Permalink to &quot;Generate（文生图）&quot;">​</a></h1><blockquote><p>POST <code>https://api.gptoai.cc/ideogram/generate</code></p></blockquote><h2 id="header-请求参数" tabindex="-1">Header 请求参数 <a class="header-anchor" href="#header-请求参数" aria-label="Permalink to &quot;Header 请求参数&quot;">​</a></h2><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;Authorization&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Bearer YOUR_API_KEY&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //替换为自己的apikey</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="body-请求参数" tabindex="-1">Body 请求参数 <a class="header-anchor" href="#body-请求参数" aria-label="Permalink to &quot;Body 请求参数&quot;">​</a></h2><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;image_request&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;model&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;V_2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;magic_prompt_option&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;AUTO&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="参数说明" tabindex="-1">参数说明 <a class="header-anchor" href="#参数说明" aria-label="Permalink to &quot;参数说明&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>类型</th><th>是否必需</th><th>描述</th></tr></thead><tbody><tr><td><code>prompt</code></td><td><code>string</code></td><td>必需</td><td>用于生成图像的文本提示词。描述期望生成的图像内容。</td></tr><tr><td><code>aspect_ratio</code></td><td><code>string</code></td><td>可选</td><td>用于图像生成的宽高比，决定图像的分辨率。不能与 <code>resolution</code> 参数一起使用。默认值为 <code>ASPECT_1_1</code>。 <strong>默认值</strong> : <code>ASPECT_1_1</code></td></tr><tr><td><code>model</code></td><td><code>string</code></td><td>可选</td><td>用于生成图像的模型。默认使用 <code>V_2</code>。 <strong>默认值</strong> : <code>V_2</code> <strong>示例值</strong>: <code>V_1</code>, <code>V_1_TURBO</code>, <code>V_2</code>, <code>V_2_TURBO</code></td></tr><tr><td><code>magic_prompt_option</code></td><td><code>string</code></td><td>可选</td><td>确定是否在生成请求中使用 MagicPrompt。控制自动提示词生成。 <strong>默认值</strong> : <code>AUTO</code> <strong>示例值</strong> : <code>AUTO</code>, <code>ON</code>, <code>OFF</code></td></tr><tr><td><code>seed</code></td><td><code>string</code></td><td>可选</td><td>用于图像生成的种子值，可以是从 0 到 2147483647 的整数。使用特定的种子值可以再现同样的生成结果。</td></tr><tr><td><code>style_type</code></td><td><code>string</code></td><td>可选</td><td>用于生成的风格类型，仅适用于 <code>V_2</code> 及以上版本模型。请勿在 <code>V_1</code> 版本模型中指定。 <strong>示例值</strong>: <code>GENERAL</code>, <code>REALISTIC</code>, <code>DESIGN</code>, <code>RENDER_3D</code>, <code>ANIME</code></td></tr><tr><td><code>negative_prompt</code></td><td><code>string</code></td><td>可选</td><td>图像生成中要排除的描述。提示词中的描述优先于负提示词中的描述。</td></tr><tr><td><code>resolution</code></td><td><code>string</code></td><td>可选</td><td>用于图像生成的分辨率（以宽x高表示）。在 <code>2.0</code> 版本的模型中使用。不能与 <code>aspect_ratio</code> 参数一起使用。如果未指定，默认使用 <code>aspect_ratio</code>。 <strong>示例值</strong>: <code>RESOLUTION_576_1472</code></td></tr></tbody></table><h3 id="使用说明" tabindex="-1">使用说明 <a class="header-anchor" href="#使用说明" aria-label="Permalink to &quot;使用说明&quot;">​</a></h3><ul><li><p><strong><code>prompt</code></strong>: 必需参数，定义了图像生成的主题或内容。应提供清晰且具体的描述，以便生成模型能准确理解和生成期望的图像。</p></li><li><p><strong><code>aspect_ratio</code></strong>: 控制生成图像的宽高比，例如 <code>ASPECT_1_1</code> 表示 1:1 的正方形比例。此参数和 <code>resolution</code> 不能同时使用。如果你需要特定的图像比例，请使用此参数。</p></li><li><p><strong><code>model</code></strong>: 指定使用哪个版本的生成模型，默认是 <code>V_2</code>。选择不同的模型可能会影响生成的速度和质量。</p></li><li><p><strong><code>magic_prompt_option</code></strong>: 控制是否在生成过程中使用 MagicPrompt 技术。<code>AUTO</code> 表示自动决定，<code>ON</code> 表示开启，<code>OFF</code> 表示关闭。</p></li><li><p><strong><code>seed</code></strong>: 用于生成相同图像的随机种子值。如果需要再现相同的生成结果，可以使用特定的种子值。</p></li><li><p><strong><code>style_type</code></strong>: 定义生成图像的风格，例如 <code>REALISTIC</code> 表示现实风格，<code>ANIME</code> 表示动漫风格等。此参数仅适用于模型版本 <code>V_2</code> 及以上。</p></li><li><p><strong><code>negative_prompt</code></strong>: 用于排除不希望出现在生成图像中的元素描述。该参数允许指定与主提示相反的内容。</p></li><li><p><strong><code>resolution</code></strong>: 指定图像的分辨率（宽x高），适用于模型版本 <code>2.0</code>。不能与 <code>aspect_ratio</code> 一起使用。使用此参数可以更精确地控制输出图像的大小。</p></li></ul><h2 id="返回示例" tabindex="-1">返回示例 <a class="header-anchor" href="#返回示例" aria-label="Permalink to &quot;返回示例&quot;">​</a></h2><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;seed&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12345</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;prompt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A serene tropical beach scene. Dominating the foreground are tall palm trees with lush green leaves, standing tall against a backdrop of a sandy beach. The beach leads to the azure waters of the sea, which gently kisses the shoreline. In the distance, there&#39;s an island or landmass with a silhouette of what appears to be a lighthouse or tower. The sky above is painted with fluffy white clouds, some of which are tinged with hues of pink and orange, suggesting either a sunrise or sunset.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;resolution&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1024x1024&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://ideogram.ai/api/images/direct/8YEpFzHuS-S6xXEGmCsf7g&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;is_image_safe&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;seed&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12345</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;prompt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A serene tropical beach scene. Dominating the foreground are tall palm trees with lush green leaves, standing tall against a backdrop of a sandy beach. The beach leads to the azure waters of the sea, which gently kisses the shoreline. In the distance, there&#39;s an island or landmass with a silhouette of what appears to be a lighthouse or tower. The sky above is painted with fluffy white clouds, some of which are tinged with hues of pink and orange, suggesting either a sunrise or sunset.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;resolution&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1024x1024&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://ideogram.ai/api/images/direct/8YEpFzHuS-S6xXEGmCsf7g&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;is_image_safe&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;created&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2000-01-23T04:56:07.000Z&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="返回示例参数说明" tabindex="-1">返回示例参数说明 <a class="header-anchor" href="#返回示例参数说明" aria-label="Permalink to &quot;返回示例参数说明&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>类型</th><th>是否必需</th><th>描述</th></tr></thead><tbody><tr><td><code>data</code></td><td><code>array[object]</code></td><td>必需</td><td>包含生成图像的对象列表，每个对象包含一个生成的图像及其相关信息。</td></tr><tr><td>- <code>seed</code></td><td><code>integer</code></td><td>必需</td><td>用于生成图像的种子值。这个值范围是 0 到 2147483647。相同的种子值可以再现相同的生成结果。</td></tr><tr><td>- <code>prompt</code></td><td><code>string</code></td><td>必需</td><td>用于生成图像的提示词。这可能与原始提示词不同，可能是生成过程中经过调整的提示词。</td></tr><tr><td>- <code>resolution</code></td><td><code>string</code></td><td>必需</td><td>最终生成图像的分辨率（例如 <code>1024x1024</code>）。</td></tr><tr><td>- <code>url</code></td><td><code>string</code> 或 <code>null</code></td><td>必需</td><td>生成图像的直接链接。如果请求未通过安全检查，此字段将为空。</td></tr><tr><td>- <code>is_image_safe</code></td><td><code>boolean</code></td><td>必需</td><td>指示该请求是否通过了安全检查。如果为 <code>false</code>，<code>url</code> 字段将为空。</td></tr><tr><td><code>created</code></td><td><code>string</code></td><td>必需</td><td>请求创建的时间戳，表示生成图像请求的创建时间。</td></tr></tbody></table><h3 id="使用说明-1" tabindex="-1">使用说明 <a class="header-anchor" href="#使用说明-1" aria-label="Permalink to &quot;使用说明&quot;">​</a></h3><ul><li><p><strong><code>data</code></strong>: 这是一个数组，包含多个生成图像的对象，每个对象包含生成的图像及其元数据。</p><ul><li><p><strong><code>seed</code></strong>: 用于生成图像的种子值。这个种子值允许你再现相同的图像生成结果。相同的 <code>seed</code> 值在相同的模型和参数条件下会生成相同的图像。</p></li><li><p><strong><code>prompt</code></strong>: 实际用于生成图像的提示词。这个提示词可能与用户输入的原始提示词不同，是生成过程中使用的最终版本。</p></li><li><p><strong><code>resolution</code></strong>: 生成图像的分辨率，通常以宽x高格式表示。例如，<code>1024x1024</code> 表示生成的图像是 1024 像素宽和 1024 像素高。</p></li><li><p><strong><code>url</code></strong>: 生成的图像的访问链接。这个链接可以直接访问生成的图像文件。如果 <code>is_image_safe</code> 为 <code>false</code>，这个字段将为空。</p></li><li><p><strong><code>is_image_safe</code></strong>: 一个布尔值，指示生成的图像是否通过了安全检查。如果安全检查未通过，<code>url</code> 字段将为空，防止访问不安全的内容。</p></li></ul></li><li><p><strong><code>created</code></strong>: 表示生成请求创建的时间戳。这是一个字符串，通常以 ISO 8601 格式表示。</p></li></ul>`,16),o=[d];function n(l,h,r,p,c,k){return e(),t("div",null,o)}const u=s(a,[["render",n]]);export{E as __pageData,u as default};
