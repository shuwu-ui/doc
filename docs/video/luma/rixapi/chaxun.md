# 单个查询任务

>GET `https://api.gptoai.cc/luma/generations/{task_id}`

## Header 请求参数
```json
{
    "Authorization": "Bearer YOUR_API_KEY" //替换为自己的apikey
}
```

## Path 参数说明

| 参数        | 类型     | 是否必需 | 描述                                 |
|-------------|----------|----------|--------------------------------------|
| `task_id`   | `string` | 必需     | 任务 ID，用于唯一标识特定任务。      |

### 使用说明

- **`task_id`**: 这是一个必需的路径参数，用于在 API 请求中指定特定任务的唯一标识符。你需要在 URL 中提供这个参数，以便服务器知道你要查询或操作哪个任务。

### 示例

你的 API 请求为是 `/luma/generations/{task_id}`，你可以用具体的任务 ID 替换 `{task_id}`，例如 `/luma/generations/12345`，来获取或操作任务 ID 为 `12345` 的任务。确保在使用 API 时提供有效的 `task_id`，以正确执行请求。

## 返回示例
```json
{
    "id": "d70f241f-dede-41ee-92bd-27e2d10d1cb3",
    "liked": null,
    "state": "completed",
    "video": {
        "url": "https://storage.cdn-luma.com/dream_machine/42fec936-6419-4e45-8d7f-50b258582283/watermarked_video0e7ae2e33eca140aba7a4ce29bf5c0431.mp4",
        "width": 512,
        "height": 512,
        "thumbnail": null,
        "download_url": "https://dc53a917a6f427706a8ca3ecc7d70ea4.r2.cloudflarestorage.com/ai-lumalabs-storage-private/dream_machine/42fec936-6419-4e45-8d7f-50b258582283/42fec936-6419-4e45-8d7f-50b258582283_raw_video_0_video0e7ae2e33eca140aba7a4ce29bf5c0431.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=60bf44f30d45b472f9dd032de33e15d1%2F20240722%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20240722T070743Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=2b414af2213eef11f1df605bd344e2ea2b4f6495e74fc3edc766045e6c20202c"
    },
    "prompt": "cat dance",
    "created_at": "2024-07-22T07:05:31.207000Z",
    "estimate_wait_seconds": null
}
```

## 返回示例参数说明

| 参数                     | 类型       | 是否必需 | 描述                                                                                         |
|--------------------------|------------|----------|----------------------------------------------------------------------------------------------|
| `id`                     | `string`   | 必需     | 任务的唯一标识符。                                                                           |
| `liked`                  | `null`     | 必需     | 表示是否喜欢该任务的状态，目前为 `null`。                                                    |
| `state`                  | `string`   | 必需     | 任务的当前状态。                                                                             |
| `video`                  | `object`   | 必需     | 包含视频相关信息的对象，描述生成的视频内容。                                                 |
| &nbsp;&nbsp;`url`        | `string`   | 必需     | 视频的直接链接 URL。                                                                         |
| &nbsp;&nbsp;`width`      | `integer`  | 必需     | 视频的宽度（以像素为单位）。                                                                 |
| &nbsp;&nbsp;`height`     | `integer`  | 必需     | 视频的高度（以像素为单位）。                                                                 |
| &nbsp;&nbsp;`thumbnail`  | `null`     | 必需     | 视频的缩略图，目前为 `null`。                                                                |
| &nbsp;&nbsp;`download_url`| `string`  | 必需     | 视频的下载链接 URL。                                                                         |
| `prompt`                 | `string`   | 必需     | 用于生成视频的提示词。                                                                       |
| `created_at`             | `string`   | 必需     | 任务创建的时间戳，通常以 ISO 8601 格式表示。                                                 |
| `estimate_wait_seconds`  | `null`     | 必需     | 估计的等待时间（秒），目前为 `null`。                                                        |

### 使用说明

- **`id`**: 用于唯一标识任务的字符串。每个任务都有一个独特的 `id`，用来跟踪和操作特定的任务。
- **`liked`**: 表示用户是否喜欢该任务的状态。当前为 `null`，可能在未来的版本中会用到。
- **`state`**: 描述任务的当前状态，例如 "processing"（处理中）、"completed"（已完成）等。用于了解任务的进展。
- **`video`**: 一个包含视频详细信息的对象，包括以下字段：
  - **`url`**: 视频的直接链接，可以通过此 URL 直接播放视频。
  - **`width`** 和 **`height`**: 视频的宽度和高度，以像素为单位。用于了解视频的分辨率。
  - **`thumbnail`**: 视频的缩略图链接，当前为 `null`，表示没有缩略图。
  - **`download_url`**: 提供视频的下载链接，允许用户下载生成的视频。
- **`prompt`**: 生成视频时使用的文本提示词。帮助系统理解用户想要生成的内容类型。
- **`created_at`**: 任务创建的时间戳，记录任务的生成时间。
- **`estimate_wait_seconds`**: 估计的等待时间，目前为 `null`，表示没有估计的等待时间或不可用。
