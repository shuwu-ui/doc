# 提交Imagine任务
>POST `https://api.gptoai.cc/mj/submit/imagine`

## Header 请求参数
```json
{
    "Authorization": "Bearer YOUR_API_KEY" //替换为自己的apikey
}
```
## Body 请求参数
```json
{
    "botType": "MID_JOURNEY",
    "prompt": "Cat",
    "base64Array": [
        "string"
    ],
    "notifyHook": "string"
}
```
## 参数说明

| 参数            | 类型             | 是否必需 | 描述                                                                                                                                                      |
|-----------------|------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `botType`       | `string`         | 可选     | Bot 类型，默认为 `mj`（Mid Journey）。可选值包括 `MID_JOURNEY` 或 `NIJI_JOURNEY`。                                                                          |
| `prompt`        | `string`         | 必需     | 用于生成图像的提示词。必须提供，描述你希望生成的图像内容。                                                                                                 |`Cat`                                                                                                                                                     |
| `base64Array`   | `array[string]`  | 可选     | 垫图的 Base64 编码数组。每个元素应为 Base64 编码的图片字符串。用于提供生成图像的背景或参考图。                                                               |
| `notifyHook`    | `string`         | 可选     | 操作完成后的回调地址。如果未提供，则使用全局的 `notifyHook` 设置。                                                                                         |

### 使用说明：

#### 必需参数：

- **`prompt`**：这是一个必需参数，指定用于生成图像的文本提示词。输入的文本描述应该简洁且富有描述性，以帮助模型生成预期的图像。例如，使用 `"Cat"` 作为提示词，模型将尝试生成与猫相关的图像。

#### 可选参数：

- **`botType`**：指定 Bot 的类型。默认值为 `MID_JOURNEY`（mj）。如果需要使用 `NIJI_JOURNEY`（niji），请在此参数中指定。
- **`base64Array`**：这是一个可选参数，用于提供图像生成的背景或参考图。可以传入 Base64 编码的图片数组。每个字符串都应该是一个有效的 Base64 编码的图像数据。
- **`notifyHook`**：指定操作完成后的回调地址，用于在操作完成后接收通知。如果为空，将使用全局的 `notifyHook`。

#### 注意事项：

- **提示词质量**：确保 `prompt` 提供了足够的细节和清晰的描述，以便模型能够准确地生成所需的图像。
- **Base64 编码**：如果使用 `base64Array`，确保所有图片的 Base64 字符串都是有效的，并包含适当的 MIME 类型前缀（如 `data:image/png;base64,`）。
- **Bot 类型选择**：`botType` 默认使用 `MID_JOURNEY`。根据需求选择适合的类型（`NIJI_JOURNEY`）。
- **回调机制**：`notifyHook` 提供灵活的回调处理，确保回调地址有效，并能正确处理返回的信息。


## 返回示例
```json
{
    "code": 1,
    "description": "提交成功",
    "properties": {},
    "result": 1320098173412546
}
```