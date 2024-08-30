# TTS文本转语音

>POST `https://api.gptoai.cc/v1/audio/speech`

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
    "model": "tts-1",
    "input": "The quick brown fox jumped over the lazy dog.",
    "voice": "alloy"
}
```
## 参数说明

| 参数              | 类型      | 是否必需 | 描述                                                                                                                                                   |
|-------------------|-----------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| `model`           | `string`  | 必需     | 要使用的 TTS 模型之一，可选值为 `tts-1` 或 `tts-1-hd`。                                                                                                 |
| `input`           | `string`  | 必需     | 要生成音频的文本。最大长度为 4096 个字符。                                                                                                               |
| `voice`           | `string`  | 必需     | 生成音频时使用的语音。支持的语音选项有：`alloy`、`echo`、`fable`、`onyx`、`nova` 和 `shimmer`。                                                           |
| `response_format` | `string`  | 可选     | 输出音频的格式。默认为 `mp3`。支持的格式包括：`mp3`、`opus`、`aac` 和 `flac`。                                                                           |
| `speed`           | `number`  | 可选     | 生成音频的速度，默认为 `1.0`。可以选择的值在 `0.25` 到 `4.0` 之间，`1.0` 表示正常速度。                                                                   |

## 使用说明

- **必需参数**：
  - `model`：指定要使用的文本到语音模型，必须为 `tts-1` 或 `tts-1-hd` 之一。
  - `input`：需要生成音频的文本内容，最大长度为 4096 个字符。
  - `voice`：选择生成音频所使用的语音风格，必须为支持的语音选项之一。

- **可选参数**：
  - `response_format`：指定输出的音频格式，默认为 `mp3`，可以选择 `mp3`、`opus`、`aac` 或 `flac`。
  - `speed`：调整生成音频的播放速度，范围为 `0.25` 到 `4.0`。默认值为 `1.0` 表示正常速度。

## 返回示例
```json
{
  "audio_url": "https://api.openai.com/files/abcdef1234567890/audio.mp3",
  "status": "succeeded",
  "model": "tts-1",
  "input": "Hello, world!",
  "voice": "nova",
  "response_format": "mp3",
  "speed": 1.0
}
```