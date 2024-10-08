import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/doc/',
  title: "API使用文档",
  description: "API使用文档",
  themeConfig: {
    logo: "/logn.png",
    nav: [
      { text: '首页', link: '/' },
      { 
        text: '文本/OpenAI 通用接口', 
        items: [
          { text: '聊天接口（Chat）', link: '/chat/chat' },
          { text: '自动补全接口（Completions）', link: '/chat/bq' },
          { text: 'DALL·E 3', link: '/chat/dall' },
          { text: '创建嵌入', link: '/chat/cjqr' },
          { text: '列出模型', link: '/chat/model' },
          { text: '音频接口（Audio）', link: '/chat/audio/cjzl' },
        ]
      },
      { 
        text: '绘画模型接口', 
        items: [
          { text: 'Midjourney API', link: '/imagine/midjourney/imagine' },
          { text: 'Flux（文生图）', link: '/imagine/flux' },
          { text: 'Ideogram（绘画）', link: '/imagine/ideogram/generate' },
        ]
      },
      { 
        text: '视频模型接口', 
        items: [
          { text: 'Luma视频接口', link: '/video/luma/rixapi/generations' },
          { text: 'Runway视频接口', link: '/video/runway/feed' },
        ]
      }
    ],
    sidebar: {
      '/chat/': [
        {
          collapsed: true,
          items: [
            { text: '聊天接口（Chat）', link: '/chat/chat' },
            { text: '自动补全接口（Completions）', link: '/chat/bq' },
            {
              text: '音频接口（Audio）',
              collapsed: true, 
              items: [
                { text: '创建转录', link: '/chat/audio/cjzl' },
                { text: '创建翻译', link: '/chat/audio/cjfy' },
                { text: 'TTS文本转语音', link: '/chat/audio/tts' },
              ]
            },
            { text: 'DALL·E 3', link: '/chat/dall' },
            { text: '创建嵌入', link: '/chat/cjqr' },
            { text: '列出模型', link: '/chat/model' },
          ]
        }
      ],
      '/imagine/': [
        {
          collapsed: true, 
          items: [
            {
              text: 'Midjourney API',
              collapsed: true,
              items: [
                {
                  text: '任务提交',
                  collapsed: true,
                  items: [
                    { text: '提交swap_face任务', link: '/imagine/midjourney/swap_face' },
                    { text: '执行动作', link: '/imagine/midjourney/action' },
                    { text: '提交Blend任务', link: '/imagine/midjourney/blend' },
                    { text: '提交Describe任务', link: '/imagine/midjourney/describe' },
                    { text: '提交Imagine任务', link: '/imagine/midjourney/imagine' },
                    { text: '提交Modal', link: '/imagine/midjourney/modal' },
                    { text: '提交Shorten任务', link: '/imagine/midjourney/shorten' },
                    { text: '上传文件到discord', link: '/imagine/midjourney/discord' },
                  ]
                },
                {
                  text: '任务查询',
                  collapsed: true,
                  items: [
                    { text: '查询所有任务', link: '/imagine/midjourney/list' },
                    { text: '根据ID列表查询任务', link: '/imagine/midjourney/condition' },
                    { text: '根据ID列表查询任务-字段displays', link: '/imagine/midjourney/ids' },
                    { text: '分页查询任务', link: '/imagine/midjourney/query' },
                    { text: '查询任务队列', link: '/imagine/midjourney/queue' },
                    { text: '取消任务', link: '/imagine/midjourney/cancel' },
                    { text: '指定ID获取任务', link: '/imagine/midjourney/fetch' },
                    { text: '获取任务图片的seed', link: '/imagine/midjourney/seed' },
                  ]
                }
              ]
            },
            {
              text: 'Flux（文生图）',
              collapsed: true,
              items: [
                { text: 'OpenAI Dalle3格式', link: '/imagine/flux' },
              ]
            },
            {
              text: 'Ideogram（绘画）',
              collapsed: true,
              items: [
                { text: 'Generate（文生图）', link: '/imagine/ideogram/generate' },
                { text: 'Remix（混合图）', link: '/imagine/ideogram/remix' },
                { text: 'Upscale（放大高清）', link: '/imagine/ideogram/upscale' },
                { text: 'Describe（描述）', link: '/imagine/ideogram/describe' },
              ]
            }
          ]
        }
      ],
      '/video/': [
        {
          collapsed: true, 
          items: [
            {
              text: 'Luma视频接口',
              collapsed: true, 
              items: [
                {
                  text: 'RixAPI/官方格式接口',
                  items: [
                    {
                      text: '任务提交',
                      collapsed: true,
                      items: [
                        { text: '生成视频', link: '/video/luma/rixapi/generations' },
                        { text: '获取视频无水印链接', link: '/video/luma/rixapi/url' },
                        { text: '扩展视频', link: '/video/luma/rixapi/extend' },
                      ]
                    },
                    {
                      text: '任务查询',
                      collapsed: true,
                      items: [
                        { text: '单个查询任务', link: '/video/luma/rixapi/chaxun' },
                        { text: '批量查询任务', link: '/video/luma/rixapi/tasks' },
                      ]
                    }
                  ]
                },
                {
                  text: 'GoAMZ格式',
                  collapsed: true,
                  items: [
                    { text: '生成视频', link: '/video/luma/goamz/generations' },
                    { text: '获取视频', link: '/video/luma/goamz/task' },
                  ]
                }
              ]
            },
            {
              text: 'Runway视频接口',
              collapsed: true,
              items: [
                { text: 'feed', link: '/video/runway/feed' },
                { text: 'generate(文本)', link: '/video/runway/generate' },
                { text: 'generate(参考图片)', link: '/video/runway/generate1' },
              ]
            }
          ]
        }
      ]
    },
    socialLinks: [
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 32 32"><path fill="currentColor" d="M28.527 20.047a57 57 0 0 0-1.068-3.02l-1.443-3.595c.005-.041.02-.744.02-1.115C26.036 6.177 23.136 0 16 0S5.964 6.177 5.964 12.323c0 .365.02 1.073.02 1.115l-1.443 3.593q-.576 1.493-1.068 3.016c-1.359 4.38-.921 6.193-.583 6.235c.719.083 2.803-3.297 2.803-3.297c0 1.959 1.009 4.516 3.192 6.36c-.812.249-1.817.64-2.459 1.115c-.577.427-.505.859-.4 1.036c.457.771 7.843.489 9.973.251c2.136.239 9.521.52 9.979-.251c.104-.177.177-.609-.4-1.036c-.647-.475-1.647-.865-2.464-1.115c2.183-1.849 3.192-4.407 3.192-6.365c0 0 2.084 3.385 2.803 3.297c.339-.036.776-1.855-.583-6.229zM16.88 6.464c.052-1.407.88-2.505 1.849-2.464c.968.041 1.708 1.213 1.656 2.62c-.052 1.401-.88 2.505-1.849 2.459c-.963-.043-1.708-1.215-1.656-2.615M13.271 4c.969-.041 1.797 1.057 1.849 2.464c.052 1.4-.693 2.572-1.656 2.615c-.969.047-1.797-1.057-1.849-2.459c-.052-1.407.688-2.579 1.656-2.62m-3.375 7.057c.255-.573 2.859-1.208 6.088-1.208h.032c3.224 0 5.833.635 6.088 1.208a.15.15 0 0 1 .021.083a.2.2 0 0 1-.037.111c-.219.317-3.109 1.889-6.067 1.889h-.037c-2.963 0-5.853-1.572-6.072-1.889a.18.18 0 0 1-.016-.193zm13.896 11.495c-.297 4.907-3.204 7.984-7.699 8.032h-.181c-4.496-.048-7.407-3.125-7.699-8.032c-.109-1.797 0-3.323.193-4.573q.64.133 1.281.235v4.677s2.208.448 4.421.136V18.73c.651.036 1.281.052 1.875.041h.032c2.239.032 4.953-.271 7.577-.792c.199 1.251.303 2.776.199 4.573zM13.973 7.74c.417-.057.724-.547.677-1.1c-.047-.557-.416-.963-.839-.905c-.416.052-.724.547-.676 1.099s.416.959.837.907zm5.334-.865c.105.047.292.057.387-.192c.047-.131.031-.224-.016-.287c-.032-.047-.177-.156-.495-.235c-1.204-.297-1.787.511-1.871.661c-.057.099-.015.24.073.308c.088.067.188.047.24-.011c.771-.839 1.615-.276 1.681-.245z"/></svg>'
        },
        link: 'https://qm.qq.com/q/pdTFIwdnwe',
        ariaLabel: 'QQ群聊'
      }
    ],
    footer: {
      copyright: 'Copyright © 2023-present Shawn.'
    }
  }
})
