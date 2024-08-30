# 获取视频无水印链接

>GET `https://api.gptoai.cc/luma/generations/{task_id}/download_video_url`

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

你的 API 请求为是 `/luma/generations/{task_id}/download_video_url`，你可以用具体的任务 ID 替换 `{task_id}`，例如 `/luma/generations/12345/download_video_url`，来获取或操作任务 ID 为 `12345` 的任务。确保在使用 API 时提供有效的 `task_id`，以正确执行请求。

## 返回示例
```json
{
    "url": "https://dc53a917a6f427706a8ca3ecc7d70ea4.r2.cloudflarestorage.com/ai-lumalabs-storage-private/lit_lite_inference_text2vid_v1.0/1fa17995-f527-46a5-9796-294b453b8a7f/1fa17995-f527-46a5-9796-294b453b8a7f_raw_video_1_video006b20d61fd31411e99208caddb67c061.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=60bf44f30d45b472f9dd032de33e15d1%2F20240707%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20240707T160315Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=55dd4a936863559dfdd81708823eae8f07cb3dc3c4bcdde9fe6fb0d7c7fcb0be"
}
```