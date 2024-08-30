# 执行动作
>POST `https://api.gptoai.cc/mj/submit/action`

## Header 请求参数
```json
{
    "Authorization": "Bearer YOUR_API_KEY" //替换为自己的apikey
}
```
## Body 请求参数
```json
{
    "customId": "MJ::JOB::PromptAnalyzer::1",
    "taskId": "1719252589390291"
}
```
## 参数说明

| 参数                  | 类型              | 是否必需 | 描述                                                                                                                                                             |
|-----------------------|-------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `chooseSameChannel`   | `boolean`         | 可选     | 是否选择同一频道下的账号。默认为 `false`，即只使用任务关联的账号。                                                                                                |
| `customId`            | `string`          | 必需     | 动作标识，用于唯一标识一个特定的操作。                                                                                                                           |
| `taskId`              | `string`          | 必需     | 任务的唯一 ID，用于标识当前任务。                                                                                                                                |
| `accountFilter`       | `object`          | 可选     | 账号筛选条件，用于筛选符合条件的账号。                                                                                                                           |
| `channelId`           | `string`          | 可选     | 指定要使用的频道 ID。                                                                                                                                             |
| `instanceId`          | `string`          | 可选     | 指定要使用的账号实例 ID。                                                                                                                                        |
| `modes`               | `array[string]`   | 可选     | 指定账号的工作模式。可选值包括：`RELAX`、`FAST`、`TURBO`。                                                                                                        |
| `remark`              | `string`          | 可选     | 备注信息，包含附加说明或注释。                                                                                                                                    |
| `remix`               | `boolean`         | 可选     | 指定账号是否支持 remix 功能。                                                                                                                                    |
| `remixAutoConsidered` | `boolean`         | 可选     | 账号过滤时，如果 remix 自动提交，则视为账号的 remix 属性为 `false`。                                                                                               |
| `notifyHook`          | `string`          | 可选     | 回调地址，用于处理操作完成后的通知。如果为空，则使用全局的 `notifyHook`。                                                                                         |
| `state`               | `string`          | 可选     | 自定义参数，用于在请求中传递特定的状态信息。                                                                                                                      |

### 使用说明：

#### 必需参数：

- **`customId`**：这是一个必需参数，用于唯一标识某个特定操作。例如，在对任务进行处理时，每个操作应有独特的 `customId` 以避免混淆。
- **`taskId`**：用于唯一标识当前任务。每个任务都有其唯一的 `taskId`，确保操作能够正确关联到特定的任务。

#### 可选参数：

- **`chooseSameChannel`**：指定是否选择同一频道下的账号。如果为 `true`，将选择同一频道内的账号；如果为 `false`（默认值），则只使用与任务关联的账号。
- **`accountFilter`**：用于指定筛选条件，以选择符合要求的账号。可用于复杂的账号筛选逻辑。
- **`channelId`**：选择特定的频道 ID。如果为空，则不限定频道。
- **`instanceId`**：指定要使用的账号实例 ID。如果为空，则不限定实例。
- **`modes`**：设定账号的工作模式，可以选择 `RELAX`（放松模式）、`FAST`（快速模式）、`TURBO`（极速模式）之一或多个。
- **`remark`**：提供额外的备注信息，以帮助描述操作或任务。
- **`remix`**：指示账号是否支持 remix 功能。可用于筛选或控制功能。
- **`remixAutoConsidered`**：在账号筛选时，如果 remix 是自动提交的，则视为 remix 属性为 `false`。
- **`notifyHook`**：设置回调地址，通知操作完成后的状态。如果未指定，系统将使用全局设置的 `notifyHook`。
- **`state`**：用于传递自定义的状态信息，便于在请求之间传递上下文。

#### 注意事项：

- **唯一标识**：`customId` 和 `taskId` 应确保唯一性，以防止任务和操作的混淆。
- **模式选择**：根据实际需要选择合适的 `modes`（工作模式），以最佳地匹配账号的性能要求。
- **回调地址**：`notifyHook` 参数可以动态设置，以灵活应对不同的通知需求。确保回调地址有效，并能够正确处理回调信息。
- **筛选逻辑**：使用 `accountFilter` 和其他相关参数进行精确的账号选择，以优化操作效果和效率。

## 返回示例
```json
{
    "code": 1,
    "description": "提交成功",
    "properties": {},
    "result": 1320098173412546
}
```