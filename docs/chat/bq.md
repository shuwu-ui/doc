# 内容补全接口
>POST `https://api.gptoai.cc/v1/completions`
## Header 请求参数
```json
{
    "Authorization": "Bearer YOUR_API_KEY" //替换为自己的apikey
}
```
## Body 请求参数
```json
{
  "model": "gpt-3.5-turbo-instruct",
  "prompt": "Say this is a test",
  "max_tokens": 7,
  "temperature": 0,
  "top_p": 1,
  "n": 1,
  "stream": false,
  "logprobs": null,
  "stop": "\n"
}
```
## 参数说明
| 参数          | 类型                 | 是否必需 | 描述                                                                                                                                                            |
|---------------|----------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `model`       | `string`             | 必需     | 要使用的模型的 ID。您可以使用 List models API 来查看所有可用模型，或查看我们的模型概述以了解它们的描述。                                                                                      |
| `prompt`      | `string` 或 `array`  | 可选     | 生成完成的提示，编码为字符串、字符串数组、标记数组或标记数组数组。如果未指定提示，模型将生成新文档的开头。                                                                                           |
| `max_tokens`  | `integer`            | 可选     | 完成时生成的最大标记数。提示的标记数加上 `max_tokens` 不能超过模型的上下文长度。大多数模型的上下文长度为 2048 个标记（某些最新模型支持 4096 个标记）。                                                 |
| `temperature` | `number`             | 可选     | 使用什么采样温度，介于 0 和 2 之间。较高的值（如 0.8）使输出更加随机，较低的值（如 0.2）使输出更加集中和确定。建议调整此参数或 `top_p`，但不要同时调整两者。                                          |
| `top_p`       | `number`             | 可选     | 一种替代温度采样的方法，称为核采样。`top_p` 为 0.1 时，模型只考虑前 10% 概率质量的标记。建议调整此参数或 `temperature`，但不要同时调整两者。                                                       |
| `n`           | `integer`            | 可选     | 为每个提示生成的完成数。**注意**：此参数会消耗大量令牌配额，需谨慎使用，并合理设置 `max_tokens` 和 `stop`。                                                                                   |
| `stream`      | `boolean`            | 可选     | 是否返回流式部分进度。如果设置为 `true`，模型将通过事件流（SSE）发送部分结果，流以 `data: [DONE]` 终止。                                                                                       |
| `logprobs`    | `null` 或 `integer`  | 可选     | 包括最有可能的标记的对数概率（logprobs）。如果设置为 5，API 将返回 5 个最有可能的标记的列表及其对数概率。默认最大值为 5。如果需要更多，请联系 OpenAI 描述您的用例。                                     |
| `stop`        | `string` 或 `array`  | 可选     | 最多 4 个字符串或字符串数组，API 将在生成这些字符串时停止生成更多标记，返回的文本不包含这些停止序列。                                                                                                     |

## 使用说明
### 必需参数：
- `model` 是必需参数，必须提供。它指定了要使用的模型 ID。
### 可选参数：
- `prompt`：指定用于生成的输入提示。
- `max_tokens`：控制生成内容的长度，防止生成的内容过长。
- `temperature` 和 `top_p`：用于控制生成内容的随机性和多样性。
- `n`：指定每个提示生成的完成数，注意使用时会消耗更多的令牌。
- `stream`：如果需要实时获取生成内容，可以使用流选项。
- `logprobs`：用于返回最有可能标记的对数概率。
- `stop`：定义生成的终止条件，防止生成不需要的内容。

## 返回示例
```json
{
    "id": "cmpl-uqkvlQyYK7bGYrRHQ0eXlWi7",
    "object": "text_completion",
    "created": 1589478378,
    "model": "text-davinci-003",
    "choices": [
        {
            "text": "\n\nThis is indeed a test",
            "index": 0,
            "logprobs": null,
            "finish_reason": "length"
        }
    ],
    "usage": {
        "prompt_tokens": 5,
        "completion_tokens": 7,
        "total_tokens": 12
    }
}
```