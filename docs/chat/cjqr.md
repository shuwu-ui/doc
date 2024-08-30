# 创建嵌入

>POST `https://api.gptoai.cc/v1/embeddings`

## Header 请求参数
```json
{
    "Authorization": "Bearer YOUR_API_KEY" //替换为自己的apikey
}
```
## Body 请求参数
```json
{
  "model": "text-embedding-3-large",
  "input": "The food was delicious and the waiter..."
}
```
## 参数说明

| 参数   | 类型                  | 是否必需 | 描述                                                                                                                        |
|--------|-----------------------|----------|-----------------------------------------------------------------------------------------------------------------------------|
| `model` | `string`              | 必需     | 要使用的模型的 ID。您可以使用[List models](https://platform.openai.com/docs/api-reference/models/list) API 来查看所有可用模型，或查看我们的[模型概述](https://platform.openai.com/docs/models/overview)以了解它们的描述。                                                          |
| `input` | `string` 或 `array`   | 必需     | 输入文本以获取嵌入，编码为字符串或标记数组。要在单个请求中获取多个输入的嵌入，请传递一个字符串数组或令牌数组数组。每个输入的长度不得超过 8192 个标记。。 |

### 使用说明：

#### 必需参数：

- **`model`**: 指定要使用的模型 ID，这是必需的。你可以使用 [`List models API`](https://platform.openai.com/docs/api-reference/models/list)查看所有可用模型，或查看模型概述了解它们的详细信息。

- **`input`**: 这是用于获取嵌入的文本输入，可以是以下类型之一：
  - **字符串**：单个文本字符串。
  - **标记数组**：文本标记的数组。
  - **字符串数组或标记数组的数组**：用于获取多个输入的嵌入。单个请求的每个输入长度不得超过 8192 个标记。

#### 注意事项：

- 确保输入文本的长度（标记数）不超过 8192 个标记。
- 使用 `input` 参数时，合理选择输入格式（字符串、标记数组或它们的数组），以便符合 API 要求并满足你的使用场景。
## 返回示例
```json
{
  "object": "list",
  "data": [
    {
      "object": "embedding",
      "embedding": [
        0.0023064255,
        -0.009327292,
        .... (1536 floats total for ada-002)
        -0.0028842222
      ],
      "index": 0
    }
  ],
  "model": "text-embedding-ada-002",
  "usage": {
    "prompt_tokens": 8,
    "total_tokens": 8
  }
}
```