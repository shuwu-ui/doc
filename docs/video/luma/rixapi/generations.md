# 生成视频

>POST `https://api.gptoai.cc/luma/generations`

## Header 请求参数
```json
{
    "Content-Type": "application/json; charset=utf-8",
    "Authorization": "Bearer YOUR_API_KEY" //替换为自己的apikey
}
```
## Body 请求参数
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
| `aspect_ratio`   | `string`  | 可选     | 指定生成图像的宽高比，例如 `16:9`、`1:1` 等。                                         |
| `expand_prompt`  | `boolean` | 可选     | 是否开启提示词优化，默认为 `false`。用于控制是否自动优化用户输入的提示词。             |
| `loop`           | `boolean` | 必需     | 是否循环使用一张参考图。`true` 表示循环使用，`false` 表示不使用。                     |
| `image_url`      | `string`  | 可选     | 参考图像的 URL 地址，支持第三方图像托管地址。必须是 Base64 编码格式的图像。           |
| `image_end_url`  | `string`  | 可选     | 终止图像生成的 URL 地址，支持第三方图像托管地址。必须是 Base64 编码格式的图像。       |
| `notify_hook`    | `string`  | 可选     | 回调地址，当生成完成后，系统会调用此地址进行通知。必须是有效的 URL，例如 `https://xxxxx`。 |

### 使用说明

- **`user_prompt`**: 必需参数，用于指定生成内容的核心提示词。提示词应尽可能清晰和具体，以便生成系统能理解用户的需求并生成符合预期的内容。

- **`aspect_ratio`**: 可选参数，用于控制生成图像的宽高比。该参数接受如 `16:9`、`1:1` 等格式的输入，适用于需要特定比例输出的场景。

- **`expand_prompt`**: 可选参数，布尔值，用于决定是否对用户提供的提示词进行自动优化。设置为 `true` 时，系统会尝试改进提示词以提高生成质量。

- **`loop`**: 必需参数，布尔值，用于控制是否重复使用参考图像。如果设置为 `true`，参考图像将被循环使用来生成多个内容。

- **`image_url`**: 可选参数，指定一个 Base64 编码的图像 URL 地址作为参考。此 URL 应指向一个可以访问的图像资源，系统将使用该图像作为生成内容的基础。

- **`image_end_url`**: 可选参数，指定一个终止图像生成的 Base64 编码 URL 地址。与 `image_url` 类似，此参数提供终止生成过程时使用的图像。

- **`notify_hook`**: 可选参数，用于设置生成完成后系统发送通知的回调 URL 地址。确保提供的 URL 是有效的且可以接收系统的 POST 请求。

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