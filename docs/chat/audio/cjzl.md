# 创建转录

>POST `https://api.gptoai.cc/v1/audio/transcriptions`

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
| `file`            | `file`    | 必需     | 要转录的音频文件，支持的格式包括：mp3、mp4、mpeg、mpga、m4a、wav 或 webm。                                                                                               |
| `model`           | `string`  | 必需     | 要使用的模型的 ID。目前仅有 `whisper-1` 可用。**示例值**: `whisper-1`                                                                                                                 |
| `prompt`          | `string`  | 可选     | 可选文本，用于指导模型的风格或继续之前的音频片段。提示应[与](https://platform.openai.com/docs/guides/speech-to-text/prompting)音频语言相匹配。 **示例值**: `eiusmodnulla`|
| `response_format` | `string`  | 可选     | 转录输出的格式，支持的选项包括：`json`、`text`、`srt`、`verbose_json` 或 `vtt`。 **示例值**: `json`  |
| `temperature`     | `number`  | 可选     | 采样温度，介于 0 和 1 之间。较高的值（如 0.8）使输出更加随机，而较低的值（如 0.2）使输出更加集中和确定。设置为 0 时，模型将自动调整温度，直到达到特定的对数概率阈值。**示例值**: `0`   |
| `language`        | `string`  | 可选     | 输入音频的语言。[以ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)格式提供输入语言将提高准确性和延迟。                                                                                                 |
## 使用说明

- **必需参数**：
  - `file`：需要上传的音频文件，必须是支持的格式之一。
  - `model`：必须指定使用的模型。目前只有 `whisper-1` 可用。

- **可选参数**：
  - `prompt`：可以提供一个提示文本，以指导模型的风格或让模型继续前一个音频片段。
  - `response_format`：定义转录结果的输出格式，可以选择 `json`、`text`、`srt`、`verbose_json` 或 `vtt`。
  - `temperature`：调整生成文本的随机性。建议根据需求选择合适的采样温度。
  - `language`：指定音频的语言，使用 ISO-639-1 格式（如 `en` 表示英语，`zh` 表示中文）。
## 返回示例
```json
{
  "text": "Imagine the wildest idea that you've ever had, and you're curious about how it might scale to something that's a 100, a 1,000 times bigger. This is a place where you can get to do that."
}
```