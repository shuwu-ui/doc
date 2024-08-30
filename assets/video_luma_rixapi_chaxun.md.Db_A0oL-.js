import{_ as t,c as s,o as a,a2 as i}from"./chunks/framework.C94oF1kp.js";const E=JSON.parse('{"title":"单个查询任务","description":"","frontmatter":{},"headers":[],"relativePath":"video/luma/rixapi/chaxun.md","filePath":"video/luma/rixapi/chaxun.md"}'),e={name:"video/luma/rixapi/chaxun.md"},d=i(`<h1 id="单个查询任务" tabindex="-1">单个查询任务 <a class="header-anchor" href="#单个查询任务" aria-label="Permalink to &quot;单个查询任务&quot;">​</a></h1><blockquote><p>GET <code>https://api.gptoai.cc/luma/generations/{task_id}</code></p></blockquote><h2 id="header-请求参数" tabindex="-1">Header 请求参数 <a class="header-anchor" href="#header-请求参数" aria-label="Permalink to &quot;Header 请求参数&quot;">​</a></h2><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;Authorization&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Bearer YOUR_API_KEY&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //替换为自己的apikey</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="path-参数说明" tabindex="-1">Path 参数说明 <a class="header-anchor" href="#path-参数说明" aria-label="Permalink to &quot;Path 参数说明&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>类型</th><th>是否必需</th><th>描述</th></tr></thead><tbody><tr><td><code>task_id</code></td><td><code>string</code></td><td>必需</td><td>任务 ID，用于唯一标识特定任务。</td></tr></tbody></table><h3 id="使用说明" tabindex="-1">使用说明 <a class="header-anchor" href="#使用说明" aria-label="Permalink to &quot;使用说明&quot;">​</a></h3><ul><li><strong><code>task_id</code></strong>: 这是一个必需的路径参数，用于在 API 请求中指定特定任务的唯一标识符。你需要在 URL 中提供这个参数，以便服务器知道你要查询或操作哪个任务。</li></ul><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3><p>你的 API 请求为是 <code>/luma/generations/{task_id}</code>，你可以用具体的任务 ID 替换 <code>{task_id}</code>，例如 <code>/luma/generations/12345</code>，来获取或操作任务 ID 为 <code>12345</code> 的任务。确保在使用 API 时提供有效的 <code>task_id</code>，以正确执行请求。</p><h2 id="返回示例" tabindex="-1">返回示例 <a class="header-anchor" href="#返回示例" aria-label="Permalink to &quot;返回示例&quot;">​</a></h2><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;d70f241f-dede-41ee-92bd-27e2d10d1cb3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;liked&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;state&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;completed&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;video&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://storage.cdn-luma.com/dream_machine/42fec936-6419-4e45-8d7f-50b258582283/watermarked_video0e7ae2e33eca140aba7a4ce29bf5c0431.mp4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;width&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">512</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;height&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">512</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;thumbnail&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;download_url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://dc53a917a6f427706a8ca3ecc7d70ea4.r2.cloudflarestorage.com/ai-lumalabs-storage-private/dream_machine/42fec936-6419-4e45-8d7f-50b258582283/42fec936-6419-4e45-8d7f-50b258582283_raw_video_0_video0e7ae2e33eca140aba7a4ce29bf5c0431.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=60bf44f30d45b472f9dd032de33e15d1%2F20240722%2Fauto%2Fs3%2Faws4_request&amp;X-Amz-Date=20240722T070743Z&amp;X-Amz-Expires=3600&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=2b414af2213eef11f1df605bd344e2ea2b4f6495e74fc3edc766045e6c20202c&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;prompt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cat dance&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;created_at&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2024-07-22T07:05:31.207000Z&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;estimate_wait_seconds&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="返回示例参数说明" tabindex="-1">返回示例参数说明 <a class="header-anchor" href="#返回示例参数说明" aria-label="Permalink to &quot;返回示例参数说明&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>类型</th><th>是否必需</th><th>描述</th></tr></thead><tbody><tr><td><code>id</code></td><td><code>string</code></td><td>必需</td><td>任务的唯一标识符。</td></tr><tr><td><code>liked</code></td><td><code>null</code></td><td>必需</td><td>表示是否喜欢该任务的状态，目前为 <code>null</code>。</td></tr><tr><td><code>state</code></td><td><code>string</code></td><td>必需</td><td>任务的当前状态。</td></tr><tr><td><code>video</code></td><td><code>object</code></td><td>必需</td><td>包含视频相关信息的对象，描述生成的视频内容。</td></tr><tr><td>  <code>url</code></td><td><code>string</code></td><td>必需</td><td>视频的直接链接 URL。</td></tr><tr><td>  <code>width</code></td><td><code>integer</code></td><td>必需</td><td>视频的宽度（以像素为单位）。</td></tr><tr><td>  <code>height</code></td><td><code>integer</code></td><td>必需</td><td>视频的高度（以像素为单位）。</td></tr><tr><td>  <code>thumbnail</code></td><td><code>null</code></td><td>必需</td><td>视频的缩略图，目前为 <code>null</code>。</td></tr><tr><td>  <code>download_url</code></td><td><code>string</code></td><td>必需</td><td>视频的下载链接 URL。</td></tr><tr><td><code>prompt</code></td><td><code>string</code></td><td>必需</td><td>用于生成视频的提示词。</td></tr><tr><td><code>created_at</code></td><td><code>string</code></td><td>必需</td><td>任务创建的时间戳，通常以 ISO 8601 格式表示。</td></tr><tr><td><code>estimate_wait_seconds</code></td><td><code>null</code></td><td>必需</td><td>估计的等待时间（秒），目前为 <code>null</code>。</td></tr></tbody></table><h3 id="使用说明-1" tabindex="-1">使用说明 <a class="header-anchor" href="#使用说明-1" aria-label="Permalink to &quot;使用说明&quot;">​</a></h3><ul><li><strong><code>id</code></strong>: 用于唯一标识任务的字符串。每个任务都有一个独特的 <code>id</code>，用来跟踪和操作特定的任务。</li><li><strong><code>liked</code></strong>: 表示用户是否喜欢该任务的状态。当前为 <code>null</code>，可能在未来的版本中会用到。</li><li><strong><code>state</code></strong>: 描述任务的当前状态，例如 &quot;processing&quot;（处理中）、&quot;completed&quot;（已完成）等。用于了解任务的进展。</li><li><strong><code>video</code></strong>: 一个包含视频详细信息的对象，包括以下字段： <ul><li><strong><code>url</code></strong>: 视频的直接链接，可以通过此 URL 直接播放视频。</li><li><strong><code>width</code></strong> 和 <strong><code>height</code></strong>: 视频的宽度和高度，以像素为单位。用于了解视频的分辨率。</li><li><strong><code>thumbnail</code></strong>: 视频的缩略图链接，当前为 <code>null</code>，表示没有缩略图。</li><li><strong><code>download_url</code></strong>: 提供视频的下载链接，允许用户下载生成的视频。</li></ul></li><li><strong><code>prompt</code></strong>: 生成视频时使用的文本提示词。帮助系统理解用户想要生成的内容类型。</li><li><strong><code>created_at</code></strong>: 任务创建的时间戳，记录任务的生成时间。</li><li><strong><code>estimate_wait_seconds</code></strong>: 估计的等待时间，目前为 <code>null</code>，表示没有估计的等待时间或不可用。</li></ul>`,16),n=[d];function o(l,h,r,c,p,k){return a(),s("div",null,n)}const g=t(e,[["render",o]]);export{E as __pageData,g as default};
