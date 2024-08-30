# 提交swap_face任务
>POST `https://api.gptoai.cc/mj/insight-face/swap`

## Header 请求参数
```json
{
    "Authorization": "Bearer YOUR_API_KEY" //替换为自己的apikey
}
```
## Body 请求参数
```json
{
    "sourceBase64": "data:image/png;base64,xxx1",
    "targetBase64": "data:image/png;base64,xxx2",
    "accountFilter": {
        "instanceId": "string"
    },
    "notifyHook": "string",
    "state": "string"
}
```
## 参数说明

| 参数              | 类型                | 是否必需 | 描述                                                                                                                    |
|-------------------|---------------------|----------|-------------------------------------------------------------------------------------------------------------------------|
| `sourceBase64`    | `string`            | 必需     | 人脸源图片的 Base64 编码字符串。必须包含数据类型前缀（例如 `data:image/png;base64,`）。                                                                       |
| `targetBase64`    | `string`            | 必需     | 目标图片的 Base64 编码字符串。必须包含数据类型前缀（例如 `data:image/png;base64,`）。                                                                         |
| `accountFilter`   | `object (Filter)`   | 可选     | 用于筛选账户的过滤器对象。                                                                                              |
| `instanceId`      | `string`            | 可选     | 账号实例 ID，指定使用哪个账号的实例。                                                                                   |
| `notifyHook`      | `string`            | 可选     | 回调地址，用于处理操作完成后的通知。如果为空，将使用全局的 `notifyHook`。                                                                                      |
| `state`           | `string`            | 可选     | 自定义参数，可以在请求中传递特定的状态信息。                                                                            

### 使用说明：

#### 必需参数：

- **`sourceBase64`**: 这是源图片的 Base64 编码，包含人脸信息。Base64 字符串应当包含数据类型前缀，例如 `data:image/png;base64,`。

- **`targetBase64`**: 这是目标图片的 Base64 编码，代表将人脸合成或处理的目标图片。也必须包含数据类型前缀，例如 `data:image/png;base64,`。

#### 可选参数：

- **`accountFilter`**: 这是一个对象类型参数，用于指定过滤条件，以选择特定账户进行操作。
  
- **`instanceId`**: 这是一个字符串类型参数，表示使用特定账户实例进行操作。适用于需要指定不同账号实例的场景。

- **`notifyHook`**: 指定操作完成后的回调地址，用于通知客户端操作结果。如果没有提供此参数，则使用全局的 `notifyHook` 设置。

- **`state`**: 这是一个可选的自定义参数，用于在请求中传递任意状态信息。可用于客户端和服务器端之间传递自定义数据。

#### 注意事项：

- **Base64 编码**：`sourceBase64` 和 `targetBase64` 参数都要求 Base64 编码的图片字符串，并且需要包含适当的 MIME 类型前缀（如 `data:image/png;base64,`）。
- **回调机制**：如果没有指定 `notifyHook`，系统将使用全局回调地址来处理操作完成后的通知。确保回调地址是正确的，并且可以处理所需的事件。

## 返回示例
```json
{
    "code": 0,
    "description": "string",
    "result": "string"
}
```