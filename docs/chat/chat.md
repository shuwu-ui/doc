# 聊天接口（Chat）

>POST `https://api.gptoai.cc/v1/chat/completions`

## Header 请求参数
```json
{
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_API_KEY" //替换为自己的apikey
}
```
## Body 请求参数
```json
{
  "model": "gpt-3.5-turbo",
  "messages": [
        {
        "role": "user",
        "content": "Hello!"
        }
    ]
}
```
## 参数说明

| 参数               | 类型                    | 是否必需 | 描述                                                                                                                                                        |
|------------------|-----------------------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `model`          | `string`              | 必需    | 要使用的模型的 ID。有关哪些模型适用于聊天 API 的详细信息，请参阅模型端点兼容性表。                                                                                                         |
| `messages`       | `array[object]`       | 必需    | 以聊天格式生成聊天完成的消息。每个对象应包含角色（`role`）和内容（`content`）。                                                                                                               |
| `role`           | `string`              | 可选    | 消息的角色（例如 `user`、`assistant`）。                                                                                                                  |
| `content`        | `string`              | 可选    | 消息的内容。                                                                                                                                                 |
| `temperature`    | `integer`             | 可选    | 使用什么采样温度，介于 0 和 2 之间。较高的值（如 0.8）将使输出更加随机，而较低的值（如 0.2）将使输出更加集中和确定。建议调整这个或 `top_p`，但不是两者。                                          |
| `top_p`          | `integer`             | 可选    | 一种替代温度采样的方法，称为核采样。模型将只考虑具有 `top_p` 概率质量的标记。建议调整这个或 `temperature`，但不是两者。                                                                      |
| `n`              | `integer`             | 可选    | 为每个输入消息生成多少个聊天完成选项。                                                                                                                      |
| `stream`         | `boolean`             | 可选    | 如果设置，将发送部分消息增量（流式传输）。                                                                                                                  |
| `stop`           | `string` 或 `array`   | 可选    | 最多 4 个字符串或字符串数组，API 将在生成这些字符串时停止生成更多标记。                                                                                                      |
| `max_tokens`     | `integer`             | 可选    | 聊天完成时生成的最大标记数。输入标记和生成标记的总长度受模型上下文长度的限制。                                                                                                       |
| `presence_penalty` | `number`            | 可选    | -2.0 到 2.0 之间的数字。正值会惩罚新标记是否已经出现在文本中，从而增加模型谈论新主题的可能性。                                                                                           |
| `frequency_penalty` | `number`           | 可选    | -2.0 到 2.0 之间的数字。正值会根据新标记在文本中的现有频率对其进行惩罚，从而降低模型逐字重复同一行的可能性。                                                                                    |
| `logit_bias`     | `object` 或 `null`    | 可选    | 修改指定标记出现在完成中的可能性。接受一个 JSON 对象，该对象将标记（由标记器中的标记 ID 指定）映射到从 -100 到 100 的关联偏差值。                                                             |
| `user`           | `string`              | 可选    | 代表最终用户的唯一标识符，可以帮助 OpenAI 监控和检测滥用行为。                                                                                                                          |

### 使用说明： 
#### 必需参数：
`model` 和 `messages` 是必需的参数，必须提供。model 指定了要使用的模型 ID，而 `messages` 是一个数组，其中包含了角色和内容的对象，用于构建聊天对话。  
#### 可选参数：
其余参数都是可选的，允许你自定义聊天生成的行为，如控制生成文本的随机性（通过 `temperature` 或 `top_p`）、输出的数量（`n`）、流式输出（`stream`）、和限制生成的长度（`max_tokens`）等。  
#### 注意事项：
通常建议在 `temperature` 和 `top_p` 之间选择一个进行调整，而不是同时调整两者，以更好地控制生成文本的质量和随机性

## 返回示例

```json
{
    "id": "chatcmpl-123",
    "object": "chat.completion",
    "created": 1677652288,
    "choices": [
        {
            "index": 0,
            "message": {
                "role": "assistant",
                "content": "\n\nHello there, how may I assist you today?"
            },
            "finish_reason": "stop"
        }
    ],
    "usage": {
        "prompt_tokens": 9,
        "completion_tokens": 12,
        "total_tokens": 21
    }
}
```