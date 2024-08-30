# 创建翻译

>POST `https://api.gptoai.cc/v1/audio/translations`

## Header 请求参数
```json
{
    "Content-Type": "multipart/form-data",
    "Authorization": "Bearer YOUR_API_KEY" //替换为自己的apikey
}
```
## Body 请求参数说明
| 参数              | 类型      | 是否必需 | 描述                                                                                                                                                                  |
|-------------------|-----------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `file`            | `file`    | 必需     | 要翻译的音频文件，支持以下格式：mp3，mp4，mpeg，mpga，m4a，wav 或 webm。                                                                                             |
| `model`           | `string`  | 必需     | 要使用的模型的 ID。目前仅有 `whisper-1` 可用。**示例值**: `whisper-1`                                                                                                                 |
| `prompt`          | `string`  | 可选     | 一个可选的文本，用于指导模型的风格或继续先前的音频片段。 prompt 应为英文。|
| `response_format` | `string`  | 可选     | 转录输出的格式，支持以下选项之一：json、text、srt、verbose_json 或 vtt。 **示例值**: `json`  |
| `temperature`     | `number`  | 可选     | 采样温度，介于 0 和 1 之间。 较高的值（如 0.8）将使输出更随机，而较低的值（如 0.2）将使其更加专注和确定性。 如果设置为 0，则模型将使用对数概率自动增加温度，直到达到一定的阈值。**示例值**: `0`   |    
## 使用说明

- **必需参数**：
  - `file`：需要上传的音频文件，必须是支持的格式之一。
  - `model`：必须指定使用的模型。目前只有 `whisper-1` 可用。

- **可选参数**：
  - `prompt`：一个可选的文本，用于指导模型的风格或继续先前的音频片段。 prompt 应为英文。
  - `response_format`：转录输出的格式，支持以下选项之一：json、text、srt、verbose_json 或 vtt。
  - `temperature`：采样温度，介于 0 和 1 之间。 较高的值（如 0.8）将使输出更随机，而较低的值（如 0.2）将使其更加专注和确定性。 如果设置为 0，则模型将使用对数概率自动增加温度，直到达到一定的阈值。
## 返回示例
```json
{
  "text": "Hello, my name is Wolfgang and I come from Germany. Where are you heading today?"
}
```