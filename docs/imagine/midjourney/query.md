# ~~分页查询任务~~
>POST `https://api.gptoai.cc/mj/task/query` 将遗弃

## Header 请求参数
```json
{
    "Authorization": "Bearer YOUR_API_KEY" //替换为自己的apikey
}
```
## Body 请求参数
```json
{
    "pageNumber": 0,
    "pageSize": 10,
    "sort": "id,desc",
    "action": "IMAGINE",
    "description": "string",
    "failReason": "string",
    "id": "string",
    "ids": [
        "string"
    ],
    "instanceId": "string",
    "prompt": "string",
    "promptEn": "string",
    "state": "string",
    "status": "NOT_START",
    "statusSet": [
        "NOT_START"
    ]
}
```
## 参数说明

| 参数          | 类型               | 是否必需 | 描述                                                                                      |
|---------------|--------------------|----------|-------------------------------------------------------------------------------------------|
| `pageNumber`  | `integer` (`int32`) | 可选     | 当前页码，从 0 开始计数。用于分页请求。                                                    |
| **示例值**    |                    |          | `0`                                                                                       |
| `pageSize`    | `integer` (`int32`) | 可选     | 每页的数量。用于限制每次请求返回的结果数量。                                               |
| **示例值**    |                    |          | `10`                                                                                      |
| `sort`        | `string`            | 可选     | 排序方式。可以根据一个或多个字段进行排序，字段之间用逗号分隔。                             |
| **示例值**    |                    |          | `id,desc`                                                                                 |
| `action`      | `string`            | 可选     | 任务类型。可选值包括 `IMAGINE`, `UPSCALE`, `VARIATION`, `ZOOM`, `PAN`, `DESCRIBE`, `BLEND`, `SHORTEN`, `SWAP_FACE`。|
| `description` | `string`            | 可选     | 任务的描述信息，用于提供关于任务的详细信息。                                               |
| `failReason`  | `string`            | 可选     | 任务失败的原因。通常在任务未能成功完成时提供。                                             |
| `id`          | `string`            | 可选     | 任务的唯一标识符，用于识别和跟踪特定任务。                                                 |
| `ids`         | `array[string]`     | 可选     | 任务 ID 的数组，用于批量操作或查询多个任务。                                               |
| `instanceId`  | `string`            | 可选     | 账号实例 ID，用于指定特定账号实例执行操作。                                                |
| `prompt`      | `string`            | 可选     | 用于生成图像的提示词或指令。                                                              |
| `promptEn`    | `string`            | 可选     | 提示词的英文版本，用于生成图像的提示或指令。                                               |
| `state`       | `string`            | 可选     | 自定义状态，用户定义的任务状态。                                                          |
| `status`      | `string`            | 可选     | 任务状态。可选值包括 `NOT_START`, `SUBMITTED`, `MODAL`, `IN_PROGRESS`, `FAILURE`, `SUCCESS`, `CANCEL`。|
| `statusSet`   | `array[string]`     | 可选     | 任务状态的数组，用于指定多个任务状态。可选值同 `status` 字段。                              |

### 使用说明

- **`pageNumber` 和 `pageSize`**: 这些参数用于分页请求，`pageNumber` 指定要请求的页码，`pageSize` 指定每页返回的项目数量。
- **`sort`**: 指定结果的排序方式。可以按照一个或多个字段进行排序，并使用逗号分隔。例如，`id,desc` 表示按 `id` 字段降序排序。
- **`action`**: 定义要执行的任务类型，例如生成图像或调整图像。根据所需操作选择相应的任务类型。
- **`description`** 和 **`failReason`**: 提供任务的详细描述和失败原因，以帮助理解任务的上下文和结果。
- **`id`** 和 **`ids`**: 用于识别和操作特定任务。`id` 用于单个任务，`ids` 用于批量操作多个任务。
- **`instanceId`**: 用于指定特定的账号实例，如果操作需要针对特定实例执行。
- **`prompt`** 和 **`promptEn`**: 提供用于生成图像或其他操作的文本提示，支持多语言。
- **`state`** 和 **`status`**: 用于定义和查询任务的当前状态。`state` 是自定义的状态，而 `status` 是预定义的任务状态。
- **`statusSet`**: 用于同时指定多个状态的数组，以进行更复杂的状态查询或过滤操作。

## 返回示例
```json
{
    "content": [
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
    ],
    "empty": true,
    "first": true,
    "last": true,
    "number": 0,
    "numberOfElements": 0,
    "pageable": {
        "offset": 0,
        "pageNumber": 0,
        "pageSize": 0,
        "paged": true,
        "sort": {
            "empty": true,
            "sorted": true,
            "unsorted": true
        },
        "unpaged": true
    },
    "size": 0,
    "sort": {
        "empty": true,
        "sorted": true,
        "unsorted": true
    },
    "totalElements": 0,
    "totalPages": 0
}
```

## 返回示例参数说明

### 顶层字段

| 参数                  | 类型                  | 是否必需 | 描述                                                                                      |
|-----------------------|-----------------------|----------|-------------------------------------------------------------------------------------------|
| `content`             | `array[object]`       | 可选     | 任务的数组，每个对象代表一个任务，包含任务的相关信息。                                                                         |
| `empty`               | `boolean`             | 可选     | 指示是否内容为空。                                                                                                             |
| `first`               | `boolean`             | 可选     | 指示是否为第一页。                                                                                                             |
| `last`                | `boolean`             | 可选     | 指示是否为最后一页。                                                                                                            |
| `number`              | `integer` (`int32`)   | 可选     | 当前页码。                                                                                                                     |
| `numberOfElements`    | `integer` (`int32`)   | 可选     | 当前页的元素数量。                                                                                                              |
| `pageable`            | `object (Pageable)`   | 可选     | 分页对象，包含分页相关的详细信息。                                                                                              |
| `size`                | `integer` (`int32`)   | 可选     | 每页的元素数量。                                                                                                                |
| `sort`                | `object (Sort)`       | 可选     | 排序对象，包含排序相关的详细信息。                                                                                              |
| `totalElements`       | `integer` (`int64`)   | 可选     | 总的元素数量。                                                                                                                  |
| `totalPages`          | `integer` (`int32`)   | 可选     | 总页数。                                                                                                                        |

### `content` 数组内的对象字段

| 参数           | 类型                  | 是否必需 | 描述                                                                                      |
|----------------|-----------------------|----------|-------------------------------------------------------------------------------------------|
| `action`       | `string`              | 可选     | 任务类型。可选值包括 `IMAGINE`, `UPSCALE`, `VARIATION`, `ZOOM`, `PAN`, `DESCRIBE`, `BLEND`, `SHORTEN`, `SWAP_FACE`。|
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

### `pageable` 对象字段

| 参数            | 类型                | 是否必需 | 描述                                                                                           |
|-----------------|---------------------|----------|------------------------------------------------------------------------------------------------|
| `offset`        | `integer` (`int64`) | 可选     | 偏移量，表示从数据集的哪个点开始返回数据。                                                      |
| `pageNumber`    | `integer` (`int32`) | 可选     | 当前页码，从 0 开始计数。                                                                      |
| `pageSize`      | `integer` (`int32`) | 可选     | 每页的元素数量。                                                                               |
| `paged`         | `boolean`           | 可选     | 是否进行分页。                                                                                 |
| `sort`          | `object (Sort)`     | 可选     | 排序对象，包含排序相关的详细信息。                                                             |
| `unpaged`       | `boolean`           | 可选     | 是否不进行分页。                                                                                |

### `sort` 对象字段

`sort` 对象通常包含排序的字段和方向（升序或降序），在这里具体的字段没有列出。

### 使用说明

- **分页相关字段**：`pageable` 对象包含了所有与分页有关的信息，例如页码、每页大小、偏移量等。通过这些字段，可以实现对数据的分页访问。
- **任务相关字段**：`content` 数组中的对象字段提供了关于任务的详细信息，包括任务类型、描述、状态、提示词等。用于管理和显示任务的执行情况。
- **状态和排序**：`status` 和 `sort` 字段用于描述任务的当前状态和排序规则。这对于在界面上显示和操作任务列表非常有用。
