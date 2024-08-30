# 根据ID列表查询任务
>POST `https://api.gptoai.cc/mj/task/list-by-condition`

## Header 请求参数
```json
{
    "Authorization": "Bearer YOUR_API_KEY" //替换为自己的apikey
}
```
## Body 请求参数
```json
{
    "ids": [
        "string"
    ]
}
```
## 参数说明

| 参数   | 类型             | 是否必需 | 描述                  |
|--------|------------------|----------|-----------------------|
| `ids`  | `array[string]`  | 可选     | 任务 ID 的数组，用于指定多个任务的唯一标识符。 |

### 使用说明：

#### 可选参数：

- **`ids`**：这是一个可选参数，包含任务 ID 的数组。每个元素应是一个有效的任务 ID 字符串。此参数用于指定多个任务，可以批量操作这些任务，如查询状态、取消任务或获取结果。

#### 注意事项：

- **任务 ID 格式**：确保 `ids` 数组中的每个任务 ID 是有效的，并且存在于系统中。
- **批量操作**：使用 `ids` 数组可以对多个任务进行批量操作，节省时间和资源。
## 返回示例
```json
[
    {
        "action": "IMAGINE",
        "buttons": [
            {
                "customId": "string",
                "emoji": "string",
                "label": "string",
                "style": 0,
                "type": 0
            }
        ],
        "description": "string",
        "failReason": "string",
        "finishTime": 0,
        "id": "string",
        "imageUrl": "string",
        "progress": "string",
        "prompt": "string",
        "promptEn": "string",
        "properties": {},
        "startTime": 0,
        "state": "string",
        "status": "NOT_START",
        "submitTime": 0
    }
]
```

## 返回示例参数说明

| 参数           | 类型                  | 是否必需 | 描述                                                                                     |
|----------------|-----------------------|----------|------------------------------------------------------------------------------------------|
| `action`       | `string`              | 可选     | 任务类型。可选值包括 `IMAGINE`, `UPSCALE`, `VARIATION`, `ZOOM`, `PAN`, `DESCRIBE`, `BLEND`, `SHORTEN`, `SWAP_FACE`。 |
| `buttons`      | `array[object]`       | 可选     | 按钮数组，每个对象代表一个操作按钮，包含以下子字段：                                      |
| - `customId`   | `string`              | 可选     | 动作标识符，用于唯一标识按钮的操作。                                                     |
| - `emoji`      | `string`              | 可选     | 按钮的图标，以 emoji 形式表示。                                                          |
| - `label`      | `string`              | 可选     | 按钮的文本标签，描述按钮的功能或操作。                                                   |
| - `style`      | `integer` (`int32`)   | 可选     | 按钮的样式。`2` 表示 Primary 样式，`3` 表示 Green 样式。                                  |
| - `type`       | `integer` (`int32`)   | 可选     | 按钮的类型，决定按钮的用途和行为。                                                       |
| `description`  | `string`              | 可选     | 任务的详细描述，说明任务的目的或内容。                                                   |
| `failReason`   | `string`              | 可选     | 任务失败的原因，通常在任务未成功完成时提供。                                             |
| `finishTime`   | `integer` (`int64`)   | 可选     | 任务结束的时间戳，以毫秒为单位。                                                         |
| `id`           | `string`              | 可选     | 任务的唯一标识符，用于识别和追踪任务。                                                   |
| `imageUrl`     | `string`              | 可选     | 任务生成的图像的 URI 地址。                                                              |
| `progress`     | `string`              | 可选     | 任务的当前进度，通常表示为百分比或状态描述。                                             |
| `prompt`       | `string`              | 可选     | 任务使用的提示词，用于指导图像生成或描述任务。                                           |
| `promptEn`     | `string`              | 可选     | 提示词的英文版本，用于更广泛的语言支持。                                                 |
| `properties`   | `object`              | 可选     | 自定义属性对象，允许传递任意的任务相关配置或数据。                                       |
| `startTime`    | `integer` (`int64`)   | 可选     | 任务开始的时间戳，以毫秒为单位。                                                         |
| `state`        | `string`              | 可选     | 自定义状态，描述任务的特定状态或用户定义状态。                                           |
| `status`       | `string`              | 可选     | 任务的状态。可选值包括 `NOT_START`, `SUBMITTED`, `MODAL`, `IN_PROGRESS`, `FAILURE`, `SUCCESS`, `CANCEL`。|
| `submitTime`   | `integer` (`int64`)   | 可选     | 任务提交的时间戳，以毫秒为单位，表示任务被创建或请求的时间。                             |

### 使用说明

- **`action`**: 指定任务的类型，根据需要选择不同的操作类型。
- **`buttons`**: 包含多个按钮对象，每个对象定义一个操作按钮的属性，如标识符、图标、标签、样式和类型。
- **`description`**: 提供对任务的文字描述，以帮助用户了解任务的详细内容。
- **`failReason`**: 如果任务失败，这里将提供失败的原因。
- **`finishTime`** 和 **`startTime`**: 以时间戳格式提供任务的开始和结束时间，帮助记录任务的执行时长。
- **`id`**: 每个任务的唯一标识符，用于识别和管理任务。
- **`imageUrl`**: 如果任务生成了图像，`imageUrl` 将提供图像的访问地址。
- **`progress`**: 用于显示任务的当前进度。
- **`prompt`** 和 **`promptEn`**: 用于指导任务的提示词，支持多语言。
- **`properties`**: 允许传递自定义的任务相关配置。
- **`state`** 和 **`status`**: 用于描述和追踪任务的状态，从创建到完成的不同阶段。
- **`submitTime`**: 提供任务被提交的时间点，帮助追踪任务的生命周期。
