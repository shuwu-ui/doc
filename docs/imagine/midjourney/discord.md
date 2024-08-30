# 上传文件到discord
>POST `https://api.gptoai.cc/mj/submit/upload-discord-images`

## Header 请求参数
```json
{
    "Authorization": "Bearer YOUR_API_KEY" //替换为自己的apikey
}
```
## Body 请求参数
```json
{
    "base64Array": [
        "string"
    ],
    "filter": {
        "channelId": "string",
        "instanceId": "string",
        "remark": "string"
    }
}
```
## 参数说明

| 参数           | 类型               | 是否必需 | 描述                                                                                                                                                      |
|----------------|--------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `base64Array`  | `array[string]`    | 可选     | 图片的 Base64 编码数组。用于传递多个图像数据，每个元素应为 Base64 编码的图片字符串，通常用于指定多个图片的输入。 **示例值**: `["data:image/png;base64,xxx1", "data:image/png;base64,xxx2"]` |
| `filter`       | `object`           | 可选     | 账号筛选条件（`CustomAccountFilter`），用于过滤符合条件的账号。                                                                                             |
| `channelId`    | `string`           | 可选     | 指定要使用的频道 ID。                                                                                                                                      |
| `instanceId`   | `string`           | 可选     | 指定要使用的账号实例 ID。                                                                                                                                  |
| `remark`       | `string`           | 可选     | 备注信息，用于包含附加说明或注释，通常用于在筛选条件或任务描述中提供更多的上下文信息。                                                                      |

### 使用说明：

#### 可选参数：

- **`base64Array`**：用于上传多张图片的 Base64 编码数组。每个字符串应是一个有效的 Base64 编码的图片数据，包含 MIME 类型前缀（例如 `data:image/png;base64,`）。当你需要传递多个图像进行操作时，可以使用此参数。

- **`filter`**：对象类型的参数（`CustomAccountFilter`），用于筛选符合条件的账号。这是一个可选的复杂参数，通常包括多个字段（如账号类型、状态等），用于定义更复杂的筛选逻辑。

- **`channelId`**：指定要操作的特定频道 ID。仅当需要在特定频道内进行操作时使用此参数。

- **`instanceId`**：用于指定操作的账号实例 ID。此参数在需要操作特定账号实例时非常有用。

- **`remark`**：用于包含备注或附加说明信息。通常在复杂的操作或筛选中使用，以提供更多的上下文和解释。

#### 注意事项：

- **图片格式**：确保 `base64Array` 中的每个元素都是有效的 Base64 编码，并正确包含 MIME 类型前缀。
- **筛选条件**：`filter` 对象允许你定义复杂的账号筛选条件，根据需求动态设置这些条件以优化操作。
- **频道和实例选择**：`channelId` 和 `instanceId` 用于特定的操作场景，确保在需要时正确使用这些参数以避免不必要的错误。
- **备注使用**：`remark` 提供的备注信息可以帮助更好地描述操作目的或筛选条件，有助于在日志或回调处理中理解上下文。

## 返回示例
```json
{
    "code": 0,
    "description": "string",
    "result": [
        "string"
    ]
}
```