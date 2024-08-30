# generate(文本)
>POST `https://api.gptoai.cc/runway/pro/generate`

接口说明
:::tip
由于目前全新视频生成模型GEN-3才推出不久,一些GEN-2上的参数还未支持到GEN-3,但相信不久后,都会得到支持
目前GEN-3仅支持16:9画面的视频(不管文生视频还是图生视频)
这里是一个简单的GEN-3文生视频传值示例:
```json
{
  "callback_url": "http://baidu.com",
  "prompt": "一只小猫",
  "model": "gen3",
  "options": {
    "seconds": 10
  }
}
```
:::
## Header 请求参数
```json
{
    "Authorization": "Bearer YOUR_API_KEY" //替换为自己的apikey
}
```
## Body 请求参数
```json
{
    "callback_url": "http://baidu.com",
    "ratio": "16:9",
    "prompt": "一只小猫",
    "style": "cinematic",
    "model": "gen3",
    "options": {
        "seconds": 10,
        "motion_vector": {
            "x": 0,
            "y": 0.3999999999999999,
            "z": 0,
            "r": -6,
            "bg_x_pan": 0,
            "bg_y_pan": 0
        }
    }
}
```
### Body 参数说明 `application/json`

| 参数            | 类型      | 描述                                                                                          | 是否必需 |
|-----------------|-----------|-----------------------------------------------------------------------------------------------|----------|
| `callback_url`  | `string`  | 回调地址。Webhook 回调 URL，视频在状态变化（生成中/生成失败/成功）发生变化之后，生成结果将会以 POST 形式发送到此 Webhook URL。 | 必需     |
| `ratio`         | `string`  | 画面尺寸。目前仅支持 `gen-2`。可选值：`16:9`, `9:16`, `1:1`, `4:3`, `21:9`。默认值：`16:9`。     | 可选     |
| `prompt`        | `string`  | 描述词，支持中文。                                                                              | 必需     |
| `style`         | `string`  | 风格。目前仅支持 `gen-2`。可选值：`cinematic`。默认值：`cinematic`。                            | 可选     |
| `model`         | `string`  | 模型。可选值：`gen2`, `gen3`。默认值：`gen3`。                                                  | 可选     |
| `options`       | `object`  | 参数对象。                                                                                     | 可选     |
| &nbsp;&nbsp;`motion_vector` | `object`  | 运动矢量控制。仅在 `gen-2` 中支持。                                                            | 可选     |
| &nbsp;&nbsp;`seconds`       | `integer` | 视频时长。目前仅支持 `gen-3`。可选值：`5`, `10`。默认值：`10`。                               | 可选     |

### 使用说明

- **`callback_url`**: 当视频的状态发生变化时，系统会通过 POST 请求将生成结果发送到指定的 Webhook URL。确保该 URL 可以接收并处理回调请求。
- **`ratio`**: 指定生成视频的画面比例。可以根据需求选择不同的画面尺寸，目前仅支持 `gen-2`。如果不指定，系统会默认使用 `16:9` 比例。
- **`prompt`**: 生成视频时的描述词或提示词，支持中文。该参数用于指导视频内容的生成。
- **`style`**: 定义视频的风格。目前只支持 `cinematic` 风格，默认也是 `cinematic`。
- **`model`**: 选择生成视频所使用的模型。`gen2` 和 `gen3` 是可选的模型版本，默认使用 `gen3`。
- **`options`**: 包含其他附加的参数选项。
  - **`motion_vector`**: 控制视频中的运动矢量，适用于 `gen-2` 模型。
  - **`seconds`**: 视频时长，适用于 `gen-3` 模型。可以选择 5 秒或 10 秒，默认生成 10 秒的视频。


## 返回示例
```json
{
    "code": 200,
    "msg": "成功",
    "data": {
        "task_id": "0ab3bfe2-be23-4635-8c35-890fb2c1732d"
    },
    "exec_time": 0.67573
}
```
## 返回示例参数说明


| 参数        | 类型      | 描述      | 是否必需 |
|-------------|-----------|-----------|----------|
| `code`      | `integer` | 状态码    | 必需     |
| `msg`       | `string`  | 信息描述  | 必需     |
| `data`      | `object`  | 返回数据对象 | 必需     |
| &nbsp;&nbsp;`task_id`  | `string`  | 任务ID   | 必需     |
| `exec_time` | `number`  | 执行时间  | 必需     |


### 使用说明

- **`code`**: 返回的状态码，用于指示请求的结果状态，通常是一个整数值，例如 `200` 表示成功，`400` 表示请求错误。
- **`msg`**: 与 `code` 对应的描述信息，提供更详细的说明，例如 "请求成功" 或 "参数错误"。
- **`data`**: 包含请求结果的详细数据，是一个对象，内部包括任务ID等具体信息：
  - **`task_id`**: 任务的唯一标识符，通常用于追踪和管理任务。
- **`exec_time`**: 任务执行的耗时，通常以秒为单位，表示从请求开始到处理完成的时间。
