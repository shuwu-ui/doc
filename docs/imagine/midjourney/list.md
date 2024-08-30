# ~~查询所有任务~~
>GET `https://api.gptoai.cc/mj/task/list` 将遗弃

## Header 请求参数
```json
{
    "Authorization": "Bearer YOUR_API_KEY" //替换为自己的apikey
}
```

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

| 参数          | 类型                  | 是否必需 | 描述                                                                                     |
|---------------|-----------------------|----------|------------------------------------------------------------------------------------------|
| `action`      | `string`              | 可选     | 任务类型。枚举值包括 `IMAGINE`, `UPSCALE`, `VARIATION`, `ZOOM`, `PAN`, `DESCRIBE`, `BLEND`, `SHORTEN`, `SWAP_FACE`。|
| `buttons`     | `array[object]`       | 可选     | 按钮的数组对象，代表不同操作的按钮。包含以下子字段：                                      |
| - `customId`  | `string`              | 可选     | 动作标识符。                                                                             |
| - `emoji`     | `string`              | 可选     | 按钮的图标。                                                                             |
| - `label`     | `string`              | 可选     | 按钮的文本。                                                                             |
| - `style`     | `integer`             | 可选     | 样式类型。`2` 表示 Primary，`3` 表示 Green。                                              |
| - `type`      | `integer`             | 可选     | 类型，默认值使用。                                                                       |
| `description` | `string`              | 可选     | 任务描述。                                                                               |
| `failReason`  | `string`              | 可选     | 失败原因。                                                                               |
| `finishTime`  | `integer` (`int64`)   | 可选     | 结束时间戳。                                                                             |
| `id`          | `string`              | 可选     | 任务的唯一标识符。                                                                       |
| `imageUrl`    | `string`              | 可选     | 图像的 URI 地址。                                                                        |
| `progress`    | `string`              | 可选     | 任务进度。                                                                               |
| `prompt`      | `string`              | 可选     | 提示词。                                                                                 |
| `promptEn`    | `string`              | 可选     | 提示词（英文）。                                                                         |
| `properties`  | `object`              | 可选     | 自定义的属性对象。                                                                       |
| `startTime`   | `integer` (`int64`)   | 可选     | 开始执行的时间戳。                                                                       |
| `state`       | `string`              | 可选     | 自定义状态。                                                                             |
| `status`      | `string`              | 可选     | 任务状态。枚举值包括 `NOT_START`, `SUBMITTED`, `MODAL`, `IN_PROGRESS`, `FAILURE`, `SUCCESS`, `CANCEL`。 |
| `submitTime`  | `integer` (`int64`)   | 可选     | 提交时间戳。                                                                             |

### 使用说明：

- **`action`**：表示当前任务的类型。根据任务的类型，可以选择不同的操作类型，例如生成图像 (`IMAGINE`)、放大图像 (`UPSCALE`) 等。
- **`buttons`**：一个对象数组，定义了任务可能执行的不同操作按钮。每个按钮都有 `customId`（用于唯一标识该操作）、`emoji`（图标）、`label`（显示文本）、`style`（样式）、和 `type`（类型）。
- **`description`**：对任务的描述，帮助用户理解当前任务的内容。
- **`failReason`**：任务失败的原因。通常在任务未能成功完成时提供。
- **`finishTime`** 和 **`startTime`**：以时间戳格式表示的任务开始和结束时间，用于记录任务的时间信息。
- **`id`**：任务的唯一标识符，通常用于追踪和管理任务。
- **`imageUrl`**：图像的 URI 地址，指向生成或处理后的图像位置。
- **`progress`**：表示任务的当前进度，通常用于显示任务的执行状态。
- **`prompt`** 和 **`promptEn`**：用于图像生成或任务描述的提示词，可以有多种语言版本。
- **`properties`**：自定义属性，允许用户在任务中传递任意的数据结构或配置信息。
- **`state`** 和 **`status`**：用于表示任务的当前状态和总体状态，例如是否已开始、提交中、进行中、失败或成功。
- **`submitTime`**：任务提交的时间戳，表示任务被创建或开始处理的时间。
