# generate(参考图片)
>POST `https://api.gptoai.cc/runway/pro/generate`

接口说明


:::warning
<strong>⚠️ 注意:</strong> 推荐使用 `gen-3`，图生视频支持极速生成。
:::


:::tip
由于目前全新视频生成模型GEN-3才推出不久,一些GEN-2上的参数还未支持到GEN-3,但相信不久后,都会得到支持
目前GEN-3仅支持16:9画面的视频(不管文生视频还是图生视频)
这里是一个简单的GEN-3图生视频传值示例:

```js
{
  "callback_url": "http://baidu.com",
  "prompt": "一只小猫",
  "image": "https://db.xiaohuhd.com/1.jpeg",
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
    "image": "https://db.xiaohuhd.com/1.jpeg",
    "style": "cinematic",
    "model": "gen3",
    "prompt": "笑起来,吃汉堡",
    "options": {
        "seconds":10,
        "image_as_end_frame":false,
        "motion_vector": {
            "x": -6.2,
            "y": 0,
            "z": 0,
            "r": 0,
            "bg_x_pan": 0,
            "bg_y_pan": 0
        }
    }
}
```

## Body 参数说明 `application/json`

| 参数                 | 类型      | 描述                                                                                          | 是否必需 |
|----------------------|-----------|-----------------------------------------------------------------------------------------------|----------|
| `callback_url`       | `string`  | 回调地址。Webhook 回调 URL，视频在状态变化（生成中/生成失败/成功）发生变化之后，生成结果将会以 POST 形式发送到此 Webhook URL。 | 必需     |
| `image`              | `string`  | 参考的图片，可供互联网上访问并可下载的图片链接。                                                | 必需     |
| `style`              | `string`  | 风格。目前仅支持 `gen-2`。                                                                     | 可选     |
| `model`              | `string`  | 模型。可选值：`gen2`, `gen3`。默认值：`gen3`。                                                  | 必需     |
| `prompt`             | `string`  | 描述词，支持中文。                                                                              | 必需     |
| `options`            | `object`  | 参数对象。                                                                                     | 可选     |
| &nbsp;&nbsp;`motion_vector`  | `object`  | 镜头控制，目前仅支持 `gen-2`。                                                                | 可选     |
| &nbsp;&nbsp;`seconds`        | `integer` | 视频时长，目前仅支持 `gen-3`。可选值：`5`, `10`。默认值：`10`。                               | 可选     |
| &nbsp;&nbsp;`image_as_end_frame` | `boolean` | 是否将图片作为尾帧，目前仅支持 `gen-3`，设置为 `true` 后，图片将作为生成视频的结尾参考，默认值为 `false`。 | 可选     |



### 使用说明

- **`callback_url`**: 当视频的状态发生变化时，系统会通过 POST 请求将生成结果发送到指定的 Webhook URL。确保该 URL 可以接收并处理回调请求。
- **`image`**: 提供一张互联网上可访问的图片链接，作为视频生成的参考素材。
- **`style`**: 指定生成视频的风格。目前仅支持 `gen-2`，该参数是可选的，如果不指定，系统会使用默认风格。
- **`model`**: 选择生成视频所使用的模型。`gen2` 和 `gen3` 是可选的模型版本，默认使用 `gen3`。
- **`prompt`**: 生成视频时的描述词或提示词，支持中文。该参数用于指导视频内容的生成。
- **`options`**: 包含其他附加的参数选项。
  - **`motion_vector`**: 控制视频中的镜头运动，适用于 `gen-2` 模型。
  - **`seconds`**: 视频时长，适用于 `gen-3` 模型。可以选择 5 秒或 10 秒，默认生成 10 秒的视频。
  - **`image_as_end_frame`**: 设置是否将图片作为视频的尾帧使用。适用于 `gen-3` 模型，默认值为 `false`。设置为 `true` 后，图片会作为生成视频的结尾参考。
