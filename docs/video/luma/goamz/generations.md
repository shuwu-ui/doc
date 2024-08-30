# 批量查询任务

>PSOT `https://api.gptoai.cc/luma/v1/generations`

## Header 请求参数
```json
{
    "Content-Type": "application/json; charset=utf-8",
    "Authorization": "Bearer YOUR_API_KEY" //替换为自己的apikey
}
```
## Body 参数
```json
{
    "user_prompt": "cat dance",
    "aspect_ratio": "16:9"
}
```

## 参数说明

### 请求类型: `application/json`

| 参数             | 类型      | 是否必需 | 描述                                                                                 |
|------------------|-----------|----------|--------------------------------------------------------------------------------------|
| `user_prompt`    | `string`  | 必需     | 用户输入的提示词，用于生成内容。                                                      |
| `aspect_ratio`   | `string`  | 必需     | 指定生成图像的宽高比，例如 `16:9`、`1:1` 等。                                         |
| `expand_prompt`  | `boolean` | 可选     | 是否开启提示词优化，默认为 `false`。用于控制是否自动优化用户输入的提示词。             |
| `image_url`      | `string`  | 可选     | 参考图像的 URL 地址，支持第三方图像托管地址。必须是 Base64 编码格式的图像。           |
| `image_end_url`  | `string`  | 可选     | 终止图像生成的 URL 地址，支持第三方图像托管地址。必须是 Base64 编码格式的图像。       |
| `notify_hook`    | `string`  | 可选     | 回调地址，当生成完成后，系统会调用此地址进行通知。必须是有效的 URL，例如 `https://xxxxx`。 |

## 返回示例
```json
{
    "created_at":"2024-07-22T12:47:28.553735Z",
    "estimate_wait_seconds":null,
    "id":"fc7fb008-7a5e-40ad-a7ff-dbb63db61be8",
    "last_frame":null,
    "liked":null,
    "prompt":"cat dance",
    "state":"pending",
    "thumbnail":null,
    "video":null
}
```
