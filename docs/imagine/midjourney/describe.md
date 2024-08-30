# 提交Describe任务
>POST `https://api.gptoai.cc/mj/submit/describe`

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
    "base64": "data:image/png;base64,xxx",
    "accountFilter": {
        "channelId": "string",
        "instanceId": "string",
        "modes": [
            "RELAX"
        ],
        "remark": "string",
        "remix": true,
        "remixAutoConsidered": true
    },
    "notifyHook": "string",
    "state": "string"
}
```
## 参数说明

| 参数                  | 类型              | 是否必需 | 描述                                                                                                                                                             |
|-----------------------|-------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `botType`             | `string`          | 可选     | Bot 类型，默认为 `mj`（Mid Journey）。可选值包括 `MID_JOURNEY` 或 `NIJI_JOURNEY`。                                                                                 |
| `base64`              | `string`          | 必需     | 图片的 Base64 编码字符串。必须包含数据类型前缀（例如 `data:image/png;base64,`）。                                                                                  |
| `accountFilter`       | `object`          | 可选     | 账号筛选条件，用于过滤符合条件的账号。                                                                                                                           |
| `channelId`           | `string`          | 可选     | 指定要使用的频道 ID。                                                                                                                                             |
| `instanceId`          | `string`          | 可选     | 指定要使用的账号实例 ID。                                                                                                                                        |
| `modes`               | `array[string]`   | 可选     | 指定账号的工作模式。可选值包括：`RELAX`、`FAST`、`TURBO`。                                                                                                        |
| `remark`              | `string`          | 可选     | 备注信息，包含附加说明或注释。                                                                                                                                    |
| `remix`               | `boolean`         | 可选     | 指定账号是否支持 remix 功能。                                                                                                                                     |
| `remixAutoConsidered` | `boolean`         | 可选     | 账号过滤时，如果 remix 自动提交，则视为账号的 remix 属性为 `false`。                                                                                               |
| `notifyHook`          | `string`          | 可选     | 回调地址，用于处理操作完成后的通知。如果为空，则使用全局的 `notifyHook`。                                                                                         |
| `state`               | `string`          | 可选     | 自定义参数，用于在请求中传递特定的状态信息。                                                                                                                      |

### 使用说明：

#### 必需参数：

- **`base64`**: 这是必需参数，用于上传图片的 Base64 编码字符串。Base64 字符串应包含数据类型前缀（例如 `data:image/png;base64,`）。

#### 可选参数：

- **`botType`**: 指定 Bot 的类型，默认值为 `MID_JOURNEY`（mj）。如果使用 `NIJI_JOURNEY`（niji），需要在此参数中指定。
- **`accountFilter`**: 用于指定筛选条件，选择符合条件的账号进行操作。
- **`channelId`**: 选择特定的频道 ID。如果为空，则不限定频道。
- **`instanceId`**: 指定要使用的账号实例 ID。如果为空，则不限定实例。
- **`modes`**: 设定账号的工作模式。可选择 `RELAX`（放松模式）、`FAST`（快速模式）、`TURBO`（极速模式）之一或多个。
- **`remark`**: 提供额外的备注信息，帮助描述操作或任务。
- **`remix`**: 指示账号是否支持 remix 功能。可用于筛选或控制功能。
- **`remixAutoConsidered`**: 在账号筛选时，如果 remix 是自动提交的，则视为 remix 属性为 `false`。
- **`notifyHook`**: 设置回调地址，用于接收操作完成后的通知。如果未提供，系统将使用全局设置的 `notifyHook`。
- **`state`**: 用于传递自定义的状态信息，在请求之间传递上下文或其他特定数据。

#### 注意事项：

- **图片编码**：`base64` 参数中的图片字符串必须为有效的 Base64 编码，并包含适当的 MIME 类型前缀（如 `data:image/png;base64,`）。
- **Bot 类型**：`botType` 的默认值为 `MID_JOURNEY`，如果需要使用其他类型（如 `NIJI_JOURNEY`），请明确指定。
- **工作模式和过滤器**：使用 `modes`、`accountFilter` 等参数进行精确的账号选择和操作优化。确保模式选择适合您的使用场景。
- **回调地址**：`notifyHook` 参数允许动态设置，确保回调地址有效并能够正确处理返回的信息。

## 返回示例
```json
{
    "code": 1,
    "description": "提交成功",
    "properties": {},
    "result": 1320098173412546
}
```